export interface PersonalInfo {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
}

export interface Education {
  institution: string;
  program: string;
  year: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  award?: string;
  responsibilities?: string[];
  techStack?: string[];
}

export interface Award {
  title: string;
  event: string;
  year: number;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Language {
  language: string;
  level: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  professionalSummary: string[];
  education: Education[];
  workExperience: WorkExperience[];
  technicalSkills: SkillCategory[];
  softSkills: string[];
  projects: Project[];
  awards: Award[];
  languages: Language[];
  additionalSkills: string[];
}