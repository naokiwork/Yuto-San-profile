import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

declare const __STATIC_CONTENT_MANIFEST: string;
const assetManifest = JSON.parse(__STATIC_CONTENT_MANIFEST);

interface Env {
  __STATIC_CONTENT: KVNamespace;
}

// Custom asset mapping for Next.js static exports
function customMapRequestToAsset(request: Request): Request {
  let pathname = new URL(request.url).pathname;

  // Remove trailing slash except for root
  if (pathname !== "/" && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  // Map to index.html for root and directory requests
  if (pathname === "/") {
    pathname = "/index.html";
  } else if (!pathname.includes(".")) { // If no file extension
    pathname = `${pathname}.html`;
  }

  // Preserve querystring
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url.toString(), request);
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // DEBUG mode
    if (url.searchParams.has("__debug")) {
      const debugInfo: Record<string, any> = {
        requestUrl: request.url,
        pathname: pathname,
        envKeys: Object.keys(env),
        hasStaticContentBinding: !!env.__STATIC_CONTENT,
        staticContentManifestType: typeof assetManifest,
        staticContentManifestKeys: Object.keys(assetManifest).slice(0, 20),
      };

      try {
        // Attempt to fetch /index.html explicitly
        const explicitIndexRequest = new Request(new URL("/index.html", request.url).toString(), request);
        const indexResponse = await getAssetFromKV(
          { request: explicitIndexRequest, waitUntil: ctx.waitUntil.bind(ctx) },
          {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: assetManifest,
          }
        );
        debugInfo.explicitIndexHtmlStatus = indexResponse.status;
        debugInfo.explicitIndexHtmlHeaders = Object.fromEntries(indexResponse.headers.entries());
      } catch (e: any) {
        debugInfo.explicitIndexHtmlError = e.message || e.toString();
        debugInfo.explicitIndexHtmlErrorStack = e.stack;
      }

      return new Response(JSON.stringify(debugInfo, null, 2), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Normal behavior
    let assetPath = pathname;
    let errorDiagnostic = "";

    try {
      const assetRequest = customMapRequestToAsset(request);
      assetPath = new URL(assetRequest.url).pathname; // Update assetPath for diagnostic

      return await getAssetFromKV(
        {
          request: assetRequest,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: assetManifest,
          mapRequestToAsset: customMapRequestToAsset,
        }
      );
    } catch (e: any) {
      errorDiagnostic = e.message || e.toString();
      return new Response("Not Found", {
        status: 404,
        headers: {
          "X-Asset-Error": errorDiagnostic.substring(0, 120),
          "X-Asset-Path": assetPath,
        },
      });
    }
  },
};
