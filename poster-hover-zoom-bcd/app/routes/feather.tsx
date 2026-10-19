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
  return [{ title: "FEATHER — bohcartoon" }];
}

export default function FeatherRoute() {
  const { strings } = useLocale();

  return (
    <Page>
      <Hero
        bg={img("60dc3edf64dab3dae654ff98d0cf0bfb18d397d9", 2822)}
        cursorOrange
        className="min-h-[640px] md:h-[820px]"
      >
        <div className="flex h-full flex-col justify-end gap-6 px-6 pb-12 pt-32 md:px-[94px]">
          <div className="relative w-[min(708px,100%)] self-start md:-ml-16">
            <img
              src={img("7ae54ca43d0ded68893a16da7fe24fe2fc9779c8", 1416)}
              alt="FEATHER"
              className="w-full"
            />
            <span
              className="absolute left-[32%] top-[65%] text-lg text-[#EBCBB1]"
              style={{ fontFamily: "'Inria Serif', serif" }}
            >
              {strings.featherTitle}
            </span>
          </div>
          <p className="max-w-[451px] whitespace-pre-line text-[11px] leading-3 text-[#EBCBB1]">
            {strings.featherDescription}
          </p>
          <p className="text-[7px] font-bold text-[#EBCBB1]">
            {strings.ageGenre}
          </p>
          <Countdown />
        </div>
      </Hero>

      <Section title={strings.short}>
        <PosterRail
          items={[{ src: img("4a2d0ab4001d9ed6b5de5c282746a22445770a5e", 480) }]}
        />
      </Section>
      <Section
        title={strings.extras}
        subtitle={strings.extrasDescription}
      >
        <ExtraRail />
      </Section>
      <Section title={strings.other}>
        <PosterRail
          className="h-[420px] w-[297px]"
          items={[
            {
              src: img("99c3fbe270b8b2c3206490301e16482517202eca", 594),
              radius: 25,
            },
          ]}
        />
      </Section>
      <Footer />
    </Page>
  );
}
