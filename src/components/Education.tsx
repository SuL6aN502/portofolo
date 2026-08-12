import { Education as EducationType } from "@/types";
import SectionHeading from "@/components/SectionHeading";

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="bg-gray-50 py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="My academic journey" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 md:left-1/2 md:-translate-x-0.5" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col gap-2 pl-12 md:w-1/2 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right md:ml-0"
                    : "md:pl-12 md:text-left md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2 top-1.5 h-4 w-4 rounded-full border-2 border-blue-500 bg-white dark:bg-gray-900 ${
                    index % 2 === 0
                      ? "md:left-auto md:right-[-9px]"
                      : "md:left-[-9px]"
                  }`}
                />

                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <span className="inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {item.year}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {item.program}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {item.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}