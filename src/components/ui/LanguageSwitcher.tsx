import React, { useState, useRef, useEffect } from 'react';
import { useTranslations, useCurrentLanguage } from '@hooks/i18n';
import { LANGUAGE_INFO } from '../../constants/i18n';
import type { SupportedLanguage } from '../../types/i18n';

interface LanguageSwitcherProps {
  className?: string;
  showText?: boolean;
}

export default function LanguageSwitcher({ className = '', showText = false }: LanguageSwitcherProps) {
  const { t } = useTranslations();
  const currentLanguage = useCurrentLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 简化的事件处理
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // 获取可用语言列表
  const availableLanguages = Object.entries(LANGUAGE_INFO).map(([code, info]) => ({
    ...info,
    current: code === currentLanguage,
  }));

  const currentLangInfo = availableLanguages.find((lang) => lang.current);

  // 直接的语言切换函数
  const handleLanguageChange = (langCode: SupportedLanguage) => {
    console.log('Simple language switch to:', langCode);
    setIsOpen(false);

    // 构建目标URL
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;

    // 确保语言代码在URL中使用正确的格式（小写）
    const normalizedLangCode = langCode === 'zh-TW' ? 'zh-tw' : langCode;

    let targetUrl;
    if (langCode === 'zh-CN') {
      // 默认语言，移除语言前缀
      if (
        currentPath.startsWith('/en') ||
        currentPath.startsWith('/ko') ||
        currentPath.startsWith('/ja') ||
        currentPath.startsWith('/es') ||
        currentPath.startsWith('/pt') ||
        currentPath.startsWith('/de') ||
        currentPath.startsWith('/fr') ||
        currentPath.startsWith('/ru') ||
        currentPath.startsWith('/ar') ||
        currentPath.startsWith('/zh-tw')
      ) {
        const pathWithoutLang = currentPath.replace(/^\/[^\/]+/, '') || '/';
        targetUrl = pathWithoutLang + currentSearch + currentHash;
      } else {
        targetUrl = currentPath + currentSearch + currentHash;
      }
    } else {
      // 其他语言，添加语言前缀
      if (
        currentPath.startsWith('/en') ||
        currentPath.startsWith('/ko') ||
        currentPath.startsWith('/ja') ||
        currentPath.startsWith('/es') ||
        currentPath.startsWith('/pt') ||
        currentPath.startsWith('/de') ||
        currentPath.startsWith('/fr') ||
        currentPath.startsWith('/ru') ||
        currentPath.startsWith('/ar') ||
        currentPath.startsWith('/zh-tw')
      ) {
        const pathWithoutLang = currentPath.replace(/^\/[^\/]+/, '') || '/';
        targetUrl = `/${normalizedLangCode}${pathWithoutLang}` + currentSearch + currentHash;
      } else {
        targetUrl = `/${normalizedLangCode}${currentPath}` + currentSearch + currentHash;
      }
    }

    console.log('Navigating to:', targetUrl);
    window.location.href = targetUrl;
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label={t('common.switchLanguage')}
        type="button"
      >
        <span className="text-lg">{currentLangInfo?.flag || '🌍'}</span>
        {showText && <span className="hidden sm:inline">{currentLangInfo?.nativeName}</span>}
        <span className="text-sm">▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 z-50 mt-1 min-w-[280px] rounded-md border border-gray-200 bg-white py-2 shadow-lg dark:border-gray-700 dark:bg-gray-900">
          <div className="grid grid-cols-2 gap-1">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleLanguageChange(lang.code);
                }}
                className={`flex w-full items-center gap-3 px-4 py-2 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${
                  lang.current ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20' : ''
                }`}
                dir="ltr"
                type="button"
              >
                <span className="text-lg">{lang.flag}</span>
                <div className="flex flex-col">
                  <span className="font-medium">{lang.nativeName}</span>
                  <span className="text-xs text-gray-500">{lang.name}</span>
                </div>
                {lang.current && <span className="ml-auto text-blue-600">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
