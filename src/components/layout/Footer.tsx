import "./Footer.css";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Email",
    href: "mailto:your@email.com",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main footer */}
        <div className="footer__main">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              MARK<span>.</span>
            </a>

            <p>Software Engineer building reliable systems.</p>
          </div>

          <div className="footer__connect">
            <span className="footer__label">LET'S CONNECT</span>

            <div className="footer__links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={
                    link.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                >
                  {link.name}
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Mark Luigie Libres</span>

          <span>Built with React + TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
