import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Terminal from "./components/Terminal";
import { SectionKey } from "./data/sectionContents";

function App() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  const handleSectionChange = (section: SectionKey) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen">
      <Navigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <main className="pixel-container py-8">
        <Terminal activeSection={activeSection} />
      </main>
    </div>
  );
}

export default App;
