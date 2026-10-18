import { profile, now, stats } from "../content";
import photo from "../assets/img/sparsh-nara.jpg";
import "./About.css";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <figure className="about__photo reveal">
          <img src={photo} alt={profile.photo.alt} loading="lazy" />
          <figcaption>{profile.photo.caption}</figcaption>
        </figure>
        <div className="about__text reveal">
          <p className="eyebrow">About</p>
          <h2 className="h2">{profile.aboutHeading}</h2>
          <p className="lede">{profile.about}</p>
          <dl className="now">
            {now.map((n) => (
              <div key={n.label} className="now__row">
                <dt>{n.label}</dt>
                <dd>{n.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ul className="stats reveal">
          {stats.map((s) => (
            <li key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
