import { Link } from "react-router";
import { useLocale } from "@/i18n/provider";
import {
  Countdown,
  ExtraRail,
  Footer,
  Hero,
  Page,
  PosterRail,
  Section,
  SHORTS,
  img,
} from "@/components/site";

export function meta() {
  return [{ title: "bohcartoon" }];
}

export default function HomeRoute() {
  const { strings } = useLocale();

  return (
    <Page>
      <Hero
        bg={img("39de54dd0bff73261987feb3db4d46056d2ec903", 2806)}
        cursorOrange
        className="min-h-[560px] md:h-[700px]"
      >
        <div className="flex h-full flex-col justify-end gap-6 px-6 pb-12 pt-32 md:px-[45px]">
          <div className="relative w-[min(509px,90%)]">
            <img
              src={img("2d1c9e81e7f9cda58b13a8b648d47f84f171b7a4", 1018)}
              alt="FEATHER"
              className="-mt-px w-full"
            />
            <span
              className="absolute left-[29%] top-[63%] text-sm text-[#EBCBB1] sm:left-[148px] sm:text-lg"
              style={{ fontFamily: "'Inria Serif', serif" }}
            >
              {strings.featherTitle}
            </span>
          </div>
          <Countdown />
        </div>
      </Hero>

      <Section id="film" title={strings.film}>
        <PosterRail
          className="h-[420px] w-[280px]"
          items={[
            {
              src: img("f2eefb887ef41091550efc275fbc300b1540a9ab", 560),
              to: "/feather",
              radius: 25,
              alt: "FEATHER",
            },
            {
              src: img("99c3fbe270b8b2c3206490301e16482517202eca", 594),
              to: "/bullying",
              radius: 25,
              alt: "BULLYING",
            },
          ]}
        />
      </Section>
      <Section id="short" title={strings.reel}>
        <PosterRail items={SHORTS.map((src) => ({ src }))} />
      </Section>
      <Section
        id="extra"
        title={strings.extras}
        subtitle={strings.extrasDescription}
      >
        <ExtraRail />
      </Section>

      <section id="faq" className="scroll-mt-4 px-4 pt-12 sm:px-5 sm:pt-16">
        <h2 className="mb-4 text-right text-[22px] font-bold text-white/45 [font-family:Inter,sans-serif] sm:text-[25px]">
          {strings.faqTitle}
        </h2>
        <div className="flex flex-col gap-3">
          {strings.faq.map(([q, a]) => (
            <div
              key={q}
              className="flex flex-col gap-2 rounded-xl bg-[#D9D9D9]/[0.01] px-4 py-4 sm:px-6 sm:py-5 md:flex-row md:items-center md:gap-8 md:px-8 md:py-6"
            >
              <h3 className="text-[23px] font-bold leading-tight tracking-[-0.04em] [font-family:Inter,sans-serif] sm:text-[28px] md:text-4xl">
                {q}
              </h3>
              <p className="text-[13px] font-medium text-[#878787] [font-family:Inter,sans-serif]">{a}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </Page>
  );
}
