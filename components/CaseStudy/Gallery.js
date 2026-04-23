import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

const Gallery = ({ work }) => {
  const ref = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = ref.current.querySelectorAll("[data-gallery-item]");
      items.forEach((item) => {
        const img = item.querySelector("img");
        gsap.from(img, {
          scale: 1.2,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: item, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  if (!work.gallery?.length) return null;

  return (
    <section ref={ref} className="relative w-full bg-black py-[12vh] space-y-[8vh]">
      {work.gallery.map((g, i) => {
        const wide = i % 3 === 0;
        return (
          <div
            key={i}
            data-gallery-item
            className={`${wide ? "w-full" : "w-[78vw] mx-auto"} overflow-hidden`}
          >
            <img
              src={g.src}
              alt={g.alt || ""}
              className="w-full h-auto block will-change-transform"
              loading="lazy"
            />
            {g.alt && (
              <p className="mt-3 px-[6vw] text-white/40 text-[0.8vw] uppercase tracking-[0.15em] font-montreal">
                Fig. {String(i + 1).padStart(2, "0")} — {g.alt}
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
