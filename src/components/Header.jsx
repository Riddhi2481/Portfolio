import { useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { navItems, profile } from '../data/portfolio';

export function Header({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = (
    <>
      {navItems.map(([label, id]) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => setOpen(false)}
          className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-royal dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-skyline"
        >
          {label}
        </a>
      ))}
    </>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'bg-white/90 shadow-sm backdrop-blur-xl dark:bg-ink/90' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-royal text-lg font-extrabold text-white shadow-glow dark:bg-skyline dark:text-ink">
            RT
          </span>
          <span>
            <span className="block text-sm font-extrabold text-ink dark:text-paper">{profile.name}</span>
            <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">Backend Java Developer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">{nav}</div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-royal hover:text-royal dark:border-white/10 dark:bg-panel dark:text-slate-200 dark:hover:border-skyline dark:hover:text-skyline"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 lg:hidden dark:border-white/10 dark:bg-panel dark:text-slate-200"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl lg:hidden dark:border-white/10 dark:bg-ink">
          <div className="mx-auto grid max-w-7xl gap-1">{nav}</div>
        </div>
      )}
    </header>
  );
}
