import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const ENTER_MS = 850; // matches panel transition duration
const HOLD_MS = 500;  // dwell time with curtain fully covering
const EXIT_MS = 800;  // retract + label fade

// Curtain-style route transition. Two panels sweep in from top/bottom,
// meet center, hold briefly, then retract. Label flashes at meet.
const PageTransition = () => {
  const router = useRouter();
  const [state, setState] = useState("idle");
  const [label, setLabel] = useState("");
  const startedAtRef = useRef(0);

  useEffect(() => {
    let holdTimer;
    let exitTimer;

    const start = (url) => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      startedAtRef.current = Date.now();
      setLabel(deriveLabel(url));
      setState("enter");
    };

    const complete = () => {
      // Wait for enter animation to finish covering screen BEFORE exit —
      // otherwise static routes flash new page through half-drawn curtain.
      const elapsed = Date.now() - startedAtRef.current;
      const delay = Math.max(0, ENTER_MS - elapsed) + HOLD_MS;
      holdTimer = setTimeout(() => {
        setState("exit");
        exitTimer = setTimeout(() => setState("idle"), EXIT_MS);
      }, delay);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", complete);
    router.events.on("routeChangeError", complete);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", complete);
      router.events.off("routeChangeError", complete);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
    };
  }, [router]);

  const active = state !== "idle";
  const retract = state === "exit";

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="page-transition"
          className="fixed inset-0 z-[10000] pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute left-0 right-0 top-0 h-1/2 bg-black"
            initial={{ y: "-100%" }}
            animate={{ y: retract ? "-100%" : "0%" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute left-0 right-0 bottom-0 h-1/2 bg-black"
            initial={{ y: "100%" }}
            animate={{ y: retract ? "100%" : "0%" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Orange seam at the meeting line */}
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-[2px] bg-royal-orange -translate-y-1/2 origin-left"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: retract ? 0 : 1,
              opacity: retract ? 0 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
              delay: retract ? 0 : 0.45,
            }}
          />

          {/* Slug label — flashes at center during hold */}
          <motion.p
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white uppercase tracking-[0.3em] text-[0.9vw] font-montreal"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: retract ? 0 : 1,
              y: retract ? -10 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: retract ? 0 : 0.55,
            }}
          >
            <span className="text-royal-orange mr-3 font-playfair italic normal-case tracking-normal">
              →
            </span>
            {label}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const deriveLabel = (url) => {
  if (!url || url === "/") return "Index";
  const parts = url.replace(/^\/+/, "").split("/");
  if (parts[0] === "work" && parts[1]) {
    return parts[1].replace(/-/g, " ");
  }
  return parts.join(" · ").replace(/-/g, " ");
};

export default PageTransition;
