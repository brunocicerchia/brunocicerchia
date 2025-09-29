import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { SectionKey } from "../data/translations";

interface NavItem {
  key: string;
  href: string;
  command?: string;
}

interface NavigationProps {
  activeSection: SectionKey;
  onSectionChange: (section: SectionKey) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems: NavItem[] = [
    { key: "home", href: "#home", command: "cd ~/" },
    { key: "about", href: "#about", command: "cat about.txt" },
    { key: "projects", href: "#projects", command: "ls projects/" },
    { key: "skills", href: "#skills", command: "grep -r skills" },
    { key: "contact", href: "#contact", command: "mail -s contact" },
  ];

  const handleNavClick = (item: NavItem) => {
    const sectionKey = item.key as SectionKey;
    onSectionChange(sectionKey);
    setIsMenuOpen(false);
  };

  return (
    <nav className="pixel-nav">
      <div className="pixel-container">
        {/* Mobile menu toggle */}
        <div className="mobile-menu-toggle">
          <button
            className="pixel-button menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="pixel-text">[MENU]</span>
          </button>
        </div>

        {/* Navigation squares */}
        <div className={`nav-menu ${isMenuOpen ? "mobile-open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.key} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${
                    activeSection === item.key ? "active" : ""
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  <span className="nav-bracket">[</span>
                  <span className="nav-label">
                    {t(`navigation.${item.key}`)}
                  </span>
                  <span className="nav-bracket">]</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
