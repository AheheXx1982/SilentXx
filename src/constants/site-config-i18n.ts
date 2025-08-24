import type { SupportedLanguage } from '../types/i18n';
import { siteConfig as baseSiteConfig } from './site-config';
import { getTranslations } from '@i18n/index';

// 创建多语言精选分类
function createMultilingualFeaturedCategories(language: SupportedLanguage) {
  const translations = getTranslations(language);
  const fallbackTranslations = getTranslations('en'); // 英文作为fallback

  // 安全获取翻译，如果当前语言没有，使用英文fallback
  const getFeaturedTranslation = (key: keyof typeof translations.featuredCategories) => {
    return translations.featuredCategories?.[key] || fallbackTranslations.featuredCategories[key] || key;
  };

  return [
    {
      link: 'options',
      label: getFeaturedTranslation('optionsInstitute'),
      image: '/img/options/options1.webp',
      description: getFeaturedTranslation('optionsInstituteDesc'),
    },
    {
      link: 'options/trading-journal',
      label: getFeaturedTranslation('tradingJournal'),
      image: '/img/stock/stock1.webp',
      description: getFeaturedTranslation('tradingJournalDesc'),
    },
    {
      link: 'options/course',
      label: getFeaturedTranslation('optionsCourse'),
      image: '/img/options/options2.webp',
      description: getFeaturedTranslation('optionsCourseDesc'),
    },
    {
      link: 'crypto/grid',
      label: getFeaturedTranslation('gridStrategy'),
      image: '/img/crypto/crypto2.webp',
      description: getFeaturedTranslation('gridStrategyDesc'),
    },
    {
      link: 'crypto/futures',
      label: getFeaturedTranslation('futuresTrading'),
      image: '/img/crypto/crypto4.webp',
      description: getFeaturedTranslation('futuresTradingDesc'),
    },
    {
      link: 'crypto/crypto-news',
      label: getFeaturedTranslation('cryptoNews'),
      image: '/img/crypto/crypto5.webp',
      description: getFeaturedTranslation('cryptoNewsDesc'),
    },
    {
      link: 'crypto',
      label: getFeaturedTranslation('cryptoLab'),
      image: '/img/crypto/crypto1.webp',
      description: getFeaturedTranslation('cryptoLabDesc'),
    },
    {
      link: 'cashflow-utopia/option-selling',
      label: getFeaturedTranslation('optionSelling'),
      image: '/img/options/options5.webp',
      description: getFeaturedTranslation('optionSellingDesc'),
    },
    {
      link: 'cashflow-utopia/drip',
      label: getFeaturedTranslation('dividendStocks'),
      image: '/img/stock/high-income.webp',
      description: getFeaturedTranslation('dividendStocksDesc'),
    },
    {
      link: 'cashflow-utopia',
      label: getFeaturedTranslation('cashflowUtopia'),
      image: '/img/stock/income.webp',
      description: getFeaturedTranslation('cashflowUtopiaDesc'),
    },
  ];
}

