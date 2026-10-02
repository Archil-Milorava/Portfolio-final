import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// The word plays at least this long so the intro never just flashes past.
const MIN_MS = 1300;
// Anyone who already saw the intro this session only gets a short flash.
const REPEAT_MIN_MS = 400;
// Safety net: a stalled request must never trap a visitor behind the loader.
const MAX_MS = 6000;
const HOLD_MS = 150;
const EXIT_MS = 900;
const REPEAT_EXIT_MS = 500;
const WORD = "Welcome";
const SEEN_KEY = "intro-seen";

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Storage can throw (private mode, blocked cookies); the intro still works.
const seenBefore = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};
const markSeen = () => {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    /* ignore */
  }
};

const loadFonts = () =>
  document.fonts
    ? Promise.all([
        document.fonts.load("1em pirveli"),
        document.fonts.load("400 1em Roboto"),
        document.fonts.load("700 1em Mulish"),
      ]).catch(() => {})
    : Promise.resolve();

const loadImages = (urls) =>
  Promise.all(
    urls.map(
      (url) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          if (img.decode) img.decode().then(resolve, resolve);
          else img.onload = img.onerror = resolve;
        })
    )
  );

const windowLoaded = () =>
  document.readyState === "complete"
    ? Promise.resolve()
    : new Promise((resolve) =>
        window.addEventListener("load", resolve, { once: true })
      );

/**
 * Full-screen intro that stays up until the page is really ready: fonts
 * decoded, critical images decoded and the window load event fired. Nothing
 * counts the progress on screen, but the exit still waits for it (eased, and
 * never earlier than the minimum show time).
 */
const Preloader = ({ images = [] }) => {
  const [fontReady, setFontReady] = useState(false);
  const [phase, setPhase] = useState("loading"); // loading -> exiting -> done
  const [reduce] = useState(reducedMotion);
  const [repeat] = useState(seenBefore);
  const exitMs = repeat ? REPEAT_EXIT_MS : EXIT_MS;
  const target = useRef(0);
  const imagesRef = useRef(images);

  useEffect(() => {
    const minMs = reduce || repeat ? REPEAT_MIN_MS : MIN_MS;
    markSeen();
    let cancelled = false;
    let raf;
    let exitTimer;

    // Start from the top and freeze scrolling until the curtain lifts.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    // Each task adds its weight to the real progress once it settles.
    const task = (weight, promise, onDone) =>
      promise.then(() => {
        if (cancelled) return;
        target.current += weight;
        onDone?.();
      });

    task(30, loadFonts(), () => setFontReady(true));
    task(40, loadImages(imagesRef.current));
    task(30, windowLoaded());

    const fontFallback = setTimeout(() => setFontReady(true), 1500);
    const giveUp = setTimeout(() => (target.current = 100), MAX_MS);

    const start = performance.now();
    let shown = 0;
    let lastFrame = start;

    const tick = (now) => {
      // Never ahead of the real work, never ahead of the minimum show time.
      const ceiling = Math.min(target.current, ((now - start) / minMs) * 100);
      // Ease by elapsed time, not frame count, so it feels the same at any fps.
      shown += (ceiling - shown) * (1 - Math.exp(-(now - lastFrame) / 100));
      lastFrame = now;
      if (ceiling - shown < 0.5) shown = ceiling;

      if (shown >= 100) {
        // Everything is ready: hold for a beat, then lift the curtain.
        exitTimer = setTimeout(() => setPhase("exiting"), reduce ? 0 : HOLD_MS);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
      clearTimeout(fontFallback);
      clearTimeout(giveUp);
    };
  }, [reduce, repeat]);

  useEffect(() => {
    if (phase !== "exiting") return;
    const done = setTimeout(() => setPhase("done"), reduce ? 0 : exitMs + 200);
    return () => clearTimeout(done);
  }, [phase, reduce, exitMs]);

  useEffect(() => {
    if (phase !== "done") return;
    document.body.style.overflow = "";
    // Section positions were measured while scrolling was locked.
    ScrollTrigger.refresh();
  }, [phase]);

  if (phase === "done") return null;

  const exiting = phase === "exiting";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-dark text-white"
      style={{
        transform: exiting && !reduce ? "translateY(-100%)" : "translateY(0)",
        opacity: exiting && reduce ? 0 : 1,
        transition: reduce
          ? "opacity 200ms linear"
          : `transform ${exitMs}ms cubic-bezier(0.76, 0, 0.24, 1) 150ms`,
      }}
    >
      {fontReady && (
        // The word leaves as one piece: it fades and drifts up while the
        // curtain is still barely moving, so nothing is left half-visible.
        <h1
          aria-hidden="true"
          className="flex overflow-hidden px-2 py-3 font-pirveli text-lg uppercase tracking-widest sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-[8rem]"
          style={{
            opacity: exiting ? 0 : 1,
            transform: exiting ? "translateY(-16px)" : "translateY(0)",
            transition: "opacity 600ms ease-out, transform 600ms ease-out",
          }}
        >
          {WORD.split("").map((letter, i) => (
            <span
              key={i}
              className="preloader-letter inline-block"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {letter}
            </span>
          ))}
        </h1>
      )}
    </div>
  );
};

export default Preloader;
