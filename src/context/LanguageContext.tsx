import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Language = 'es' | 'en'

interface LanguageContextProps {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: 'es',
  setLang: () => {}
})

export function useLanguage() {
  return useContext(LanguageContext)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('es')

  useEffect(() => {
    const stored = localStorage.getItem('uide-lang') as Language | null
    if (stored) setLangState(stored)
  }, [])

  const setLang = (l: Language) => {
    setLangState(l)
    localStorage.setItem('uide-lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
} 