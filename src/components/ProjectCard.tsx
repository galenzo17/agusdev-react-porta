import { component$ } from '@builder.io/qwik';

interface Project {
  title: string;
  description: string;
  tech: string[];
}

export const ProjectCard = component$<{ project: Project; delay: number }>(({ project, delay }) => {
  return (
    <div
      class={`bg-gray-800/50 p-6 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300
        opacity-0 animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 class="text-2xl font-semibold mb-2">{project.title}</h3>
      <p class="text-gray-300 mb-4">{project.description}</p>
      <div class="flex gap-2">
        {project.tech.map((tech) => (
          <span key={tech} class="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
});