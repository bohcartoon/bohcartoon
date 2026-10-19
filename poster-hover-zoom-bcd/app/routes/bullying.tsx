import { Link } from "react-router";
import { useLocale } from "@/i18n/provider";
import {
  ExtraRail,
  Footer,
  Hero,
  Page,
  PosterRail,
  Section,
  img,
} from "@/components/site";

export function meta() {
  return [{ title: "BULLYING — bohcartoon" }];
}

export default function BullyingRoute() {
  const { strings } = useLocale();

  return (
    <Page>
      <Hero
        bg={img("7a93d98e3b3eeb2f0563878d70b437c3da725266", 2802)}
        className="min-h-[640px] md:h-[820px]"
      >
        <div className="flex h-full flex-col justify-end gap-4 px-6 pb-16 pt-32 md:px-[95px]">
          <p className="max-w-[451px] text-[13px] text-white">
            {strings.bullyingDescription}
          </p>
          <p className="text-[7px] font-bold text-white">
            {strings.ageGenre}
          </p>
          <Link
            to="/"
            className="flex h-[70px] w-[318px] max-w-full items-center justify-center rounded-[20px] bg-white text-[17px] text-black transition-transform hover:scale-105"
          >
            {strings.watchNow}
          </Link>
        </div>
      </Hero>

      <Section title={strings.extras} subtitle={strings.extrasDescription}>
        <ExtraRail
          items={[
            img("212802d350033d2415dd01ae8ae02872b4b8f74b", 680),
            img("65cb3069fbd3a3fb49eecc105da8ae0b690b6b78", 680),
          ]}
        />
      </Section>
      <Section title={strings.other}>
        <PosterRail
          className="h-[385px] w-[272px]"
          items={[
            {
              src: img("8605183d7e4a282b871c61ee4a2124736080bfc3", 544),
              radius: 25,
            },
          ]}
        />
      </Section>
      <Footer />
    </Page>
  );
}
