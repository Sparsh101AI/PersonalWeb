// A tiny rule-based assistant. No API, no backend: every answer is built from src/content/,
// so it stays in sync with the rest of the site automatically.

import { profile, now, stats, experience, projects, skills, awards, places, regions, hobbies } from "../../content";

const first = profile.name.split(" ")[0];
const joinList = (items) => items.join(", ").replace(/, ([^,]*)$/, " and $1");
const companies = experience.filter((e) => e.role !== "Research Intern").map((e) => e.company);
const interests = () => {
  const i = now.find((n) => n.label === "Interests");
  return i ? i.text.charAt(0).toLowerCase() + i.text.slice(1) : "systems and infrastructure work";
};

// The pitch is written in first person on the page; the bot speaks about him.
const thirdPerson = (t) => t.replace(/^I build/, "He builds").replace(/^I /, "He ").replace(/\bI shipped\b/g, "he shipped").replace(/\bmy\b/g, "his");

const companyAnswer = (e) =>
  [`${e.company} — ${e.role}, ${e.dates}, ${e.location}. Team: ${e.team}.`, ...e.points.slice(0, 2).map((p) => `• ${p}`)].join("\n");

const projectAnswer = (p) => `${p.title}: ${p.blurb}${p.link ? "\nThere's a link on the card in the Projects section." : ""}`;

// Extra ways people refer to each project, beyond words in its title.
const PROJECT_ALIASES = {
  "Cost-Efficient AI Gateway": ["gateway", "llm routing", "inference"],
  WATStudy: ["watstudy", "wat study", "study group", "study room", "study rooms"],
  Golfmantle: ["golfmantle", "semantle", "golf", "word game", "word2vec"],
  STREAMD: ["streamd", "stream d", "anime tracker", "anime site", "anime project", "anime app"],
};

export const SUGGESTIONS = ["What does he do?", "Where has he worked?", "What has he built?", "How do I contact him?"];

const INTENTS = [
  {
    id: "greeting",
    keys: ["hi", "hello", "hey", "yo", "howdy", "good morning", "good evening"],
    weight: 0.5,
    answer: () => `Hi! I'm a small helper built into ${first}'s site. Ask me what he does, where he's worked, what he's built, or how to reach him.`,
  },
  {
    id: "thanks",
    keys: ["thanks", "thank you", "thx", "cheers", "appreciate"],
    answer: () => "Happy to help! Anything else you'd like to know?",
  },
  {
    id: "who",
    keys: ["what do you do", "what does he do", "who are you", "who is", "about", "tell me about", "introduce", "summary", "overview", "background", "yourself", "himself"],
    answer: () => `${profile.name} is a ${profile.role.toLowerCase()} from ${profile.hometown}, studying ${profile.school.replace("@", "at the")}. ${thirdPerson(profile.pitch)}`,
  },
  {
    id: "experience",
    keys: ["work", "worked", "experience", "internship", "internships", "intern", "job", "jobs", "career", "company", "companies", "employer"],
    answer: () =>
      [
        `${first} has done ${companies.length} software engineering internships, plus a research internship:`,
        ...experience.map((e) => `• ${e.company} — ${e.team} (${e.dates})`),
        "Ask about any of them by name for details.",
      ].join("\n"),
  },
  {
    id: "projects",
    keys: ["project", "projects", "built", "build", "building", "made", "portfolio", "side project", "github"],
    answer: () => [`Highlighted projects:`, ...projects.map((p) => `• ${p.title} — ${p.blurb.split(". ")[0]}.`), "Ask about one by name for more."].join("\n"),
  },
  {
    id: "skills",
    keys: ["skill", "skills", "language", "languages", "stack", "tech", "technologies", "tools", "framework", "good at", "python", "golang", "typescript", "kafka", "docker", "kubernetes", "react", "sql", ["know", 0.6]],
    answer: () => skills.map((s) => `${s.group}: ${s.items.join(", ")}`).join("\n"),
  },
  {
    id: "education",
    keys: ["school", "university", "college", "waterloo", "study", "studying", "studies", "degree", "major", "student", "graduate", "graduation", "education", "program"],
    answer: () => `${first} is studying ${profile.school.replace("@", "at the")}, one of Canada's best-known co-op engineering programs. The co-op terms are where the internships come from.`,
  },
  {
    id: "places",
    keys: [["where", 0.4], "live", "lives", "lived", "location", "located", "based", "city", "country", "countries", "travel", "travelled", "traveled", "been to", "globe", "map"],
    answer: () =>
      [
        `${first} is based in ${places.find((p) => p.home)?.name || "Waterloo, Ontario"}. Places so far, across ${joinList(regions)}:`,
        ...places.map((p) => `• ${p.name} — ${p.note}`),
      ].join("\n"),
  },
  {
    id: "hobbies",
    keys: ["hobby", "hobbies", "fun", "free time", "spare time", "outside work", "outside of work", "relax", "anime", "soccer", "football", "walk", "walks", "walking", "weekend", "weekends", "personality", "person"],
    answer: () => [`Off the clock, ${first} is into:`, ...hobbies.map((h) => `• ${h.title} — ${h.text}`)].join("\n"),
  },
  {
    id: "hometown",
    keys: [["from", 0.6], "hometown", "home town", "grew up", "grow up", "born", "raised", "alberta", "fort mcmurray", "canadian", "nationality", "originally"],
    answer: () => `${first} is from ${profile.hometown} and has spent most of his life in Canada. He's now at the University of Waterloo for software engineering.`,
  },
  {
    id: "contact",
    keys: ["contact", "email", "e-mail", "reach", "linkedin", "connect", "touch", "message", "talk", "chat with"],
    answer: () => `The easiest way is email: ${profile.email}. He's also on LinkedIn and GitHub (links in the Contact section at the bottom).`,
  },
  {
    id: "opportunities",
    keys: [["open to", 3], ["looking for", 2], "available", "availability", "opportunity", "opportunities", "recruit", "recruiting", "apply", "applying"],
    answer: () => `He's open to software engineering internships, ideally on teams working on ${interests()}. Best way to reach him is ${profile.email}.`,
  },
  {
    id: "pitch",
    keys: [["why", 0.8], ["hire", 2], "hiring", "strength", "strengths", "stand out", "good fit", "fit", "unique", "special", "sell", "convince", "case for"],
    answer: () =>
      [
        `The short case: ${companies.length} engineering internships at ${joinList(companies)}, each with real production impact.`,
        ...stats.slice(1).map((s) => `• ${s.value} ${thirdPerson(s.label)}`),
        `He ramps up fast on new codebases, ships work people actually use, and is most at home on ${interests()}.`,
      ].join("\n"),
  },
  {
    id: "resume",
    keys: ["resume", "cv", "pdf", "download"],
    answer: () => `There's no PDF on the site; the Experience section above is the up-to-date version. Email ${profile.email} and he'll send a résumé over.`,
  },
  {
    id: "awards",
    keys: ["award", "awards", "achievement", "achievements", "won", "win", "recognition", "scholarship", "competition", "robotics", "vex", "shad"],
    answer: () => ["Recognition:", ...awards.map((a) => `• ${a}`)].join("\n"),
  },
  {
    id: "interests",
    keys: ["interest", "interests", "interested", "passion", "passionate", "enjoy", "want", "goal", "goals", "future", "next", "ai", "security", "distributed", "product", ["like", 0.5]],
    answer: () => `${first} is most interested in ${interests()}. He's happiest on teams shipping things real people use.`,
  },
  {
    id: "stats",
    keys: ["impact", "numbers", "scale", "stats", "metrics", "biggest", "proud", "accomplish"],
    answer: () => ["A few numbers:", ...stats.map((s) => `• ${s.value} ${thirdPerson(s.label)}`)].join("\n"),
  },
  {
    id: "bot",
    keys: ["are you", "a bot", "an ai", "chatgpt", "real", "human", "how do you work", "what are you"],
    answer: () => `I'm a very small rule-based helper that lives in this page, not a large language model. I only know what's on this site about ${first}, and I answer from that.`,
  },
];

