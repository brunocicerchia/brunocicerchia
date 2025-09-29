import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Terminal from "./components/Terminal";
import FloatingActions from "./components/FloatingActions";
import { LanguageProvider } from "./contexts/LanguageContext";
import { SectionKey } from "./data/translations";

function App() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  const handleSectionChange = (section: SectionKey) => {
    setActiveSection(section);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <FloatingActions />
        <Navigation
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />

        <main className="pixel-container py-8">
          <Terminal activeSection={activeSection} />
        </main>
      </div>
    </LanguageProvider>
  );
}
export default App;
