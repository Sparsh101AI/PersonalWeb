import { skills, awards } from "../content";
import "./Skills.css";

export function Skills() {
  return (
    <section className="section section--tight">
      <div className="wrap skills-grid">
        <div className="reveal">
          <p className="eyebrow">Toolkit</p>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skills__row">
                <h3>{s.group}</h3>
                <ul className="tags tags--plain">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow">Recognition</p>
          <ul className="awards">
            {awards.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
