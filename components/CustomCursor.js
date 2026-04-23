import { AppContext } from "@context/AppContext";
import { useEffect, useContext, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Cursor = () => {
  const { cursorStyle } = useContext(AppContext);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Ring lags behind with spring physics — fluid feel
  const ringX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.6 });

  const mouseRef = useRef({ x: -100, y: -100, vx: 0, vy: 0, lastX: -100, lastY: -100 });
  const canvasRef = useRef(null);

  // Track mouse into MotionValues + ref (no React state = no re-renders)
  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const m = mouseRef.current;
      m.vx = e.clientX - m.lastX;
      m.vy = e.clientY - m.lastY;
      m.lastX = e.clientX;
      m.lastY = e.clientY;
      m.x = e.clientX;
      m.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  // Canvas ember trail — paint-and-fade technique
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    let frame;
    let lastDrawX = -100;
    let lastDrawY = -100;

    const draw = () => {
      // Fade existing pixels — creates the trail tail
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw new ember dot at mouse position
      ctx.globalCompositeOperation = "lighter";
      const m = mouseRef.current;
      const speed = Math.min(Math.hypot(m.vx, m.vy), 60);
      const size = 2 + speed * 0.08;
      const alpha = 0.35 + Math.min(speed / 40, 0.45);

      // Interpolate between last and current for smooth trail at fast speeds
      const steps = Math.max(1, Math.floor(Math.hypot(m.x - lastDrawX, m.y - lastDrawY) / 4));
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const px = lastDrawX + (m.x - lastDrawX) * t;
        const py = lastDrawY + (m.y - lastDrawY) * t;

        // Outer soft glow
        const grad = ctx.createRadialGradient(px, py, 0, px, py, size * 4);
        grad.addColorStop(0, `rgba(216,53,3,${alpha})`);
        grad.addColorStop(0.4, `rgba(216,53,3,${alpha * 0.3})`);
        grad.addColorStop(1, "rgba(216,53,3,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Hot core
        ctx.fillStyle = `rgba(255,180,120,${alpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(px, py, size * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }

      lastDrawX = m.x;
      lastDrawY = m.y;

      // Decay velocity so still mouse stops drawing
      m.vx *= 0.85;
      m.vy *= 0.85;

      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const isHovered = cursorStyle === "hovered";

  return (
    <>
      {/* Ember trail canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997] hidden lg:block"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Outer ring — spring-lagged */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? "7rem" : "2.4rem",
          height: isHovered ? "7rem" : "2.4rem",
          borderColor: isHovered ? "rgba(216,53,3,1)" : "rgba(255,255,255,0.7)",
          backgroundColor: isHovered ? "rgba(216,53,3,0.12)" : "rgba(216,53,3,0)",
        }}
        transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 top-0 border-[1.5px] rounded-full pointer-events-none z-[9998] hidden lg:flex items-center justify-center backdrop-blur-[2px]"
      >
        <motion.p
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.25 }}
          className="text-white uppercase text-[0.8rem] text-center leading-[1] font-montreal pointer-events-none"
        >
          open<br />link
        </motion.p>
      </motion.div>

      {/* Inner dot — instant follow, orange ember core */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed left-0 top-0 w-[7px] h-[7px] rounded-full pointer-events-none z-[9999] hidden lg:block"
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "#D83503",
            boxShadow: "0 0 8px 2px rgba(216,53,3,0.7), 0 0 18px 4px rgba(216,53,3,0.25)",
          }}
        />
      </motion.div>
    </>
  );
};

export default Cursor;
