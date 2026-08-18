/**
 * Everything on the site comes from this file.
 * Anything marked TODO still needs your input.
 */

export const person = {
  // Taken from your Padova certificate — change if you'd rather go by something else.
  name: "Naratorn Pisedtasalasai",
  handle: "@nano",
  role: "Software Engineer",
  tagline:
    "I build things people actually use — and I fill the rest of my time with music, sport and a lot of volunteering.",
  intro:
    "Computer Science and Digital Music at the University of Sydney, now doing a Master of " +
    "Engineering (Software). I build full-stack products end to end — mobile apps, dashboards, " +
    "APIs — and my research is on turning source code into diagrams so people can learn software " +
    "design without writing code first. Outside of that I play bass in a band, sing in an a cappella " +
    "society, play futsal and football, speak four languages badly-to-fluently, and volunteer at " +
    "a food shelter most weeks.",
  location: "Sydney, Australia",
  email: "nano.naratorn@gmail.com",
  resumeUrl: "/resume.pdf", // TODO: drop your resume PDF into public/
  /** Set once you've added a portrait — see public/images/README.md. */
  portrait: "", // e.g. "/images/portrait.jpg"
  portraitAlt: "Portrait",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/bluepheonix9" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/naratorn-pisedtasalasai-07b752320" },
  { label: "Email", href: `mailto:${person.email}` },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
  year: string;
  accent: string;
  role?: string;
  /** Drop the file in public/images/ and reference it as "/images/name.jpg". */
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    title: "Pickup",
    role: "Founder & creator",
    blurb:
      "A pickup-sports app for turning a public park into a game. Create an event, let friends " +
      "and strangers join, chat with the players beforehand. Built with Expo SDK 54, React Native " +
      "and Supabase; currently in TestFlight with an Apple and Android demo in progress.",
    tags: ["Expo SDK 54", "React Native", "Supabase", "TestFlight"],
    repo: "https://github.com/bluepheonix9/resona",
    year: "2026",
    accent: "from-amber-300 to-rose-300",
    // image: "/images/pickup.jpg",
    // imageAlt: "The Pickup app showing nearby games",
  },
  {
    title: "3307kmrun",
    role: "Creator",
    blurb:
      "A mental-health fundraiser site for a group challenge to run 3,307 km — one kilometre for " +
      "every person lost to suicide — raising money for charity along the way. The attempt is " +
      "planned for November 2026.",
    tags: ["React", "Next.js", "Supabase", "Vercel"],
    year: "2026",
    accent: "from-teal-300 to-emerald-300",
  },
  {
    title: "National School Socioeconomic AI Dashboard",
    role: "Biotech Futures",
    blurb:
      "An interactive dashboard with geospatial visualisation and machine-learning insight over " +
      "Australian education datasets, surfacing high-performing low-socioeconomic schools through " +
      "ICSEA, ATAR and STEM enrolment metrics.",
    tags: ["FastAPI", "PostgreSQL", "React", "Next.js", "Docker", "Azure"],
    year: "2025",
    accent: "from-violet-300 to-indigo-300",
  },
  {
    title: "Sydney Interplanetary Rover Initiative",
    role: "Lead developer",
    blurb:
      "Led development of the Initiative's CMS-based website and deployed the platform to widen " +
      "the team's outreach.",
    tags: ["CMS", "Web"],
    year: "2024",
    accent: "from-sky-300 to-cyan-300",
  },
];

export const research = {
  title: "Structural Fingerprinting for Automated UML Reverse Engineering",
  subtitle: "An AST-to-Vector Approach",
  blurb:
    "My thesis: converting source code into vector diagrams automatically. It's growing into an " +
    "education web app that lets the next generation of software engineers learn by building with " +
    "UML and other diagrams instead of starting from code.",
  tags: ["AST", "UML", "Vectors", "Education"],
};

export const stack = [
  { group: "Languages", items: ["TypeScript", "Python", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "React Native / Expo", "Tailwind"] },
  { group: "Backend", items: ["FastAPI", "Node.js", "PostgreSQL", "Supabase", "REST APIs"] },
  { group: "Platform", items: ["Docker", "Azure", "Vercel", "ROS2", "Strapi"] },
];

