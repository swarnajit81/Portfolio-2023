import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

const Block = ({ heading, body, align = "left", index }) => {
  const ref = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current.children, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={`max-w-[44vw] ${align === "right" ? "ml-auto" : ""}`}
    >
      <p className="text-royal-orange uppercase tracking-[0.2em] text-[0.8vw] mb-[2vh] font-montreal">
        0{index} — {heading}
      </p>
      <p className="text-white/85 text-[1.8vw] leading-[1.3] font-montreal font-[300]">
        {body}
      </p>
    </div>
  );
};

const Narrative = ({ work }) => {
  const blocks = [work.problem, work.approach, work.solution].filter(Boolean);

  return (
    <section className="relative w-full py-[20vh] px-[6vw] bg-black space-y-[18vh]">
      {blocks.map((b, i) => (
        <Block
          key={b.heading}
          heading={b.heading}
          body={b.body}
          align={i % 2 === 0 ? "left" : "right"}
          index={i + 1}
        />
      ))}
    </section>
  );
};

export default Narrative;
