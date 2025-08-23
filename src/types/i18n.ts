// 支持的语言类型
export type SupportedLanguage =
  | 'zh-CN' // 简体中文（默认）
  | 'en' // 英语
  | 'ko' // 韩语
  | 'ja' // 日语
  | 'es' // 西班牙语
  | 'pt' // 葡萄牙语
  | 'de' // 德语
  | 'fr' // 法语
  | 'ru' // 俄语
  | 'ar' // 阿拉伯语
  | 'zh-TW' // 繁体中文
  | 'hi'; // 印地语

// 语言信息接口
export interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

// 翻译文本结构
export interface Translations {
  nav: {
    home: string;
    articles: string;
    categories: string;
    tags: string;
    archives: string;
    about: string;
  };
  common: {
    readMore: string;
    loading: string;
    error: string;
    notFound: string;
    backToHome: string;
    share: string;
    copy: string;
    copied: string;
    search: string;
    searchPlaceholder: string;
    noResults: string;
    language: string;
    switchLanguage: string;
    postList: string;
    featuredCategories: string;
    noPostsYet: string;
    childrenCategory: string;
    articlesCount: string;
    more: string;
  };
  post: {
    publishedOn: string;
    lastUpdated: string;
    wordCount: string;
    readingTime: string;
    category: string;
    tags: string;
    relatedPosts: string;
    tableOfContents: string;
    backToTop: string;
  };
  category: {
    allCategories: string;
    postsCount: string;
    noPostsInCategory: string;
    totalCategoriesCount?: string;
  };
  tag: {
    allTags: string;
    postsWithTag: string;
    noPostsWithTag: string;
  };
  archive: {
    allPosts: string;
    postsInYear: string;
    postsInMonth: string;
    noPostsInPeriod: string;
  };
  article: {
    noTranslation: string;
    availableIn: string;
    originalLanguage: string;
    translatedFrom: string;
    readOriginal: string;
  };
  footer: {
    poweredBy: string;
    builtWith: string;
    copyright: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    titleTemplate: string;
  };
  featuredCategories: {
    optionsInstitute: string;
    tradingJournal: string;
    optionsCourse: string;
    gridStrategy: string;
    futuresTrading: string;
    cryptoNews: string;
    cryptoLab: string;
    optionSelling: string;
    dividendStocks: string;
    cashflowUtopia: string;
    // 分类描述
    optionsInstituteDesc: string;
    tradingJournalDesc: string;
    optionsCourseDesc: string;
    gridStrategyDesc: string;
    futuresTradingDesc: string;
    cryptoNewsDesc: string;
    cryptoLabDesc: string;
    optionSellingDesc: string;
    dividendStocksDesc: string;
    cashflowUtopiaDesc: string;
  };
}

// i18n 配置接口
export interface I18nConfig {
  defaultLanguage: SupportedLanguage;
  supportedLanguages: SupportedLanguage[];
  languages: Record<SupportedLanguage, LanguageInfo>;
  fallbackLanguage: SupportedLanguage;
}
