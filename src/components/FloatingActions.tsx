import { useLanguage, Language } from "../contexts/LanguageContext";

const FloatingActions = () => {
  const { language, setLanguage } = useLanguage();

  const languages: Language[] = ["es", "en"];
  const languageLabels = {
    es: "ES",
    en: "EN",
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const handleGitHubStar = () => {
    window.open("https://github.com/brunocicerchia/brunocicerchia", "_blank");
  };

  return (
    <div className="floating-actions">
      {/* GitHub Star Button */}
      <button className="github-star-btn" onClick={handleGitHubStar}>
        <span className="github-icon">★</span>
        <span>STAR</span>
      </button>

      {/* Language Selector */}
      <div className="floating-language-selector">
        {languages.map((lang) => (
          <button
            key={lang}
            className={`language-btn ${language === lang ? "active" : ""}`}
            onClick={() => handleLanguageChange(lang)}
          >
            <span className="nav-bracket">[</span>
            <span className="nav-label">{languageLabels[lang]}</span>
            <span className="nav-bracket">]</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloatingActions;
