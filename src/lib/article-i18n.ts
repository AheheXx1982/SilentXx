import type { BlogPost } from '../types/blog';
import type { SupportedLanguage } from '../types/i18n';
import { getCollection } from 'astro:content';
import fs from 'fs';
import path from 'path';

// 翻译内容映射表
const translationContentMap: Record<string, Record<string, string>> = {
  'cashflow-utopia/index': {
    en: `Welcome to Cashflow Utopia! We focus on sharing investment strategies and practical experiences for building stable cash flow.

## System Philosophy

Through diversified investment strategies and risk management, we build investment portfolios that can continuously generate cash flow, achieving long-term stable wealth growth.

## Core Strategies

- **Option Selling Strategies** - Generate premium income through selling options
- **Global High-Dividend Stock Rotation** - Discover global high-dividend stock investment opportunities  
- **Tax Optimization** - Reasonable tax planning to improve investment returns

## Subcategory Navigation

- [Option Selling Strategies](/en/categories/cashflow-utopia/option-selling) - Detailed explanation and practical sharing of selling strategies
- [Global High-Dividend Stock Rotation](/en/categories/cashflow-utopia/drip) - High-dividend stock investment strategies
- [Tax Optimization](/en/categories/cashflow-utopia/tax) - Investment tax planning and optimization

Whether you are an investor seeking stable income or a trader hoping to optimize your portfolio, you can find valuable references here.`,
    ja: `キャッシュフローユートピアへようこそ！ここでは安定したキャッシュフローを構築するための投資戦略と実践経験の共有に焦点を当てています。

## システム理念

多様化した投資戦略とリスク管理を通じて、継続的にキャッシュフローを生み出すことができる投資ポートフォリオを構築し、長期的に安定した富の成長を実現します。

## コア戦略

- **オプション売り戦略** - オプションを売ることでプレミアム収入を得る
- **グローバル高配当株ローテーション** - グローバル高配当株の投資機会を発掘
- **税務最適化** - 投資収益を向上させるための合理的な税務計画

## サブカテゴリナビゲーション

- [オプション売り戦略](/ja/categories/cashflow-utopia/option-selling) - 売り戦略の詳細解説と実戦共有
- [グローバル高配当株ローテーション](/ja/categories/cashflow-utopia/drip) - 高配当株投資戦略
- [税務最適化](/ja/categories/cashflow-utopia/tax) - 投資税務計画と最適化

安定した収入を求める投資家でも、ポートフォリオの最適化を希望するトレーダーでも、ここで価値ある参考資料を見つけることができます。`,
    'zh-TW': `歡迎來到現金流烏托邦！這裡專注於分享構建穩定現金流的投資策略和實踐經驗。

## 系統理念

透過多元化的投資策略和風險管理，構建能夠持續產生現金流的投資組合，實現長期穩定的財富增長。

## 核心策略

- **期權賣方策略** - 透過賣出期權獲取權利金收入
- **全球高息股輪動** - 挖掘全球高股息股票的投資機會
- **稅務優化** - 合理規劃稅務以提高投資收益

## 子分類導航

- [期權賣方策略](/zh-tw/categories/cashflow-utopia/option-selling) - 賣方策略詳解與實戰分享
- [全球高息股輪動](/zh-tw/categories/cashflow-utopia/drip) - 高股息股票投資策略
- [稅務優化](/zh-tw/categories/cashflow-utopia/tax) - 投資稅務規劃與優化

無論您是尋求穩定收入的投資者還是希望優化投資組合的交易者，這裡都能為您提供有價值的參考。`,
  },
  'cashflow-utopia/tax/tax-optimization-strategies': {
    en: `Tax optimization is crucial for maximizing investment returns and is an important component of building a cash flow system.

## Major Tax Types

### 1. Capital Gains Tax

- Short-term capital gains (holding period less than 1 year): Higher tax rates
- Long-term capital gains (holding period over 1 year): Enjoy preferential tax rates

### 2. Dividend Tax

- Ordinary dividends: Taxed at ordinary income tax rates
- Qualified dividends: Enjoy lower tax rates

### 3. Interest Tax

- Usually taxed at ordinary income tax rates

## Optimization Strategies

### 1. Holding Period Management

- Try to hold assets for more than 1 year to enjoy long-term capital gains preferential tax rates
- Reasonably arrange buying and selling timing

### 2. Account Type Selection

- **Tax-deferred accounts** (such as 401k, IRA): Investment returns are taxed later
- **Tax-free accounts** (such as Roth IRA): Qualified withdrawals are tax-free
- **Taxable accounts**: Flexible but require timely tax reporting

### 3. Investment Allocation

- Prioritize in taxable accounts: Index funds, tax-efficient ETFs
- Allocate in tax-advantaged accounts: Bond funds, REITs and other tax-inefficient investments

### 4. Tax Loss Harvesting

- Sell losing assets to offset capital gains
- Reasonably utilize the $3,000 annual net capital loss deduction against ordinary income

## Important Notes

Tax regulations are complex and may change. It is recommended to consult professional tax advisors to develop tax optimization strategies suitable for your situation.`,
    ja: `税務最適化は投資収益を最大化するために重要であり、キャッシュフローシステム構築の重要な構成要素です。

## 主要税種

### 1. キャピタルゲイン税

- 短期キャピタルゲイン（保有期間1年未満）：税率が高い
- 長期キャピタルゲイン（保有期間1年超）：優遇税率を享受

### 2. 配当税

- 普通配当：普通所得税率で課税
- 適格配当：低い税率を享受

### 3. 利息税

- 通常は普通所得税率で課税

## 最適化戦略

### 1. 保有期間管理

- 資産を1年以上保有して長期キャピタルゲイン優遇税率を享受
- 売買タイミングを合理的に調整

### 2. 口座タイプ選択

- **税繰延口座**（401k、IRAなど）：投資収益の課税が後回し
- **非課税口座**（Roth IRAなど）：条件を満たす引き出しは非課税
- **課税口座**：柔軟だが適時な税務申告が必要

### 3. 投資配分

- 課税口座で優先配分：インデックスファンド、税効率の高いETF
- 税優遇口座で配分：債券ファンド、REITsなど税効率の低い投資商品

### 4. 損失収穫

- 損失時に資産を売却してキャピタルゲインを相殺
- 年間3,000ドルの純キャピタル損失の普通所得控除優遇を合理的に活用

## 注意事項

税法は複雑で変更される可能性があります。専門の税務アドバイザーに相談して、自分に適した税務最適化戦略を策定することをお勧めします。`,
    'zh-TW': `稅務優化對於最大化投資收益至關重要，是構建現金流系統的重要組成部分。

## 主要稅種

### 1. 資本利得稅

- 短期資本利得（持有期少於1年）：稅率較高
- 長期資本利得（持有期超過1年）：享受優惠稅率

### 2. 股息稅

- 普通股息：按普通收入稅率徵稅
- 合格股息：享受較低稅率

### 3. 利息稅

- 通常按普通收入稅率徵稅

## 優化策略

### 1. 持有期限管理

- 儘量持有資產超過1年以享受長期資本利得優惠稅率
- 合理安排買入和賣出時間

### 2. 賬戶類型選擇

- **稅收遞延賬戶**（如401k、IRA）：投資收益延遲納稅
- **稅收免稅賬戶**（如Roth IRA）：符合條件的提取免稅
- **應稅賬戶**：靈活但需及時申報納稅

### 3. 投資標的配置

- 在應稅賬戶中優先配置：指數基金、稅收效率高的ETF
- 在稅收優惠賬戶中配置：債券基金、REITs等稅收效率較低的投資品

### 4. 損失收割

- 在虧損時賣出資產以抵消資本利得
- 合理利用每年3000美元的淨資本損失抵扣普通收入的優惠

## 注意事項

稅務法規複雜且可能變化，建議諮詢專業稅務顧問制定適合自己的稅務優化策略。`,
  },
  'cashflow-utopia/option-selling/selling-strategy-basics': {
    en: `Option selling strategy is a strategy that generates premium income by selling options, suitable for investors who hope to obtain stable cash flow.

## Core Advantages

### 1. Stable Income

- Regularly collect premiums
- Time value decay favors sellers

### 2. Probability Advantage

- Most options eventually expire worthless
- Statistically, sellers have higher win rates

### 3. Flexibility

- Can choose different strike prices and expiration dates based on market conditions
- Can be combined with other strategies

## Implementation Points

### 1. Selecting Suitable Targets

- Stocks or indices with moderate volatility
- Option contracts with sufficient liquidity

### 2. Timing Selection

- Sell when implied volatility is high
- Avoid periods around major events

### 3. Risk Control

- Set stop-loss points
- Diversify investments across different targets
- Control position sizes

## Important Notes

Although selling strategies have higher win rates, single losses can be large, requiring strict risk management.`,
    ja: `オプション売り戦略は、オプションを売ることでプレミアム収入を得る戦略で、安定したキャッシュフローを得たい投資家に適しています。

## コア優位性

### 1. 安定収入

- 定期的にプレミアムを受け取る
- 時間価値の減衰が売り手に有利

### 2. 確率優位性

- ほとんどのオプションは最終的に無価値で満期を迎える
- 統計的に売り手の勝率が高い

### 3. 柔軟性

- 市場状況に応じて異なる行使価格と満期日を選択可能
- 他の戦略と組み合わせて使用可能

## 実施要点

### 1. 適切な銘柄選択

- 適度なボラティリティの株式や指数
- 十分な流動性を持つオプション契約

### 2. タイミング選択

- インプライドボラティリティが高い時に売る
- 重要なイベント前後の期間は避ける

### 3. リスク制御

- ストップロスポイントを設定
- 異なる銘柄への分散投資
- ポジションサイズの制御

## 注意事項

売り戦略は勝率が高いものの、一回の損失が大きくなる可能性があるため、厳格なリスク管理が必要です。`,
    'zh-TW': `期權賣方策略是一種透過賣出期權來獲取權利金收入的策略，適合希望獲得穩定現金流的投資者。

## 核心優勢

### 1. 穩定收入

- 定期收取權利金
- 時間價值衰減對賣方有利

### 2. 概率優勢

- 大多數期權最終會歸零
- 統計學上賣方勝率較高

### 3. 靈活性

- 可根據市場情況選擇不同行權價和到期日
- 可與其他策略組合使用

## 實施要點

### 1. 選擇合適的標的

- 波動率適中的股票或指數
- 流動性充足的期權合約

### 2. 時機選擇

- 在隱含波動率較高時賣出
- 避免重大事件前後的時間段

### 3. 風險控制

- 設置止損點
- 分散投資不同標的
- 控制倉位規模

## 注意事項

雖然賣方策略勝率較高，但單次損失可能較大，需要嚴格的風險管理。`,
  },
  'cashflow-utopia/drip/dividend-stock-strategy': {
    en: `Build a stable cash flow through investing in global high-dividend stocks and achieve long-term stable wealth growth.

## Core Principles

### 1. Dividend Yield

- Select companies with reasonable and sustainable dividend yields
- Avoid "dividend traps" that invest solely for high dividends

### 2. Company Fundamentals

- Solid financial condition
- Sustainable profitability
- Leading industry position

### 3. Diversified Investment

- Geographic diversification: Invest in stocks from different countries and regions
- Industry diversification: Cover multiple industries to reduce risk

## Selection Criteria

### Financial Indicators

- Dividend yield > 3%
- Reasonable debt ratio
- Stable profit growth

### Industry Preferences

- Utilities
- Real Estate Investment Trusts (REITs)
- Consumer goods
- Financial services

## Rotation Strategy

Based on market environment and individual stock performance, regularly adjust holdings, sell underperforming stocks, and buy high-dividend stocks with more potential.

## Risk Warning

Dividends may be reduced or cancelled, and stock prices may also decline. Investors need to pay attention to changes in company fundamentals.`,
    ja: `グローバル高配当株への投資を通じて安定したキャッシュフローを構築し、長期的に安定した富の成長を実現します。

## コア原則

### 1. 配当利回り

- 合理的で持続可能な配当利回りの企業を選択
- 高配当のみを理由とする「配当トラップ」を避ける

### 2. 企業ファンダメンタルズ

- 財務状況が健全
- 収益力が持続的
- 業界での地位が優位

### 3. 分散投資

- 地域分散：異なる国・地域の株式に投資
- 業界分散：複数業界をカバーしてリスクを低減

## 選定基準

### 財務指標

- 配当利回り > 3%
- 負債比率が合理的
- 利益が安定成長

### 業界選好

- 公益事業
- 不動産投資信託（REITs）
- 消費財
- 金融サービス業

## ローテーション戦略

市場環境と個別株のパフォーマンスに基づき、定期的に保有銘柄を調整し、パフォーマンスの悪い株式を売却して、より可能性のある高配当株を購入。

## リスク警告

配当は減配や無配になる可能性があり、株価も下落する可能性があります。投資家は企業ファンダメンタルズの変化に注意する必要があります。`,
    'zh-TW': `透過投資全球高股息股票構建穩定的現金流，實現長期穩定的財富增長。

## 核心原則

### 1. 股息收益率

- 選擇股息收益率合理且可持續的公司
- 避免僅因高股息而投資的「股息陷阱」

### 2. 公司基本面

- 財務狀況穩健
- 盈利能力持續
- 行業地位領先

### 3. 分散投資

- 地域分散：投資不同國家和地區的股票
- 行業分散：覆蓋多個行業以降低風險

## 篩選標準

### 財務指標

- 股息收益率 > 3%
- 負債率合理
- 盈利穩定增長

### 行業偏好

- 公用事業
- 房地產投資信託(REITs)
- 消費品
- 金融服務業

## 輪動策略

根據市場環境和個股表現，定期調整持倉，賣出表現較差的股票，買入更具潛力的高息股。

## 風險提示

股息可能被削減或取消，股價也可能下跌，投資者需要關注公司基本面變化。`,
  },
};

