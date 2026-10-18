import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../content";
import "./Contact.css";

export function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact__glow" />
      <div className="wrap contact__inner reveal">
        <p className="eyebrow eyebrow--lamp">Contact</p>
        <h2 className="h2">Let's build something.</h2>
        <div className="actions">
          <a className="btn" href={`mailto:${profile.email}`}>
            <FiMail /> {profile.email}
          </a>
          <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin /> LinkedIn
          </a>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
            <FiGithub /> GitHub
          </a>
        </div>
        <p className="fine">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
