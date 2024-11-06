import { component$, useContext } from '@builder.io/qwik';
import { LanguageContext } from '../context/LanguageContext';

export const LanguageToggle = component$(() => {
  const languageStore = useContext(LanguageContext);

  return (
    <button
      onClick$={() => languageStore.toggle()}
      class="fixed top-4 right-4 px-4 py-2 bg-gray-800/80 rounded-full hover:bg-purple-500/20 transition-all transform hover:scale-110"
    >
      {languageStore.current === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
    </button>
  );
});