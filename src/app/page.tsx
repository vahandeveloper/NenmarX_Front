import { GradientDefs } from "@/components/GradientDefs";
import { Faq } from "@/components/home/Faq";
import { FocusAreas } from "@/components/home/FocusAreas";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { LogoStrip } from "@/components/home/LogoStrip";
import { Process } from "@/components/home/Process";
import { SiteFooter } from "@/components/home/SiteFooter";
import { Stats } from "@/components/home/Stats";
import { Stories } from "@/components/home/Stories";
import { TrustAndPillars } from "@/components/home/TrustAndPillars";
import { WhyUs } from "@/components/home/WhyUs";

export default function Home() {
  return (
    <>
      <GradientDefs />
      <div className="relative min-h-screen overflow-x-hidden bg-[#050810]">
        <div
          className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgba(0,210,255,0.14),transparent_55%),radial-gradient(ellipse_55%_40%_at_100%_20%,rgba(157,80,187,0.1),transparent_45%)]"
          aria-hidden
        />
        <Header />
        <main className="relative">
          <Hero />
          <TrustAndPillars />
          <LogoStrip />
          <Process />
          <WhyUs />
          <Stats />
          <FocusAreas />
          <Stories />
          <Faq />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}
