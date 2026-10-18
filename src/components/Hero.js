import { FiGithub, FiLinkedin } from "react-icons/fi";
import { profile, experience } from "../content";
import { Scene } from "./scene/Scene";
import { CompanyLogo } from "./CompanyLogo";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Scene />
      <div className="hero__scrim" />
      <div className="wrap hero__content">
        <p className="eyebrow eyebrow--lamp">Hi, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">{profile.school}</p>
        <p className="hero__pitch">{profile.pitch}</p>
        <div className="actions">
          <a className="btn" href="#experience">
            See my work
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
            <FiGithub /> GitHub
          </a>
          <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin /> LinkedIn
          </a>
        </div>
        <ul className="hero__logos" aria-label="Where I've worked">
          {experience
            .filter((e) => e.role !== "Research Intern")
            .map((e) => (
              <li key={e.company}>
                <CompanyLogo company={e.company} /> {e.company}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
