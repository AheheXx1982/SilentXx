import type { SupportedLanguage, Translations } from '../types/i18n';
import { DEFAULT_LANGUAGE } from '@constants/i18n';

// 导入所有翻译文件
import zhCN from './zh-CN';
import en from './en';
import ko from './ko';
import ja from './ja';
import es from './es';
import pt from './pt';
import de from './de';
import fr from './fr';
import ru from './ru';
import ar from './ar';
import zhTW from './zh-TW';
import hi from './hi'; // 导入印地语翻译

// 翻译映射表
export const translations: Record<SupportedLanguage, Translations> = {
  'zh-CN': zhCN,
  en: en,
  ko: ko,
  ja: ja,
  es: es,
  pt: pt,
  de: de,
  fr: fr,
  ru: ru,
  ar: ar,
  'zh-TW': zhTW,
  hi: hi, // 添加印地语翻译
};

// 获取指定语言的翻译
export function getTranslations(language: SupportedLanguage = DEFAULT_LANGUAGE): Translations {
  return translations[language] || translations[DEFAULT_LANGUAGE];
}

// 导出所有翻译
export {
  zhCN,
  en,
  ko,
  ja,
  es,
  pt,
  de,
  fr,
  ru,
  ar,
  zhTW,
  hi, // 导出印地语翻译
};

export default translations;
