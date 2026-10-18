import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../content";
import "./Projects.css";

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section__head reveal">
          <p className="eyebrow">Projects</p>
          <h2 className="h2">Things I've built.</h2>
        </div>
        <div className="projects">
          {projects.map((p) => {
            const Tag = p.link ? "a" : "div";
            const linkProps = p.link ? { href: p.link, target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <Tag key={p.title} className={`card project reveal ${p.link ? "project--link" : ""}`} {...linkProps}>
                <div className="project__top">
                  <h3>{p.title}</h3>
                  {p.link && <FiArrowUpRight className="project__arrow" aria-hidden="true" />}
                </div>
                <p>{p.blurb}</p>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
