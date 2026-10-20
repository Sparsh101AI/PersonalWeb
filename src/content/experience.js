// Work experience, newest first.

export const experience = [
  {
    company: "Cloudflare",
    role: "Software Engineer Intern",
    team: "Security Operations Platform",
    dates: "May – Aug 2026",
    location: "Austin, TX",
    points: [
      "Built incident-management workflows in TypeScript that ingest, classify and triage 20K+ Prometheus security alerts a day using LLM-powered and rule-based threat classification.",
      "Wrote a Python archival service that migrates alerts older than six months from SQL to object storage for long-term retention.",
      "Implemented secure upload and retrieval of investigation artifacts with scoped access controls.",
    ],
    stack: ["TypeScript", "Python", "SQL", "Prometheus", "Object storage"],
  },
  {
    company: "Shopify",
    role: "Software Engineer Intern",
    team: "AI receipts",
    dates: "Jan – Apr 2026",
    location: "Toronto, ON",
    points: [
      "Developed a RAG pipeline that retrieves merchant, tax and policy context to generate tax-compliant receipts for 150K+ European merchants.",
      "Built a Kafka-based LLM observability pipeline (latency, tokens, failures) that surfaced a failure mode and drove a 30% drop in error rates.",
      "Made receipt processing idempotent with PostgreSQL transactions so retries never corrupt data.",
    ],
    stack: ["Python", "Kafka", "PostgreSQL", "RAG", "LLMs"],
  },
  {
    company: "Tesla",
    role: "Software Engineer Intern",
    team: "Vehicle part planning",
    dates: "May – Aug 2025",
    location: "Fremont, CA",
    points: [
      "Shipped a hierarchical part design tool adopted by 2,500+ engineers, saving 1,000+ engineering hours a month.",
      "Designed 20+ Go REST APIs serving real-time part and model data to 10+ engineering teams.",
      "Automated unit, stress, load and integration tests with Jenkins pipelines in Docker.",
    ],
    stack: ["Go", "React", "TypeScript", "MySQL", "Jenkins", "Docker"],
  },
  {
    company: "Toyota",
    role: "Software Engineer Intern",
    team: "Manufacturing systems",
    dates: "Sep – Dec 2024",
    location: "Cambridge, ON",
    points: [
      "Delivered an inventory tracking system covering 5 manufacturing facilities.",
      "Designed REST APIs and data models for search, filtering and updates across 2,000+ vehicle inventory items.",
    ],
    stack: ["Go", "React", "MySQL"],
  },
];
