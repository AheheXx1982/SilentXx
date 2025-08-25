import { Routes } from '@constants/router';
import { getLanguageFromUrl, getLocalizedUrl } from '@lib/i18n';
import type { BlogPost } from 'types/blog';

export type RouteParams<T extends Routes> = T extends Routes.Post ? BlogPost | undefined : undefined;

export function routeBuilder<T extends Routes>(route: T, param: RouteParams<typeof route>, currentUrl?: string | URL) {
  let href: string = route;
  if (!param) return href;

  // 获取当前语言
  const currentLanguage = currentUrl ? getLanguageFromUrl(currentUrl) : 'zh-CN';

  switch (route) {
    case Routes.Post:
      // 使用自定义链接或slug的最后一部分作为文章标识符
      const baseHref = `/article/${param?.data?.link ?? param?.slug.split('/').pop() ?? param?.slug}`;
      // 根据当前语言生成本地化URL
      href = getLocalizedUrl(baseHref, currentLanguage);
      break;
    default:
      break;
  }
  return href;
}

export const showDirRoutes = [Routes.Post];
