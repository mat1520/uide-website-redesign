import es from './es'
import en from './en'
import { useLanguage } from '../context/LanguageContext'

const translations = { es, en }

export function useT() {
  const { lang } = useLanguage()
  return translations[lang]
} 