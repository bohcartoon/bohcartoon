import { Link } from "react-router";
import { useEffect, useState, type ReactNode } from "react";
import { useLocale } from "@/i18n/provider";

const A = "https://api.builder.io/api/v1/image/assets/TEMP/";
export const img = (id: string, w: number) => `${A}${id}?width=${w}`;

export const LOGO = img("d7965fcc069ee0f924d48ec376b9168a633e47a3", 100);
export const SOCIAL = [
  img("6514c8ee8710a2016dbd1909b4c9970b0e60ceb9", 46),
  img("4ce43abf04b4177f743c6e5d5d4aed23c90f8223", 56),
  img("1eacc054d50dfbbedc8de3ac116046b381f0d716", 46),
];
const EXTRA_FALLBACK = img("a0aec7389b59c267fe9e6cb147a75e605ac97963", 680);
export const EXTRAS = [
  img("1eff0b028c6419ced4541d0b4f4b840aea499180", 680),
  img("0090241439793d9bed0322608822aa937f063884", 680),
  img("6e3d43e79b0b21ff17ba6c28a6f4aafd3d14c211", 680),
  img("c47b8c01aa7c7a8c34d740be340b2c858c5fb3ee", 680),
  EXTRA_FALLBACK,
  EXTRA_FALLBACK,
];
export const SHORTS = [
  "ac0ef8325e85300f8dee805ba272a30f1f82cb3d",
  "b40d01637a612260d8987a79b491b7d9cadbb899",
  "a73ab5542c73d52b41a88842da90d7712921aac9",
  "637a3602e470cbca9c6b65b93b3d4090e6f0e9ef",
  "8ee248c3607bfafde7c813def4b2cbd15ae13cab",
  "f292fd4b01f3a96e96d1c2ea25ffdf8d2048ac6a",
].map((id) => img(id, 480));

const hover =
  "transition-transform duration-300 ease-out hover:scale-105 hover:z-10";

