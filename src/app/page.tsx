import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const {
    personalInfo,
    professionalSummary,
    education,
    workExperience,
    technicalSkills,
    softSkills,
    projects,
    awards,
    languages,
    additionalSkills,
  } = portfolioData;

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero personalInfo={personalInfo} />
        <About summaries={professionalSummary} softSkills={softSkills} />
        <Education education={education} />
        <Experience experience={workExperience} />
        <Skills
          skillCategories={technicalSkills}
          additionalSkills={additionalSkills}
        />
        <Projects projects={projects} />
        <Awards awards={awards} languages={languages} />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer />
    </div>
  );
}