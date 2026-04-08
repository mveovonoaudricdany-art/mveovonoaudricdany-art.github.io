"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, Language } from "../lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("FR");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang === "FR" || savedLang === "EN") {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (path: string): string => {
    // On SSR, we always render FR to prevent layout shift / hydration mismatches
    const activeLang = mounted ? lang : "FR";
    const currentDict = translations[activeLang]; 

    const keys = path.split(".");
    let value: any = currentDict;
    
    for (const key of keys) {
      if (value[key] === undefined) {
        return path;
      }
      value = value[key];
    }
    
    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ lang: mounted ? lang : "FR", setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
