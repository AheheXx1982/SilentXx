import type { SupportedLanguage } from '../types/i18n';

// 标签名称翻译映射
export const tagTranslations: Record<SupportedLanguage, Record<string, string>> = {
  'zh-CN': {
    // 简体中文使用原始名称，无需翻译
  },
  en: {
    期权策略: 'Options Strategies',
    牛市策略: 'Bull Market Strategies',
    价差策略: 'Spread Strategies',
    风险管理: 'Risk Management',
    期权基础: 'Options Basics',
    期权定价: 'Options Pricing',
    波动率交易: 'Volatility Trading',
    期权组合: 'Options Portfolio',
    套利策略: 'Arbitrage Strategies',
    对冲策略: 'Hedging Strategies',

    // 加密货币相关标签
    网格交易: 'Grid Trading',
    量化策略: 'Quantitative Strategies',
    加密货币: 'Cryptocurrency',
    比特币: 'Bitcoin',
    以太坊: 'Ethereum',
    DeFi: 'DeFi',
    NFT: 'NFT',
    区块链: 'Blockchain',

    // 投资相关标签
    股息投资: 'Dividend Investing',
    价值投资: 'Value Investing',
    成长投资: 'Growth Investing',
    资产配置: 'Asset Allocation',
    税务规划: 'Tax Planning',
    现金流: 'Cash Flow',
    被动收入: 'Passive Income',

    // 技术分析标签
    技术分析: 'Technical Analysis',
    基本面分析: 'Fundamental Analysis',
    市场情绪: 'Market Sentiment',
    趋势分析: 'Trend Analysis',
    支撑阻力: 'Support Resistance',
  },
  'zh-TW': {
    期权策略: '期權策略',
    牛市策略: '牛市策略',
    价差策略: '價差策略',
    风险管理: '風險管理',
    期权基础: '期權基礎',
    期权定价: '期權定價',
    波动率交易: '波動率交易',
    期权组合: '期權組合',
    套利策略: '套利策略',
    对冲策略: '對沖策略',

    网格交易: '網格交易',
    量化策略: '量化策略',
    加密货币: '加密貨幣',
    比特币: '比特幣',
    以太坊: '以太坊',
    DeFi: 'DeFi',
    NFT: 'NFT',
    区块链: '區塊鏈',

    股息投资: '股息投資',
    价值投资: '價值投資',
    成长投资: '成長投資',
    资产配置: '資產配置',
    税务规划: '稅務規劃',
    现金流: '現金流',
    被动收入: '被動收入',

    技术分析: '技術分析',
    基本面分析: '基本面分析',
    市场情绪: '市場情緒',
    趋势分析: '趨勢分析',
    支撑阻力: '支撐阻力',
  },
  ko: {
    期权策略: '옵션 전략',
    牛市策略: '강세장 전략',
    价差策略: '스프레드 전략',
    风险管理: '리스크 관리',
    期权基础: '옵션 기초',
    期权定价: '옵션 가격책정',
    波动率交易: '변동성 거래',
    期权组合: '옵션 포트폴리오',
    套利策略: '차익거래 전략',
    对冲策略: '헤징 전략',

    网格交易: '그리드 거래',
    量化策略: '양적 전략',
    加密货币: '암호화폐',
    比特币: '비트코인',
    以太坊: '이더리움',
    DeFi: 'DeFi',
    NFT: 'NFT',
    区块链: '블록체인',

    股息投资: '배당 투자',
    价值投资: '가치 투자',
    成长投资: '성장 투자',
    资产配置: '자산 배분',
    税务规划: '세무 계획',
    现金流: '현금흐름',
    被动收入: '수동 소득',

    技术分析: '기술적 분석',
    基本面分析: '기본적 분석',
    市场情绪: '시장 심리',
    趋势分析: '추세 분석',
    支撑阻力: '지지 저항',
  },
  ja: {
    期权策略: 'オプション戦略',
    牛市策略: '強気相場戦略',
    价差策略: 'スプレッド戦略',
    风险管理: 'リスク管理',
    期权基础: 'オプション基礎',
    期权定价: 'オプション価格',
    波动率交易: 'ボラティリティ取引',
    期权组合: 'オプション・ポートフォリオ',
    套利策略: 'アービトラージ戦略',
    对冲策略: 'ヘッジ戦略',

    网格交易: 'グリッド取引',
    量化策略: '定量戦略',
    加密货币: '暗号通貨',
    比特币: 'ビットコイン',
    以太坊: 'イーサリアム',
    DeFi: 'DeFi',
    NFT: 'NFT',
    区块链: 'ブロックチェーン',

    股息投资: '配当投資',
    价值投资: 'バリュー投資',
    成长投资: '成長投資',
    资产配置: '資産配分',
    税务规划: '税務計画',
    现金流: 'キャッシュフロー',
    被动收入: '受動収入',

    技术分析: 'テクニカル分析',
    基本面分析: 'ファンダメンタル分析',
    市场情绪: '市場センチメント',
    趋势分析: 'トレンド分析',
    支撑阻力: 'サポート・レジスタンス',
  },
  es: {
    期权策略: 'Estrategias de Opciones',
    牛市策略: 'Estrategias Alcistas',
    价差策略: 'Estrategias de Spread',
    风险管理: 'Gestión de Riesgos',
    期权基础: 'Fundamentos de Opciones',
    期权定价: 'Valoración de Opciones',
    波动率交易: 'Trading de Volatilidad',
    期权组合: 'Cartera de Opciones',
    套利策略: 'Estrategias de Arbitraje',
    对冲策略: 'Estrategias de Cobertura',

    网格交易: 'Trading de Rejilla',
    量化策略: 'Estrategias Cuantitativas',
    加密货币: 'Criptomonedas',
    比特币: 'Bitcoin',
    以太坊: 'Ethereum',
    DeFi: 'DeFi',
    NFT: 'NFT',
    区块链: 'Blockchain',

    股息投资: 'Inversión en Dividendos',
    价值投资: 'Inversión en Valor',
    成长投资: 'Inversión en Crecimiento',
    资产配置: 'Asignación de Activos',
    税务规划: 'Planificación Fiscal',
    现金流: 'Flujo de Caja',
    被动收入: 'Ingresos Pasivos',

    技术分析: 'Análisis Técnico',
    基本面分析: 'Análisis Fundamental',
    市场情绪: 'Sentimiento del Mercado',
    趋势分析: 'Análisis de Tendencias',
    支撑阻力: 'Soporte y Resistencia',
  },
  pt: {
    期权策略: 'Estratégias de Opções',
    牛市策略: 'Estratégias de Mercado em Alta',
    价差策略: 'Estratégias de Spread',
    风险管理: 'Gestão de Riscos',
    期权基础: 'Fundamentos de Opções',
    期权定价: 'Precificação de Opções',
    波动率交易: 'Trading de Volatilidade',
    期权组合: 'Carteira de Opções',
    套利策略: 'Estratégias de Arbitragem',
    对冲策略: 'Estratégias de Hedge',

    网格交易: 'Trading de Grade',
    量化策略: 'Estratégias Quantitativas',
    加密货币: 'Criptomoedas',
    比特币: 'Bitcoin',
    以太坊: 'Ethereum',
    DeFi: 'DeFi',
    NFT: 'NFT',
    区块链: 'Blockchain',

    股息投资: 'Investimento em Dividendos',
    价值投资: 'Investimento em Valor',
    成长投资: 'Investimento em Crescimento',
    资产配置: 'Alocação de Ativos',
    税务规划: 'Planejamento Tributário',
    现金流: 'Fluxo de Caixa',
    被动收入: 'Renda Passiva',

    技术分析: 'Análise Técnica',
    基本面分析: 'Análise Fundamentalista',
    市场情绪: 'Sentimento do Mercado',
    趋势分析: 'Análise de Tendências',
    支撑阻力: 'Suporte e Resistência',
  },
  de: {
    期权策略: 'Optionsstrategien',
    牛市策略: 'Bullenmarkt-Strategien',
    价差策略: 'Spread-Strategien',
    风险管理: 'Risikomanagement',
    期权基础: 'Optionen Grundlagen',
    期权定价: 'Optionsbewertung',
    波动率交易: 'Volatilitäts-Trading',
    期权组合: 'Options-Portfolio',
    套利策略: 'Arbitrage-Strategien',
    对冲策略: 'Hedging-Strategien',

    网格交易: 'Grid-Trading',
    量化策略: 'Quantitative Strategien',
    加密货币: 'Kryptowährungen',
    比特币: 'Bitcoin',
    以太坊: 'Ethereum',
    DeFi: 'DeFi',
    NFT: 'NFT',
    区块链: 'Blockchain',

    股息投资: 'Dividenden-Investment',
    价值投资: 'Value-Investment',
    成长投资: 'Growth-Investment',
    资产配置: 'Asset-Allokation',
    税务规划: 'Steuerplanung',
    现金流: 'Cashflow',
    被动收入: 'Passives Einkommen',

    技术分析: 'Technische Analyse',
    基本面分析: 'Fundamentalanalyse',
    市场情绪: 'Marktstimmung',
    趋势分析: 'Trendanalyse',
    支撑阻力: 'Unterstützung und Widerstand',
  },
  fr: {
    期权策略: "Stratégies d'Options",
    牛市策略: 'Stratégies Haussières',
    价差策略: 'Stratégies de Spread',
    风险管理: 'Gestion des Risques',
    期权基础: "Fondamentaux d'Options",
    期权定价: "Évaluation d'Options",
    波动率交易: 'Trading de Volatilité',
    期权组合: "Portefeuille d'Options",
    套利策略: "Stratégies d'Arbitrage",
    对冲策略: 'Stratégies de Couverture',

    网格交易: 'Trading de Grille',
    量化策略: 'Stratégies Quantitatives',
    加密货币: 'Cryptomonnaies',
    比特币: 'Bitcoin',
    以太坊: 'Ethereum',
    DeFi: 'DeFi',
    NFT: 'NFT',
    区块链: 'Blockchain',

    股息投资: 'Investissement en Dividendes',
    价值投资: 'Investissement de Valeur',
    成长投资: 'Investissement de Croissance',
    资产配置: "Allocation d'Actifs",
    税务规划: 'Planification Fiscale',
    现金流: 'Flux de Trésorerie',
    被动收入: 'Revenus Passifs',

    技术分析: 'Analyse Technique',
    基本面分析: 'Analyse Fondamentale',
    市场情绪: 'Sentiment du Marché',
    趋势分析: 'Analyse des Tendances',
    支撑阻力: 'Support et Résistance',
  },
  ru: {
    期权策略: 'Опционные Стратегии',
    牛市策略: 'Стратегии Растущего Рынка',
    价差策略: 'Спред Стратегии',
    风险管理: 'Управление Рисками',
    期权基础: 'Основы Опционов',
    期权定价: 'Оценка Опционов',
    波动率交易: 'Торговля Волатильностью',
    期权组合: 'Портфель Опционов',
    套利策略: 'Арбитражные Стратегии',
    对冲策略: 'Стратегии Хеджирования',

    网格交易: 'Сеточная Торговля',
    量化策略: 'Количественные Стратегии',
    加密货币: 'Криптовалюты',
    比特币: 'Биткоин',
    以太坊: 'Эфириум',
    DeFi: 'DeFi',
    NFT: 'NFT',
    区块链: 'Блокчейн',

    股息投资: 'Дивидендные Инвестиции',
    价值投资: 'Стоимостные Инвестиции',
    成长投资: 'Ростовые Инвестиции',
    资产配置: 'Распределение Активов',
    税务规划: 'Налоговое Планирование',
    现金流: 'Денежный Поток',
    被动收入: 'Пассивный Доход',

    技术分析: 'Технический Анализ',
    基本面分析: 'Фундаментальный Анализ',
    市场情绪: 'Рыночные Настроения',
    趋势分析: 'Анализ Трендов',
    支撑阻力: 'Поддержка и Сопротивление',
  },
  ar: {
    期权策略: 'استراتيجيات الخيارات',
    牛市策略: 'استراتيجيات السوق الصاعدة',
    价差策略: 'استراتيجيات الفروق السعرية',
    风险管理: 'إدارة المخاطر',
    期权基础: 'أساسيات الخيارات',
    期权定价: 'تسعير الخيارات',
    波动率交易: 'تداول التقلبات',
    期权组合: 'محفظة الخيارات',
    套利策略: 'استراتيجيات المراجحة',
    对冲策略: 'استراتيجيات التحوط',

    网格交易: 'تداول الشبكة',
    量化策略: 'الاستراتيجيات الكمية',
    加密货币: 'العملات المشفرة',
    比特币: 'البيتكوين',
    以太坊: 'الإيثريوم',
    DeFi: 'DeFi',
    NFT: 'NFT',
    区块链: 'البلوك تشين',

    股息投资: 'الاستثمار في الأرباح',
    价值投资: 'الاستثمار في القيمة',
    成长投资: 'الاستثمار في النمو',
    资产配置: 'توزيع الأصول',
    税务规划: 'التخطيط الضريبي',
    现金流: 'التدفق النقدي',
    被动收入: 'الدخل السلبي',

    技术分析: 'التحليل الفني',
    基本面分析: 'التحليل الأساسي',
    市场情绪: 'معنويات السوق',
    趋势分析: 'تحليل الاتجاهات',
    支撑阻力: 'الدعم والمقاومة',
  },
  hi: {
    期权策略: 'विकल्प रणनीतियाँ',
    牛市策略: 'तेजी की रणनीतियाँ',
    价差策略: 'स्प्रेड रणनीतियाँ',
    风险管理: 'जोखिम प्रबंधन',
    期权基础: 'विकल्प की मूल बातें',
    期权定价: 'विकल्प मूल्य निर्धारण',
    波动率交易: 'अस्थिरता ट्रेडिंग',
    期权组合: 'विकल्प पोर्टफोलियो',
    套利策略: 'आर्बिट्रेज रणनीतियाँ',
    对冲策略: 'हेजिंग रणनीतियाँ',

    网格交易: 'ग्रिड ट्रेडिंग',
    量化策略: 'मात्रात्मक रणनीतियाँ',
    加密货币: 'क्रिप्टोकरेंसी',
    比特币: 'बिटकॉइन',
    以太坊: 'एथेरियम',
    DeFi: 'DeFi',
    NFT: 'NFT',
    区块链: 'ब्लॉकचेन',

    股息投资: 'डिविडेंड निवेश',
    价值投资: 'मूल्य निवेश',
    成长投资: 'विकास निवेश',
    资产配置: 'परिसंपत्ति आवंटन',
    税务规划: 'कर योजना',
    现金流: 'नकदी प्रवाह',
    被动收入: 'निष्क्रिय आय',

    技术分析: 'तकनीकी विश्लेषण',
    基本面分析: 'मौलिक विश्लेषण',
    市场情绪: 'बाजार की भावना',
    趋势分析: 'ट्रेंड विश्लेषण',
    支撑阻力: 'समर्थन और प्रतिरोध',
  },
};

/**
 * 获取标签的翻译名称
 * @param tagName 标签名称
 * @param language 目标语言
 * @returns 翻译后的标签名称
 */
export function getTranslatedTagName(tagName: string, language: SupportedLanguage): string {
  // 如果是简体中文，直接返回原始名称
  if (language === 'zh-CN') {
    return tagName;
  }

  // 查找对应语言的翻译
  const translations = tagTranslations[language];
  if (translations && translations[tagName]) {
    return translations[tagName];
  }

  // 如果没有找到翻译，返回原始名称
  return tagName;
}

/**
 * 检查标签是否有翻译
 * @param tagName 标签名称
 * @param language 目标语言
 * @returns 是否有翻译
 */
export function hasTagTranslation(tagName: string, language: SupportedLanguage): boolean {
  if (language === 'zh-CN') {
    return true; // 简体中文始终有"翻译"（原文）
  }

  const translations = tagTranslations[language];
  return !!(translations && translations[tagName]);
}
