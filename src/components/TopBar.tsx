import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { ThemeToggle } from './ThemeToggle';

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const navMotionTransition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1] as const,
};

const getInitialHash = () => {
  if (typeof window === 'undefined') {
    return '#about';
  }

  return window.location.hash || '#about';
};

const scrollToSection = (href: string) => {
  const target = document.querySelector(href);

  if (!(target instanceof HTMLElement)) {
    return;
  }

  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState(null, '', href);
};

const TopBarNavItem = ({
  href,
  isActive,
  label,
  onNavigate,
  clickNonce,
  lastClickedHref,
}: NavItem & {
  clickNonce: number;
  isActive: boolean;
  lastClickedHref: string | null;
  onNavigate: (href: string) => void;
}) => (
  <motion.a
    href={href}
    className={`relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium ${
      isActive ? 'text-[var(--color-text)]' : 'text-[var(--color-muted)]'
    }`}
    transition={navMotionTransition}
    whileHover={{ y: -1 }}
    whileTap={{ scale: 0.96 }}
    onClick={(event) => {
      event.preventDefault();
      onNavigate(href);
    }}
  >
    {lastClickedHref === href ? (
      <motion.span
        key={`${href}-${clickNonce}`}
        className="absolute inset-0 rounded-full bg-[var(--color-accent-soft)]"
        initial={{ opacity: 0.35, scale: 0.92 }}
        animate={{ opacity: 0, scale: 1.08 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
    ) : null}
    <motion.span
      className="absolute inset-0 rounded-full bg-[var(--color-surface-strong)]"
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.92,
        borderWidth: isActive ? 1 : 0,
      }}
      style={{ borderColor: 'var(--color-border)' }}
      transition={navMotionTransition}
    />
    <motion.span
      className="absolute inset-0 rounded-full bg-[var(--color-surface-strong)]/70"
      initial={false}
      whileHover={{ opacity: isActive ? 0 : 1, scale: 1 }}
      animate={{ opacity: 0, scale: 0.96 }}
      transition={navMotionTransition}
    />
    <motion.span
      className="relative z-10"
      animate={{ letterSpacing: isActive ? '0.01em' : '0em' }}
      transition={navMotionTransition}
    >
      {label}
    </motion.span>
    {isActive ? (
      <motion.span
        layoutId="topbar-active-glow"
        className="absolute -bottom-1 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/70 blur-[1px]"
        transition={navMotionTransition}
      />
    ) : null}
  </motion.a>
);

export const TopBar = () => {
  const [activeHref, setActiveHref] = useState(getInitialHash);
  const [clickNonce, setClickNonce] = useState(0);
  const [lastClickedHref, setLastClickedHref] = useState<string | null>(null);

  useEffect(() => {
    const onHashChange = () => {
      setActiveHref(window.location.hash || '#about');
    };

    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('hashchange', onHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  const handleNavigate = (href: string) => {
    setActiveHref(href);
    setLastClickedHref(href);
    setClickNonce((value) => value + 1);
    scrollToSection(href);
  };

  return (
    <header className="topbar-shell">
      <div className="flex items-center justify-between gap-4">
        <motion.a
          href="#hero"
          className="min-w-0"
          transition={navMotionTransition}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          onClick={(event) => {
            event.preventDefault();
            handleNavigate('#hero');
          }}
        >
          <p className="truncate text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Ralph E. Eco
          </p>
          <p className="truncate text-sm text-[var(--color-text)]">
            Full-Stack Developer
          </p>
        </motion.a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <TopBarNavItem
              key={item.href}
              {...item}
              clickNonce={clickNonce}
              isActive={activeHref === item.href}
              lastClickedHref={lastClickedHref}
              onNavigate={handleNavigate}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href="#contact"
            className="hidden sm:inline-flex primary-button"
            transition={navMotionTransition}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={(event) => {
              event.preventDefault();
              handleNavigate('#contact');
            }}
          >
            Hire me
            <FiArrowUpRight />
          </motion.a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
