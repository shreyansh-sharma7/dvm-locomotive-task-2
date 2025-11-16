import { useEffect, useRef, type ReactNode } from "react";
import "../styles/parallax.css";

export function Parallax({
  speedX = 0,
  speedY = 0,
  children,
}: {
  speedX?: number;
  speedY?: number;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      const x = scrollY * speedX;
      const y = scrollY * speedY;

      el.style.transform = `translate(${x}px, ${y}px)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speedX, speedY]);

  return (
    <div ref={ref} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

export default Parallax;
