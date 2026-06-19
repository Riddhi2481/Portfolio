import { motion } from 'framer-motion';
import { FaBuilding, FaCheckCircle } from 'react-icons/fa';
import { experience } from '../data/portfolio';
import { Section } from './Section';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience Timeline"
      title="Professional backend delivery at Ananta Services."
      description="A focused timeline of enterprise backend work, API development, database optimization, secure authentication, and Agile collaboration."
      className="bg-white dark:bg-ink"
    >
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-200 sm:block dark:bg-white/10" />
        {experience.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="relative mb-6 sm:pl-16"
          >
            <div className="absolute left-0 top-6 hidden h-10 w-10 place-items-center rounded-md bg-royal text-white shadow-glow sm:grid dark:bg-skyline dark:text-ink">
              <FaBuilding />
            </div>
            <div className="card rounded-lg p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-ink dark:text-paper">{item.role}</h3>
                  <p className="mt-1 text-lg font-bold text-royal dark:text-skyline">{item.company}</p>
                </div>
                <span className="rounded-md bg-slate-100 px-4 py-2 font-mono text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                  {item.duration}
                </span>
              </div>
              <ul className="mt-6 grid gap-3">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <FaCheckCircle className="mt-1.5 shrink-0 text-royal dark:text-skyline" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
