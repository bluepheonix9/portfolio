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
    "I like building things people actually use. When I'm not coding, you'll usually find me " +
    "playing music, playing sport, or volunteering somewhere.",
  intro:
    "I grew up in Bangkok, went to school in Auckland, and ended up in Sydney. So I've had " +
    "plenty of practice being the new kid. Somewhere along the way, I got pretty comfortable " +
    "with it.",
  introMore: [
    "I studied Computer Science and Digital Music at the University of Sydney and I'm now " +
      "partway through a Master of Engineering. My thesis is about turning source code into " +
      "diagrams, with the idea that people should be able to understand how software fits " +
      "together before they have to write it themselves.",
    "Most of what I've learned about building things came from building the wrong thing first. " +
      "Pickup started because I kept turning up to public courts and finding nobody there. Now " +
      "it's a real app in TestFlight. The bit I'm happiest about isn't the technology behind it. " +
      "It's that people who didn't know each other can open the app, find a game, and end up " +
      "playing together in the same park.",
    "Away from a screen, I play bass and sing in an indie band called Could Be Tuesday. I also " +
      "spent two years singing in a barbershop a cappella society, which taught me just how " +
      "exposed you feel when there isn't an instrument to hide behind. I play futsal and " +
      "football most weeks too.",
    "I also volunteer with Vinnies, both on the van and in the office. That usually means some " +
      "combination of barbecues, database work, organising things, and doing the jobs that " +
      "aren't particularly exciting but still need someone to do them.",
    "I speak English and Thai, can hold my own in Mandarin, and spent two years learning " +
      "Spanish before an exchange in Padova convinced me that Italian was the language I wanted " +
      "to keep going with.",
    "I've taught music to kids, helped touring crews pack down stages in the rain, and now work " +
      "part time at a dental clinic. None of those jobs have much to do with software. All of " +
      "them have taught me something about being useful, working with people, and getting stuck " +
      "in when something needs doing.",
  ],
  location: "Sydney, Australia",
  email: "nano.naratorn@gmail.com",
  resumeUrl: "/resume.pdf", // TODO: drop your resume PDF into public/
  /** Set once you've added a portrait — see public/images/README.md. */
  portrait: "/images/graduation.jpg",
  portraitAlt: "Graduating from the University of Sydney",
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
      "A pickup-sports app built around a simple problem: you want to play, but you don't know " +
      "who's playing. Create a game at a public court, invite friends or let strangers join, then " +
      "chat with everyone before you meet up. Built with Expo SDK 54, React Native and Supabase. " +
      "It's currently in TestFlight, with an Android demo in progress.",
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
      "A website for a group running challenge covering 3,307 km, with the aim of raising money " +
      "for charity and bringing attention to suicide prevention. The challenge is planned for " +
      "November 2026.",
    tags: ["React", "Next.js", "Supabase", "Vercel"],
    year: "2026",
    accent: "from-teal-300 to-emerald-300",
  },
  {
    title: "National School Socioeconomic AI Dashboard",
    role: "Biotech Futures",
    blurb:
      "An interactive dashboard exploring Australian education data through maps, statistics and " +
      "machine learning. It looks at schools with strong academic outcomes despite lower " +
      "socioeconomic backgrounds, using measures including ICSEA, ATAR and STEM enrolment.",
    tags: ["FastAPI", "PostgreSQL", "React", "Next.js", "Docker", "Azure"],
    year: "2025",
    accent: "from-violet-300 to-indigo-300",
  },
  {
    title: "Sydney Interplanetary Rover Initiative",
    role: "Lead developer",
    blurb:
      "Led development of the Initiative's website and CMS, then deployed the platform to help " +
      "the team share its work and reach a wider audience.",
    tags: ["CMS", "Web"],
    year: "2024",
    accent: "from-sky-300 to-cyan-300",
  },
];

export const research = {
  title: "Structural Fingerprinting for Automated UML Reverse Engineering",
  subtitle: "An AST-to-Vector Approach",
  blurb:
    "My thesis looks at how source code can be turned into vector diagrams automatically. The " +
    "bigger idea is an education web app where students can learn how software is structured by " +
    "building and exploring UML diagrams, rather than being thrown straight into a code editor.",
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
      "Handle day-to-day administration including bookings, emails and phone calls, while also " +
      "assisting chairside, preparing instruments and keeping things moving in a busy clinic.",
  },
  {
    when: "Oct 2025 — Apr 2026",
    what: "Crewing Officer",
    where: "Showcall Crewing",
    detail:
      "Worked on production sites setting up equipment, moving gear and packing everything down " +
      "at the end of a job. Often outdoors, often in a hurry, and occasionally in terrible " +
      "weather. The job was about keeping the pace up without letting safety slip.",
  },
  {
    when: "Aug 2023 — Jan 2026",
    what: "Music Tutor",
    where: "Music Lessons Australia",
    detail:
      "Taught students one-on-one, kept parents updated on progress, and tried to make lessons a " +
      "place where students could build confidence as well as improve their playing.",
  },
  {
    when: "Jan — Feb 2025",
    what: "Front End Developer Intern",
    where: "Devcula Company Limited",
    detail:
      "Designed and deployed a full-stack landing page and LINE-integrated web app using React, " +
      "Next.js, Strapi, Node.js and TypeScript. Worked across the whole project, including the " +
      "REST APIs and backend data structures.",
  },
  {
    when: "Jan — Feb 2023",
    what: "Digital Marketer Intern",
    where: "Rampada International Clinic",
    detail:
      "Supported marketing and administration at a busy healthcare clinic, creating digital " +
      "content for patients while keeping things aligned with professional healthcare standards.",
  },
];

