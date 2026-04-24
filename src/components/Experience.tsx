type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: 'Technical Support (Data and Reporting)',
    company: 'TESDA',
    period: 'Jul 2025 - Present',
    type: 'Current role',
    summary:
      'Support monitoring, reporting, and operational visibility by organizing data and building dashboards that help stakeholders follow program activity more clearly.',
    highlights: [
      'Developed monitoring dashboards in Looker Studio backed by Google Sheets for TESDA reporting workflows.',
      'Built reporting views for trainers and TTI programs across the Philippines from 2025 to the present.',
      'Created an Agrostudies internship dashboard to track applicant deployment status and intern monitoring in Israel.',
      'Supported the Adopt-A-School Program by building a dashboard for its menu of investment reporting.',
    ],
    stack: ['Looker Studio', 'Google Sheets', 'Reporting', 'Dashboard Monitoring'],
  },
  {
    role: 'DevOps Engineer Intern',
    company: 'Blackbeard Talent Agency',
    period: 'Jun 2024 - Aug 2024',
    type: 'Internship',
    summary:
      'Contributed to mobile product delivery by working across app features, release setup, cloud tooling, and platform support.',
    highlights: [
      'Built a Flutter app for BeybladeX tournament management with community and ranking functionality.',
      'Integrated automated brackets and ranking workflows through the Challonge API.',
      'Configured CI/CD support for iOS and Android deployment.',
      'Handled authentication, sync, and infrastructure-related work using Firebase and supporting tools.',
    ],
    stack: ['Flutter', 'Firebase', 'CI/CD', 'Challonge API'],
  },
];

export const Experience = () => (
  <section
    data-aos="fade-up"
    data-aos-delay="140"
    className="section-shell"
    id="experience"
  >
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <span className="section-kicker">Experience</span>
        <h2 className="section-title mt-5">
          Professional experience shaped by delivery, systems thinking, and reporting.
        </h2>
      </div>
      <p className="section-copy max-w-xl">
        My work spans user-facing product development and operational reporting,
        which gives me a balanced view of both engineering execution and
        stakeholder needs.
      </p>
    </div>

    <div className="relative">
      <div className="timeline-line absolute left-[17px] top-4 hidden h-[calc(100%-2rem)] w-px lg:block" />
      <div className="grid gap-5">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="glass-card relative lg:ml-10"
          >
            <div className="absolute -left-[3.2rem] top-8 hidden h-4 w-4 rounded-full border-4 border-[var(--color-surface-strong)] bg-[var(--color-accent)] lg:block" />
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="border-b border-[var(--color-border)] pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                <span className="premium-label">{experience.type}</span>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-text)]">
                  {experience.role}
                </h3>
                <p className="mt-2 text-base font-medium text-[var(--color-muted)]">
                  {experience.company}
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {experience.period}
                </p>
                <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                  {experience.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  What I handled
                </p>
                <ul className="mt-4 space-y-3">
                  {experience.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-3 text-sm leading-7 text-[var(--color-text)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
