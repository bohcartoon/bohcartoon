import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import { copy, detectLocale, type Copy, type Locale } from "./catalog";

const LocaleContext = createContext<{ locale: Locale; strings: Copy }>({
  locale: "it-IT",
  strings: copy["it-IT"],
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("it-IT");

  useEffect(() => {
    const nextLocale = detectLocale(
      navigator.languages,
      Intl.DateTimeFormat().resolvedOptions().timeZone,
    );
    setLocale(nextLocale);
    document.documentElement.lang = nextLocale;
    document.documentElement.dir = nextLocale === "ar-SA" ? "rtl" : "ltr";
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, strings: copy[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
