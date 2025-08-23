import type { SupportedLanguage, Translations } from '../types/i18n';
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_PATH_MAP,
  isSupportedLanguage,
  getLanguageFromPath as getLanguageFromPathUtil,
} from '../constants/i18n';
import { getTranslations } from '../i18n/index';

/**
 * 从URL路径中提取语言代码
 */
export function getLanguageFromPath(path: string): SupportedLanguage {
  return getLanguageFromPathUtil(path);
}

/**
 * 从URL中提取语言代码
 */
export function getLanguageFromUrl(url: string | URL): SupportedLanguage {
  const urlObj = typeof url === 'string' ? new URL(url) : url;
  return getLanguageFromPath(urlObj.pathname);
}

/**
 * 获取语言的路径前缀
 */
export function getLanguagePrefix(language: SupportedLanguage): string {
  return LANGUAGE_PATH_MAP[language];
}

/**
 * 构建本地化URL
 */
export function getLocalizedUrl(path: string, language: SupportedLanguage): string {
  const prefix = getLanguagePrefix(language);

  // 确保路径以 / 开头
  let normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // 移除尾部斜杠（除了根路径）
  if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
  }

  // 如果是默认语言，直接返回路径
  if (language === DEFAULT_LANGUAGE) {
    return normalizedPath;
  }

  // 添加语言前缀
  const localizedUrl = `${prefix}${normalizedPath}`;

  // 对于语言首页，确保不以斜杠结尾
  if (normalizedPath === '/') {
    return prefix; // 返回不带尾部斜杠的语言前缀
  }

  return localizedUrl;
}

/**
 * 移除URL中的语言前缀，获取基础路径
 */
export function getBasePath(path: string): string {
  const language = getLanguageFromPath(path);
  const prefix = getLanguagePrefix(language);

  if (!prefix) {
    return path;
  }

  return path.startsWith(prefix) ? path.slice(prefix.length) || '/' : path;
}

/**
 * 切换URL的语言
 */
export function switchLanguageInUrl(currentUrl: string, targetLanguage: SupportedLanguage): string {
  // 解析URL
  let url: URL;
  try {
    // 如果是相对路径，加上当前域名
    if (currentUrl.startsWith('/')) {
      url = new URL(currentUrl, window.location.origin);
    } else {
      url = new URL(currentUrl);
    }
  } catch {
    // 如果解析失败，当作路径处理
    const basePath = getBasePath(currentUrl);
    return getLocalizedUrl(basePath, targetLanguage);
  }

  const basePath = getBasePath(url.pathname);
  const newPath = getLocalizedUrl(basePath, targetLanguage);

  // 构建新的URL，保留查询参数和哈希
  const newUrl = new URL(url);
  newUrl.pathname = newPath;

  return newUrl.pathname + newUrl.search + newUrl.hash;
}

/**
 * 获取翻译文本
 */
export function getTranslationText(language: SupportedLanguage, key: string, fallback?: string): string {
  const translations = getTranslations(language);

  // 支持嵌套键值，如 'nav.home'
  const keys = key.split('.');
  let value: any = translations;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // 如果没找到，尝试使用默认语言
      if (language !== DEFAULT_LANGUAGE) {
        return getTranslationText(DEFAULT_LANGUAGE, key, fallback);
      }
      return fallback || key;
    }
  }

  return typeof value === 'string' ? value : fallback || key;
}

/**
 * 创建翻译函数
 */
export function createTranslationFunction(language: SupportedLanguage) {
  return (key: string, fallback?: string) => getTranslationText(language, key, fallback);
}

/**
 * 验证语言代码
 */
export function validateLanguage(lang: string): SupportedLanguage {
  if (isSupportedLanguage(lang)) {
    return lang;
  }
  return DEFAULT_LANGUAGE;
}

/**
 * 检测浏览器语言偏好
 */
export function detectBrowserLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const browserLang = navigator.language || (navigator as any).userLanguage;

  // 先检查完全匹配
  if (isSupportedLanguage(browserLang)) {
    return browserLang;
  }

  // 再检查语言代码前缀匹配（如 en-US -> en）
  const langPrefix = browserLang.split('-')[0];
  if (isSupportedLanguage(langPrefix)) {
    return langPrefix;
  }

  // 检查是否有相似的语言变体
  const similarLang = Object.keys(LANGUAGE_PATH_MAP).find(
    (lang) => lang.startsWith(langPrefix) || langPrefix.startsWith(lang.split('-')[0]),
  );

  if (similarLang && isSupportedLanguage(similarLang)) {
    return similarLang as SupportedLanguage;
  }

  return DEFAULT_LANGUAGE;
}

/**
 * 获取替代路径（如果当前语言内容不存在）
 */
export function getAlternatePaths(basePath: string): Record<SupportedLanguage, string> {
  const alternatives: Record<SupportedLanguage, string> = {} as any;

  Object.keys(LANGUAGE_PATH_MAP).forEach((lang) => {
    alternatives[lang as SupportedLanguage] = getLocalizedUrl(basePath, lang as SupportedLanguage);
  });

  return alternatives;
}

/**
 * 格式化文本模板
 */
export function formatMessage(template: string, params: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return params[key]?.toString() || match;
  });
}
