import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowUpRight, FiMail, FiMessageSquare, FiPhone } from 'react-icons/fi';

const email = 'ralpheco6@gmail.com';
const phone = '+639517065600';

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ralph-eco-44b138284/',
    label: 'Professional profile',
    handle: '/in/ralph-eco-44b138284',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/wappyboy',
    label: 'Code and project work',
    handle: '@wappyboy',
    icon: FaGithub,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/wappywapp2/',
    label: 'Direct social contact',
    handle: 'wappywapp2',
    icon: FaFacebook,
  },
];

export const Contact = () => (
  <section
    data-aos="fade-up"
    data-aos-delay="360"
    className="section-shell"
    id="contact"
  >
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <span className="section-kicker">Contact</span>
        <h2 className="section-title mt-5">
          Ready for conversations about roles, teams, and product work.
        </h2>
      </div>
      <p className="section-copy max-w-xl">
        If you&apos;re hiring for frontend, full-stack, or dashboard-focused work,
        I&apos;m open to discussing where I can contribute.
      </p>
    </div>

    <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="glass-card">
        <div className="flex items-start gap-4">
          <span className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent)]">
            <FiMessageSquare />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Let&apos;s connect
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-[var(--color-text)]">
              A portfolio should make the next step easy.
            </h3>
          </div>
        </div>

        <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
          I&apos;m interested in opportunities where thoughtful UI, strong
          execution, and practical engineering matter. If that sounds aligned
          with your team, I&apos;d be glad to talk.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${email}`} className="primary-button">
            Email me
            <FiMail />
          </a>
          <a href={`tel:${phone}`} className="secondary-button">
            Call me
            <FiPhone />
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a href={`mailto:${email}`} className="soft-panel block hover:-translate-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Email
            </p>
            <p className="mt-3 text-base font-semibold text-[var(--color-text)]">
              {email}
            </p>
          </a>

          <a href={`tel:${phone}`} className="soft-panel block hover:-translate-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Phone
            </p>
            <p className="mt-3 text-base font-semibold text-[var(--color-text)]">
              {phone}
            </p>
          </a>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="glass-card">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Best fit
          </p>
          <p className="mt-3 text-lg leading-8 text-[var(--color-text)]">
            Teams looking for modern frontend implementation, clean product
            presentation, and reliable support across full-stack or reporting
            work.
          </p>
        </div>

        <div className="glass-card">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Social links
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              Reach me where you prefer
            </p>
          </div>

          <div className="mt-5 space-y-3">
            {socials.map(({ name, url, label, handle, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Ralph's ${name}`}
                className="soft-panel flex items-center justify-between gap-4 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <span className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-lg text-[var(--color-accent)]">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)]">
                      {name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {label}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm font-medium text-[var(--color-text)]">
                    {handle}
                  </p>
                  <FiArrowUpRight className="ml-auto mt-2 text-[var(--color-muted)]" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
