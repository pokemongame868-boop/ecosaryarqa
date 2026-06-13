import { createContext, useContext, useMemo, useState } from 'react';
import { siteContent } from './data/tourismData';
import type { Language, SiteCopy } from './data/tourismData';

interface I18nContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  content: SiteCopy;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('ecosaryarqa-language');
    return saved === 'ru' || saved === 'kk' ? saved : 'kk';
  });

  const value = useMemo<I18nContextValue>(() => {
    window.localStorage.setItem('ecosaryarqa-language', language);
    document.documentElement.lang = language;

    return {
      language,
      setLanguage,
      content: siteContent[language],
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
