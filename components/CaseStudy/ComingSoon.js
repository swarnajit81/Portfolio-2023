import { AppContext } from "@context/AppContext";
import { useContext } from "react";

const ComingSoon = ({ work }) => {
  const { setCursorStyle } = useContext(AppContext);
  return (
    <section className="relative w-full bg-black py-[20vh] px-[6vw] border-t border-white/10 text-center">
      <p className="text-royal-orange uppercase tracking-[0.25em] text-[0.9vw] mb-[4vh] font-montreal">
        Case study in progress
      </p>
      <p className="max-w-[44vw] mx-auto text-white/70 text-[1.6vw] leading-[1.4] font-montreal font-[300]">
        Full write-up for <span className="font-playfair italic text-white">{work.title}</span>{" "}
        is being written. In the meantime, the live site is up and running.
      </p>
      {work.link && (
        <a
          href={work.link}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setCursorStyle("hovered")}
          onMouseLeave={() => setCursorStyle("")}
          className="inline-block mt-[6vh] border border-royal-orange text-royal-orange uppercase tracking-[0.2em] text-[0.9vw] px-[3vw] py-[2vh] hover:bg-royal-orange hover:text-white transition-colors font-montreal"
        >
          Visit live site →
        </a>
      )}
    </section>
  );
};

export default ComingSoon;