// 多语言站点配置
export const multilingualSiteConfig: Record<SupportedLanguage, typeof baseSiteConfig> = {
  'zh-CN': {
    ...baseSiteConfig,
    title: '寂静猎手',
    alternate: 'SilentXx',
    subtitle: '期权加密实战 · 理性现金流系统',
    description: '聚焦美股期权与加密货币交易，分享真实、低风险、可复制的现金流投资策略，带你走进理性与纪律构建的投资世界。',
  },
  en: {
    ...baseSiteConfig,
    title: '寂静猎手',
    alternate: 'SilentXx',
    subtitle: 'Options & Crypto Trading · Rational Cash Flow System',
    description:
      'Focus on US stock options and cryptocurrency trading, sharing real, low-risk, replicable cash flow investment strategies.',
  },
  ko: {
    ...baseSiteConfig,
    title: '寂静猎手',
    subtitle: '옵션 및 암호화폐 거래 · 합리적 현금 흐름 시스템',
    description:
      '미국 주식 옵션과 암호화폐 거래에 중점을 두고, 실제적이고 위험이 낮으며 복제 가능한 현금 흐름 투자 전략을 공유합니다.',
  },
  ja: {
    ...baseSiteConfig,
    title: '寂静猎手',
    subtitle: 'オプション＆暗号通貨取引 · 合理的キャッシュフローシステム',
    description:
      '米国株オプションと暗号通貨取引に焦点を当て、実際的で低リスクで再現可能なキャッシュフロー投資戦略を共有します。',
  },
  es: {
    ...baseSiteConfig,
    title: '寂静猎手',
    subtitle: 'Trading de Opciones y Cripto · Sistema de Flujo de Caja Racional',
    description:
      'Enfocado en opciones de acciones estadounidenses y trading de criptomonedas, compartiendo estrategias de inversión de flujo de caja reales, de bajo riesgo y replicables.',
  },
  pt: {
    ...baseSiteConfig,
    title: '寂静猎手',
    subtitle: 'Trading de Opções e Cripto · Sistema de Fluxo de Caixa Racional',
    description:
      'Focado em opções de ações americanas e trading de criptomoedas, compartilhando estratégias de investimento de fluxo de caixa reais, de baixo risco e replicáveis.',
  },
  de: {
    ...baseSiteConfig,
    title: '寂静猎手',
    subtitle: 'Optionen & Krypto Trading · Rationales Cashflow-System',
    description:
      'Fokus auf US-Aktienoptionen und Kryptowährungshandel, Austausch von echten, risikoarmen und reproduzierbaren Cashflow-Investitionsstrategien.',
  },
  fr: {
    ...baseSiteConfig,
    title: '寂静猎手',
    subtitle: "Trading d'Options et Crypto · Système de Flux de Trésorerie Rationnel",
    description:
      "Axé sur les options d'actions américaines et le trading de cryptomonnaies, partageant des stratégies d'investissement de flux de trésorerie réelles, à faible risque et reproductibles.",
  },
  ru: {
    ...baseSiteConfig,
    title: '寂静猎手',
    subtitle: 'Торговля опционами и криптовалютами · Рациональная система денежных потоков',
    description:
      'Фокус на опционах американских акций и торговле криптовалютами, обмен реальными, низкорисковыми и воспроизводимыми стратегиями инвестирования денежных потоков.',
  },
  ar: {
    ...baseSiteConfig,
    title: '寂静猎手',
    subtitle: 'تداول الخيارات والعملات المشفرة · نظام التدفق النقدي العقلاني',
    description:
      'التركيز على خيارات الأسهم الأمريكية وتداول العملات المشفرة، مشاركة استراتيجيات الاستثمار النقدي الحقيقية منخفضة المخاطر والقابلة للتكرار.',
  },
  hi: {
    ...baseSiteConfig,
    title: '寂静猎手',
    subtitle: 'विकल्प एवं क्रिप्टो ट्रेडिंग · तर्कसंगत नकदी प्रवाह प्रणाली',
    description:
      'अमेरिकी स्टॉक विकल्प और क्रिप्टोकरेंसी ट्रेडिंग पर केंद्रित, वास्तविक, कम जोखिम, प्रतिकृति योग्य नकदी प्रवाह निवेश रणनीतियों को साझा करना।',
  },
  'zh-TW': {
    ...baseSiteConfig,
    title: '寂靜獵手',
    subtitle: '期權加密實戰 · 理性現金流系統',
    description: '聚焦美股期權與加密貨幣交易，分享真實、低風險、可複製的現金流投資策略，帶你走進理性與紀律構建的投資世界。',
  },
};

// 获取多语言站点配置
export function getSiteConfig(language: SupportedLanguage = 'zh-CN') {
  const baseConfig = multilingualSiteConfig[language] || multilingualSiteConfig['zh-CN'];
  return {
    ...baseConfig,
    featuredCategories: createMultilingualFeaturedCategories(language),
  };
}
