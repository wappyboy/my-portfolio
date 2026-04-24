import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  FiBarChart2,
  FiCode,
  FiDatabase,
  FiLayers,
  FiSmartphone,
  FiTool,
} from 'react-icons/fi';
import {
  SiCss3,
  SiDart,
  SiDiscord,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGooglesheets,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

type StackGroup = {
  title: string;
  summary: string;
  items: string[];
  icon: typeof FiCode;
};

const coreStack = ['React', 'TypeScript', 'Flutter', 'Laravel', 'Looker Studio'];

const groups: StackGroup[] = [
  {
    title: 'Frontend',
    summary: 'For building responsive interfaces and clean user experiences.',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    icon: FiCode,
  },
  {
    title: 'Mobile and backend',
    summary: 'For app development, business logic, and system support.',
    items: ['Flutter', 'Laravel', 'PHP', 'Python', 'Dart', 'C#', 'Firebase', 'Supabase'],
    icon: FiSmartphone,
  },
  {
    title: 'Data and databases',
    summary: 'For monitoring dashboards, reporting, and data handling.',
    items: ['Looker Studio', 'Google Sheets', 'Power BI', 'SQL', 'PostgreSQL', 'MySQL', 'Excel'],
    icon: FiBarChart2,
  },
  {
    title: 'Tools and workflow',
    summary: 'For collaboration, version control, and daily development work.',
    items: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'CI/CD', 'Discord'],
    icon: FiTool,
  },
];

const techIcons: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  Flutter: SiFlutter,
  Laravel: SiLaravel,
  PHP: SiPhp,
  Python: SiPython,
  Dart: SiDart,
  'C#': FiCode,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  'Looker Studio': FiBarChart2,
  'Google Sheets': SiGooglesheets,
  'Power BI': FiBarChart2,
  SQL: FiDatabase,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Excel: FiBarChart2,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': FiCode,
  'Visual Studio': FiCode,
  'CI/CD': FiTool,
  Discord: SiDiscord,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const TechStack = () => (
  <section
    data-aos="fade-up"
    data-aos-delay="220"
    className="section-shell"
    id="tech"
  >
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <span className="section-kicker">Tech stack</span>
        <h2 className="section-title mt-5">
          Tools I use to build apps, systems, and dashboards.
        </h2>
      </div>
      <p className="section-copy max-w-xl">
        My stack is easy to group into four parts: frontend, backend and
        mobile, data, and workflow tools.
      </p>
    </div>

    <motion.div
      className="mb-5 glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      custom={0.05}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent)]">
            <FiLayers />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Main stack
            </p>
            <h3 className="mt-1 text-xl font-semibold text-[var(--color-text)]">
              Tools I use the most
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {coreStack.map((item) => {
            const Icon = techIcons[item] ?? FiCode;

            return (
              <motion.span
                key={item}
                className="premium-label"
                whileHover={{ y: -2 }}
              >
                <Icon />
                {item}
              </motion.span>
            );
          })}
        </div>
      </div>
    </motion.div>

    <div className="grid gap-4 md:grid-cols-2">
      {groups.map(({ title, summary, items, icon: Icon }, groupIndex) => (
        <motion.article
          key={title}
          className="glass-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.12 + groupIndex * 0.08}
        >
          <div className="flex items-start gap-4">
            <span className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent)]">
              <Icon />
            </span>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                {summary}
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {items.map((item) => {
              const ItemIcon = techIcons[item] ?? FiCode;

              return (
                <motion.div
                  key={item}
                  className="soft-panel flex items-center gap-3"
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <span className="rounded-xl bg-[var(--color-accent-soft)] p-2.5 text-[var(--color-accent)]">
                    <ItemIcon />
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-text)]">
                    {item}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.article>
      ))}
    </div>

    <motion.div
      className="mt-5 glass-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      custom={0.44}
    >
      <div className="flex items-start gap-4">
        <span className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent)]">
          <FiDatabase />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            How I use them
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-text)]">
            I usually start with the interface, connect the needed backend or
            data source, then refine the product until it feels clear and ready
            to use.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);