export const community: Chapter[] = [
  {
    when: "Jun 2026 — present",
    what: "Head of Marketing",
    where: "Software Engineering Society",
    detail:
      "Lead marketing across social and digital channels, helping promote society events, " +
      "projects and initiatives and getting more people involved.",
  },
  {
    when: "Mar 2026 — present",
    what: "Administration Volunteer",
    where: "St Vincent de Paul Society",
    detail:
      "Help with client intake, records and database administration. A lot of it is data entry " +
      "and keeping information organised, but good systems make a real difference when you're " +
      "dealing with people who need help.",
  },
  {
    when: "Jul 2024 — present",
    what: "Software UI Team",
    where: "Sydney Interplanetary Rover Initiative",
    detail:
      "Work with Python and ROS2 to process rover sensor data and build data pipelines and " +
      "real-time Foxglove visualisations for operational telemetry. I also led the Initiative's " +
      "website development.",
  },
  {
    when: "Ongoing",
    what: "Mentor",
    where: "Biotech Futures Competition",
    detail:
      "Mentor students as they work through their competition projects, helping them turn an " +
      "idea into something they can actually present.",
  },
  {
    when: "Ongoing",
    what: "Subcommittee Member",
    where: "KiwiSoc, University of Sydney",
    detail:
      "Help organise social and sporting events and, most importantly, try to make sure people " +
      "actually turn up.",
  },
];

export const education: Chapter[] = [
  {
    when: "Now",
    what: "Master of Engineering (Software)",
    where: "University of Sydney",
    detail: "Researching automated UML reverse engineering from source code.",
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
      "Sydney. Three days in Padova, and somehow enough to make Italian stick better than the " +
      "two years of Spanish that came before it.",
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
  /** Optional card photo: "/images/whatever.jpg". */
  image?: string;
  imageAlt?: string;
};

/** The other half of the site. */
export const hobbies: Hobby[] = [
  {
    title: "Could Be Tuesday",
    icon: "",
    blurb:
      "Indie rock band. I play bass and sing. I studied Digital Music at university, so music " +
      "has never really felt like a side project. It's just the other half of what I do.",
    image: "/images/band-photo.JPG",
    imageAlt: "The band at a live show",
  },
  {
    title: "Acappella",
    icon: "",
    blurb:
      "I sang with a barbershop a cappella society for two years. No instruments, no hiding, " +
      "just a lot of harmony and trying not to be the person who comes in on the wrong note.",
    image: "/images/acappella.jpg",
    imageAlt: "Singing lead at an a cappella showcase",
  },
  {
    title: "Futsal & football",
    icon: "",
    blurb:
      "Futsal with No Ice, plus a season of football with Sydney University Men's Div 4. Also, " +
      "pretty much the reason Pickup exists.",
    image: "/images/futsal-medals.jpg",
    imageAlt: "The futsal team with medals after a final at Sydney Uni",
  },
  {
    title: "Volunteering",
    icon: "",
    blurb:
      "Vinnies, the food shelter and wherever else an extra pair of hands is useful. Serving " +
      "food, helping organise events, doing admin, and generally taking care of the jobs that " +
      "don't make for exciting photos.",
    image: "/images/vinnies-van.jpg",
    imageAlt: "The Vinnies Van parked up at a community barbecue",
  },
  {
    title: "Languages",
    icon: "🗣️",
    blurb:
      "Fluent in English and Thai, conversational Mandarin, and enough Spanish to have survived " +
      "a language exchange in Padova. I'm still working on the Italian.",
    image: "/images/padua-certificate.jpg",
    imageAlt:
      "Holding the certificate from the Summer School of Italian Culture in Padova",
  },
  {
    title: "Travel",
    icon: "🌏",
    blurb:
      "I collect countries a bit like other people collect records. The list keeps getting " +
      "longer, and I'm not particularly interested in stopping. The map below has the full " +
      "picture.",
    image: "/images/travel-bergen.jpg",
    imageAlt: "Watching the sunset over the fjords above Bergen, Norway",
  },
];

/** Short, punchy things that don't fit anywhere else. */
export const facts = [
  "Four languages, three countries lived in, and one very patient bass amp.",
  "Half my degree was Computer Science. The other half was Digital Music.",
  "I wrote a thesis about turning code into diagrams, then started building the app I wished " +
    "I'd had when I was learning.",
  "I've changed school countries twice and somehow still have the same football boots.",
];
