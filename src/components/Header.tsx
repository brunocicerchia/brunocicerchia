interface HeaderProps {
  title?: string;
}

const Header = ({ title = "bruno@terminal:~$" }: HeaderProps) => {
  return (
    <header className="pixel-header">
      <div className="pixel-container">
        {/* Terminal-style window controls */}
        <div className="window-controls">
          <div className="control-buttons">
            <div className="btn btn-close"></div>
            <div className="btn btn-minimize"></div>
            <div className="btn btn-maximize"></div>
          </div>
          <div className="window-title">
            <span className="pixel-text">{title}</span>
          </div>
        </div>

        {/* Main header content */}
        <div className="header-content">
          <div className="logo-section">
            <div className="pixel-logo">
              <div className="logo-char">[</div>
              <div className="logo-char blink">_</div>
              <div className="logo-char">]</div>
            </div>
            <span className="system-info">Linux Terminal UI v2.0</span>
          </div>

          <div className="status-bar">
            <span className="status-item">
              <span className="status-label">USER:</span>
              <span className="status-value">bruno</span>
            </span>
            <span className="status-item">
              <span className="status-label">PWD:</span>
              <span className="status-value">~/projects</span>
            </span>
            <span className="status-item">
              <span className="status-label">TIME:</span>
              <span className="status-value">
                {new Date().toLocaleTimeString()}
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
