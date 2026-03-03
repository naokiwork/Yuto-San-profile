import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

interface Env {
  __STATIC_CONTENT: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    try {
      return await getAssetFromKV(
        {
          request: request,
          waitUntil: ctx.waitUntil,
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: __STATIC_CONTENT_MANIFEST,
        }
      );
    } catch (e) {
      return new Response("Not Found", { status: 404 });
    }
  },
};
