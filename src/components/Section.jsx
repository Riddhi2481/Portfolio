import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      {(eyebrow || title || description) && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.55 }}
          className="mb-10 max-w-3xl"
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2 className="mt-3 text-3xl font-extrabold text-ink dark:text-paper sm:text-4xl">{title}</h2>}
          {description && <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>}
        </motion.div>
      )}
      {children}
    </section>
  );
}

export const reveal = fadeUp;
