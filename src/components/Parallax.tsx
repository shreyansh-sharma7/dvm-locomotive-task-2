import { useEffect, useRef, type ReactNode } from "react";
import "../styles/parallax.css";
/**
 * <Parallax speed={number}>children</Parallax>
 * A simple universal parallax wrapper.
 * Speed range recommended: -1 to 1
 */
export function Parallax({
  speed = 1,
  direction = "y",
  children,
}: {
  speed?: number;
  direction?: "x" | "y";
  children?: ReactNode;
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Move wrapper
      el.style.transform = `translate${direction}(${scrollY * speed}px)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className="" style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

export default Parallax;
