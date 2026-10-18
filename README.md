# patelsparsh.com

Personal site of Sparsh Patel. A single-page React app (Create React App) deployed on Netlify.

## Run it locally

```sh
npm install
npm start        # http://localhost:3000
npm run build    # production build in ./build
```

On a Mac you can also double-click `start-local.command` (kept out of git) to open the project in VS Code and start the dev server.

## Editing the content

Everything written on the page lives in `src/content/`. Change a file there and the site updates; no component edits needed.

| File | What it controls |
| --- | --- |
| `content/profile.js` | Name, pitch, about text, "now" rows, headline stats, email and social links |
| `content/experience.js` | Internship timeline and the short "Earlier" list |
| `content/projects.js` | Project cards (`link: null` renders a card without a link) |
| `content/skills.js` | Toolkit tags and awards |
| `content/places.js` | Pins on the globe (`home` is where the light trails start) |

## How the code is organised

```
src/
├── index.js                 entry point, loads global styles
├── App.js                   page composition (section order)
├── content/                 all editable text and data
├── hooks/useReveal.js       fade-in-on-scroll
├── styles/
│   ├── tokens.css           colours, fonts, radii (sampled from the wallpaper)
│   └── base.css             reset + shared pieces: .wrap .btn .card .tags .eyebrow
├── components/
│   ├── Nav, Hero, About, Experience, Projects, Places, Skills, Contact
│   │                        one section each, with a matching .css beside it
│   ├── scene/               hero wallpaper with twinkling stars and the glowing streetlamp
│   │   ├── Scene.js / .css
│   │   └── stars.js         star positions detected from the image (% of the wallpaper)
│   └── globe/               dotted 3D globe (plain canvas, no 3D library)
│       ├── Globe.js / .css
│       ├── geo.js           lat/lon → vector, great-circle arcs, projection
│       └── landDots.js      land sample with Canada / USA / Japan flagged (generated)
└── assets/img/street-hero.jpg
```

`landDots.js` was generated from Natural Earth data (`world-atlas` 110m) using a Fibonacci sphere sample with ~5,800 points; regenerate it rather than editing by hand if you want to highlight different countries.

## Deployment

Netlify builds from this repo. Build command `npm run build`, publish directory `build`.
