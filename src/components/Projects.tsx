import { Project } from "@/types";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-900 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Projects" subtitle="What I've built" />

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5 dark:border-gray-700 dark:bg-gray-800/60"
            >
              {/* Header */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  {project.award && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700 whitespace-nowrap dark:bg-amber-900/30 dark:text-amber-300">
                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {project.award}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-end p-6 pt-4">
                {/* Responsibilities */}
                {project.responsibilities && project.responsibilities.length > 0 && (
                  <div className="mb-4">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Responsibilities
                    </h4>
                    <ul className="space-y-1">
                      {project.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-1.5 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <svg
                            className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                {project.techStack && project.techStack.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <SkillBadge key={tech} skill={tech} variant="soft" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}