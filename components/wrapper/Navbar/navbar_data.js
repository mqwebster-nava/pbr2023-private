
const getNavData = (variant)=> [
  {
    title: "Mission",
    subpages: [
      { title: "Impact", slug: "/impact" },
      { title: "Values", slug: "/values" },
    ],
  },
  {
    title: "Work",
    subpages: [
      { title: "Services", slug: "/services" },
      { title: "Case studies", slug: "/case-studies" },
      { title: "Toolkits", slug: "/toolkits" },
    ],
  },
  {
    title: "Careers",
    subpages: [
      { title: "Working at Nava", slug: "/careers" },
      { title: "Open roles", slug: "/open-roles" },
    ],
  },
  {
    title: "About",
    subpages: [
      { title: "Our story", slug: "/story" },
      { title: "Team", slug: "/team" },
      { title: "Diversity, equity, and inclusion", slug: "/dei/2022" },
      { title: "News", slug: "/news" },
      { title: "Events", slug: "/events" },
    ],
  }, 
  {
    title: "Insights",
    slug: "/insights",
  },
  {
    title: "Get in touch",
    slug: "/contact"
  },
];

export default getNavData;