/**
 * 获取翻译内容
 */
function getTranslatedContent(articlePath: string, language: SupportedLanguage): string | null {
  const content = translationContentMap[articlePath]?.[language];
  return content || null;
}

/**
 * 将Markdown文本转换为HTML
 */
export function markdownToHtml(markdown: string): string {
  const lines = markdown.split('\n');
  const result = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // 处理空行
    if (trimmedLine === '') {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      continue;
    }

    // 处理二级标题
    if (trimmedLine.startsWith('## ')) {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      result.push(`<h2 class="text-2xl font-bold mb-4 mt-6">${trimmedLine.slice(3)}</h2>`);
    }
    // 处理三级标题
    else if (trimmedLine.startsWith('### ')) {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      result.push(`<h3 class="text-xl font-semibold mb-3 mt-5">${trimmedLine.slice(4)}</h3>`);
    }
    // 处理列表项
    else if (trimmedLine.startsWith('- ')) {
      if (!inList) {
        result.push('<ul class="list-disc list-inside mb-4 space-y-2">');
        inList = true;
      }

      const listContent = trimmedLine.slice(2);
      // 处理加粗文本
      const formattedContent = listContent.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      result.push(`<li class="ml-4">${formattedContent}</li>`);
    }
    // 处理链接
    else if (trimmedLine.includes('[') && trimmedLine.includes('](')) {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      const linkProcessed = trimmedLine.replace(
        /\[(.+?)\]\((.+?)\)/g,
        '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>',
      );
      result.push(`<p class="mb-4">${linkProcessed}</p>`);
    }
    // 处理普通段落
    else {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      // 处理加粗文本
      const formattedContent = trimmedLine.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      result.push(`<p class="mb-4">${formattedContent}</p>`);
    }
  }

  // 如果最后还在列表中，关闭列表
  if (inList) {
    result.push('</ul>');
  }

  return result.join('\n');
}

