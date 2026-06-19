import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import { Section } from './Section';

export function Projects() {
  const filters = ['All', ...new Set(projects.map((project) => project.category))];
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? projects : projects.filter((project) => project.category === active);

  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Backend projects with clear responsibilities and business context."
      description="Each project card highlights stack, API ownership, security work, database responsibilities, and recruiter-friendly outcomes."
      className="bg-paper dark:bg-slate-950"
    >
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`focus-ring rounded-md px-4 py-2 text-sm font-bold transition ${
              active === filter
                ? 'bg-royal text-white dark:bg-skyline dark:text-ink'
                : 'bg-white text-slate-700 hover:text-royal dark:bg-panel dark:text-slate-200 dark:hover:text-skyline'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 lg:grid-cols-2">
        <AnimatePresence>
          {visible.map((project) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="card overflow-hidden rounded-lg"
            >
              <div className="aspect-[16/8] overflow-hidden">
                <img src={project.image} alt={`${project.title} visual`} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="eyebrow">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-extrabold text-ink dark:text-paper">{project.title}</h3>
                  </div>
                  {/* <div className="flex gap-2">
                    <a href={project.github} aria-label={`${project.title} GitHub`} className="focus-ring grid h-10 w-10 place-items-center rounded-md bg-slate-100 text-slate-700 transition hover:bg-royal hover:text-white dark:bg-white/10 dark:text-slate-200 dark:hover:bg-skyline dark:hover:text-ink">
                      <FaGithub />
                    </a>
                    <a href={project.demo} aria-label={`${project.title} live demo`} className="focus-ring grid h-10 w-10 place-items-center rounded-md bg-slate-100 text-slate-700 transition hover:bg-royal hover:text-white dark:bg-white/10 dark:text-slate-200 dark:hover:bg-skyline dark:hover:text-ink">
                      <FaExternalLinkAlt />
                    </a>
                  </div> */}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-md bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-extrabold text-ink dark:text-paper">Key Features</h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-ink dark:text-paper">Responsibilities</h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {project.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
