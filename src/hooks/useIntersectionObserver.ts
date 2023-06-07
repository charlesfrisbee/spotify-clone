import { useEffect, useRef } from "react";

export function useIntersectionObserver() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref?.current;

    if (!node || typeof IntersectionObserver !== "function") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        if (entry)
          entry.target.classList.toggle(
            "is-pinned",
            entry.intersectionRatio < 1
          );
      },
      { threshold: [1], rootMargin: "10px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref];
}
