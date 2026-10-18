import { FaTv, FaWalking, FaFutbol } from "react-icons/fa";
import { hobbies } from "../content";
import "./Hobbies.css";

const ICONS = { anime: FaTv, walk: FaWalking, soccer: FaFutbol };

export function Hobbies() {
  return (
    <section className="section section--tight" id="hobbies">
      <div className="wrap">
        <div className="section__head reveal">
          <p className="eyebrow">Off the clock</p>
          <h2 className="h2">When I'm not shipping.</h2>
        </div>
        <ul className="hobbies">
          {hobbies.map((h) => {
            const Icon = ICONS[h.icon];
            return (
              <li key={h.title} className="card hobby reveal">
                <span className="hobby__icon" aria-hidden="true">{Icon && <Icon />}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
