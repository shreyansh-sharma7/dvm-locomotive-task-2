import { useEffect, useRef, type ReactNode } from "react";

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
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // local scroll relative to THIS element
      const localScroll = viewportHeight - rect.top;

      const x = localScroll * speedX;
      const y = localScroll * speedY;

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
