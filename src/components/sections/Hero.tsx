import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          {/* Eyebrow */}
          <div className="hero__eyebrow">
            <span className="hero__status" />
            SOFTWARE ENGINEER
          </div>

          {/* Main heading */}
          <h1 className="hero__title">
            Building systems
            <br />
            <span>that actually work.</span>
          </h1>

          {/* Description */}
          <p className="hero__description">
            Backend-focused engineer building reliable APIs, event-driven
            systems, and production services.
          </p>

          {/* Actions */}
          <div className="hero__actions">
            <a href="#projects" className="hero__button hero__button--primary">
              View my work
              <span>↓</span>
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--secondary"
            >
              GitHub
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* System card */}
        <div className="hero__visual">
          <div className="system-card">
            <div className="system-card__header">
              <span>SYSTEM</span>

              <div className="system-card__status">
                <span />
                ONLINE
              </div>
            </div>

            <div className="system-card__body">
              <div className="system-card__line">
                <span>backend</span>
                <span className="check">✓</span>
              </div>

              <div className="system-card__line">
                <span>frontend</span>
                <span className="check">✓</span>
              </div>

              <div className="system-card__line">
                <span>event_processing</span>
                <span className="check">✓</span>
              </div>

              <div className="system-card__line">
                <span>api</span>
                <span className="check">✓</span>
              </div>

              <div className="system-card__line">
                <span>database</span>
                <span className="check">✓</span>
              </div>

              <div className="system-card__line">
                <span>reliability</span>
                <span className="check">✓</span>
              </div>
            </div>

            <div className="system-card__command">
              <span>&gt;</span>
              <span>build --production</span>
              <span className="cursor" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero__scroll">
        <span>SCROLL TO EXPLORE</span>
        <span>↓</span>
      </a>
    </section>
  );
}
