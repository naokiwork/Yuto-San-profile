import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

interface Env {
  __STATIC_CONTENT: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    try {
      const assetRequest = mapRequestToAsset(request);
      return await getAssetFromKV(
        {
          request: assetRequest,
          waitUntil: ctx.waitUntil,
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: __STATIC_CONTENT_MANIFEST,
          mapRequestToAsset: mapRequestToAsset, // 明示的に指定
        }
      );
    } catch (e) {
      return new Response("Not Found", { status: 404 });
    }
  },
};