export type Chapter = {
  when: string;
  what: string;
  where: string;
  detail: string;
};

export const experience: Chapter[] = [
  {
    when: "Aug 2026 — present",
    what: "Dental Assistant & Administration",
    where: "Odental Clinic",
    detail:
      "Office administration — client bookings, email and phones — alongside chairside assisting, " +
      "handling instruments and keeping track of everything in a busy clinic.",
  },
  {
    when: "Oct 2025 — Apr 2026",
    what: "Crewing Officer",
    where: "Showcall Crewing",
    detail:
      "On-site equipment setup, heavy lifting and pack-down of production gear under tight time " +
      "constraints, in heat and rain, without dropping safety or pace.",
  },
  {
    when: "Aug 2023 — Jan 2026",
    what: "Music Tutor",
    where: "Music Lessons Australia",
    detail:
      "Taught students one-on-one, kept parents in the loop on progress and expectations, and built " +
      "a supportive room where confidence and discipline could grow alongside the playing.",
  },
  {
    when: "Jan — Feb 2025",
    what: "Front End Developer Intern",
    where: "Devcula Company Limited",
    detail:
      "Designed and deployed a full-stack landing page and LINE-integrated web app with React, " +
      "Next.js, Strapi, Node.js and TypeScript — owning it end to end, including the REST APIs and " +
      "backend data structures behind it.",
  },
  {
    when: "Jan — Feb 2023",
    what: "Digital Marketer Intern",
    where: "Rampada International Clinic",
    detail:
      "Supported marketing and admin in a busy healthcare clinic, producing patient-facing digital " +
      "content to professional healthcare standards.",
  },
];

export const community: Chapter[] = [
  {
    when: "Jun 2026 — present",
    what: "Head of Marketing",
    where: "Software Engineering Society",
    detail:
      "Lead marketing strategy and content across social and digital channels to promote society " +
      "events and initiatives.",
  },
  {
    when: "Mar 2026 — present",
    what: "Administration Volunteer",
    where: "St Vincent de Paul Society",
    detail:
      "Manage client intake and maintain records in a computer-based database, streamlining " +
      "workflows and working hands-on with CRM systems and data entry.",
  },
  {
    when: "Jul 2024 — present",
    what: "Software UI Team",
    where: "Sydney Interplanetary Rover Initiative",
    detail:
      "Process and transform rover sensor data with Python and ROS2, building data pipelines and " +
      "real-time Foxglove visualisations for operational telemetry. Also led the Initiative's website.",
  },
  {
    when: "Ongoing",
    what: "Mentor",
    where: "Biotech Futures Competition",
    detail: "Mentoring students through their competition projects.",
  },
  {
    when: "Ongoing",
    what: "Subcommittee Member",
    where: "KiwiSoc, University of Sydney",
    detail: "Coordinate social sporting events and get members actually turning up to them.",
  },
];

export const education: Chapter[] = [
  {
    when: "Now",
    what: "Master of Engineering (Software)",
    where: "University of Sydney",
    detail: "Thesis on automated UML reverse engineering from source code.",
  },
  {
    when: "Graduated",
    what: "Bachelor of Science — Computer Science & Digital Music",
    where: "University of Sydney",
    detail: "St John's College alumni, 2023–2025.",
  },
  {
    when: "Jun 2025",
    what: "Summer School of Italian Culture",
    where: "Università degli Studi di Padova",
    detail:
      "The 8th edition of the Scuola estiva di cultura italiana, run with the University of " +
      "Sydney — three days in Padova and the reason my Italian outlasted my Spanish.",
  },
  {
    when: "School",
    what: "King's College",
    where: "Auckland, New Zealand",
    detail:
      "After International Community School, Bangkok and Concordian International School, Bangkok.",
  },
];

export type Hobby = {
  title: string;
  icon: string;
  blurb: string;
  notes: string[];
  /** Optional card photo: "/images/whatever.jpg". */
  image?: string;
  imageAlt?: string;
};

