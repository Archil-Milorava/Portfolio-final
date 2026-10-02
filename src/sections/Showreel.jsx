import { useEffect, useRef } from "react";
import useNearViewport from "../hooks/useNearViewport";

// Cloudinary derives smaller files on the fly: the 1280px version is ~2 MB
// instead of the ~17 MB original, and a still frame serves as the poster.
const CLOUDINARY = "https://res.cloudinary.com/deijidv94/video/upload";
const VIDEO_ID = "v1749732131/1_a4updn";
const VIDEO_URL = `${CLOUDINARY}/q_auto,w_1280/${VIDEO_ID}.mp4`;
const POSTER_URL = `${CLOUDINARY}/so_2,w_1280,q_auto,f_auto/${VIDEO_ID}.jpg`;

const Showreel = () => {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  // The poster lives on Cloudinary, so it is only requested near the viewport.
  const nearViewport = useNearViewport(sectionRef);

  // The looping background only downloads and plays while the section is near
  // the viewport, and never for people who ask for reduced motion.
  useEffect(() => {
    const section = sectionRef.current;
    const video = backgroundRef.current;
    if (!section || !video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "200px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="md:pb-[2rem] w-full relative overflow-hidden bg-dark"
    >
      <video
        ref={backgroundRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      >
        <source src="/videobg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-[800px] aspect-[4/3]">
          <video
            className="w-full h-full bg-black"
            controls
            playsInline
            preload="none"
            poster={nearViewport ? POSTER_URL : undefined}
            controlsList="nodownload"
          >
            <source src={VIDEO_URL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Showreel;
