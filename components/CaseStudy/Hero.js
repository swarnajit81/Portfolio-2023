import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap/dist/gsap";
import { useRef } from "react";
import SplitTextJS from "split-text-js";

const Hero = ({ work }) => {
  const titleRef = useRef(null);
  const metaRef = useRef(null);
  const imageRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitTextJS(titleRef.current);
      gsap.from(split.chars, {
        yPercent: 110,
        opacity: 0,
        stagger: 0.04,
        duration: 1.2,
        ease: "expo.out",
        delay: 0.2,
      });

      gsap.from(metaRef.current?.children ?? [], {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "expo.out",
        delay: 0.8,
      });

      gsap.from(imageRef.current, {
        scale: 1.15,
        opacity: 0,
        duration: 1.6,
        ease: "expo.out",
        delay: 0.1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${work.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

      <div className="relative z-10 w-full px-[6vw] pb-[8vh] pt-[20vh]">
        <div className="overflow-hidden">
          <h1
            ref={titleRef}
            className="font-montreal uppercase text-white text-[9vw] leading-[0.95] tracking-tight font-[500]"
          >
            {work.title}
          </h1>
        </div>

        <div
          ref={metaRef}
          className="mt-[6vh] grid grid-cols-2 md:grid-cols-4 gap-[3vw] text-white/70 text-[0.9vw] uppercase tracking-[0.15em] font-montreal"
        >
          <div>
            <p className="text-white/40 mb-2 text-[0.75vw]">Client</p>
            <p>{work.client}</p>
          </div>
          <div>
            <p className="text-white/40 mb-2 text-[0.75vw]">Year</p>
            <p>{work.year}</p>
          </div>
          <div>
            <p className="text-white/40 mb-2 text-[0.75vw]">Role</p>
            <p>{work.role}</p>
          </div>
          {work.stack && (
            <div>
              <p className="text-white/40 mb-2 text-[0.75vw]">Stack</p>
              <p>{work.stack.join(" · ")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
