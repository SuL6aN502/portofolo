interface SkillBadgeProps {
  skill: string;
  variant?: "default" | "soft";
}

export default function SkillBadge({ skill, variant = "default" }: SkillBadgeProps) {
  const baseClasses =
    "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors duration-200";

  const variantClasses =
    variant === "soft"
      ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700";

  return <span className={`${baseClasses} ${variantClasses}`}>{skill}</span>;
}