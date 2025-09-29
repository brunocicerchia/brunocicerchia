import { useState } from "react";
import { SectionKey } from "../data/sectionContents";

interface NavItem {
  label: string;
  href: string;
  command?: string;
}

interface NavigationProps {
  activeSection: SectionKey;
  onSectionChange: (section: SectionKey) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "HOME", href: "#home", command: "cd ~/" },
    { label: "ABOUT", href: "#about", command: "cat about.txt" },
    { label: "PROJECTS", href: "#projects", command: "ls projects/" },
    { label: "SKILLS", href: "#skills", command: "grep -r skills" },
    { label: "CONTACT", href: "#contact", command: "mail -s contact" },
  ];

  const handleNavClick = (item: NavItem) => {
    const sectionKey = item.label.toLowerCase() as SectionKey;
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
              <li key={item.label} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${
                    activeSection === item.label.toLowerCase() ? "active" : ""
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  <span className="nav-bracket">[</span>
                  <span className="nav-label">{item.label}</span>
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
