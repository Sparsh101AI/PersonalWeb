import { useEffect, useState } from "react";
import { profile } from "../content";
import "./Nav.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "places", label: "Places" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="wrap nav__inner">
        <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
        </button>
        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--small" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