/**
 * 从文件系统读取翻译内容
 */
async function readTranslationFromFile(filePath: string): Promise<string | null> {
  try {
    // 构建完整的文件路径
    const fullPath = path.join(process.cwd(), 'src', 'content', filePath);

    // 检查文件是否存在
    if (fs.existsSync(fullPath)) {
      // 读取文件内容
      const content = fs.readFileSync(fullPath, 'utf-8');
      return content;
    }
    return null;
  } catch (error) {
    console.error(`Error reading translation file ${filePath}:`, error);
    return null;
  }
}

/**
 * 智能获取文章内容 - 优先显示翻译，否则显示原文
 */
export async function getSmartArticleContent(post: BlogPost, targetLanguage: SupportedLanguage) {
  const translation = getPostTranslation(post, targetLanguage);

  // 如果有翻译内容（来自frontmatter），直接使用
  if (translation.isTranslated && translation.content && translation.content !== post.body) {
    // 检查content是否是文件路径
    if (typeof translation.content === 'string' && translation.content.endsWith('.md')) {
      // 如果是文件路径，尝试读取文件内容
      try {
        const fileContent = await readTranslationFromFile(translation.content);
        if (fileContent) {
          const Content = () => {
            const htmlContent = markdownToHtml(fileContent);
            return `<div class="prose prose-lg max-w-none dark:prose-invert">${htmlContent}</div>`;
          };

          return {
            Content,
            metadata: {
              ...translation,
              content: fileContent, // 更新content为实际内容
              fallbackToOriginal: false,
            },
          };
        }
      } catch (error) {
        console.error('Error reading translation file:', error);
      }
    } else {
      // 如果content是直接的文本内容，直接使用
      const Content = () => {
        const htmlContent = markdownToHtml(translation.content);
        return `<div class="prose prose-lg max-w-none dark:prose-invert">${htmlContent}</div>`;
      };

      return {
        Content,
        metadata: {
          ...translation,
          fallbackToOriginal: false,
        },
      };
    }
  }

  // 获取文章路径标识符，处理不同格式
  let articlePath = post.slug;

  // 如果文件名为index，则只使用目录部分
  if (articlePath.endsWith('/index')) {
    articlePath = articlePath.replace('/index', '');
  }

  // 尝试直接匹配路径
  let translatedContent = getTranslatedContent(articlePath, targetLanguage);

  // 如果直接匹配失败，尝试其他格式
  if (!translatedContent && post.data.link) {
    // 使用link字段構建路径
    const linkPath = `${post.slug.split('/')[0]}/${post.data.link}`;
    translatedContent = getTranslatedContent(linkPath, targetLanguage);
  }

  // 如果不是原始语言且找到了翻译内容
  if (targetLanguage !== (post.data.originalLanguage || 'zh-CN') && translatedContent) {
    // 创建翻译内容组件
    const Content = () => {
      const htmlContent = markdownToHtml(translatedContent);
      return `<div class="prose prose-lg max-w-none dark:prose-invert">${htmlContent}</div>`;
    };

    return {
      Content,
      metadata: {
        ...translation,
        isTranslated: true,
        fallbackToOriginal: false,
      },
    };
  }

  // 使用原始内容 - 修复这里的问题
  try {
    // 对于所有语言，直接使用markdownToHtml转换
    const Content = () => {
      const htmlContent = markdownToHtml(post.body || '');
      return `<div class="prose prose-lg max-w-none dark:prose-invert">${htmlContent}</div>`;
    };

    return {
      Content,
      metadata: {
        ...translation,
        fallbackToOriginal: !translation.isTranslated,
      },
    };
  } catch (error) {
    // 如果渲染失败，返回错误信息
    console.error('Error rendering post content:', error);
    const Content = () => {
      return `<div class="error-content">内容渲染错误: ${error.message}</div>`;
    };

    return {
      Content,
      metadata: {
        ...translation,
        fallbackToOriginal: !translation.isTranslated,
      },
    };
  }
}

