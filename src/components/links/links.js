export let links = [
  { title: "Home", path: "/", sub_categories: [] },
  {
    title: "About",
    path: "#about",
    sub_categories: [
      { sub_name: "Company Background", sub_path: "#company_background" },
      { sub_name: "Why us?", sub_path: "#why_us" },
      { sub_name: "Our Team", sub_path: "#our_team" },
      { sub_name: "Our Partners", sub_path: "#our_partners" },
      { sub_name: "Our Goals and Missions", sub_path: "#goals_missions" },
    ],
  },
  {
    title: "Services",
    path: "/services",
    sub_categories: [
      { sub_name: "Software Development", sub_path: "#software" },
      { sub_name: "Networking", sub_path: "#networking" },
      { sub_name: "Consultancy", sub_path: "#consultancy" },
    ],
  },
  {
    title: "Career",
    path: "/career",
    sub_categories: [
      { sub_name: "Training Programs", sub_path: "#training_programs" },
      { sub_name: "Job Openings", sub_path: "#job_openings" },
    ],
  },
  { title: "Blog", path: "/blog", sub_categories: [] },
  { title: "Contact", path: "/contact", sub_categories: [] },
];
