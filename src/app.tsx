import { component$ } from '@builder.io/qwik';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { SocialLinks } from './components/SocialLinks';
import { MouseFollow } from './components/MouseFollow';
import './app.css';

export const App = component$(() => {
  return (
    <LanguageProvider>
      <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 relative overflow-hidden">
        <MouseFollow />
        <div class="relative z-10">
          <Header />
          <Experience />
          <Skills />
          <SocialLinks />
        </div>
      </div>
    </LanguageProvider>
  );
});