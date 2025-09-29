import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Intentar obtener el idioma guardado del localStorage
    const savedLanguage = localStorage.getItem(
      "portfolio-language"
    ) as Language;
    if (savedLanguage && ["es", "en"].includes(savedLanguage)) {
      return savedLanguage;
    }

    // Detectar idioma del navegador
    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith("es")) {
      return "es";
    }

    // Idioma por defecto
    return "es";
  });

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("portfolio-language", newLanguage);
  };

  useEffect(() => {
    // Guardar el idioma cada vez que cambie
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
