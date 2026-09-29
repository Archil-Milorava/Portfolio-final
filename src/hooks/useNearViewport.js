import { useEffect, useState } from "react";

// Becomes true (and stays true) once the element is within `margin` of the
// viewport, so below-the-fold media only starts downloading shortly before
// it can be seen instead of competing with the first screen.
const useNearViewport = (ref, margin = "600px") => {
  const [near, setNear] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || near) return;
    if (!("IntersectionObserver" in window)) {
      setNear(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, margin, near]);

  return near;
};

export default useNearViewport;
