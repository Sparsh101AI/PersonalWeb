import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import "./PlacePhotos.css";

// A strip of thumbnails for the selected place, with a full-screen viewer on click.
export function PlacePhotos({ place, photos }) {
  const [open, setOpen] = useState(null); // index of the photo in the viewer

  // close on Escape, arrow keys to move, lock page scroll while open
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, photos.length]);

  // reset when the place changes
  useEffect(() => setOpen(null), [place]);

  if (!photos || photos.length === 0) return null;
  const current = open === null ? null : photos[open];

  return (
    <div className="photos">
      <p className="photos__label">{photos.length} photos</p>
      <ul className="photos__strip">
        {photos.map((ph, i) => (
          <li key={ph.src}>
            <button className="photos__thumb" onClick={() => setOpen(i)} aria-label={`Open photo: ${ph.caption}`}>
              <img src={ph.thumb} alt={ph.caption} loading="lazy" />
              <span>{ph.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div className="viewer" role="dialog" aria-modal="true" aria-label={current.caption} onClick={() => setOpen(null)}>
          <button className="viewer__close" aria-label="Close" onClick={() => setOpen(null)}>
            <FiX />
          </button>
          <button
            className="viewer__nav viewer__nav--prev"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + photos.length) % photos.length); }}
          >
            <FiChevronLeft />
          </button>
          <figure className="viewer__figure" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.caption} />
            <figcaption>
              {current.caption} <span>{open + 1} / {photos.length}</span>
            </figcaption>
          </figure>
          <button
            className="viewer__nav viewer__nav--next"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % photos.length); }}
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