/**
 * 获取文章的多语言版本信息
 */
export function getPostTranslation(post: BlogPost, targetLanguage: SupportedLanguage) {
  const originalLanguage = post.data.originalLanguage || 'zh-CN';

  // 如果目标语言是原始语言，直接返回原文
  if (targetLanguage === originalLanguage) {
    return {
      title: post.data.title,
      description: post.data.description,
      subtitle: post.data.subtitle,
      content: post.body,
      isTranslated: false,
      originalLanguage,
      availableLanguages: post.data.availableLanguages || [originalLanguage],
    };
  }

  // 检查是否有翻译版本
  const translation = post.data.translations?.[targetLanguage];

  if (translation) {
    return {
      title: translation.title || post.data.title,
      description: translation.description || post.data.description,
      subtitle: translation.subtitle || post.data.subtitle,
      content: translation.content || post.body, // 可以是翻译内容或原内容
      isTranslated: true,
      originalLanguage,
      availableLanguages: post.data.availableLanguages || [originalLanguage],
    };
  }

  // 如果没有翻译，返回原文作为fallback
  return {
    title: post.data.title,
    description: post.data.description,
    subtitle: post.data.subtitle,
    content: post.body,
    isTranslated: false,
    originalLanguage,
    availableLanguages: post.data.availableLanguages || [originalLanguage],
    fallbackToOriginal: true,
  };
}

