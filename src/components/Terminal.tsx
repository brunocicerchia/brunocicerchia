import { useTranslation } from "../hooks/useTranslation";
import { SectionKey } from "../data/translations";

interface TerminalProps {
  activeSection: SectionKey;
}

const Terminal = ({ activeSection }: TerminalProps) => {
  const { t } = useTranslation();

  return (
    <div className="terminal-content">
      <div className="command-output">
        <div className="output-line">
          <span className="prompt">{t("terminal.prompt")}</span>
          <span className="command">
            {t(`sections.${activeSection}.command`)}
          </span>
        </div>
        <div className="output-content">
          <h1 className="pixel-title">
            <span className="title-bracket">[</span>
            {t(`sections.${activeSection}.title`)}
            <span className="title-bracket">]</span>
          </h1>

          {/* Computer ASCII Art para home */}
          {activeSection === "home" &&
            t(`sections.${activeSection}.computerArt`) && (
              <div className="ascii-art">
                <pre className="pixel-text">
                  {t(`sections.${activeSection}.computerArt`)}
                </pre>
              </div>
            )}

          {/* ASCII Art para otras secciones */}
          {activeSection !== "home" &&
            t(`sections.${activeSection}.asciiArt`) && (
              <div className="ascii-art">
                <pre className="pixel-text">
                  {t(`sections.${activeSection}.asciiArt`)}
                </pre>
              </div>
            )}

          {/* System Art solo para home */}
          {activeSection === "home" &&
            t(`sections.${activeSection}.systemArt`) && (
              <div className="ascii-art">
                <pre className="pixel-text">
                  {t(`sections.${activeSection}.systemArt`)}
                </pre>
              </div>
            )}

          <div className="welcome-message">
            {(() => {
              const content = t(`sections.${activeSection}.content`);
              const contentArray = Array.isArray(content) ? content : [];
              return contentArray.map((line: string, index: number) => (
                <p key={index} className="pixel-text">
                  <span className="text-accent">&gt;</span> {line}
                </p>
              ));
            })()}
          </div>

          <div className="command-prompt">
            <span className="prompt">{t("terminal.prompt")}</span>
            <span className="cursor blink">█</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
