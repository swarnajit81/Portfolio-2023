import { AppContext } from "@context/AppContext";
import Link from "next/link";
import { useContext } from "react";

const BackLink = () => {
  const { setCursorStyle } = useContext(AppContext);
  return (
    <Link href="/" legacyBehavior>
      <a
        onMouseEnter={() => setCursorStyle("hovered")}
        onMouseLeave={() => setCursorStyle("")}
        className="fixed top-[10vh] left-[3vw] z-50 text-white uppercase tracking-[0.2em] text-[0.85vw] font-montreal mix-blend-difference hover:text-royal-orange transition-colors"
      >
        ← home
      </a>
    </Link>
  );
};

export default BackLink;
