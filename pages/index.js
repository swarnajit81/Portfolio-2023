import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import { commonClasses } from "@utils/index";
import { useRef, useEffect } from "react";
import LandingSection from "../components/Home/LandingSection";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import WorksSection from "@components/Home/WorksSection";
import AboutSection from "@components/Home/AboutSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const landingSectionContainer = useRef(null);
  const workSectionRef = useRef(null);
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const image = useRef(null);
  const imageContainer = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let maxWidth;

    const ctx = gsap.context((self) => {
      const sections = self.selector("section");
      const getMaxWidth = () => {
        maxWidth = 0;
        sections.forEach((section) => {
          maxWidth += section.offsetWidth;
        });
      };

      getMaxWidth();
      const scrollTween = gsap.to(sections, {
        ease: "none",
        x: () => `-${maxWidth - window.innerWidth}`,
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 2,
          end: () => `+=${maxWidth}`,
        },
      });

      gsap.to(firstLineRef.current, {
        x: 200,
        scrollTrigger: {
          trigger: workSectionRef?.current,
          scrub: 2,
          start: "left center",
          containerAnimation: scrollTween,
        },
      });

      const images = gsap.utils.toArray("#image");

      images?.forEach((image, i) => {
        gsap.from(image, {
          y: "100vh",

          rotateZ: i * 150,
          scrollTrigger: {
            trigger: workSectionRef.current,
            start: "left right",
            end: "center center",
            scrub: 2,
            containerAnimation: scrollTween,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="wrapper"
      ref={containerRef}
      className={`w-[350vw] flex  h-screen flex-nowrap overscroll-none`}
    >
      <section
        ref={landingSectionContainer}
        id="section"
        className="w-[100vw] h-full"
      >
        <LandingSection />
      </section>
      <section ref={workSectionRef} id="section" className="w-[100vw] h-full ">
        <WorksSection
          firstLineRef={firstLineRef}
          secondLineRef={secondLineRef}
          image={image}
          imageContainer={imageContainer}
        />
      </section>
      <section className="w-[150vw] h-full ">
        <AboutSection />
      </section>
    </div>
  );
}
