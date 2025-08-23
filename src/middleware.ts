import { defineMiddleware } from 'astro:middleware';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from './constants/i18n';

export const onRequest = defineMiddleware((context, next) => {
  const { url } = context;
  const pathname = url.pathname;

  // 排除静态资源（图片、CSS、JS、字体等）
  const staticAssetExtensions = /\.(jpg|jpeg|png|gif|svg|webp|ico|css|js|ts|woff|woff2|ttf|eot|pdf|zip|mp4|mp3|avi|mov)$/i;
  if (staticAssetExtensions.test(pathname)) {
    return next();
  }

  // 排除以下路径
  if (
    pathname.startsWith('/_') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/.well-known/') ||
    pathname.includes('.')
  ) {
    return next();
  }

  // 只处理以斜杠结尾的路径的重定向，不处理正常页面路径
  if (pathname.endsWith('/') && pathname !== '/') {
    // 检查是否为多语言路径（使用 i 标志使正则表达式大小写不敏感）
    const langRegex = /^\/([a-z]{2}(-[a-z]{2})?)\//i;
    const match = pathname.match(langRegex);

    if (match) {
      const langCode = match[1];
      const isSupported = SUPPORTED_LANGUAGES.some(
        (lang) => lang.toLowerCase() === langCode.toLowerCase() || lang === langCode,
      );

      if (isSupported) {
        // 只对以斜杠结尾的路径进行重定向
        const newUrl = new URL(url);
        newUrl.pathname = pathname.slice(0, -1);
        return Response.redirect(newUrl.toString(), 301);
      }
    } else {
      // 对于默认语言，也要处理尾部斜杠
      const newUrl = new URL(url);
      newUrl.pathname = pathname.slice(0, -1);
      return Response.redirect(newUrl.toString(), 301);
    }
  }

  return next();
});
