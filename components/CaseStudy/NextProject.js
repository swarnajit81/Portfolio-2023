import { AppContext } from "@context/AppContext";
import Link from "next/link";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

const NextProject = ({ next }) => {
  const { setCursorStyle } = useContext(AppContext);
  const [hover, setHover] = useState(false);

  return (
    <section className="relative w-full bg-black">
      <Link href={`/work/${next.slug}`} legacyBehavior>
        <a
          onMouseEnter={() => {
            setHover(true);
            setCursorStyle("hovered");
          }}
          onMouseLeave={() => {
            setHover(false);
            setCursorStyle("");
          }}
          className="block relative w-full h-[80vh] overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${next.cover})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{ scale: hover ? 1.05 : 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
            <p className="text-royal-orange uppercase tracking-[0.25em] text-[0.9vw] mb-[3vh] font-montreal">
              Next Project — 0{next.slug ? 1 : 1}
            </p>
            <motion.h2
              animate={{ y: hover ? -10 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-montreal uppercase text-[7vw] leading-[1] font-[500]"
            >
              {next.title}
            </motion.h2>
            <motion.p
              animate={{ opacity: hover ? 1 : 0.4, y: hover ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className="mt-[3vh] font-playfair italic text-[1.2vw]"
            >
              open case study →
            </motion.p>
          </div>
        </a>
      </Link>
    </section>
  );
};

export default NextProject;
