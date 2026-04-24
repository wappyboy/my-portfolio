import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'dark') {
    return true;
  }

  if (storedTheme === 'light') {
    return false;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      return;
    }

    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((value) => !value)}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-strong)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] shadow-sm hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
      {isDark ? 'Light mode' : 'Dark mode'}
    </button>
  );
};
