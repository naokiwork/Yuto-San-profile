interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

// Custom routing for Next.js static exports
function handleNextjsStaticRouting(pathname: string): string {
  // Handle root
  if (pathname === "/") {
    return "/index.html";
  }

  // Remove trailing slash
  if (pathname.endsWith("/") && pathname.length > 1) {
    pathname = pathname.slice(0, -1);
  }

  // Add .html extension if missing and not a known file type
  const lastSegment = pathname.split("/").pop();
  if (lastSegment && !lastSegment.includes(".")) {
    pathname = `${pathname}.html`;
  }

  return pathname;
}

const worker = {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // DEBUG mode
    if (url.searchParams.has("__debug")) {
      const debugInfo: Record<string, unknown> = {
        requestUrl: request.url,
        pathname: pathname,
        envKeys: Object.keys(env),
        hasAssetsBinding: !!env.ASSETS,
      };

      try {
        // Attempt to fetch /index.html explicitly
        const explicitIndexRequest = new Request(new URL("/index.html", request.url).toString(), request);
        const indexResponse = await env.ASSETS.fetch(explicitIndexRequest);
        debugInfo.explicitIndexHtmlStatus = indexResponse.status;
        debugInfo.explicitIndexHtmlHeaders = Object.fromEntries(indexResponse.headers.entries());
      } catch (e: unknown) {
        debugInfo.explicitIndexHtmlError = (e as Error).message || String(e);
        debugInfo.explicitIndexHtmlErrorStack = (e as Error).stack;
      }

      return new Response(JSON.stringify(debugInfo, null, 2), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check if ASSETS binding exists
    if (!env.ASSETS) {
      return new Response(
        JSON.stringify({ error: "ASSETS binding missing", envKeys: Object.keys(env) }, null, 2),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const mappedPathname = handleNextjsStaticRouting(pathname);

    // Construct a new request with the mapped pathname, preserving querystring
    const assetUrl = new URL(request.url);
    assetUrl.pathname = mappedPathname;
    const assetRequest = new Request(assetUrl.toString(), request);

    try {
      const response = await env.ASSETS.fetch(assetRequest);
      
      // If the mapped asset is not found, try fetching the original pathname (e.g., for /_next/static files)
      if (response.status === 404 && mappedPathname !== pathname) {
        const originalAssetRequest = new Request(request.url, request);
        const originalResponse = await env.ASSETS.fetch(originalAssetRequest);
        if (originalResponse.status !== 404) {
          return originalResponse;
        }
      }

      return response;
    } catch (e: unknown) {
      const errorDiagnostic = (e as Error).message || String(e);
      return new Response("Not Found", {
        status: 404,
        headers: {
          "X-Asset-Error": errorDiagnostic.substring(0, 120),
          "X-Asset-Path": mappedPathname,
        },
      });
    }
  },
};

export default worker;
