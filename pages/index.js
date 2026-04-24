import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import SplitTextJS from "split-text-js";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import LandingSection from "../components/Home/LandingSection";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { gsap } from "gsap/dist/gsap";
import WorksSection from "@components/Home/WorksSection";
import AboutSection from "@components/Home/AboutSection";
import AboutMe from "@components/Home/AboutMe";
import MoreAboutMe from "@components/Home/MoreAboutMe";
import Contact from "@components/Home/Contact";
import HomeMobileSection from "@components/HomeMobile/index";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const router = useRouter();
  const containerRef = useRef(null);
  const landingSectionContainer = useRef(null);
  const workSectionRef = useRef(null);
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const image = useRef(null);
  const imageContainer = useRef(null);
  const aboutSectionRef = useRef(null);
  const firstSent = useRef(null);
  const secondSent = useRef(null);
  const aboutImageRef = useRef(null);
  const bottomMarqueeRef = useRef(null);
  const MAMSectionRef = useRef(null);
  const header = useRef(null);
  const contactSection = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => ScrollTrigger.refresh());
    return () => mm.revert();
  }, []);

  // Incoming nav from detail page with ?section=... — scroll to section once layout ready.
  const querySection = router.query.section;
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!querySection) return;

    const run = () => {
      const el = document.getElementById(querySection);
      if (!el) return;
      if (window.innerWidth >= 1024) {
        ScrollTrigger.refresh();
        gsap.to(window, {
          scrollTo: el.offsetLeft + 500,
          duration: 1.2,
          ease: "expo.inOut",
        });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // Clear ?section= from URL without firing Next route events
      // (router.replace would retrigger PageTransition mid-exit).
      window.history.replaceState(
        { ...window.history.state, as: "/", url: "/" },
        "",
        "/"
      );
    };

    const t = setTimeout(run, 600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [querySection]);

  useIsomorphicLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
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
            scrub: 0.6,
            end: () => `+=${maxWidth}`,
          },
        });

        gsap.to(firstLineRef.current, {
          x: 200,
          scrollTrigger: {
            trigger: workSectionRef?.current,
            scrub: 0.6,
            start: "left center",
            containerAnimation: scrollTween,
          },
        });

        gsap.to(firstSent.current, {
          x: -200,
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "left right",
            end: "right left",
            scrub: 0.6,
            containerAnimation: scrollTween,
          },
        });

        gsap.to(secondSent.current, {
          x: -200,
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "left right",
            end: "right left",
            scrub: 0.6,
            containerAnimation: scrollTween,
          },
        });

        gsap.from(aboutImageRef.current, {
          scale: 1.5,
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "center right",
            end: "right left",
            scrub: 0.6,
            containerAnimation: scrollTween,
          },
        });

        gsap.to(bottomMarqueeRef?.current, {
          x: -500,
          scrollTrigger: {
            trigger: MAMSectionRef.current,
            start: "left right",
            end: "right left",
            scrub: 0.6,
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
              scrub: 0.6,
              containerAnimation: scrollTween,
            },
          });
        });

        const splitHeader = new SplitTextJS(header?.current);
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
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <div
        id="wrapper"
        ref={containerRef}
        className="w-[570vw] hidden lg:flex h-[100svh] overflow-hidden flex-nowrap"
      >
        <section
          ref={landingSectionContainer}
          id="section"
          className="w-[100vw] h-full"
        >
          <LandingSection />
        </section>
        <section ref={workSectionRef} id="work-section" className="w-[100vw] h-full">
          <WorksSection
            firstLineRef={firstLineRef}
            secondLineRef={secondLineRef}
            image={image}
            imageContainer={imageContainer}
          />
        </section>
        <section id="about-section" className="w-[110vw] h-full">
          <AboutSection
            aboutImageRef={aboutImageRef}
            aboutSectionRef={aboutSectionRef}
            firstSent={firstSent}
            secondSent={secondSent}
          />
        </section>
        <section className="w-[60vw] h-full">
          <AboutMe />
        </section>
        <section className="w-[100vw] h-full">
          <MoreAboutMe bottomMaqueeRef={bottomMarqueeRef} MAMSection={MAMSectionRef} />
        </section>
        <section id="contact-section" className="w-[100vw] h-full">
          <Contact header={header} contactSection={contactSection} />
        </section>
      </div>
      <HomeMobileSection />
    </>
  );
}
