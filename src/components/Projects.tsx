import { FocusCards } from "@/components/ui/focus-cards";
import projectsData from "@/data/projects.json";

export default function Projects() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <FocusCards cards={projectsData} />
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-2">
          Want to see more projects?
        </p>
        <a
          href="https://github.com/hrishi0102?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-white text-sm bg-black rounded-full hover:bg-gray-800 transition"
        >
          See More on GitHub
        </a>
      </div>
    </section>
  );
}
