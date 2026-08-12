import SectionHeading from "@/components/SectionHeading";

interface AboutProps {
  summaries: string[];
  softSkills: string[];
}

export default function About({ summaries, softSkills }: AboutProps) {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-900 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="A brief introduction" />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Summary */}
          <div className="space-y-4 lg:col-span-3">
            {summaries.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base leading-relaxed text-gray-600 dark:text-gray-400"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Soft Skills
              </h3>
              <ul className="space-y-2">
                {softSkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}