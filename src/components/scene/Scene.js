import { useEffect, useRef, useState } from "react";
import hero from "../../assets/img/street-hero.jpg";
import { STARS } from "./stars";
import "./Scene.css";

// Natural size of the wallpaper. Overlays are positioned in % of it so the
// twinkling stars and the lamp glow stay pinned to the artwork at any screen size.
const IMAGE_W = 2400;
const IMAGE_H = 1313;

// Deterministic pseudo-random so stars keep the same timing between renders.
const rand = (i, salt) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

export function Scene() {
  const ref = useRef(null);
  const [box, setBox] = useState(null);

  // Emulate `background-size: cover` so we know exactly where the image sits.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const s = Math.max(w / IMAGE_W, h / IMAGE_H);
      const dw = IMAGE_W * s;
      const dh = IMAGE_H * s;
      const fx = w < 720 ? 0.6 : 0.5; // keep the lamp in view on phones
      setBox({ left: (w - dw) * fx, top: (h - dh) * 0.3, width: dw, height: dh });
    };
    fit();
    if ("ResizeObserver" in window) {
      const ro = new ResizeObserver(fit);
      ro.observe(el);
      return () => ro.disconnect();
    }
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div className="scene" ref={ref} aria-hidden="true">
      {box && (
        <div className="scene__art" style={box}>
          <img src={hero} alt="" className="scene__img" />
          <div className="sky">
            {STARS.map(([x, y], i) => {
              const size = 1.6 + rand(i, 1) * 2.4;
              return (
                <span
                  key={i}
                  className={`star ${i % 7 === 0 ? "star--sparkle" : ""}`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: size,
                    height: size,
                    animationDuration: `${2.4 + rand(i, 2) * 4}s`,
                    animationDelay: `${-rand(i, 3) * 6}s`,
                  }}
                />
              );
            })}
            <span className="shooting" />
          </div>
          <div className="lamp">
            <span className="lamp__cone" />
            <span className="lamp__pool" />
            <span className="lamp__halo" />
            <span className="lamp__bulb" />
          </div>
        </div>
      )}
    </div>
  );
}
