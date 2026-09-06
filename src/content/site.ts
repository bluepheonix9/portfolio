/**
 * Everything on the site comes from this file.
 * Anything marked TODO still needs your input.
 */

export const person = {
  // Taken from your Padova certificate — change if you'd rather go by something else.
  name: "Naratorn Pisedtasalasai",
  role: "Master Student/Software Engineer",
  availability: "available for part-time work",
  intro:
    "I was born in Christchurch, grew up in Bangkok, went to school in Auckland, and ended up " +
    "in Sydney. I'm still finding my way and trying to enjoy the ride.",
  introMore: [
    "I studied my bachelor's in computer science and digital music at the University of Sydney, " +
      "and now doing a Master of Engineering (Software). My passion is to use my skills to make " +
      "the world a better place, whether it's building an app for people to play sports, " +
      "running a charity for mental health, performing in a band to entertain the crowd. Even " +
      "if it's a little thing, it can go a long way.",
    "Away from a screen, I play bass and sing in an indie band called Could Be Tuesday. I also " +
      "spent two years singing in a barbershop a cappella society, I grew up as a music kid and " +
      "it's one of those things that keep me going.",
    "I also volunteer with Vinnies, at the Redfern Vinnies Support Centre. That usually means " +
      "some combination of barbecues, database work, organising things, and doing the jobs that " +
      "aren't particularly exciting but still need someone to do them.",
    "I speak English and Thai, can hold my own in Mandarin, and spent two years learning " +
      "Spanish and a tad bit of Italian (basically just Ciao now).",
    "I've done an unusual combination of jobs. Music tutoring, helping touring crews pack down " +
      "stages in the rain, digital marketing, and now working part time at a dental clinic as a " +
      "dental assistant. None of those jobs have much to do with software. All of them have " +
      "given me experience that I could not have gotten elsewhere.",
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
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/naratorn-pisedtasalasai-07b752320",
  },
  { label: "Email", href: `mailto:${person.email}` },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
  year: string;
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
    // image: "/images/pickup.jpg",
    // imageAlt: "The Pickup app showing nearby games",
  },
  {
    title: "3307kmrun",
    role: "Creator",
    blurb:
      "A website for a group running challenge covering 3,307 km, with the aim of raising money " +
      "for the 3,307 lives lost in 2024 due to suicide in Australia. Helping charities and " +
      "bringing attention to suicide prevention. The challenge is planned for November 2026.",
    tags: ["React", "Next.js", "Supabase", "Vercel"],
    year: "2026",
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
  },
  {
    title: "Sydney Interplanetary Rover Initiative",
    role: "Lead website developer",
    blurb:
      "Led development of the Initiative's website and CMS, then deployed the platform to help " +
      "the team share its work and reach a wider audience.",
    tags: ["CMS", "JavaScript", "Tailwind", "Next.js", "React"],
    year: "2024",
  },
];

export const research = {
  title: "Structural Fingerprinting for Automated UML Reverse Engineering",
  subtitle: "Strategy to reduce use of LLMs in coding",
  blurb:
    "My thesis looks at how source code can be turned into UML and activity diagrams without " +
    "the use of Large Language Models (LLMs). The solution could be game-changing for project " +
    "managers who want to build websites and applications, using a tool that would cost " +
    "substantially less — both energy- and money-wise — than LLMs.",
  tags: ["AST", "UML", "Vectors", "Education"],
};

export const stack = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native / Expo", "Tailwind"],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Node.js", "PostgreSQL", "Supabase", "REST APIs"],
  },
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
    when: "Sep 2026",
    what: "Judge",
    where: "Hack for Humanity Hackathon",
    detail:
      "Helped organise and judge the Hack for Humanity competition, judging teams on " +
      "creativity, social impact, and technical execution.",
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
      "Did a 2-week summer exchange program at the University of Padua studying Italian " +
      "culture and language.",
  },
  {
    when: "School",
    what: "King's College",
    where: "Auckland, New Zealand",
    detail:
      "Before that studied at the International Community School, Bangkok and Concordian " +
      "International School, Bangkok.",
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
      "Indie rock band. I play bass and sing. I did a major in Digital Music at university, so " +
      "music has never really felt like a side project. It's just the other half of what I do.",
    image: "/images/band-photo.JPG",
    imageAlt: "The band at a live show",
  },
  {
    title: "Acappella",
    icon: "",
    blurb:
      "I sang with a barbershop a cappella society for two years. I made great friends, and " +
      "learnt a lot about self confidence through my singing.",
    image: "/images/acappella.jpg",
    imageAlt: "Singing lead at an a cappella showcase",
  },
  {
    title: "Futsal & football",
    icon: "",
    blurb:
      "Futsal with No Ice, plus a season of football with Sydney University Men's Div 4. Not " +
      "the best at football, but always an excuse to catch up with mates.",
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
      "Fluent in English and Thai, conversational Mandarin, and a bit of Spanish and Italian.",
    image: "/images/padua-certificate.jpg",
    imageAlt:
      "Holding the certificate from the Summer School of Italian Culture in Padova",
  },
  {
    title: "Travel",
    icon: "🌏",
    blurb:
      "Travel is basically the reason I work. The map below has the full picture.",
    image: "/images/travel-bergen.jpg",
    imageAlt: "Watching the sunset over the fjords above Bergen, Norway",
  },
];
