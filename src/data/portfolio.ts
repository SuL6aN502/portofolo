import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  personalInfo: {
    fullName: "Sultan Aldossari",
    phone: "0548558862 / +966548558862",
    email: "sultanaldossari21@gmail.com",
    location: "AlKharj, Riyadh, 16276",
    linkedin: "linkedin.com/in/sultan-al-dosari",
  },
  professionalSummary: [
    "Front-end developer working on diverse projects, passionate about coding since age 15. Focuses on developing a programming mindset rooted in logic and effective use of technology.",
    "Computer Science student with experience in data entry, Microsoft Office, and Front-End Development. Fast learner with strong communication and teamwork skills. Seeking full-time/part-time summer job in Riyadh or part-time position in Al-Kharj.",
  ],
  education: [
    {
      institution: "Prince Sattam University",
      program: "Bachelor of Computer Science (4th Semester)",
      year: "2024 - Present",
    },
    {
      institution: "Tuwaq Academy",
      program: "Web with HTML CSS JS Bootcamp (180H)",
      year: "2023",
    },
    {
      institution: "Tuwaq Academy",
      program: "HTML CSS Course (60H)",
      year: "2023",
    },
    {
      institution: "Tuwaq Academy",
      program: "HTML CSS Course (2 weeks)",
      year: "2023",
    },
  ],
  workExperience: [
    {
      title: "Volunteer Front-End Developer",
      company:
        "Association for Preaching, Guidance and Awareness of Communities in Rabwah",
      period: "March 2025 - Present (50+ hours)",
      description: [
        "Developed features for web applications",
        "Implemented UI/UX designs",
        "Assisted with permission management",
        "Performed unit testing",
        "Collaborated on technology selection",
        "Used best practices and selected optimal technology for projects",
      ],
    },
    {
      title: "Data Entry Operator",
      company:
        "Ejada Office for Copying, Photocopying and Electronic Services",
      period: "June 2022 - October 2022",
      description: [
        "Entered client data on government apps",
        "Entered and managed data using Microsoft Word and Excel",
        "Prepared reports and documents",
        "Created professional resumes",
        "Assisted customers with basic IT issues",
        "Learned to deal with colleagues in a professional manner",
        "Learned punctuality with dates",
      ],
    },
  ],
  technicalSkills: [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "C++", "Java"],
    },
    {
      category: "Front-End Technologies",
      skills: [
        "React",
        "Redux / Zustand",
        "HTML5",
        "CSS3",
        "SCSS/Sass",
        "Tailwind CSS",
        "React Router",
        "React Hook Form",
        "Jest (Testing Framework)",
      ],
    },
    {
      category: "Back-End Technologies",
      skills: ["Express.js", "MongoDB", "Mongoose", "MySQL"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git & GitHub", "Axios (API communication)", "Figma (UI/UX Design)"],
    },
    {
      category: "Marketing & Analytics",
      skills: [
        "Marketing",
        "Adjust",
        "OneSignal",
        "App Analytics",
        "Push Notifications",
        "Campaign Management",
      ],
    },
    {
      category: "Concepts & Practices",
      skills: [
        "TDD (Test-Driven Development)",
        "Unit Testing",
        "Responsive Design",
        "Accessibility",
        "API Integration",
        "State Management",
        "UI/UX Principles",
      ],
    },
  ],
  softSkills: [
    "Leadership",
    "Presentation Skills & Public Speaking",
    "Skill in Explanation",
    "Teamwork",
    "Fast Learning",
    "Communication",
    "Communications Skills",
    "Problem Solving",
  ],
  projects: [
    {
      name: "Tabibi",
      description:
        "First experience realizing how design before programming can influence a project. A healthcare-related web application.",
      award: "3rd Place in Junior Web App Challenge (2024)",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      name: "Dawa Rabwah Library",
      description:
        "Protected library CRUD application built with React, Tailwind, React Router, Zustand, and React Hook Form. Enables the Association to manage classifiers, authors, publishers, users, and classifications.",
      responsibilities: [
        "UI/UX design in Figma",
        "Dynamic component creation",
        "API integration",
        "Permissions management",
        "Testing",
      ],
      techStack: [
        "React",
        "Tailwind CSS",
        "React Router",
        "Zustand",
        "React Hook Form",
        "Figma",
      ],
    },
  ],
  awards: [
    {
      title: "3rd Place",
      event: "Junior Web App Challenge / Challenge of Web Applications",
      year: 2024,
    },
  ],
  languages: [
    { language: "Arabic", level: "Native/Mother Tongue" },
    { language: "English", level: "Intermediate (B2 Level)" },
  ],
  additionalSkills: [
    "Microsoft Office (Word, Excel, PowerPoint)",
    "Computer Hardware & Software Troubleshooting",
  ],
};