export type Photo = {
  src: string;
  alt: string;
  caption?: string;
  /** "tall" and "wide" take up more room in the gallery grid. */
  shape?: "tall" | "wide" | "square";
};

/**
 * The photo wall at the end of "Beyond code".
 * Drop files in public/images/ and list them here — that's the whole workflow.
 */
export const gallery: Photo[] = [
  {
    src: "/images/futsal-team.jpg",
    alt: "The futsal team lined up on court before a game",
    caption: "No Ice, before kick-off",
    shape: "wide",
  },
  {
    src: "/images/vinnies-bbq.jpg",
    alt: "Four volunteers in Vinnies polos behind the barbecues",
    caption: "Barbecue shift with the Vinnies crew",
    shape: "tall",
  },
  {
    src: "/images/travel-bergen.jpg",
    alt: "Standing on a ridge above Bergen as the sun sets over the fjords",
    caption: "Sunset above Bergen, Norway",
    shape: "tall",
  },
  {
    src: "/images/travel-milan.jpg",
    alt: "At Milano Centrale station with a backpack",
    caption: "Milano Centrale, mid-exchange",
    shape: "tall",
  },
  {
    src: "/images/futsal-medals.jpg",
    alt: "The team with medals after a final at Sydney Uni",
    caption: "Medals, finally",
  },
  {
    src: "/images/travel-batu-caves.jpg",
    alt: "In front of the golden statue and rainbow stairs at Batu Caves",
    caption: "Batu Caves, Malaysia",
    shape: "tall",
  },
  {
    src: "/images/friends-pub.jpg",
    alt: "Six friends around a table lined with pints of Guinness",
    caption: "Six pints, six people, one photo",
    shape: "wide",
  },
  {
    src: "/images/friends-night.jpg",
    alt: "A group selfie with friends on a night out",
    caption: "The usual crowd",
  },
];

/** The other half of the site. */
export const hobbies: Hobby[] = [
  {
    title: "Could Be Tuesday",
    icon: "",
    blurb:
      "Indie rock band — I play bass guitar and sing. Digital Music was half my degree, so this " +
      "isn't a side quest so much as the other half of the job.",
    notes: ["Indie rock", "Bass & vocals", "Live shows"],
    image: "/images/band-photo.JPG",
    imageAlt: "The band at a live show",
  },
  {
    title: "Acappella",
    icon: "",
    blurb: "Sang with the Barbershop a cappella society — no instruments, all harmony.",
    notes: ["Barbersoc", "2024 & 2025"],
  },
  {
    title: "Futsal & football",
    icon: "",
    blurb:
      "Futsal with No Ice, and a season of football in Sydney University Men's Div 4. The reason " +
      "Pickup exists in the first place.",
    notes: ["No Ice, 2025 & 2026", "SU Men's Div 4, 2024"],
    image: "/images/futsal-medals.jpg",
    imageAlt: "The futsal team with medals after a final at Sydney Uni",
  },
  {
    title: "Volunteering",
    icon: "",
    blurb:
      "At Vinnies and at the food shelter — serving, organising events, and doing the unglamorous " +
      "admin that keeps it all running.",
    notes: ["St Vincent de Paul", "Food shelter", "Event organising"],
    image: "/images/vinnies-van.jpg",
    imageAlt: "The Vinnies Van parked up at a community barbecue",
  },
  {
    title: "Languages",
    icon: "🗣️",
    blurb:
      "Fluent in English and Thai, conversational Mandarin, and enough Spanish to have survived a " +
      "language exchange in Padua.",
    notes: ["English & Thai", "Mandarin — HSK 5", "Spanish, 2 years", "Padua, Italy"],
    image: "/images/padua-certificate.jpg",
    imageAlt:
      "Holding the certificate from the Summer School of Italian Culture in Padova",
  },
];

/** Short, punchy things that don't fit anywhere else. */
export const facts = [
  "Four languages, three countries lived in, one very patient bass amp.",
  "Half my degree was Computer Science, the other half was Digital Music.",
  "Wrote a thesis about turning code into diagrams, then started building the app for it.",
  "Have moved school countries twice and somehow kept the same football boots.",
];
