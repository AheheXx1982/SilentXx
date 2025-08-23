import type { SupportedLanguage } from '../types/i18n';

// 分类名称翻译映射
const categoryTranslations: Record<SupportedLanguage, Record<string, string>> = {
  'zh-CN': {
    // 简体中文使用原始名称，无需翻译
  },
  en: {
    期权研究院: 'Options Institute',
    期权课程: 'Options Course',
    策略分析: 'Strategy Analysis',
    实盘分享: 'Trading Journal',
    加密实验室: 'Crypto Lab',
    网格策略: 'Grid Strategy',
    合约交易: 'Futures Trading',
    加密风向标: 'Crypto News',
    现金流乌托邦: 'Cashflow Utopia',
    期权卖方策略: 'Option Selling',
    全球高息股轮动: 'Dividend Stocks',
    税务优化: 'Tax Optimization',
  },
  'zh-TW': {
    期权研究院: '期權研究院',
    期权课程: '期權課程',
    策略分析: '策略分析',
    实盘分享: '實盤分享',
    加密实验室: '加密實驗室',
    网格策略: '網格策略',
    合约交易: '合約交易',
    加密风向标: '加密風向標',
    现金流乌托邦: '現金流烏托邦',
    期权卖方策略: '期權賣方策略',
    全球高息股轮动: '全球高息股輪動',
    税务优化: '稅務優化',
  },
  ko: {
    期权研究院: '옵션 연구소',
    期权课程: '옵션 강의',
    策略分析: '전략 분석',
    实盘分享: '실제 거래 공유',
    加密实验室: '암호화폐 실험실',
    网格策略: '그리드 전략',
    合约交易: '선물 거래',
    加密风向标: '암호화폐 동향',
    现金流乌托邦: '현금 흐름 유토피아',
    期权卖方策略: '옵션 매도 전략',
    全球高息股轮动: '글로벌 고배당주 로테이션',
    税务优化: '세금 최적화',
  },
  ja: {
    期权研究院: 'オプション研究所',
    期权课程: 'オプション講座',
    策略分析: '戦略分析',
    实盘分享: '実戦共有',
    加密实验室: '暗号通貨実験室',
    网格策略: 'グリッド戦略',
    合约交易: '先物取引',
    加密风向标: '暗号通貨動向',
    现金流乌托邦: 'キャッシュフロー理想郷',
    期权卖方策略: 'オプション売方戦略',
    全球高息股轮动: 'グローバル高配当株ローテーション',
    税务优化: '税務最適化',
  },
  es: {
    期权研究院: 'Instituto de Opciones',
    期权课程: 'Curso de Opciones',
    策略分析: 'Análisis de Estrategias',
    实盘分享: 'Compartir Operaciones Reales',
    加密实验室: 'Laboratorio de Criptomonedas',
    网格策略: 'Estrategia de Rejilla',
    合约交易: 'Trading de Futuros',
    加密风向标: 'Tendencias de Criptomonedas',
    现金流乌托邦: 'Utopía de Flujo de Caja',
    期权卖方策略: 'Estrategias de Venta de Opciones',
    全球高息股轮动: 'Rotación de Acciones de Alto Dividendo Global',
    税务优化: 'Optimización Tributaria',
  },
  pt: {
    期权研究院: 'Instituto de Opções',
    期权课程: 'Curso de Opções',
    策略分析: 'Análise de Estratégias',
    实盘分享: 'Compartilhamento de Operações Reais',
    加密实验室: 'Laboratório de Criptomoedas',
    网格策略: 'Estratégia de Grade',
    合约交易: 'Negociação de Futuros',
    加密风向标: 'Tendências de Criptomoedas',
    现金流乌托邦: 'Utopia de Fluxo de Caixa',
    期权卖方策略: 'Estratégias de Venda de Opções',
    全球高息股轮动: 'Rotação de Ações de Alto Dividendo Global',
    税务优化: 'Otimização Tributária',
  },
  de: {
    期权研究院: 'Optionen Institut',
    期权课程: 'Optionen Kurs',
    策略分析: 'Strategie Analyse',
    实盘分享: 'Echtgeld Handel Teilen',
    加密实验室: 'Krypto Labor',
    网格策略: 'Grid Strategie',
    合约交易: 'Futures Handel',
    加密风向标: 'Krypto Trends',
    现金流乌托邦: 'Cashflow Utopia',
    期权卖方策略: 'Optionsverkauf Strategien',
    全球高息股轮动: 'Globale Hochdividenden Aktien Rotation',
    税务优化: 'Steuer Optimierung',
  },
  fr: {
    期权研究院: "Institut d'Options",
    期权课程: "Cours d'Options",
    策略分析: 'Analyse de Stratégies',
    实盘分享: 'Partage de Trading Réel',
    加密实验室: 'Laboratoire de Crypto',
    网格策略: 'Stratégie de Grille',
    合约交易: 'Trading de Futures',
    加密风向标: 'Tendances Crypto',
    现金流乌托邦: 'Utopie de Flux de Trésorerie',
    期权卖方策略: "Stratégies de Vente d'Options",
    全球高息股轮动: "Rotation d'Actions à Haut Dividendo Global",
    税务优化: 'Optimisation Fiscale',
  },
  ru: {
    期权研究院: 'Институт Опционов',
    期权课程: 'Курс по Опционам',
    策略分析: 'Анализ Стратегий',
    实盘分享: 'Обмен Реальными Сделками',
    加密实验室: 'Лаборатория Криптовалют',
    网格策略: 'Сеточная Стратегия',
    合约交易: 'Фьючерсная Торговля',
    加密风向标: 'Тренды Криптовалют',
    现金流乌托邦: 'Утопия Денежных Потоков',
    期权卖方策略: 'Стратегии Продажи Опционов',
    全球高息股轮动: 'Ротация Глобальных Акций с Высокими Дивидендами',
    税务优化: 'Оптимизация Налогов',
  },
  ar: {
    期权研究院: 'معهد الخيارات',
    期权课程: 'دورة الخيارات',
    策略分析: 'تحليل الاستراتيجيات',
    实盘分享: 'مشاركة التداول الحقيقي',
    加密实验室: 'مختبر العملات المشفرة',
    网格策略: 'استراتيجية الشبكة',
    合约交易: 'تداول العقود الآجلة',
    加密风向标: 'اتجاهات العملات المشفرة',
    现金流乌托邦: 'يوتوبيا التدفق النقدي',
    期权卖方策略: 'استراتيجيات بيع الخيارات',
    全球高息股轮动: 'تناوب الأسهم عالية الأرباح العالمية',
    税务优化: 'تحسين الضرائب',
  },
  hi: {
    期权研究院: 'विकल्प अनुसंधान संस्थान',
    期权课程: 'विकल्प पाठ्यक्रम',
    策略分析: 'रणनीति विश्लेषण',
    实盘分享: 'वास्तविक ट्रेडिंग साझा करें',
    加密实验室: 'क्रिप्टो प्रयोगशाला',
    网格策略: 'ग्रिड रणनीति',
    合约交易: 'फ्यूचर्स ट्रेडिंग',
    加密风向标: 'क्रिप्टो रुझान',
    现金流乌托邦: 'नकद प्रवाह उत्पीठिका',
    期权卖方策略: 'विकल्प विक्रेता रणनीतियाँ',
    全球高息股轮动: 'वैश्विक उच्च लाभांश शेयर रोटेशन',
    税务优化: 'कर अनुकूलन',
  },
};

/**
 * 获取分类的翻译名称
 * @param categoryName 分类名称
 * @param language 目标语言
 * @returns 翻译后的分类名称
 */
export function getTranslatedCategoryName(categoryName: string, language: SupportedLanguage): string {
  // 如果是简体中文，直接返回原始名称
  if (language === 'zh-CN') {
    return categoryName;
  }

  // 查找对应语言的翻译
  const translations = categoryTranslations[language];
  if (translations && translations[categoryName]) {
    return translations[categoryName];
  }

  // 如果没有找到翻译，返回原始名称
  return categoryName;
}
