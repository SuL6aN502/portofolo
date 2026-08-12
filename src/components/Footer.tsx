export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {currentYear} Sultan Aldossari. All rights reserved.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          Built with{" "}
          <span className="font-medium text-blue-600 dark:text-blue-400">Next.js</span>{" "}
          &{" "}
          <span className="font-medium text-cyan-600 dark:text-cyan-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}