const normalize = (s) =>
  ` ${s.toLowerCase().replace(/é/g, "e").replace(/[^a-z0-9+#\s]/g, " ").replace(/\s+/g, " ").trim()} `;
const has = (text, key) => text.includes(` ${key} `);

export function answer(raw) {
  const text = normalize(raw);
  if (text.trim() === "") return { text: "Ask me anything about " + first + ".", suggestions: SUGGESTIONS };

  // Specific company or project mentioned? Those win outright.
  const hitCompanies = experience.filter((e) => has(text, e.company.toLowerCase()));
  if (hitCompanies.length) return { text: hitCompanies.map(companyAnswer).join("\n\n") };

  const hitProjects = projects.filter((p) => {
    const words = [...p.title.toLowerCase().split(/\s+/).filter((w) => w.length > 3), ...(PROJECT_ALIASES[p.title] || [])];
    return words.some((w) => has(text, w) || (w.includes(" ") && text.includes(w)));
  });
  if (hitProjects.length) return { text: hitProjects.map(projectAnswer).join("\n\n") };

  const hitPlaces = places.filter((p) => {
    const city = p.name.split(",")[0].toLowerCase();
    const region = p.region.toLowerCase();
    return text.includes(` ${city} `) || (p.region !== "Canada" && p.region !== "United States" && (text.includes(` ${region} `) || has(text, region.split(" ")[0])));
  });
  if (hitPlaces.length) return { text: hitPlaces.map((p) => `${p.name}${p.name === p.region ? "" : ` (${p.region})`}: ${p.note}.`).join("\n") };

  // Otherwise score each intent by keyword hits.
  let best = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    const score = intent.keys.reduce((n, key) => {
      const [k, w] = Array.isArray(key) ? key : [key, 1];
      const hit = has(text, k) || (k.includes(" ") && text.includes(k));
      return n + (hit ? w * (intent.weight ?? 1) * (1 + k.length / 25) : 0);
    }, 0);
    if (score > bestScore) { best = intent; bestScore = score; }
  }
  if (best) return { text: best.answer() };

  return {
    text: `I'm not sure about that one. I can only answer questions about ${first}: what he does, where he's worked (${joinList(companies)}), his projects, skills, or how to contact him.`,
    suggestions: SUGGESTIONS,
  };
}

export const WELCOME = `Hi! I'm a small helper built into this site. Ask me anything about ${first}: what he does, where he's worked, what he's built, or how to reach him.`;
