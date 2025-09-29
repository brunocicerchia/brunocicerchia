import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string | string[] => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key; // Devolver la clave si no se encuentra la traducción
      }
    }

    if (typeof value === 'string') return value;
    if (Array.isArray(value)) return value as string[];
    return key;
  };

  return { t, language };
};