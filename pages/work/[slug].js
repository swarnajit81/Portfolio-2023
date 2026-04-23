import { works, getWorkBySlug, getNextWork } from "@data/works";
import Meta from "@components/Common/meta";
import Hero from "@components/CaseStudy/Hero";
import Narrative from "@components/CaseStudy/Narrative";
import Gallery from "@components/CaseStudy/Gallery";
import Metrics from "@components/CaseStudy/Metrics";
import NextProject from "@components/CaseStudy/NextProject";
import BackLink from "@components/CaseStudy/BackLink";
import ComingSoon from "@components/CaseStudy/ComingSoon";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function WorkPage({ work, next }) {
  useEffect(() => {
    const t = setTimeout(() => { ScrollTrigger.refresh(); window.scrollTo(0, 0); }, 100);
   
    return () => clearTimeout(t);
  }, []);

  if (!work) return null;

  return (
    <>
      <Meta
        title={`${work.title} — Swarnajit`}
        imgContent={work.cover}
      />
      <BackLink />
      <main className="bg-black text-white min-h-screen overflow-x-hidden">
        <Hero work={work} />
        {work.full ? (
          <>
            <Narrative work={work} />
            <Gallery work={work} />
            <Metrics work={work} />
            {work.link && (
              <section className="relative w-full bg-black py-[12vh] px-[6vw] border-t border-white/10 text-center">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border border-royal-orange text-royal-orange uppercase tracking-[0.2em] text-[0.9vw] px-[3vw] py-[2vh] hover:bg-royal-orange hover:text-white transition-colors font-montreal"
                >
                  Visit live site →
                </a>
              </section>
            )}
          </>
        ) : (
          <ComingSoon work={work} />
        )}
        <NextProject next={next} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: works.map((w) => ({ params: { slug: w.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const work = getWorkBySlug(params.slug) || null;
  const next = getNextWork(params.slug) || null;
  return { props: { work, next } };
}
