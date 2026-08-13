import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/resumeData";
import "./Navbar.css";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="nav-pill glass">
        <a href="#home" className="nav-logo" onClick={(e) => handleClick(e, "#home")}>
          {profile.name}
        </a>

        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleClick(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn btn-gradient btn-sm nav-cta"
          onClick={(e) => handleClick(e, "#contact")}
        >
          Let's Connect
        </a>

        <button
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="nav-mobile glass">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleClick(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn-gradient btn-sm"
            onClick={(e) => handleClick(e, "#contact")}
          >
            Let's Connect
          </a>
        </div>
      )}
    </header>
  );
}
