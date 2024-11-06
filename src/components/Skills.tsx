import { component$, useContext } from '@builder.io/qwik';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const getSkills = (t: typeof translations.en) => [
  { 
    category: t.languages, 
    items: ['TypeScript', 'Node', 'Ruby', 'Python', 'React', '.NET', 'PHP', 'Rust']
  },
  { 
    category: t.databases, 
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'Firebase']
  },
  { 
    category: t.tools, 
    items: ['Docker', 'Linux', 'AWS', 'Azure', 'Netlify', 'Git', 'Bash']
  },
  { 
    category: t.frameworks, 
    items: ['React Native', 'Flutter', 'Rails', 'Laravel', 'NestJS', 'Unity3D']
  },
  {
    category: t.other,
    items: ['TDD', 'Scrum', 'CI/CD', 'Machine Learning', 'OpenCV', 'TensorFlow']
  }
];

export const Skills = component$(() => {
  const languageStore = useContext(LanguageContext);
  const t = translations[languageStore.current];
  const skills = getSkills(t);

  return (
    <section class="max-w-4xl mx-auto mb-16">
      <h2 class="text-3xl font-bold mb-8 text-purple-400">{t.skills}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((category, categoryIndex) => (
          <div 
            key={category.category} 
            class="card-interactive bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
            style={{ animationDelay: `${categoryIndex * 100}ms` }}
          >
            <h3 class="text-xl font-semibold mb-4 hover:text-purple-400 transition-colors">{category.category}</h3>
            <div class="flex flex-wrap gap-2">
              {category.items.map((skill, index) => (
                <span
                  key={skill}
                  class="px-3 py-1 bg-purple-500/20 rounded-full text-sm hover:bg-purple-500/30 transition-all duration-200 hover:scale-105 transform cursor-default"
                  style={{ animationDelay: `${(categoryIndex * 100) + (index * 50)}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});