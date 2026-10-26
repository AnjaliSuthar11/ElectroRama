import { useEffect, useRef, useState } from "react";
import { SITE } from "@/content/site";
import Logo from "@/components/Logo";

type Stage = "curtain" | "opening" | "screen" | "fade";

const SEEN_KEY = "electrorama-intro-seen";

/**
 * Red theatre-curtain intro:
 *  1. Closed red parda with "Click to Enter"
 *  2. Curtains sweep apart + white flash
 *  3. Logo appears on a glowing theatre screen
 *  4. Fades out into the website (once per browser session)
 */
export default function IntroCurtain() {
  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState<Stage>("curtain");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (SITE.intro.enabled && !sessionStorage.getItem(SEEN_KEY)) {
      setMounted(true);
    }
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const startShow = () => {
    setStage("opening");
    timers.current.push(setTimeout(() => setStage("screen"), 1700));
    timers.current.push(setTimeout(() => setStage("fade"), 4600));
    timers.current.push(
      setTimeout(() => {
        sessionStorage.setItem(SEEN_KEY, "1");
        setMounted(false);
      }, 5400),
    );
  };

  if (!mounted) return null;

  const opening = stage === "opening";
  const leaving = stage === "fade";

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-black transition-opacity duration-700 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={opening || leaving}
    >
      {/* ---------- STAGE 2: THEATRE SCREEN ---------- */}
      {stage === "screen" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          {/* dark theatre ambience */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 42%, oklch(0.28 0.06 280 / 0.55) 0%, transparent 70%)",
            }}
          />
          {/* the screen */}
          <div className="intro-flicker relative mx-6 w-[min(88vw,880px)] overflow-hidden rounded-xl border border-white/15 shadow-[0_0_120px_-10px_oklch(0.62_0.22_300/0.55),0_0_220px_-30px_oklch(0.62_0.19_258/0.45)]">
            <div className="relative flex aspect-[21/9] flex-col items-center justify-center gap-5 bg-navy px-6 text-center">
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 80% at 50% 50%, oklch(0.35 0.12 285 / 0.5) 0%, oklch(0.14 0.04 277) 75%)",
                }}
              />
              {/* showing */}
              <span className="intro-screen-in relative rounded-full border border-gold/50 bg-gold/10 px-4 py-1 text-[10px] font-bold tracking-[0.4em] text-gold">
                {SITE.intro.screenBadge}
              </span>
              <div className="intro-screen-in relative flex flex-col items-center gap-3">
                <Logo tone="gradient" tagline={false} className="scale-[2.4] sm:scale-[3]" />

                {/* Pioneering Immersive Experiences */}

                
                {/* <p className="mt-8 text-xs font-medium tracking-[0.45em] text-white/80 uppercase sm:text-sm">
                  {SITE.intro.screenSubtitle}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------- WHITE FLASH between curtains and screen ---------- */}
      {opening && <div className="intro-flash absolute inset-0 z-30 bg-white" />}

      {/* ---------- STAGE 1: CLOSED CURTAIN ---------- */}
      {stage !== "screen" && (
        <>
          {/* left half */}
          
          <div
            className={`absolute inset-y-0 left-0 w-[52%] transition-transform duration-[1600ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
              opening ? "-translate-x-[105%]" : "translate-x-0"
            }`}
            style={{
              backgroundImage: `url(${SITE.intro.curtainImage})`,
              backgroundSize: "200% 100%",
              backgroundPosition: "right center",
            }}
          >
            {/* gold trim on the inner edge */}
            <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-b from-[#f5d67a] via-[#b8860b] to-[#8a5a00] shadow-[-4px_0_18px_rgba(0,0,0,0.5)]" />
          </div>
          {/* right half (mirrored) */}
          <div
            className={`absolute inset-y-0 right-0 w-[52%] transition-transform duration-[1600ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
              opening ? "translate-x-[105%]" : "translate-x-0"
            }`}
            style={{
              backgroundImage: `url(${SITE.intro.curtainImage})`,
              backgroundSize: "200% 100%",
              backgroundPosition: "right center",
              transform: opening ? "translateX(105%) scaleX(-1)" : "scaleX(-1)",
            }}
          >
            <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-[#f5d67a] via-[#b8860b] to-[#8a5a00] shadow-[4px_0_18px_rgba(0,0,0,0.5)]" />
          </div>

          {/* darkening + spotlight vignette over the curtain */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-700"
            style={{
              background:
                "radial-gradient(ellipse 55% 60% at 50% 46%, transparent 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.6) 100%)",
              opacity: opening ? 0 : 1,
            }}
          />

          {/* center content */}
          <div
            className={`absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 px-6 text-center transition-opacity duration-500 ${
              opening ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-[11px] font-semibold tracking-[0.5em] text-gold uppercase">
              {SITE.intro.presents}
            </p>
            {/* <Logo tone="gradient" tagline={false} className="scale-[1.8] drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]" /> */}
            <button
              onClick={startShow}
              className="intro-pulse  cursor-pointer rounded-full bg-gradient-to-r from-[#f5d67a] via-[#e7b433] to-[#b8860b] px-10 py-4 text-sm font-bold tracking-[0.25em] text-[#3a2600] uppercase shadow-[0_10px_40px_-8px_rgba(231,180,51,0.7)] transition-transform hover:scale-105 active:scale-95"
            >
              {SITE.intro.enterLabel}
            </button>
            {/* <p className="text-xs tracking-[0.3em] text-white/50 uppercase">the show is about to begin</p> */}
          </div>
        </>
      )}
    </div>
  );
}
