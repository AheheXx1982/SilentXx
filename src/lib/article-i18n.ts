import type { BlogPost } from '../types/blog';
import type { SupportedLanguage } from '../types/i18n';
import { getCollection } from 'astro:content';
import fs from 'fs';
import path from 'path';

// 翻译内容映射表
const translationContentMap: Record<string, Record<string, string>> = {
  'options/index': {
    en: `Welcome to the Options Institute! This is a dedicated area for options strategy research, sharing practical experience, and providing course instruction.

## Our Research Areas

- Options pricing model research
- Trading strategy backtesting analysis
- Risk management methodology
- Market sentiment and volatility analysis

## Subcategory Navigation

- [Options Courses](/en/categories/options/course) - Systematic learning of options knowledge
- [Strategy Analysis](/en/categories/options/strategy) - In-depth analysis of various options strategies
- [Live Trading Journal](/en/categories/options/trading-journal) - Real trading records and reviews

Whether you're a beginner or an experienced trader, there's content here for you.`,
    ja: `オプション研究所へようこそ！ここはオプション戦略の研究、実戦経験の共有、コース指導を提供する専門エリアです。

## 研究方向

- オプション価格モデル研究
- 取引戦略バックテスト分析
- リスク管理方法論
- 市場センチメントとボラティリティ分析

## サブカテゴリナビゲーション

- [オプションコース](/ja/categories/options/course) - オプション知識の体系的学習
- [戦略分析](/ja/categories/options/strategy) - 各種オプション戦略の詳細分析
- [実取引ジャーナル](/ja/categories/options/trading-journal) - 実戦取引記録と振り返り

オプション初心者でも経験豊富なトレーダーでも、ここにはあなたに適したコンテンツがあります。`,
    'zh-TW': `歡迎來到期權研究院！這裡是專門研究期權策略、分享實戰經驗和提供課程教學的專區。

## 我們的研究方向

- 期權定價模型研究
- 交易策略回測分析
- 風險管理方法論
- 市場情緒與波動率分析

## 子分類導航

- [期權課程](/zh-tw/categories/options/course) - 系統性學習期權知識
- [策略分析](/zh-tw/categories/options/strategy) - 深入分析各類期權策略
- [實盤分享](/zh-tw/categories/options/trading-journal) - 實戰交易記錄與復盤

無論您是期權新手還是有經驗的交易者，這裡都有適合您的內容。`,
  },
  'crypto/index': {
    en: `Welcome to the Crypto Lab! This is a dedicated area for cryptocurrency research, trading strategy sharing, and market analysis.

## Our Research Areas

- Cryptocurrency market analysis
- Blockchain technology research
- Trading strategy backtesting
- Risk management methods

## Subcategory Navigation

- [Grid Strategies](/en/categories/crypto/grid) - Grid trading strategy research
- [Futures Trading](/en/categories/crypto/futures) - Futures trading techniques and risk management
- [Crypto Compass](/en/categories/crypto/crypto-news) - Latest crypto market dynamics and analysis

Whether you're a cryptocurrency beginner or an experienced trader, there's content here for you.`,
    ja: `暗号研究室へようこそ！ここは暗号通貨研究、取引戦略共有、市場分析の専門エリアです。

## 研究分野

- 暗号通貨市場分析
- ブロックチェーン技術研究
- 取引戦略バックテスト
- リスク管理手法

## サブカテゴリナビゲーション

- [グリッド戦略](/ja/categories/crypto/grid) - グリッド取引戦略研究
- [先物取引](/ja/categories/crypto/futures) - 先物取引技術とリスク管理
- [暗号コンパス](/ja/categories/crypto/crypto-news) - 暗号市場の最新動向と分析

暗号通貨初心者でも経験豊富なトレーダーでも、ここにはあなたに適したコンテンツがあります。`,
    'zh-TW': `歡迎來到加密實驗室！這裡是專門研究加密貨幣、分享交易策略和市場分析的專區。

## 我們的研究方向

- 加密貨幣市場分析
- 區塊鏈技術研究
- 交易策略回測
- 風險管理方法

## 子分類導航

- [網格策略](/zh-tw/categories/crypto/grid) - 網格交易策略研究
- [合約交易](/zh-tw/categories/crypto/futures) - 合約交易技巧與風險管理
- [加密風向標](/zh-tw/categories/crypto/crypto-news) - 加密市場最新動態與分析

無論您是加密貨幣新手還是有經驗的交易者，這裡都有適合您的內容。`,
  },
  'crypto/grid/grid-strategy-intro': {
    en: `Grid trading is a quantitative trading strategy that automatically places buy and sell orders at different price levels to profit from market volatility.

## Core Principles

Grid trading sets multiple buy and sell orders within a predetermined price range, automatically executing trades when prices reach these levels, thereby profiting from market fluctuations.

## Setup Key Points

### 1. Selecting Suitable Trading Pairs

- High volatility cryptocurrency pairs
- Coins with sufficient trading volume

### 2. Determining Price Range

- Identify support and resistance levels based on technical analysis
- Consider market sentiment and news event impacts

### 3. Grid Density Settings

- Too dense grids increase trading frequency but reduce single trade profits
- Too sparse grids may miss trading opportunities

## Risk Warning

While grid trading performs well in ranging markets, it may face significant risks in trending markets and requires timely strategy adjustments.`,
    ja: `グリッド取引は、事前設定された価格レンジ内で自動的に安値買い・高値売りを行う取引戦略で、特にレンジ相場に適しています。

## 基本原理

グリッド取引は、設定された価格レンジ内に複数の買い注文と売り注文を配置し、価格がこれらの注文に達したときに自動的に取引を実行することで、市場の変動から利益を得ます。

## 設定のポイント

### 1. 適切な取引ペアの選択

- ボラティリティの高い暗号通貨ペア
- 取引量が十分な通貨

### 2. 価格レンジの決定

- テクニカル分析に基づいてサポートレベルとレジスタンスレベルを特定
- 市場センチメントとニュースイベントの影響を考慮

### 3. グリッド密度の設定

- グリッドが密すぎると取引頻度は増えるが単回利益は減少
- グリッドが粗すぎると取引機会を逃す可能性

## リスク警告

グリッド取引はレンジ相場では良好なパフォーマンスを示しますが、トレンド相場では大きなリスクに直面する可能性があり、適時戦略の調整が必要です。`,
    ko: `그리드 거래는 미리 설정된 가격 범위 내에서 자동으로 저점 매수, 고점 매도를 수행하는 거래 전략으로, 특히 레인지 마켓에 적합합니다。

## 기본 원리

그리드 거래는 설정된 가격 범위 내에 여러 매수 및 매도 주문을 배치하고, 가격이 이러한 주문에 도달할 때 자동으로 거래를 실행하여 시장 변동에서 이익을 얻습니다。

## 설정 포인트

### 1. 적절한 거래 쌍 선택

- 높은 변동성을 가진 암호화폐 쌍
- 충분한 거래량을 가진 코인

### 2. 가격 범위 결정

- 기술적 분석을 바탕으로 지지선과 저항선 식별
- 시장 심리와 뉴스 이벤트 영향 고려

### 3. 그리드 밀도 설정

- 그리드가 너무 조밀하면 거래 빈도는 증가하지만 단일 거래 수익은 감소
- 그리드가 너무 성기면 거래 기회를 놓칠 가능성

## 위험 경고

그리드 거래는 레인지 마켓에서는 좋은 성과를 보이지만, 트렌드 마켓에서는 큰 위험에 직면할 수 있으며 적시에 전략 조정이 필요합니다。`,
    hi: `ग्रिड ट्रेडिंग एक पूर्व निर्धारित मूल्य सीमा के भीतर स्वचालित रूप से कम खरीदने और अधिक बेचने की ट्रेडिंग रणनीति है, जो विशेष रूप से रेंज मार्केट के लिए उपयुक्त है।

## मुख्य सिद्धांत

ग्रिड ट्रेडिंग निर्धारित मूल्य सीमा के भीतर कई खरीद और बिक्री आदेश रखती है, और जब मूल्य इन आदेशों तक पहुंचता है तो स्वचालित रूप से ट्रेडिंग निष्पादित करती है, जिससे बाजार की अस्थिरता से लाभ प्राप्त होता है।

## सेटअप की मुख्य बातें

### 1. उपयुक्त ट्रेडिंग जोड़े का चयन

- उच्च अस्थिरता वाले क्रिप्टोकरेंसी जोड़े
- पर्याप्त ट्रेडिंग वॉल्यूम वाले सिक्के

### 2. मूल्य सीमा का निर्धारण

- तकनीकी विश्लेषण के आधार पर समर्थन और प्रतिरोध स्तरों की पहचान
- बाजार की भावना और समाचार घटनाओं के प्रभाव पर विचार

### 3. ग्रिड घनत्व सेटिंग

- अत्यधिक घना ग्रिड ट्रेडिंग आवृत्ति बढ़ाता है लेकिन एकल ट्रेड लाभ कम करता है
- अत्यधिक विरल ग्रिड ट्रेडिंग अवसरों को चूक सकता है

## जोखिम चेतावनी

जबकि ग्रिड ट्रेडिंग रेंज मार्केट में अच्छा प्रदर्शन करती है, यह ट्रेंडिंग मार्केट में महत्वपूर्ण जोखिमों का सामना कर सकती है और समय पर रणनीति समायोजन की आवश्यकता होती है।`,
    'zh-TW': `網格交易是一種在預設價格區間內自動低買高賣的交易策略，特別適用於震盪市場。

## 核心原理

網格交易通過在設定的價格區間內設置多個買入和賣出訂單，當價格觸及這些訂單時自動執行交易，從而在市場波動中獲利。

## 設置要點

### 1. 選擇合適的交易對

- 波動性較大的加密貨幣對
- 交易量充足的幣種

### 2. 確定價格區間

- 基於技術分析確定支撐位和阻力位
- 考慮市場情緒和新聞事件影響

### 3. 設置網格密度

- 網格過密會增加交易頻率但降低單次收益
- 網格過稀可能錯過交易機會

## 風險提示

雖然網格交易在震盪市場中表現良好，但在單邊市場中可能會面臨較大風險，需要適時調整策略。`,
  },
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
  'options/course/intro-to-options': {
    en: `Welcome to the Options Basics Introduction Course! This is the first course designed for beginners to systematically learn options knowledge.

## Course Overview

This course will introduce the basics of options trading, including definitions, terminology, basic strategies, and risk management. Whether you're a complete beginner or need to review fundamentals, this course provides comprehensive foundational knowledge.

## What You'll Learn

### 1. Options Fundamentals
- What are options and how they work
- Call options vs put options
- Exercise price and expiration date
- Intrinsic value and time value

### 2. Market Mechanics
- How options are priced
- Factors affecting option prices
- Greeks: Delta, Gamma, Theta, Vega
- Options exchanges and market makers

### 3. Basic Strategies
- Long call and long put strategies
- Covered call writing
- Protective put strategies
- When to use each strategy

### 4. Risk Management
- Understanding maximum risk and reward
- Position sizing principles
- Exit strategies and profit taking
- Common beginner mistakes to avoid

## Course Structure

This course is divided into 8 lessons, each building upon the previous one. Take your time to understand each concept before moving forward.

## Prerequisites

- Basic understanding of stocks and stock market
- Familiarity with financial terminology
- No prior options experience required

Let's begin your options trading journey!`,
    ja: `オプション基礎入門コースへようこそ！これは初心者がオプション知識を体系的に学ぶための第一コースです。

## コース概要

このコースでは、定義、用語、基本戦略、リスク管理を含むオプション取引の基礎を紹介します。完全な初心者でも基礎の復習が必要な方でも、このコースは包括的な基礎知識を提供します。

## 学習内容

### 1. オプションの基礎
- オプションとは何か、どのように機能するか
- コールオプション vs プットオプション
- 行使価格と満期日
- 本質的価値と時間価値

### 2. 市場メカニズム
- オプションの価格設定方法
- オプション価格に影響する要因
- ギリシャ文字：デルタ、ガンマ、セータ、ベガ
- オプション取引所とマーケットメーカー

### 3. 基本戦略
- ロングコールとロングプット戦略
- カバードコール戦略
- プロテクティブプット戦略
- 各戦略をいつ使用するか

### 4. リスク管理
- 最大リスクと報酬の理解
- ポジションサイズの原則
- エグジット戦略と利益確定
- 避けるべき一般的な初心者の間違い

## コース構成

このコースは8つのレッスンに分かれており、それぞれが前のレッスンの上に構築されています。次に進む前に各概念をしっかりと理解してください。

## 前提条件

- 株式と株式市場の基本的理解
- 金融用語の知識
- オプション経験は不要

オプション取引の旅を始めましょう！`,
    'zh-TW': `歡迎來到期權基礎入門課程！這是為初學者設計的第一門系統性學習期權知識的課程。

## 課程概覽

本課程將介紹期權交易的基礎知識，包括定義、術語、基本策略和風險管理。無論您是完全的初學者還是需要複習基礎知識，本課程都提供全面的基礎知識。

## 您將學到什麼

### 1. 期權基礎
- 什麼是期權以及它們如何運作
- 看漲期權與看跌期權
- 執行價格和到期日
- 內在價值和時間價值

### 2. 市場機制
- 期權如何定價
- 影響期權價格的因素
- 希臘字母：Delta、Gamma、Theta、Vega
- 期權交易所和做市商

### 3. 基本策略
- 買入看漲和買入看跌策略
- 備兌看漲策略
- 保護性看跌策略
- 何時使用每種策略

### 4. 風險管理
- 理解最大風險和回報
- 倉位大小原則
- 退出策略和獲利了結
- 避免常見的初學者錯誤

## 課程結構

本課程分為8個課時，每個課時都建立在前一個課時的基礎上。請花時間理解每個概念再繼續前進。

## 先決條件

- 對股票和股票市場的基本理解
- 熟悉金融術語
- 不需要期權經驗

讓我們開始您的期權交易之旅！`,
  },
  'options/strategy/covered-call-strategy': {
    en: `The covered call strategy is one of the most popular options strategies for generating additional income from stock holdings.

## Strategy Overview

A covered call involves:
1. Owning 100 shares of a stock
2. Selling a call option against those shares

This strategy allows you to collect premium income while potentially profiting from modest stock price appreciation.

## When to Use

### Market Outlook
- Neutral to slightly bullish on the underlying stock
- Expecting low to moderate volatility
- Stock trading in a range or modest uptrend

### Ideal Conditions
- High implied volatility (receive more premium)
- Stocks with regular dividend payments
- Positions you're willing to sell if called away

## Profit and Loss

### Maximum Profit
- Premium received + (Strike price - Stock purchase price)
- Achieved when stock closes at or above strike price at expiration

### Maximum Loss
- Stock purchase price - Premium received
- Occurs if stock goes to zero

### Breakeven
- Stock purchase price - Premium received

## Risk Management

### Assignment Risk
- Be prepared to sell shares if stock rises above strike
- Consider rolling the option to a higher strike or later expiration

### Opportunity Cost
- Limited upside if stock rallies significantly
- Missing out on gains above the strike price

### Dividend Considerations
- Be aware of ex-dividend dates
- Early assignment risk increases before ex-dividend dates

## Example Trade

**Setup:**
- Own 100 shares of XYZ at $50
- Sell 1 XYZ $55 call expiring in 30 days for $2.00

**Outcomes:**
- If XYZ < $55: Keep shares + $200 premium
- If XYZ > $55: Sell shares at $55 + $200 premium = $700 profit
- Breakeven: $48 ($50 - $2)

## Advanced Considerations

### Rolling Strategies
- Roll up: Move to higher strike when profitable
- Roll out: Extend expiration to collect more premium
- Roll up and out: Combine both for optimal positioning

### Tax Implications
- Premium received is taxed as capital gain when position closes
- Holding period of stock may be affected

## Conclusion

Covered calls are excellent for:
- Generating additional income from stock holdings
- Reducing portfolio volatility
- Enhancing returns in sideways markets

Remember to always have a plan for all possible outcomes before entering the trade.`,
    ja: `カバードコール戦略は、株式保有から追加収入を得るための最も人気のあるオプション戦略の一つです。

## 戦略概要

カバードコールには以下が含まれます：
1. 株式を100株保有
2. その株式に対してコールオプションを売却

この戦略により、適度な株価上昇から利益を得つつ、プレミアム収入を得ることができます。

## 使用タイミング

### 市場見通し
- 原資産株式に対して中立からやや強気
- 低から中程度のボラティリティを予想
- レンジ相場や適度な上昇トレンドでの取引

### 理想的な条件
- 高いインプライドボラティリティ（より多くのプレミアムを受け取る）
- 定期的な配当を支払う株式
- コールされても売却可能なポジション

## 損益

### 最大利益
- 受け取ったプレミアム + (行使価格 - 株式購入価格)
- 満期時に株価が行使価格以上で取引されている場合に達成

### 最大損失
- 株式購入価格 - 受け取ったプレミアム
- 株価がゼロになった場合に発生

### 損益分岐点
- 株式購入価格 - 受け取ったプレミアム

## リスク管理

### 権利行使リスク
- 株価が行使価格を上回った場合の株式売却準備
- より高い行使価格や後の満期へのロールを検討

### 機会費用
- 株価が大幅に上昇した場合の上昇余地制限
- 行使価格を超える利益の逸失

### 配当の考慮事項
- 権利落ち日の認識
- 権利落ち日前の早期行使リスクの増加

## 取引例

**設定：**
- XYZ株を50ドルで100株保有
- 30日後満期のXYZ 55ドルコールを2.00ドルで売却

**結果：**
- XYZ < 55ドル：株式保持 + 200ドルプレミアム
- XYZ > 55ドル：55ドルで株式売却 + 200ドルプレミアム = 700ドル利益
- 損益分岐点：48ドル（50ドル - 2ドル）

## 高度な考慮事項

### ロール戦略
- ロールアップ：利益が出た際により高い行使価格に移動
- ロールアウト：満期を延長してより多くのプレミアムを徴収
- ロールアップアンドアウト：最適なポジショニングのため両方を組み合わせ

### 税務上の影響
- 受け取ったプレミアムはポジション終了時にキャピタルゲインとして課税
- 株式の保有期間に影響する可能性

## 結論

カバードコールは以下に最適です：
- 株式保有からの追加収入生成
- ポートフォリオボラティリティの削減
- 横ばい市場でのリターン向上

取引開始前に常にすべての可能な結果に対する計画を立てることを忘れないでください。`,
    'zh-TW': `備兌看漲策略是從股票持有中產生額外收入的最受歡迎期權策略之一。

## 策略概覽

備兌看漲包括：
1. 持有100股股票
2. 對這些股票賣出看漲期權

這個策略讓您能夠收取權利金收入，同時有可能從適度的股價上漲中獲利。

## 使用時機

### 市場展望
- 對標的股票持中性到輕微看多觀點
- 預期低到中等波動性
- 股票在區間或適度上升趨勢中交易

### 理想條件
- 高隱含波動率（獲得更多權利金）
- 定期支付股息的股票
- 願意在被行權時出售的倉位

## 損益分析

### 最大利潤
- 收到的權利金 + (行權價 - 股票購入價)
- 當股票在到期時收於行權價或以上時實現

### 最大損失
- 股票購入價 - 收到的權利金
- 當股票跌至零時發生

### 盈虧平衡點
- 股票購入價 - 收到的權利金

## 風險管理

### 指派風險
- 當股票漲至行權價以上時準備出售股票
- 考慮將期權轉至更高行權價或更晚到期日

### 機會成本
- 如果股票大幅上漲，上漲空間有限
- 錯失行權價以上的收益

### 股息考慮
- 注意除息日
- 除息日前早期行權風險增加

## 交易示例

**設置：**
- 以50美元持有100股XYZ
- 以2.00美元賣出30天後到期的XYZ 55美元看漲期權

**結果：**
- 如果XYZ < 55美元：保留股票 + 200美元權利金
- 如果XYZ > 55美元：以55美元賣出股票 + 200美元權利金 = 700美元利潤
- 盈虧平衡：48美元（50美元 - 2美元）

## 高級考慮

### 轉倉策略
- 向上轉倉：盈利時移至更高行權價
- 向外轉倉：延長到期日以收取更多權利金
- 向上向外轉倉：結合兩者以獲得最佳定位

### 稅務影響
- 收到的權利金在倉位關閉時作為資本利得徵稅
- 可能影響股票的持有期

## 結論

備兌看漲最適合：
- 從股票持有中產生額外收入
- 降低投資組合波動性
- 在橫向市場中提高回報

記住在進入交易前始終為所有可能的結果制定計劃。`,
  },
  en: `Grid strategy is a quantitative trading strategy that automatically places buy and sell orders at different price levels to profit from market volatility.

## Core Principles

### 1. Price Grid

- Set a series of buy and sell price levels
- Automatically execute orders when price reaches these levels
- Profit from price fluctuations within a range

### 2. Dollar Cost Averaging

- Gradually accumulate positions during price declines
- Reduce average holding cost
- Smooth out market volatility impact

### 3. Automated Execution

- Pre-set trading parameters
- System automatically executes trades
- Reduce emotional trading decisions

## Implementation Steps

### 1. Select Suitable Assets

- Choose assets with sufficient liquidity
- Prefer assets that fluctuate within ranges
- Avoid assets with strong unidirectional trends

### 2. Set Grid Parameters

- Determine grid spacing (price intervals)
- Set position sizes for each grid level
- Define stop-loss and take-profit conditions

### 3. Risk Management

- Control maximum position size
- Set overall stop-loss levels
- Monitor market conditions regularly

## Advantages and Risks

### Advantages

- Suitable for ranging markets
- Automated execution reduces emotion
- Can profit in both directions

### Risks

- May face large losses in trending markets
- Requires sufficient capital
- Grid parameters need regular adjustment

## Conclusion

Grid strategy is suitable for experienced traders who understand market patterns and have sufficient risk management capabilities.`,
  pt: `A estratégia de grade é uma estratégia de negociação quantitativa que coloca automaticamente ordens de compra e venda em diferentes níveis de preço para lucrar com a volatilidade do mercado.

## Princípios Fundamentais

### 1. Grade de Preços

- Definir uma série de níveis de preços de compra e venda
- Executar automaticamente ordens quando o preço atinge esses níveis
- Lucrar com flutuações de preço dentro de um intervalo

### 2. Média de Custo em Dólar

- Acumular posições gradualmente durante quedas de preço
- Reduzir o custo médio de manutenção
- Suavizar o impacto da volatilidade do mercado

### 3. Execução Automatizada

- Pré-definir parâmetros de negociação
- Sistema executa automaticamente as negociações
- Reduzir decisões de negociação emocionais

## Passos de Implementação

### 1. Selecionar Ativos Adequados

- Escolher ativos com liquidez suficiente
- Preferir ativos que flutuam dentro de intervalos
- Evitar ativos com fortes tendências unidirecionais

### 2. Definir Parâmetros da Grade

- Determinar espaçamento da grade (intervalos de preço)
- Definir tamanhos de posição para cada nível da grade
- Definir condições de stop-loss e take-profit

### 3. Gestão de Risco

- Controlar tamanho máximo da posição
- Definir níveis gerais de stop-loss
- Monitorar condições do mercado regularmente

## Vantagens e Riscos

### Vantagens

- Adequada para mercados laterais
- Execução automatizada reduz emoção
- Pode lucrar em ambas as direções

### Riscos

- Pode enfrentar grandes perdas em mercados de tendência
- Requer capital suficiente
- Parâmetros da grade precisam de ajuste regular

## Conclusão

A estratégia de grade é adequada para traders experientes que entendem padrões de mercado e têm capacidades suficientes de gestão de risco.`,
  'options/strategy/bull-call-spread': {
    en: `The bull call spread is a limited risk, limited reward options strategy used when you expect moderate price appreciation in the underlying stock.

## Strategy Overview

A bull call spread involves:
1. Buying a call option (lower strike price)
2. Selling a call option (higher strike price)
3. Both options have the same expiration date

This strategy reduces the cost of buying a call option while limiting both maximum profit and maximum loss.

## When to Use

### Market Outlook
- Moderately bullish on the underlying stock
- Expecting limited upside movement
- Want to reduce the cost of buying a call option

### Ideal Conditions
- High implied volatility (reduces net cost)
- Moderate time to expiration (30-60 days)
- Clear support and resistance levels

## Profit and Loss

### Maximum Profit
- (Higher strike - Lower strike) - Net premium paid
- Achieved when stock closes at or above higher strike at expiration

### Maximum Loss
- Net premium paid
- Occurs when stock closes at or below lower strike at expiration

### Breakeven
- Lower strike price + Net premium paid

## Example Trade

**Setup:**
- XYZ trading at $50
- Buy XYZ $50 call for $3.00
- Sell XYZ $55 call for $1.00
- Net cost: $2.00

**Outcomes:**
- Maximum profit: $3.00 (when XYZ ≥ $55)
- Maximum loss: $2.00 (when XYZ ≤ $50)
- Breakeven: $52.00

## Risk Management

### Time Decay
- Both options lose time value, but short call provides some protection
- Monitor position as expiration approaches

### Volatility Risk
- Decreasing volatility can hurt the position
- Consider closing before major events that might crush volatility

### Early Assignment
- Short call may be assigned early, especially near ex-dividend dates
- Monitor in-the-money short positions closely

## Advanced Considerations

### Rolling Strategies
- Roll up: Move both strikes higher when profitable
- Roll out: Extend expiration to give trade more time
- Convert to other spreads based on market conditions

### Strike Selection
- Narrow spreads: Lower cost, lower profit potential
- Wide spreads: Higher cost, higher profit potential
- Consider liquidity when selecting strikes

## Comparison with Long Call

**Advantages:**
- Lower cost of entry
- Reduced time decay impact
- Defined maximum risk

**Disadvantages:**
- Limited profit potential
- Complexity of managing two positions
- Bid-ask spread costs on both legs

## Conclusion

Bull call spreads are excellent for:
- Reducing the cost of bullish bets
- Trading in sideways to moderately bullish markets
- Learning spread trading concepts

Always ensure you understand both the profit potential and risks before entering any spread trade.`,
    ja: `ブルコールスプレッドは、原資産株式の適度な価格上昇を期待する際に使用される、限定リスク・限定利益のオプション戦略です。

## 戦略概要

ブルコールスプレッドには以下が含まれます：
1. コールオプションの購入（低い行使価格）
2. コールオプションの売却（高い行使価格）
3. 両オプションとも同じ満期日

この戦略により、コールオプション購入のコストを削減しつつ、最大利益と最大損失の両方を制限できます。

## 使用タイミング

### 市場見通し
- 原資産株式に対して適度に強気
- 限定的な上昇を期待
- コールオプション購入のコストを削減したい

### 理想的な条件
- 高いインプライドボラティリティ（純コストを削減）
- 適度な満期までの時間（30-60日）
- 明確なサポートとレジスタンスレベル

## 損益

### 最大利益
- （高い行使価格 - 低い行使価格）- 支払った純プレミアム
- 満期時に株価が高い行使価格以上で取引されている場合に達成

### 最大損失
- 支払った純プレミアム
- 満期時に株価が低い行使価格以下で取引されている場合に発生

### 損益分岐点
- 低い行使価格 + 支払った純プレミアム

## 取引例

**設定：**
- XYZ株が50ドルで取引
- XYZ 50ドルコールを3.00ドルで購入
- XYZ 55ドルコールを1.00ドルで売却
- 純コスト：2.00ドル

**結果：**
- 最大利益：3.00ドル（XYZ ≥ 55ドルの場合）
- 最大損失：2.00ドル（XYZ ≤ 50ドルの場合）
- 損益分岐点：52.00ドル

## リスク管理

### 時間減衰
- 両オプションとも時間価値を失うが、ショートコールが一定の保護を提供
- 満期が近づくにつれてポジションを監視

### ボラティリティリスク
- ボラティリティの低下がポジションに悪影響を与える可能性
- ボラティリティを圧縮する可能性のある重要なイベント前にクローズを検討

### 早期行使
- ショートコールは特に権利落ち日近くで早期行使される可能性
- イン・ザ・マネーのショートポジションを注意深く監視

## 高度な考慮事項

### ロール戦略
- ロールアップ：利益が出た際に両行使価格を上げる
- ロールアウト：取引により多くの時間を与えるために満期を延長
- 市況に基づいて他のスプレッドに転換

### 行使価格の選択
- 狭いスプレッド：低コスト、低利益ポテンシャル
- 広いスプレッド：高コスト、高利益ポテンシャル
- 行使価格選択時の流動性を考慮

## ロングコールとの比較

**利点：**
- エントリーコストが低い
- 時間減衰の影響が軽減
- 最大リスクが定義されている

**欠点：**
- 利益ポテンシャルが限定される
- 2つのポジション管理の複雑さ
- 両レッグでのビッド・アスクスプレッドコスト

## 結論

ブルコールスプレッドは以下に最適です：
- 強気ベットのコスト削減
- 横ばいから適度に強気な市場での取引
- スプレッド取引の概念学習

スプレッド取引を開始する前に、常に利益ポテンシャルとリスクの両方を理解することを確認してください。`,
    'zh-TW': `牛市看漲價差是一種有限風險、有限收益的期權策略，當您預期標的股票價格適度上漲時使用。

## 策略概覽

牛市看漲價差包括：
1. 買入看漲期權（較低執行價）
2. 賣出看漲期權（較高執行價）
3. 兩個期權具有相同到期日

此策略降低了買入看漲期權的成本，同時限制了最大利潤和最大損失。

## 使用時機

### 市場展望
- 對標的股票持適度看漲觀點
- 預期有限的上漲空間
- 希望降低買入看漲期權的成本

### 理想條件
- 高隱含波動率（降低淨成本）
- 適度的到期時間（30-60天）
- 明確的支撐和阻力水平

## 損益分析

### 最大利潤
- （較高執行價 - 較低執行價）- 支付的淨權利金
- 當股票在到期時收於較高執行價或以上時實現

### 最大損失
- 支付的淨權利金
- 當股票在到期時收於較低執行價或以下時發生

### 盈虧平衡
- 較低執行價 + 支付的淨權利金

## 交易示例

**設置：**
- XYZ交易於50美元
- 以3.00美元買入XYZ 50美元看漲期權
- 以1.00美元賣出XYZ 55美元看漲期權
- 淨成本：2.00美元

**結果：**
- 最大利潤：3.00美元（當XYZ ≥ 55美元時）
- 最大損失：2.00美元（當XYZ ≤ 50美元時）
- 盈虧平衡：52.00美元

## 風險管理

### 時間價值衰減
- 兩個期權都會失去時間價值，但空頭看漲提供一定保護
- 隨著到期日臨近監控倉位

### 波動率風險
- 波動率下降可能損害倉位
- 考慮在可能壓縮波動率的重大事件前平倉

### 早期指派
- 空頭看漲期權可能被早期指派，特別是在除息日附近
- 密切監控價內空頭倉位

## 高級考慮

### 轉倉策略
- 向上轉倉：盈利時將兩個執行價都提高
- 向外轉倉：延長到期日給交易更多時間
- 根據市場條件轉換為其他價差

### 執行價選擇
- 窄價差：成本較低，利潤潛力較低
- 寬價差：成本較高，利潤潛力較高
- 選擇執行價時考慮流動性

## 與單純買入看漲期權的比較

**優勢：**
- 進入成本較低
- 時間衰減影響降低
- 最大風險明確定義

**劣勢：**
- 利潤潛力有限
- 管理兩個倉位的複雜性
- 兩腿的買賣價差成本

## 結論

牛市看漲價差最適合：
- 降低看漲投注的成本
- 在橫向到適度看漲市場中交易
- 學習價差交易概念

在進入任何價差交易之前，請務必了解利潤潛力和風險。`,
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
  // 移除frontmatter（如果存在）
  let content = markdown;
  if (content.startsWith('---')) {
    const frontmatterEnd = content.indexOf('---', 3);
    if (frontmatterEnd !== -1) {
      content = content.slice(frontmatterEnd + 3).trim();
    }
  }

  const lines = content.split('\n');
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

  // 尝试直接匹配路径（包括带index的路径）
  let translatedContent = getTranslatedContent(articlePath, targetLanguage);

  // 如果直接匹配失败，尝试去掉index后缀
  if (!translatedContent && articlePath.endsWith('/index')) {
    const pathWithoutIndex = articlePath.replace('/index', '');
    translatedContent = getTranslatedContent(pathWithoutIndex, targetLanguage);
  }

  // 如果还是匹配失败，尝试使用link字段构建路径
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
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const Content = () => {
      return `<div class="error-content">内容渲染错误: ${errorMessage}</div>`;
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

  // 从翻译内容映射表中检查可用的语言
  const articlePath = post.slug;

  // 先尝试直接匹配
  if (translationContentMap[articlePath]) {
    Object.keys(translationContentMap[articlePath]).forEach((lang) => {
      languages.add(lang as SupportedLanguage);
    });
  }

  // 如果是index文件，也尝试去掉index后缀的路径
  if (articlePath.endsWith('/index')) {
    const pathWithoutIndex = articlePath.replace('/index', '');
    if (translationContentMap[pathWithoutIndex]) {
      Object.keys(translationContentMap[pathWithoutIndex]).forEach((lang) => {
        languages.add(lang as SupportedLanguage);
      });
    }
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