/**
 * 检查文章是否有指定语言的翻译
 */
export function hasTranslation(post: BlogPost, language: SupportedLanguage): boolean {
  const originalLanguage = post.data.originalLanguage || 'zh-CN';

  // 原始语言总是可用的
  if (language === originalLanguage) {
    return true;
  }

  // 检查是否有翻译版本
  return !!post.data.translations?.[language];
}

/**
 * 获取文章的所有可用语言
 */
export function getAvailableLanguages(post: BlogPost): SupportedLanguage[] {
  const originalLanguage = (post.data.originalLanguage || 'zh-CN') as SupportedLanguage;
  const languages = new Set<SupportedLanguage>([originalLanguage]);

  // 添加有翻译的语言
  if (post.data.translations) {
    Object.keys(post.data.translations).forEach((lang) => {
      languages.add(lang as SupportedLanguage);
    });
  }

  // 如果文章明确指定了可用语言列表
  if (post.data.availableLanguages) {
    post.data.availableLanguages.forEach((lang) => {
      languages.add(lang as SupportedLanguage);
    });
  }

  return Array.from(languages);
}

/**
 * 为指定语言获取本地化的文章链接
 */
export function getLocalizedArticleUrl(post: BlogPost, language: SupportedLanguage, baseUrl: string = ''): string {
  // 使用 link 字段或从 slug 中提取文件名（不包含路径）
  const link = post.data.link ?? post.slug.split('/').pop() ?? post.slug;

  // 对于中文版本，使用默认路径
  if (language === 'zh-CN') {
    return `${baseUrl}/article/${link}`;
  }

  // 对于其他语言版本，添加语言前缀
  return `${baseUrl}/${language}/article/${link}`;
}

/**
 * 获取文章的语言切换链接列表
 */
export function getArticleLanguageSwitchLinks(post: BlogPost, currentLanguage: SupportedLanguage, baseUrl: string = '') {
  const availableLanguages = getAvailableLanguages(post);

  return availableLanguages.map((lang) => ({
    language: lang,
    url: getLocalizedArticleUrl(post, lang, baseUrl),
    isAvailable: hasTranslation(post, lang),
    isCurrent: lang === currentLanguage,
  }));
}
