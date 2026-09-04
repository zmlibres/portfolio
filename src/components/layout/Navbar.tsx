import { useState } from "react";
import "./Navbar.css";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <nav className="navbar__container">
          {/* Logo */}
          <a href="#" className="navbar__logo">
            MARK<span>.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="navbar__links">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="navbar__link">
                {item.name}
              </a>
            ))}

            <a href="#contact" className="navbar__contact">
              Contact
              <span>↗</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar__menu"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="navbar__mobile">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact ↗
            </a>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
