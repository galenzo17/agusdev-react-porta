import { component$ } from '@builder.io/qwik';

export const SocialLinks = component$(() => {
  return (
    <div class="fixed bottom-8 right-8 flex gap-4">
      <a
        href="https://github.com/AgustinBereciartua"
        target="_blank"
        class="p-3 bg-gray-800/80 rounded-full hover:bg-purple-500/20 transition-all transform hover:scale-110"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        class="p-3 bg-gray-800/80 rounded-full hover:bg-purple-500/20 transition-all transform hover:scale-110"
      >
        LinkedIn
      </a>
    </div>
  );
});