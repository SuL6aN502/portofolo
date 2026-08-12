import { WorkExperience as WorkExperienceType } from "@/types";
import SectionHeading from "@/components/SectionHeading";

interface ExperienceProps {
  experience: WorkExperienceType[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="bg-white py-20 dark:bg-gray-900 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" subtitle="Where I've worked" />

        <div className="space-y-10">
          {experience.map((job, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5 dark:border-gray-700 dark:bg-gray-800/60 sm:p-8"
            >
              {/* Gradient accent bar */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {job.company}
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 whitespace-nowrap">
                  {job.period}
                </span>
              </div>

              <ul className="mt-5 space-y-2">
                {job.description.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}