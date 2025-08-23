import { useState, useEffect, useMemo } from 'react';
import type { SupportedLanguage, Translations } from '../types/i18n';
import { DEFAULT_LANGUAGE, LANGUAGE_INFO } from '../constants/i18n';
import { getTranslations } from '../i18n/index';
import {
  getLanguageFromUrl,
  createTranslationFunction,
  detectBrowserLanguage,
  validateLanguage,
  switchLanguageInUrl,
} from '../lib/i18n';

/**
 * 获取当前页面语言的Hook
 */
export function useCurrentLanguage(): SupportedLanguage {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(() => {
    // 初始化时立即从URL中获取语言
    if (typeof window !== 'undefined') {
      return getLanguageFromUrl(window.location.href);
    }
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    const updateLanguage = () => {
      if (typeof window !== 'undefined') {
        const language = getLanguageFromUrl(window.location.href);
        setCurrentLanguage(language);
      }
    };

    // 立即更新一次
    updateLanguage();

    // 监听路由变化
    window.addEventListener('popstate', updateLanguage);

    // 监听页面加载完成
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', updateLanguage);
    }

    return () => {
      window.removeEventListener('popstate', updateLanguage);
      window.removeEventListener('DOMContentLoaded', updateLanguage);
    };
  }, []);

  return currentLanguage;
}

/**
 * 翻译Hook
 */
export function useTranslations(language?: SupportedLanguage) {
  const currentLang = useCurrentLanguage();
  const activeLang = language || currentLang;

  const translations = useMemo(() => {
    return getTranslations(activeLang);
  }, [activeLang]);

  const t = useMemo(() => {
    return createTranslationFunction(activeLang);
  }, [activeLang]);

  return {
    language: activeLang,
    translations,
    t,
  };
}

/**
 * 语言切换Hook
 */
export function useLanguageSwitcher() {
  const currentLanguage = useCurrentLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const switchLanguage = (targetLanguage: SupportedLanguage) => {
    if (typeof window === 'undefined') return;
    if (isLoading) return; // 防止重复点击

    setIsLoading(true);

    try {
      const currentUrl = window.location.pathname + window.location.search + window.location.hash;
      const newUrl = switchLanguageInUrl(currentUrl, targetLanguage);

      // 调试信息
      console.log('Language switch:', {
        current: currentLanguage,
        target: targetLanguage,
        currentUrl,
        newUrl,
      });

      if (newUrl !== currentUrl) {
        // 使用 pushState 更新 URL，然后手动触发页面重新加载
        window.history.pushState({}, '', newUrl);

        // 短暂延迟后重新加载页面以确保状态更新
        setTimeout(() => {
          window.location.reload();
        }, 50);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Language switch failed:', error);
      setIsLoading(false);
      // 如果切换失败，尝试简单地跳转到语言首页
      const fallbackUrl = targetLanguage === 'zh-CN' ? '/' : `/${targetLanguage}`;
      window.location.href = fallbackUrl;
    }
  };

  const availableLanguages = useMemo(() => {
    return Object.entries(LANGUAGE_INFO).map(([code, info]) => ({
      ...info,
      current: code === currentLanguage,
    }));
  }, [currentLanguage]);

  return {
    currentLanguage,
    availableLanguages,
    switchLanguage,
    isLoading,
  };
}

/**
 * 语言信息Hook
 */
export function useLanguageInfo(language?: SupportedLanguage) {
  const currentLang = useCurrentLanguage();
  const activeLang = language || currentLang;

  return useMemo(() => {
    return LANGUAGE_INFO[activeLang];
  }, [activeLang]);
}

/**
 * 浏览器语言检测Hook
 */
export function useBrowserLanguage(): SupportedLanguage {
  const [browserLanguage, setBrowserLanguage] = useState<SupportedLanguage>(DEFAULT_LANGUAGE);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const detected = detectBrowserLanguage();
      setBrowserLanguage(detected);
    }
  }, []);

  return browserLanguage;
}

/**
 * 语言持久化Hook（可选：将用户语言偏好保存到 localStorage）
 */
export function useLanguagePreference() {
  const [preferredLanguage, setPreferredLanguage] = useState<SupportedLanguage | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferred-language');
      if (saved && validateLanguage(saved)) {
        setPreferredLanguage(saved as SupportedLanguage);
      }
    }
  }, []);

  const setLanguagePreference = (language: SupportedLanguage) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', language);
      setPreferredLanguage(language);
    }
  };

  const clearLanguagePreference = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('preferred-language');
      setPreferredLanguage(null);
    }
  };

  return {
    preferredLanguage,
    setLanguagePreference,
    clearLanguagePreference,
  };
}

/**
 * 格式化数字或日期的Hook（根据语言环境）
 */
export function useLocaleFormatter(language?: SupportedLanguage) {
  const currentLang = useCurrentLanguage();
  const activeLang = language || currentLang;

  const formatNumber = (number: number, options?: Intl.NumberFormatOptions) => {
    return new Intl.NumberFormat(activeLang.replace('-', '_'), options).format(number);
  };

  const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) => {
    return new Intl.DateTimeFormat(activeLang.replace('-', '_'), options).format(date);
  };

  const formatRelativeTime = (value: number, unit: Intl.RelativeTimeFormatUnit) => {
    return new Intl.RelativeTimeFormat(activeLang.replace('-', '_')).format(value, unit);
  };

  return {
    formatNumber,
    formatDate,
    formatRelativeTime,
  };
}
