import { component$, useContext } from '@builder.io/qwik';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface Experience {
  company: string;
  url: string;
  period: string;
  role: string;
  description: string[];
  stack: string[];
}

const getExperiences = (lang: 'en' | 'es'): Experience[] => [
  {
    company: 'Buk',
    url: 'https://buk.cl/',
    period: lang === 'en' ? 'May 2022 - Present' : 'Mayo 2022 - Diciembre 2024',
    role: translations[lang].companies.buk.role,
    description: translations[lang].companies.buk.description,
    stack: ['NestJS', 'React', 'Python', 'TypeScript', 'Shinkansen', 'Minka', 'Líquido', 'SFTP', 'Cobre.co']
  },
  {
    company: 'Crece.pro',
    url: 'https://web.crece.pro/',
    period: lang === 'en' ? 'October 2021 - Present' : 'Octubre 2021 - Actualidad',
    role: translations[lang].companies.crece.role,
    description: translations[lang].companies.crece.description,
    stack: ['Laravel', 'Vue', 'MySQL', 'Firebase', 'Docker', 'React', 'Flutter', 'SendGrid', 'Twilio', 'MercadoPago']
  },
  {
    company: 'Wolke',
    url: 'https://www.wolke.cl/',
    period: lang === 'en' ? 'March 2019 - September 2021' : 'Marzo 2019 - Septiembre 2021',
    role: translations[lang].companies.wolke.role,
    description: translations[lang].companies.wolke.description,
    stack: ['Node', 'React', '.NET', 'Python', 'MongoDB', 'SQL Server', 'Docker', 'React Native', 'AWS', 'Azure', 'OpenCV', 'TensorFlow']
  },
  {
    company: 'Impotec',
    url: 'https://impotec.cl/',
    period: lang === 'en' ? 'January 2018 - February 2019' : 'Enero 2018 - Febrero 2019',
    role: translations[lang].companies.impotec.role,
    description: translations[lang].companies.impotec.description,
    stack: ['Node', 'React', 'MongoDB', 'MySQL', 'Docker']
  },
  {
    company: 'Pehuén Digital',
    url: 'https://www.pehuendigital.com/',
    period: lang === 'en' ? 'January 2011 - December 2017' : 'Enero 2011 - Diciembre 2017',
    role: translations[lang].companies.pehuen.role,
    description: translations[lang].companies.pehuen.description,
    stack: ['Unity3D', '.NET', 'PostgreSQL']
  }
];

export const Experience = component$(() => {
  const languageStore = useContext(LanguageContext);
  const t = translations[languageStore.current];
  const experiences = getExperiences(languageStore.current);

  return (
    <section class="max-w-4xl mx-auto mb-16">
      <h2 class="text-3xl font-bold mb-8 text-purple-400">{t.experience}</h2>
      <div class="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={exp.company} 
            class="card-interactive bg-gray-800/30 p-6 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold">
                  <a 
                    href={exp.url} 
                    target="_blank" 
                    class="hover:text-purple-400 transition-colors inline-block hover:-translate-y-0.5 transform duration-200"
                  >
                    {exp.company}
                  </a>
                </h3>
                <p class="text-gray-400">{exp.role}</p>
              </div>
              <span class="text-gray-400">{exp.period}</span>
            </div>
            <ul class="list-disc list-inside mb-4 text-gray-300">
              {exp.description.map((desc) => (
                <li key={desc} class="mb-2 hover:text-white transition-colors">{desc}</li>
              ))}
            </ul>
            <div class="flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span 
                  key={tech} 
                  class="px-3 py-1 bg-purple-500/20 rounded-full text-sm hover:bg-purple-500/30 transition-all duration-200 hover:scale-105 transform"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});