import { Award, Language } from "@/types";
import SectionHeading from "@/components/SectionHeading";

interface AwardsProps {
  awards: Award[];
  languages: Language[];
}

export default function Awards({ awards, languages }: AwardsProps) {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Awards & Languages" subtitle="Achievements and communication" />

        <div className="grid gap-10 sm:grid-cols-2">
          {/* Awards */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <svg className="h-6 w-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Awards
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-900/20"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg dark:bg-amber-900/40">
                      🏆
                    </span>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        {award.title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {award.event}
                      </p>
                      <span className="mt-1 inline-block rounded-full bg-amber-200 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-800/40 dark:text-amber-300">
                        {award.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {awards.length === 0 && (
                <p className="text-sm text-gray-500">No awards listed yet.</p>
              )}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.79.147 2.683.27m0 0c1.313.22 2.614.519 3.9.89" />
              </svg>
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {lang.language}
                    </span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {lang.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}