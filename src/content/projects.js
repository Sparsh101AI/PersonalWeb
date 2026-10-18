// Personal projects. `link: null` renders a card without a link.

export const projects = [
  {
    title: "Cost-Efficient AI Gateway",
    blurb:
      "A gateway that orchestrates LLM requests with model routing, rate limiting and automatic fallback, cutting inference costs by 35%. Includes an observability pipeline for latency, token use and failures. Code isn't public; happy to walk through the design.",
    tags: ["Python", "LLM routing", "Rate limiting", "Observability"],
    link: null,
  },
  {
    title: "WATStudy",
    blurb:
      "A study-group app for University of Waterloo students: find and book study rooms, join sessions by course, and get recommendations from your study history. React and Node on a GCP-hosted MySQL database with over a million rows, JWT auth, and query optimization with indexes.",
    tags: ["React", "Node.js", "MySQL", "GCP"],
    link: "https://github.com/Darsh04-14/WATStudy",
  },
  {
    title: "Golfmantle",
    blurb:
      "A golf spin on Semantle, built during an NLP research internship at the University of Alberta. A corpus is embedded with Word2Vec, reduced from 200 dimensions to 2 with t-SNE, and laid out as the course, so typing a word hits the ball toward where that word lives in meaning-space. Perlin-noise sand traps and dictionary hints included.",
    tags: ["Python", "Word2Vec", "t-SNE", "JavaScript"],
    link: "https://github.com/Sparsh101AI/NLP-Semantle-golf-game",
  },
  {
    title: "STREAMD",
    blurb:
      "A free anime tracker I contribute to on the side, on web and iOS. Add a show and it counts down to each new episode in your timezone, sorts what's ready to watch tonight, and shows the week's schedule. Ratings, community reviews and 50+ milestones sync between the site and the iPhone app. 15,000+ anime, 200+ airing right now.",
    tags: ["Node.js", "React", "iOS"],
    link: "https://www.streamdanime.io",
  },
];
