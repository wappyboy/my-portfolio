import { motion } from 'framer-motion';
import {
  FiAward,
  FiArrowDownRight,
  FiArrowUpRight,
  FiBriefcase,
  FiMapPin,
} from 'react-icons/fi';

const awards = [
  'Best Programmer Award',
  'Best in Thesis Award',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const HeroSection = () => (
  <motion.section
    id="hero"
    className="section-shell py-8 sm:py-10 lg:py-12"
    initial="hidden"
    animate="visible"
  >
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-10 top-12 h-40 w-40 rounded-full bg-[var(--color-accent-soft)] blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-8 top-10 h-48 w-48 rounded-full bg-[rgba(45,127,115,0.12)] blur-3xl dark:bg-[rgba(111,143,255,0.16)]"
        animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>

    <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
      <div className="max-w-3xl">
        <motion.div variants={fadeUp} custom={0.05}>
          <span className="premium-label">Open to full-stack and dashboard roles</span>
        </motion.div>

        <motion.p
          className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]"
          variants={fadeUp}
          custom={0.12}
        >
          Ralph E. Eco
        </motion.p>

        <motion.h1
          className="section-title mt-4 max-w-4xl text-4xl sm:text-5xl lg:text-[4.2rem] lg:leading-[1.04]"
          variants={fadeUp}
          custom={0.18}
        >
          Full-stack developer building scalable web apps and data-driven dashboards.
        </motion.h1>

        <motion.p
          className="section-copy mt-6 max-w-2xl text-base sm:text-lg"
          variants={fadeUp}
          custom={0.26}
        >
          I build modern web, mobile, and reporting experiences with clear UI
          and practical execution.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          variants={fadeUp}
          custom={0.34}
        >
          <a href="#projects" className="primary-button">
            View projects
            <FiArrowDownRight />
          </a>
          <a
            href="mailto:ralpheco6@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Ralph%2C%20I%20would%20like%20to%20connect%20with%20you."
            className="secondary-button"
          >
            Contact me
            <FiArrowUpRight />
          </a>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-3 sm:max-w-xl sm:grid-cols-2"
          variants={fadeUp}
          custom={0.42}
        >
          <div className="soft-panel flex items-center gap-3">
            <span className="rounded-xl bg-[var(--color-accent-soft)] p-2.5 text-[var(--color-accent)]">
              <FiMapPin />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Based in
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">
                Paranaque City, Philippines
              </p>
            </div>
          </div>

          <div className="soft-panel flex items-center gap-3">
            <span className="rounded-xl bg-[var(--color-accent-soft)] p-2.5 text-[var(--color-accent)]">
              <FiBriefcase />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Status
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">
                Open to full-time roles and freelance work
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="glass-card lg:ml-auto lg:w-full lg:max-w-[25rem]"
        variants={fadeUp}
        custom={0.22}
        whileHover={{ y: -4 }}
      >
        <div className="flex flex-col gap-5 sm:gap-6">
          <motion.div
            className="relative mx-auto h-48 w-48 overflow-hidden rounded-[2rem] border border-white/25 bg-[var(--color-accent-soft)] shadow-xl"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
            <img
              src="/formal2.png"
              alt="Portrait of Ralph E. Eco"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <div className="border-b border-[var(--color-border)] pb-5 text-center">
            <p className="text-xl font-semibold text-[var(--color-text)]">
              Ralph E. Eco
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Full-Stack Developer
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Recognitions
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--color-text)]">
              Awarded for programming and thesis excellence.
            </h2>
          </div>

          <div className="grid gap-3">
            {awards.map((award, index) => (
              <motion.div
                key={award}
                className="soft-panel flex items-center gap-3"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.34 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -3 }}
              >
                <span className="rounded-xl bg-[var(--color-accent-soft)] p-2.5 text-[var(--color-accent)]">
                  <FiAward />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)]">
                    {award}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    2025
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);
