import { FiMapPin } from "react-icons/fi";
import { experience } from "../content";
import { CompanyLogo } from "./CompanyLogo";
import "./Experience.css";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section__head reveal">
          <p className="eyebrow">Experience</p>
          <h2 className="h2">Where I've shipped.</h2>
        </div>
        <ol className="xp">
          {experience.map((e) => (
            <li key={e.company} className="xp__item reveal">
              <div className="xp__meta">
                <span className="xp__dates">{e.dates}</span>
                <span className="xp__loc">
                  <FiMapPin aria-hidden="true" /> {e.location}
                </span>
              </div>
              <div className="card xp__card">
                <div className="xp__head">
                  <span className="xp__logo">
                    <CompanyLogo company={e.company} />
                  </span>
                  <div>
                    <h3 className="xp__title">
                      {e.company} <span className="xp__role">{e.role}</span>
                    </h3>
                    <p className="xp__team">{e.team}</p>
                  </div>
                </div>
                <ul className="xp__points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <ul className="tags">
                  {e.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
