export const site = {
  name: "Ethan Chen",
  domain: "ethanmaximuschen.com",
  location: "Albany, California",
  email: "ethanmchen121@gmail.com",
  emailVT: "ethanmchen@vt.edu",
  phone: "(510) 646-3505",
  githubHandle: "ethanchenz",
  // TODO: Replace these placeholders with your real URLs
  links: {
    linkedin: "https://www.linkedin.com/in/ethan-chen-988a691b8/",
    github: "https://github.com/ethanchenz",
  },
  portfolioTitle: "Electrical Engineering Portfolio",
  resumePath: "/Resume-Ethan-Chen.pdf",
  tagline:
    "Electrical Engineering student at Virginia Tech • Undergraduate Research Assistant (LEWAS Lab) • Embedded + Full‑Stack",
  summary:
    "Thanks for checking out my portfolio! Whether you're a recruiter, fellow engineer, friend, or curious visitor, I hope you enjoy the ride.",
  strengths: [
    "Hands-on with embedded systems and prototyping.",
    "Comfortable building software that connects to real hardware.",
    "Like to design, test, and iterate until things work.",
  ],
  weaknesses: [
    "Will happily over-engineer a side project.",
    "Too many tabs open at once.",
    "Really like to take things apart to see how they work.",
  ],
  about: [
    "Electrical Engineering student (B.S., expected May 2028) focused on embedded systems, digital design, and practical software engineering.",
    "Hands-on experience shipping features in a production iOS app, building and maintaining a research web dashboard + wiki, and prototyping sensor/test setups with Arduino/Raspberry Pi.",
  ],
};

export const education = [
  {
    school: "Virginia Polytechnic Institute of Technology (Virginia Tech)",
    degree: "B.S. Electrical Engineering",
    location: "Blacksburg, VA",
    graduation: "Expected May 2028",
    gpa: "3.2",
    coursework: ["Circuits and Devices", "Digital Systems", "Computational Engineering"],
  },
];

export const experience = [
  {
    slug: "lewas",
    role: "Undergraduate Research Assistant — Electrical Engineer (LEWAS Lab)",
    org: "Virginia Tech — LEWAS Lab",
    location: "Blacksburg, VA",
    dates: "Fall 2025 – Present",
    bullets: [
      "Collaborate with an interdisciplinary team on software and environmental fieldwork for the LEWAS research group.",
      "Build and maintain lewas.vercel.app and a companion wiki integrating chatbot outputs and sensor data; contribute C++ as needed and document data flows.",
      "Support sensor data collection and basic analysis to ensure accurate environmental datasets.",
      "Run weekly tests at the on-campus site to validate the LEWAS \"Live Creek Data\" dashboard.",
    ],
  },
  {
    slug: "baja",
    role: "Testing Team Member",
    org: "Virginia Tech Baja SAE — Design Team",
    location: "Blacksburg, VA",
    dates: "2025 – Present",
    bullets: [
      "Prototype fluid-control testing setups using Arduino and Raspberry Pi; research sensor types and evaluate them on the team car.",
      "Assist with sensor integration and data checks to inform vehicle testing decisions.",
      "Work in a team environment with weekly reports and iterative testing feedback.",
    ],
  },
  {
    slug: "bawshuman",
    role: "iOS / Software Intern",
    org: "BawsHuman",
    location: "Remote", // Update this with actual location from your resume
    dates: "Summer 2025",
    bullets: [
      "Contribute to a production fitness app alongside senior engineers, participating in standups and code reviews.",
      "Apply Java, C++, and iOS development fundamentals to implement small features and fix issues within a supervised codebase.",
    ],
  },
];

export const projects = [
  {
    slug: "cpu-design",
    title: "Simple Computer (CPU) Design",
    category: "Coursework",
    dates: "Fall 2025",
    highlights: [
      "Built an assembly program on a custom 16-bit Simple Computer ISA to evaluate transportation options (Car/Plane/Train/Bus) using pointer-based memory reads and sequential traversal.",
      "Designed and integrated a Verilog-based Simple Computer CPU (datapath + control) to execute the full instruction cycle.",
      "Computed route metrics and a combined score (TRS): TRS = T + (C×4) + E − (CS×2) + S; stored results in data memory.",
    ],
    tags: ["Verilog", "Computer Architecture", "Assembly"],
    // TODO: Add a repo/demo link when ready
    link: "",
  },
  {
    slug: "led-controller",
    title: "LED Controller",
    category: "Embedded",
    dates: "Spring 2025",
    highlights: [
      "Designed and built an Arduino-based LED controller circuit using a potentiometer to alternate LED colors.",
      "Programmed smooth, low-latency color transitions for a responsive real-time lighting effect.",
    ],
    tags: ["Arduino", "Embedded", "Prototyping"],
    link: "",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Java", "Python", "C++", "Verilog/VHDL", "Assembly", "Swift/SwiftUI (intern experience)"],
  },
  { group: "Hardware & CAD", items: ["Arduino", "Raspberry Pi", "SOLIDWORKS"] },
  { group: "Tools & Platforms", items: ["Linux (Ubuntu)", "Git/GitHub", "VS Code", "Xcode", "MATLAB", "Bash/Zsh"] },
];

export const awards = [
  "U.S. Congress Volunteer Award",
  "Gold President’s Volunteer Service Award",
];
