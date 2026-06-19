import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`focus-ring fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-md bg-royal text-white shadow-glow transition dark:bg-skyline dark:text-ink ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <FaArrowUp />
    </a>
  );
}
