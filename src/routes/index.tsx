import { createFileRoute } from "@tanstack/react-router";
import IntroCurtain from "@/components/IntroCurtain";
import SiteHeader from "@/components/SiteHeader";
import {
  Contact,
  HeroBlock,
  Process,
  Projects,
  SiteFooter,
  Solutions,
  WhyChoose,
} from "@/components/HomeSections";
import { SITE } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.brand.name} | Engineering Immersive AV & Cinema Experiences` },
      { name: "description", content: SITE.hero.description },
      { property: "og:title", content: `${SITE.brand.name} | Engineering Immersive AV & Cinema Experiences` },
      { property: "og:description", content: SITE.hero.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE.brand.name} | Engineering Immersive AV & Cinema Experiences` },
      { name: "twitter:description", content: SITE.hero.description },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <IntroCurtain />
      <SiteHeader />
      <main>
        <HeroBlock />
        <Solutions />
        <Projects />
        <WhyChoose />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