export function Header() {
  const { strings } = useLocale();
  const links = [
    [strings.navAll, "/"],
    [strings.navFilms, "/#film"],
    [strings.navReels, "/#short"],
    [strings.navExtras, "/#extra"],
    [strings.navFaq, "/#faq"],
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-2 bg-gradient-to-b from-black to-transparent px-4 pb-12 pt-6 sm:px-6 sm:pt-8">
      <Link to="/">
        <img src={LOGO} alt="bohcartoon" className="size-[50px]" />
      </Link>
      <nav className="flex min-w-0 flex-wrap justify-end gap-x-2 gap-y-1 text-[10px] font-medium text-white [font-family:Inter,sans-serif] sm:gap-x-6 sm:text-xs">
        {links.map(([l, to]) => (
          <Link key={l} to={to} className="hover:opacity-70">
            {l}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Hero({
  bg,
  children,
  className = "",
  cursorOrange = false,
}: {
  bg: string;
  children: ReactNode;
  className?: string;
  cursorOrange?: boolean;
}) {
  return (
    <section
      className={`relative isolate overflow-hidden ${cursorOrange ? "cursor-orange" : ""} ${className}`}
    >
      <img
        src={bg}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full rounded-[45px] object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(64%_32%_at_68%_70%,transparent_0%,rgba(21,18,16,0.62)_100%)]" />
      {children}
    </section>
  );
}

export function Countdown() {
  const { strings } = useLocale();
  const getTimeLeft = () => {
    const difference = Math.max(
      0,
      new Date("2026-11-14T00:00:00").getTime() - Date.now(),
    );
    const totalMinutes = Math.floor(difference / 60_000);

    return [
      Math.floor(totalMinutes / 1_440),
      Math.floor((totalMinutes % 1_440) / 60),
      totalMinutes % 60,
    ];
  };
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = window.setInterval(() => setTimeLeft(getTimeLeft()), 1_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="w-fit max-w-full rounded-xl text-[#EBCBB1] [direction:ltr] transition-[filter,transform] duration-300 hover:scale-[1.02] hover:drop-shadow-[0_0_18px_rgba(235,203,177,0.75)] sm:hover:scale-105">
      <div className="flex gap-2 text-[32px] font-black leading-none tracking-[-0.04em] sm:gap-6 sm:text-[61px]">
        {timeLeft.map((value, i) => (
          <span key={i} className={`-mt-1 w-[76px] text-center [font-family:Inter,sans-serif] sm:w-[125px] ${i === 0 ? "ml-[3px] mr-[2px] pt-0" : "pt-[6px]"}`}>
            {value}
          </span>
        ))}
      </div>
      <div className="mt-2 flex gap-6 text-sm font-light text-white">
        {[strings.countdownDays, strings.countdownHours, strings.countdownMinutes].map((label) => (
          <span key={label} className="-mt-1 w-[76px] text-center [font-family:Inter,sans-serif] sm:w-[125px]">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-4 px-4 pt-8 sm:px-5 sm:pt-10">
      <h2 className="text-[23px] font-bold text-white [font-family:Inter,sans-serif] sm:text-[25px]">{title}</h2>
      {subtitle && <p className="text-[13px] text-[#616161] [font-family:Inter,sans-serif]">{subtitle}</p>}
      {children}
    </section>
  );
}

function Rail({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto px-1 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#151210] sm:w-56" />
    </div>
  );
}

export function PosterRail({
  items,
  className = "w-[240px] h-[320px]",
}: {
  items: { src: string; to?: string; radius?: number; alt?: string }[];
  className?: string;
}) {
  return (
    <Rail>
      {items.map((p, i) => {
        const im = (
          <img
            src={p.src}
            alt={p.alt ?? ""}
            style={{ borderRadius: p.radius ?? 20 }}
            className={`${className} shrink-0 object-cover ${hover} ${p.alt === "FEATHER" ? "cursor-orange" : ""}`}
          />
        );
        return p.to ? (
          <Link key={i} to={p.to} className="shrink-0">
            {im}
          </Link>
        ) : (
          <div key={i} className="shrink-0">
            {im}
          </div>
        );
      })}
    </Rail>
  );
}

export function ExtraRail({ items = EXTRAS }: { items?: string[] }) {
  return (
    <Rail>
      {items.map((s, i) => (
        <img
          key={i}
          src={s}
          alt=""
          className={`h-[180px] w-[340px] shrink-0 rounded-[27px] object-cover ${hover}`}
        />
      ))}
    </Rail>
  );
}

type OneSignalSdk = {
  init: (options: { appId: string }) => Promise<void>;
  Notifications: { requestPermission: () => Promise<void> };
};

declare global {
  interface Window {
    OneSignalDeferred?: ((oneSignal: OneSignalSdk) => void)[];
  }
}

let oneSignalPromise: Promise<OneSignalSdk> | undefined;

function loadOneSignal() {
  if (!oneSignalPromise) {
    oneSignalPromise = new Promise((resolve, reject) => {
      const deferred = (window.OneSignalDeferred ??= []);
      deferred.push(async (oneSignal) => {
        try {
          await oneSignal.init({ appId: "32c85a40-9a12-42b4-b5f8-704df0df791f" });
          resolve(oneSignal);
        } catch (error) {
          reject(error);
        }
      });

      const script = document.createElement("script");
      script.src = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
      script.async = true;
      script.onerror = () => reject(new Error("OneSignal SDK failed to load"));
      document.head.appendChild(script);
    });
  }

  return oneSignalPromise;
}

function NewsletterPush() {
  const { strings } = useLocale();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function subscribe() {
    setLoading(true);
    setError("");
    try {
      const oneSignal = await loadOneSignal();
      await oneSignal.Notifications.requestPermission();
    } catch {
      setError(strings.newsletterError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={subscribe}
        disabled={loading}
        className="rounded-full border border-white bg-white px-4 py-2 text-xs text-black [font-family:Inter,sans-serif] transition-colors hover:bg-white/90 disabled:opacity-60"
      >
        {loading ? strings.newsletterLoading : strings.newsletterActivate}
      </button>
      {error && (
        <p role="status" className="text-xs text-[#EBCBB1]">
          {error}
        </p>
      )}
    </div>
  );
}

export function Footer() {
  const { strings } = useLocale();

  return (
    <footer className="mt-16 flex flex-col items-center gap-3 rounded-t-[42px] bg-gradient-to-t from-[#0A0A0A] to-[#151210] px-5 pb-8 pt-10">
      <NewsletterPush />
      <div className="flex gap-1">
        {SOCIAL.map((s, i) => (
          <img key={i} src={s} alt="" className="h-[25px] w-auto" />
        ))}
      </div>
      <p className="text-center text-[8px] text-white">
        bohcartoon™
        <br />© 2026 · {strings.copyright}
      </p>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#151210] font-[Inter] text-white">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden">
        <Header />
        {children}
      </div>
    </div>
  );
}
