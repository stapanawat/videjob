import { hasProtocol, isScriptProtocol } from "ufo";
import { callWithNuxt, useRouter } from "#app";
export function navigateToAuthPageWN(nuxt, href, isInternalRouting) {
  return callWithNuxt(nuxt, navigateToAuthPage, [nuxt, href, isInternalRouting]);
}
const URL_QUOTE_RE = /"/g;
function navigateToAuthPage(nuxtApp, href, isInternalRouting = false) {
  const router = useRouter();
  const inMiddleware = Boolean(nuxtApp._processingMiddleware);
  if (import.meta.server) {
    if (nuxtApp.ssrContext) {
      const isExternalHost = hasProtocol(href, { acceptRelative: true });
      if (isExternalHost) {
        const { protocol } = new URL(href, "http://localhost");
        if (protocol && isScriptProtocol(protocol)) {
          throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
        }
      }
      const location = isExternalHost || isInternalRouting ? href : router.resolve(href).fullPath || "/";
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: 302,
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      }
      if (!isExternalHost && inMiddleware) {
        return redirect(void 0);
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort further route navigation */
        false
      ));
    }
  }
  window.location.href = href;
  if (href.includes("#")) {
    window.location.reload();
  }
  const waitForNavigationWithFallbackToRouter = new Promise((resolve) => setTimeout(resolve, 60 * 1e3)).then(() => router.push(href));
  return waitForNavigationWithFallbackToRouter;
}
export function encodeURL(location, isExternalHost = false) {
  const url = new URL(location, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
