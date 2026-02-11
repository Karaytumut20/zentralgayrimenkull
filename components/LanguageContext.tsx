"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "tr" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Varsayılan dil Türkçe
  const [lang, setLang] = useState<Language>("tr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Sayfa yüklendiğinde hafızadaki dili kontrol et
    const savedLang = localStorage.getItem("app-lang") as Language;
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === "tr" ? "en" : "tr";
    setLang(newLang);
    localStorage.setItem("app-lang", newLang); // Tercihi hafızaya kazı
  };

  return (
    // Sağlayıcı (Provider) her zaman render edilmeli ki çökme olmasın
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {/* Sunucu ile tarayıcı arasındaki anlık dil karmaşasını önlemek için mount olana kadar şeffaf tutuyoruz */}
      <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.2s ease-in-out" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
