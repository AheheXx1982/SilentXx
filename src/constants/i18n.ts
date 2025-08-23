import type { I18nConfig, SupportedLanguage, LanguageInfo } from '../types/i18n';

// 支持的语言列表
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
  'zh-CN', // 简体中文（默认）
  'en', // 英语
  'ko', // 韩语
  'ja', // 日语
  'es', // 西班牙语
  'pt', // 葡萄牙语
  'de', // 德语
  'fr', // 法语
  'ru', // 俄语
  'ar', // 阿拉伯语
  'zh-TW', // 繁体中文
  'hi', // 印地语
];

// 默认语言
export const DEFAULT_LANGUAGE: SupportedLanguage = 'zh-CN';

// 语言信息映射
export const LANGUAGE_INFO: Record<SupportedLanguage, LanguageInfo> = {
  'zh-CN': {
    code: 'zh-CN',
    name: 'Simplified Chinese',
    nativeName: '简体中文',
    flag: '🇨🇳',
    dir: 'ltr',
  },
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    dir: 'ltr',
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    dir: 'ltr',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    dir: 'ltr',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    dir: 'ltr',
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇵🇹',
    dir: 'ltr',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    dir: 'ltr',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    dir: 'ltr',
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    dir: 'ltr',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl',
  },
  'zh-TW': {
    code: 'zh-TW',
    name: 'Traditional Chinese',
    nativeName: '繁體中文',
    flag: '🇹🇼',
    dir: 'ltr',
  },
  hi: {
    // 印地语
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    dir: 'ltr',
  },
};

// i18n 配置
export const I18N_CONFIG: I18nConfig = {
  defaultLanguage: DEFAULT_LANGUAGE,
  supportedLanguages: SUPPORTED_LANGUAGES,
  languages: LANGUAGE_INFO,
  fallbackLanguage: DEFAULT_LANGUAGE,
};

// 语言路径前缀映射（默认语言无前缀）
export const LANGUAGE_PATH_MAP: Record<SupportedLanguage, string> = {
  'zh-CN': '', // 默认语言无前缀
  en: '/en',
  ko: '/ko',
  ja: '/ja',
  es: '/es',
  pt: '/pt',
  de: '/de',
  fr: '/fr',
  ru: '/ru',
  ar: '/ar',
  'zh-TW': '/zh-tw',
  hi: '/hi', // 印地语路径前缀
};

// 从路径前缀获取语言代码
export function getLanguageFromPath(path: string): SupportedLanguage {
  const pathSegments = path.split('/').filter(Boolean);
  if (pathSegments.length === 0) return DEFAULT_LANGUAGE;

  const possibleLangCode = pathSegments[0].toLowerCase(); // 转换为小写以支持大小写不敏感

  // 检查是否是支持的语言前缀
  for (const [lang, prefix] of Object.entries(LANGUAGE_PATH_MAP)) {
    // 使用 toLowerCase() 确保比较时不区分大小写
    if (prefix.toLowerCase() === `/${possibleLangCode}`) {
      return lang as SupportedLanguage;
    }
  }

  return DEFAULT_LANGUAGE;
}

// 获取语言的路径前缀
export function getLanguagePrefix(language: SupportedLanguage): string {
  return LANGUAGE_PATH_MAP[language];
}

// 检查是否为支持的语言
export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
}
