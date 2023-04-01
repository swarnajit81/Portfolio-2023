import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import SplitTextJS from "split-text-js";
import { useRef, useEffect } from "react";
import LandingSection from "../components/Home/LandingSection";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import WorksSection from "@components/Home/WorksSection";
import AboutSection from "@components/Home/AboutSection";
import AboutMe from "@components/Home/AboutMe";
import MoreAboutMe from "@components/Home/MoreAboutMe";
import Contact from "@components/Home/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const landingSectionContainer = useRef(null);
  const workSectionRef = useRef(null);
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const image = useRef(null);
  const imageContainer = useRef(null);
  const aboutSectionRef = useRef(null)
  const firstSent = useRef(null);
  const secondSent = useRef(null);
  const aboutImageRef = useRef(null)
  const bottomMarqueeRef = useRef(null);
  const MAMSectionRef = useRef(null)
  const header = useRef(null);
  const contactSection = useRef(null);


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

      gsap.to(firstSent.current, {x: -200 , scrollTrigger:{
        trigger: aboutSectionRef.current,
        start: "left right",
        end: "right left",
        scrub: 2,
        containerAnimation: scrollTween,
      }} )

       gsap.to(secondSent.current, {x: -200 , scrollTrigger:{
        trigger: aboutSectionRef.current,
        start: "left right",
        end: "right left",
        scrub: 2,
        containerAnimation: scrollTween,
      }} )
       gsap.from(aboutImageRef.current, {scale: 1.5 , scrollTrigger:{
        trigger: aboutSectionRef.current,
        start: "center right",
        end: "right left",
        scrub: 2,
        containerAnimation: scrollTween,
      }} )

       gsap.to(bottomMarqueeRef?.current, {x: -500 , scrollTrigger:{
        trigger: MAMSectionRef.current,
        start: "left right",
        end: "right left",
        scrub: 2,
        containerAnimation: scrollTween,
      }})

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

    let splitHeader = new SplitTextJS(header?.current);
    gsap.from(splitHeader.chars, {
      y: -100,
      rotateX: -90,
      stagger: 0.08,
      scrollTrigger: {
        trigger: contactSection?.current,
        start: "left center",
        containerAnimation: scrollTween,
      },
    });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="wrapper"
      ref={containerRef}
      className={`w-[570vw] flex  h-[100svh] overflow-hidden flex-nowrap overscroll-none`}
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
      <section className="w-[110vw] h-full ">
        <AboutSection aboutImageRef={aboutImageRef}  aboutSectionRef={aboutSectionRef} firstSent={firstSent} secondSent={secondSent} />
      </section>
       <section className="w-[60vw] h-full ">
        <AboutMe />
      </section>
       <section className="w-[100vw] h-full ">
        <MoreAboutMe bottomMaqueeRef={bottomMarqueeRef} MAMSection={MAMSectionRef} />
      </section>
      <section className="w-[100vw] h-full ">
        <Contact header={header} contactSection={contactSection} />
      </section>
    </div>
  );
}
