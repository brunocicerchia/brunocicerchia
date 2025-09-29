import { sectionContents, SectionKey } from "../data/sectionContents";

interface TerminalProps {
  activeSection: SectionKey;
}

const Terminal = ({ activeSection }: TerminalProps) => {
  const content = sectionContents[activeSection];

  return (
    <div className="terminal-content">
      <div className="command-output">
        <div className="output-line">
          <span className="prompt">bruno@portfolio:~$</span>
          <span className="command">{content.command}</span>
        </div>
        <div className="output-content">
          <h1 className="pixel-title">
            <span className="title-bracket">[</span>
            {content.title}
            <span className="title-bracket">]</span>
          </h1>

          {content.asciiArt && (
            <div className="ascii-art">
              <pre className="pixel-text">{content.asciiArt}</pre>
            </div>
          )}

          {content.systemArt && (
            <div className="ascii-art">
              <pre className="pixel-text">{content.systemArt}</pre>
            </div>
          )}

          <div className="welcome-message">
            {content.content.map((line, index) => (
              <p key={index} className="pixel-text">
                <span className="text-accent">&gt;</span> {line}
              </p>
            ))}
          </div>

          <div className="command-prompt">
            <span className="prompt">bruno@portfolio:~$</span>
            <span className="cursor blink">█</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
