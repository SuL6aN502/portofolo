import { SkillCategory } from "@/types";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";

interface SkillsProps {
  skillCategories: SkillCategory[];
  additionalSkills: string[];
}

export default function Skills({ skillCategories, additionalSkills }: SkillsProps) {
  return (
    <section id="skills" className="bg-gray-50 py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        {additionalSkills.length > 0 && (
          <div className="mt-10 text-center">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Additional Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {additionalSkills.map((skill) => (
                <SkillBadge key={skill} skill={skill} variant="soft" />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}