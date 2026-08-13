// ============================================================================
// SOURCE OF TRUTH — extracted from Pooja C's uploaded resume.
// ============================================================================

export const profile = {
  name: "Pooja C",
  title: "Computer Science & Engineering Student",
  positioning: "Java Developer • AI/ML Enthusiast • Full Stack Developer",
  location: "Tiruppur",
  email: "poojakanishka8@gmail.com",
  phone: "+91 95971 44746",
  github: "https://github.com/poojakanishka8",
  linkedin: "https://linkedin.com/in/pooja-c-3b8b78343",
  // No LeetCode / competitive coding profile was listed on the resume.
  leetcode: null,
  resumeFile: "/resume/Pooja_C_Resume.pdf",
  summary:
    "Passionate Computer Science student with a strong interest in software development and problem-solving. Seeking an opportunity to apply my technical knowledge, enhance my skills, and contribute to developing innovative and efficient software solutions.",
};

export const stats = [
  { value: "2023–2027", label: "B.E. CSE" },
  { value: "Java", label: "Core Development" },
  { value: "AI + Full Stack", label: "Project Experience" },
];

export const interests = [
  "Software Development",
  "Java",
  "AI / ML",
  "Full Stack Development",
  "Problem Solving",
];

export const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Database",
    skills: ["SQL", "MySQL"],
  },
  {
    category: "Core Concepts",
    skills: ["OOPs", "Data Structures", "Algorithms"],
  },
  {
    category: "AI & APIs",
    skills: ["Groq LLM", "FastAPI", "AI Recommendation Logic"],
  },
];

export const projects = [
  {
    name: "Social Media AI Agent",
    tagline: "AI-powered content generation for social platforms",
    description:
      "An AI-powered web application that generates social media content — including captions, hashtags, hooks, and CTAs — based on user input. Integrated Groq LLM with FastAPI and MySQL to deliver fast, personalized content generation through a responsive web interface.",
    tech: ["Python", "FastAPI", "Groq LLM", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Generates captions, hashtags, hooks & CTAs from user input",
      "Groq LLM integration for fast content generation",
      "Personalized, responsive web interface",
      "MySQL-backed data persistence",
    ],
    github: "https://github.com/poojakanishka8",
    demo: null,
    icon: "megaphone",
  },
  {
    name: "Smart Grocery Cart",
    tagline: "AI-powered grocery shopping & meal planning",
    description:
      "A full-stack AI-powered grocery shopping application with secure user authentication and RESTful APIs. Implements personalized grocery recommendations, smart cart generation, and AI-based meal planning.",
    tech: ["SQL", "HTML", "CSS", "JavaScript", "Node.js", "AI Recommendation Logic"],
    features: [
      "Secure user authentication",
      "RESTful API architecture",
      "Personalized grocery recommendations",
      "AI-based meal planning & smart cart generation",
    ],
    github: "https://github.com/poojakanishka8",
    demo: null,
    icon: "cart",
  },
  {
    name: "Semanticflix",
    tagline: "AI-based recommendation system with semantic search",
    description:
      "An AI-powered recommendation platform that uses semantic search and vector embeddings to match content to user intent, going beyond simple keyword matching to surface more relevant, meaningful results.",
    tech: ["Python", "FastAPI", "Vector Database", "JavaScript"],
    features: [
      "Semantic search powered by vector embeddings",
      "Context-aware recommendation matching",
      "FastAPI backend for fast query responses",
      "Responsive React frontend",
    ],
    github: "https://github.com/poojakanishka8/semanticflix",
    demo: null,
    icon: "film",
  },
  {
    name: "Smart Attendance System",
    tagline: "Automated attendance tracking application",
    description:
      "A full-stack attendance management system designed to streamline and automate the process of recording and tracking attendance, replacing manual, error-prone methods.",
    tech: ["TypeScript", "Node.js"],
    features: [
      "Automated attendance recording",
      "Structured backend for data handling",
      "Built with a modern TypeScript stack",
    ],
    github: "https://github.com/poojakanishka8/smart-attendance-system",
    demo: null,
    icon: "check",
  },
  {
    name: "Habit Garden",
    tagline: "Gamified habit tracker with a growing virtual plant",
    description:
      "A gamified habit-tracking web app where a virtual plant grows as the user maintains daily habit streaks, turning consistency into a visual, rewarding experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Virtual plant that grows with daily streaks",
      "Visual habit-streak tracking",
      "Lightweight, responsive front-end build",
    ],
    github: "https://github.com/poojakanishka8/Habit-Gardern",
    demo: null,
    icon: "sprout",
  },
];

export const experience = [
  {
    role: "Web Development Intern",
    company: "INoesis Private Limited Technology",
    location: "Chennai",
    duration: "Internship",
    points: [
      "Contributed to development of the Vadamalar e-commerce application.",
      "Assisted in building responsive Login, Splash, and Dashboard pages using HTML, CSS, and JavaScript.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    role: "Python Development Intern",
    company: "INoesis Private Limited Technology",
    location: "Chennai",
    duration: "Internship",
    points: [
      "Learned Python programming and web development through hands-on training.",
      "Assisted the team in debugging and resolving application issues.",
    ],
    tech: ["Python"],
  },
];

export const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    school: "VSB Engineering College, Karur",
    duration: "2023 – 2027",
    detail: "CGPA: 8.00 / 10",
  },
  {
    degree: "HSC",
    school: "Panitha Amala Annai Matric Higher Secondary School, Vellakovil",
    duration: "2021 – 2023",
    detail: "Score: 74.84%",
  },
];

export const certifications = [
  {
    name: "Java Foundation",
    issuer: "Infosys Certificate",
  },
  {
    name: "Python for Data Science",
    issuer: "NPTEL",
  },
];

export const languages = ["English", "Tamil"];
