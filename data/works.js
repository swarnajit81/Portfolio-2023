// Case study data. `full: true` → has narrative/gallery/metrics; false → stub routes to coming-soon state.
export const works = [
  {
    slug: "the-rebellion",
    title: "The Rebellion",
    client: "The Rebellion Management",
    year: "2024",
    role: "Front-end Development",
    stack: ["Next.js", "GSAP", "Framer Motion", "Three.js"],
    summary:
      "A brand-defining digital presence for a boundary-pushing model management agency — built around a single thesis: movement is identity.",
    cover: "/images/rebellion.png",
    hero: "/images/rebellion.png",
    accent: "#D83503",
    link: "https://therebellionmgmt.com/",
    full: true,
    problem: {
      heading: "The Problem",
      body: "Model agencies default to grid-of-faces layouts — interchangeable, static, forgettable. The Rebellion needed a site that read as a statement, not a catalog. The challenge: communicate a distinct editorial voice while keeping the talent roster legible and bookable for casting directors under time pressure.",
    },
    approach: {
      heading: "The Approach",
      body: "We stripped the homepage to a single kinetic headline and a horizontally-scrolled works reel. Typography carries the brand — Playfair italics intercut with mono caps — while GSAP timelines drive every transition so the site feels choreographed rather than clicked-through. Performance budget enforced from day one: everything had to land on mid-tier laptops at 60fps.",
    },
    solution: {
      heading: "The Solution",
      body: "A horizontally-scrolled narrative anchored by a WebGL shader hero, custom cursor, and editorial line-reveals. Talent portfolios open via FLIP transitions — each model's page inherits the site's rhythm while giving their work room to breathe. Casting workflow shortened: talent search moved from deep menu to always-visible scroll indicator.",
    },
    gallery: [
      { src: "/images/rebellion.png", alt: "Home — kinetic headline" },
      { src: "/images/angels.png", alt: "Works reel" },
      { src: "/images/view.png", alt: "Case study view" },
    ],
    metrics: [
      { value: "62%", label: "drop in bounce rate" },
      { value: "3.4x", label: "avg session duration" },
      { value: "60fps", label: "locked on mid-tier laptops" },
    ],
  },
  { slug: "wmodels", title: "WModels", client: "W Management", year: "2023", role: "Front-end", summary: "Modernizing a legacy agency presence.", cover: "/images/wmgmt.png", hero: "/images/wmgmt.png", link: "https://www.wmgmt.co.uk/", full: false },
  { slug: "prodigy", title: "Prodigy", client: "Prodigy Management", year: "2023", role: "Front-end", summary: "Editorial portfolio for model management.", cover: "/images/prodigy.png", hero: "/images/prodigy.png", link: "https://www.prodigymanagement.com/", full: false },
  { slug: "angels", title: "Angels", client: "Angels Project", year: "2023", role: "Front-end", summary: "Brand-forward talent showcase.", cover: "/images/angels.png", hero: "/images/angels.png", link: "https://www.angelsproject.com/", full: false },
  { slug: "city-models", title: "City Models", client: "City Models", year: "2023", role: "Front-end", summary: "Roster-first agency site.", cover: "/images/citymodels.png", hero: "/images/citymodels.png", link: "https://www.city-models.com/", full: false },
  { slug: "img-models", title: "IMG Models", client: "IMG", year: "2022", role: "Front-end", summary: "Global talent portfolio at scale.", cover: "/images/imgmodels.png", hero: "/images/imgmodels.png", link: "https://imgmodels.com/", full: false },
  { slug: "lions", title: "Lions", client: "The Lions Management", year: "2022", role: "Front-end", summary: "Bold, confident talent showcase.", cover: "/images/lions.png", hero: "/images/lions.png", link: "https://www.thelionsmanagement.com/", full: false },
  { slug: "nevs", title: "Nevs", client: "Nevs Models", year: "2022", role: "Front-end", summary: "Heritage agency redesign.", cover: "/images/nevsmodels.png", hero: "/images/nevsmodels.png", link: "https://www.nevsmodels.co.uk/", full: false },
  { slug: "view-management", title: "View Management", client: "View Management", year: "2022", role: "Front-end", summary: "Editorial-driven model agency.", cover: "/images/view.png", hero: "/images/view.png", link: "https://www.viewmanagement.com/", full: false },
];

export const getWorkBySlug = (slug) => works.find((w) => w.slug === slug);
export const getNextWork = (slug) => {
  const i = works.findIndex((w) => w.slug === slug);
  return works[(i + 1) % works.length];
};
