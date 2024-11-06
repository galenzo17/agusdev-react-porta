import { createContextId, component$, Slot, useContextProvider, useStore, $, useVisibleTask$ } from '@builder.io/qwik';

export type Language = 'en' | 'es';

export interface LanguageStore {
  current: Language;
}

export const LanguageContext = createContextId<LanguageStore>('language-context');

export const LanguageProvider = component$(() => {
  const store = useStore<LanguageStore>({
    current: 'en'
  });

  const toggle$ = $(() => {
    store.current = store.current === 'en' ? 'es' : 'en';
  });

  // Set initial language based on browser preference
  useVisibleTask$(() => {
    store.current = navigator.language.startsWith('es') ? 'es' : 'en';
  });

  useContextProvider(LanguageContext, store);

  return (
    <>
      <div class="fixed top-4 right-4">
        <button
          onClick$={toggle$}
          class="px-4 py-2 bg-gray-800/80 rounded-full hover:bg-purple-500/20 transition-all transform hover:scale-110"
        >
          {store.current === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
        </button>
      </div>
      <Slot />
    </>
  );
});