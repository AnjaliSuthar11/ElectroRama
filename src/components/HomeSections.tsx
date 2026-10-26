import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/content/site";
import Logo from "@/components/Logo";

/* ------------------------------------------------------------------ */
/*  HERO + PARTNERS + STATS (one shared dark gradient backdrop)        */
/* ------------------------------------------------------------------ */
export function HeroBlock() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy">
      {/* cinema image backdrop */}
      <img
        src={SITE.hero.image}
        alt="Cinema auditorium with immersive AV"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-primary-glow/40" />

      <div className="relative mx-auto max-w-7xl px-4 pt-36 pb-12 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl leading-tight font-bold text-primary-foreground sm:text-5xl lg:text-5xl">
            {SITE.hero.titleLine1}
            
            {SITE.hero.titleLine2}
            <br />
            <span className=" text-gradient-brand">{SITE.hero.highlight}</span>
         
            {SITE.hero.titleLine3}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            {SITE.hero.description}
          </p>

          {/* credential badges */}
          <div className="mt-7 flex flex-wrap gap-3">
            {SITE.hero.badges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm"
              >
                <span className="flex size-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-glow">
                  <badge.icon className="size-4 text-white" />
                </span>
                <span className="text-xs leading-tight font-semibold text-white">
                  {badge.title}
                  <span className="block text-[10px] font-normal text-white/60">{badge.subtitle}</span>
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_oklch(0.62_0.22_300/0.7)] transition-transform hover:scale-[1.03]"
            >
              {SITE.hero.primaryCta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              {SITE.hero.secondaryCta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* partners card */}
        <div id="brands" className="mt-16 rounded-2xl bg-card p-6 shadow-2xl shadow-black/40 sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex w-full max-w-[200px] shrink-0 items-start gap-3">
              <span className="mt-1 h-8 w-1 rounded-full bg-gradient-to-b from-primary to-primary-glow" />
              <p className="text-sm leading-snug font-semibold text-navy">{SITE.partners.title}</p>
            </div>
            <div className="grid flex-1 grid-cols-2 items-center gap-x-6 gap-y-7 sm:grid-cols-3 md:grid-cols-5">
              {SITE.partners.logos.map((logo) => (
                <span key={logo.name} className={`text-center text-base whitespace-nowrap ${logo.className}`}>
                  {logo.name}
                </span>
              ))}
            </div>
            <a
              href="#solutions"
              className="shrink-0 text-center text-xs font-medium text-muted-foreground underline-offset-4 hover:underline"
            >
              {SITE.partners.viewAll}
            </a>
          </div>
        </div>

        {/* stats */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {SITE.stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`flex items-center gap-4 lg:justify-center ${i > 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""}`}
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_24px_-4px_oklch(0.62_0.22_300/0.6)]">
                <stat.icon className="size-5 text-white" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs leading-snug text-white/70">
                  {stat.label[0]}
                  {stat.label[1] && (
                    <>
                      <br />
                      {stat.label[1]}
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SOLUTIONS                                                          */
/* ------------------------------------------------------------------ */
export function Solutions() {
  return (
    <section id="solutions" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              {SITE.solutionsSection.title}
              <span className="text-gradient-brand">{SITE.solutionsSection.highlight}</span>
            </h2>
            <span className="mt-3 block h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-glow" />
          </div>
          <p className="max-w-md text-sm text-muted-foreground">{SITE.solutionsSection.subtitle}</p>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-input px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-accent"
          >
            {SITE.solutionsSection.viewAll}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="flex gap-2">
          {SITE.solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative flex min-h-[240px] flex-col overflow-hidden rounded-2xl p-7 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1.5"
              style={{ background: solution.gradient }}
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                <solution.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{solution.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{solution.description}</p>
              <span className="mt-auto flex size-9 items-center justify-center rounded-full bg-white/15 pt-1 transition-all group-hover:bg-white/25">
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FEATURED PROJECTS                                                  */
/* ------------------------------------------------------------------ */
export function Projects() {
  return (
    <section id="projects" className="bg-muted/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              {SITE.projectsSection.title}
              <span className="text-gradient-brand">{SITE.projectsSection.highlight}</span>
            </h2>
            <span className="mt-3 block h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-glow" />
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-input px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-accent"
          >
            {SITE.projectsSection.viewAll}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SITE.projects.map((project) => (
            <div key={project.name} className="group">
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-display font-semibold text-navy">{project.name}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="size-3.5 text-primary" />
                {project.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  WHY CHOOSE                                                         */
/* ------------------------------------------------------------------ */
export function WhyChoose() {
  return (
    <section id="why-choose" className="bg-navy py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_2.2fr] lg:gap-8 lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {SITE.whyChoose.title}
            <br />
            <span className="text-gradient-brand">{SITE.whyChoose.highlight}</span>
          </h2>
          <span className="mt-3 block h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-glow" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {SITE.whyChoose.items.map((item) => (
            <div key={item.title} className="flex flex-col items-start gap-3 lg:items-center lg:text-center">
              <span className="flex size-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                <item.icon className="size-5 text-primary" />
              </span>
              <h3 className="text-sm leading-snug font-semibold text-white">{item.title}</h3>
              <p className="text-xs leading-relaxed text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PROCESS                                                            */
/* ------------------------------------------------------------------ */
export function Process() {
  return (
    <section id="process" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            {SITE.process.title}
            <span className="text-gradient-brand">{SITE.process.highlight}</span>
          </h2>
          <span className="mt-3 block h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-glow" />
        </div>

        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* dashed connector */}
          <div className="absolute top-10 right-[10%] left-[10%] hidden border-t-2 border-dashed border-primary/30 lg:block" />
          {SITE.process.steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <span className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-white shadow-[0_10px_30px_-8px_oklch(0.62_0.22_300/0.55)]">
                <step.icon className="size-8" />
              </span>
              <span className="mt-4 font-display text-lg font-bold text-primary">{step.number}</span>
              <h3 className="mt-1 font-display text-sm font-bold text-navy">{step.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                            */
/* ------------------------------------------------------------------ */
const fieldCls =
  "h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-navy py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* left pitch */}
        <div>
          <h2 className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl">
            {SITE.contact.title}
            <br />
            <span className="text-gradient-brand">{SITE.contact.highlight}</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">{SITE.contact.description}</p>
          <div className="mt-8 flex flex-col gap-4 text-sm text-white/85">
            <span className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-white/10">
                <Phone className="size-4 text-primary" />
              </span>
              {SITE.contact.phone}
            </span>
            <span className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-white/10">
                <Mail className="size-4 text-primary" />
              </span>
              {SITE.contact.email}
            </span>
            <span className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-white/10">
                <MapPin className="size-4 text-primary" />
              </span>
              {SITE.contact.locations}
            </span>
          </div>
        </div>

        {/* form card */}
        <div className="rounded-2xl bg-card p-6 shadow-2xl shadow-black/40 sm:p-8">
          <h3 className="font-display text-xl font-bold text-navy">{SITE.contact.formTitle}</h3>
          {submitted ? (
            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-6 text-center text-sm font-medium text-navy">
              {SITE.contact.successMessage}
            </div>
          ) : (
            <form
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <input required placeholder={SITE.contact.nameLabel} className={fieldCls} />
              <input placeholder={SITE.contact.companyLabel} className={fieldCls} />
              <input required type="email" placeholder={SITE.contact.emailLabel} className={fieldCls} />
              <input required type="tel" placeholder={SITE.contact.phoneLabel} className={fieldCls} />
              <select required defaultValue="" className={fieldCls}>
                <option value="" disabled>
                  {SITE.contact.projectTypeLabel}
                </option>
                {SITE.contact.projectTypeOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
              <select required defaultValue="" className={fieldCls}>
                <option value="" disabled>
                  {SITE.contact.locationLabel}
                </option>
                {SITE.contact.locationOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
              <textarea
                placeholder={SITE.contact.messageLabel}
                rows={5}
                className={`sm:col-span-2 ${fieldCls} h-auto py-3`}
              />
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-glow py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_oklch(0.62_0.22_300/0.7)] transition-transform hover:scale-[1.01] sm:col-span-2"
              >
                {SITE.contact.submitLabel}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */
export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo tone="light" tagline={false} />
          <p className="max-w-md text-center text-xs leading-relaxed text-white/50 sm:text-left">
            {SITE.footer.about}
          </p>
          <div className="flex gap-3">
            {SITE.footer.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-primary hover:text-primary"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/40">{SITE.footer.copyright}</p>
      </div>
    </footer>
  );
}
