import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { places, regions, photosByPlace } from "../content";
import { Globe } from "./globe/Globe";
import { PlacePhotos } from "./PlacePhotos";
import "./Places.css";

export function Places() {
  const [focus, setFocus] = useState(null); // where the globe flies (hover or click)
  const [selected, setSelected] = useState(null); // whose photos are shown (click only)
  return (
    <section className="section" id="places">
      <div className="wrap places">
        <div className="places__globe reveal">
          <Globe places={places} focus={focus} />
          <p className="places__hint">Drag to spin</p>
        </div>
        <div className="places__info reveal">
          <p className="eyebrow">Places</p>
          <h2 className="h2">Where I've lived, worked and explored.</h2>
          <p className="lede">Pick a place to fly there. Ones with a camera have photos.</p>
          <div className="places__list">
            {regions.map((r) => (
              <div key={r} className="places__group">
                <h3>{r}</h3>
                <ul>
                  {places
                    .filter((p) => p.region === r)
                    .map((p) => (
                      <li key={p.id} className={selected === p.id ? "is-expanded" : ""}>
                        <button
                          className={`place ${focus === p.id ? "is-active" : ""} ${selected === p.id ? "is-selected" : ""}`}
                          onClick={() => {
                            setFocus(p.id);
                            // click again on the open place to hide its photos
                            setSelected(photosByPlace[p.id] && selected !== p.id ? p.id : null);
                          }}
                          onMouseEnter={() => setFocus(p.id)}
                        >
                          <span className="place__name">
                            {p.name}
                            {photosByPlace[p.id] && <FiCamera className="place__camera" aria-label="has photos" />}
                          </span>
                          <span className="place__note">{p.note}</span>
                        </button>
                        {selected === p.id && <PlacePhotos place={p} photos={photosByPlace[p.id]} />}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
