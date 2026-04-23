import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

const Metrics = ({ work }) => {
  const ref = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll("[data-metric]"), {
        yPercent: 110,
        stagger: 0.12,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  if (!work.metrics?.length) return null;

  return (
    <section
      ref={ref}
      className="relative w-full bg-black py-[20vh] px-[6vw] border-t border-white/10"
    >
      <p className="text-royal-orange uppercase tracking-[0.2em] text-[0.8vw] mb-[8vh] font-montreal">
        Outcome
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw]">
        {work.metrics.map((m, i) => (
          <div key={i} className="overflow-hidden">
            <div data-metric>
              <p className="font-playfair italic text-royal-orange text-[7vw] leading-[1]">
                {m.value}
              </p>
              <p className="mt-[2vh] text-white/60 uppercase tracking-[0.15em] text-[0.9vw] font-montreal">
                {m.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
