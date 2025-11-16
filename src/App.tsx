import { useEffect, useState } from "react";
import Section from "./components/Section.tsx";
import "./styles/globals.css";
import Parallax from "./components/Parallax.tsx";

function App() {
  const [bgColor, setBgColor] = useState("rgb(212,201,201)");

  useEffect(() => {
    const colors = [
      [212, 201, 201],
      [212, 212, 201],
      [201, 212, 201],
      [201, 212, 212],
      [201, 201, 212],
      [212, 201, 212],
      [212, 201, 201],
    ];

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const fraction = scrollTop / maxScroll;
      const segment = (colors.length - 1) * fraction;

      const i = Math.floor(segment);
      const t = segment - i;

      const c1 = colors[i];
      const c2 = colors[i + 1] || colors[i];

      const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
      const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
      const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);

      setBgColor(`rgb(${r},${g},${b})`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: bgColor }}>
      <Section number={1} bgColor="transparent" textColor="#fff">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Parallax speedX={0.2} speedY={0.8}>
            <div>LOCOMOTIVE.CA</div>
          </Parallax>

          <Parallax speedX={-0.2} speedY={0.8}>
            <div>V4.X – EDITION</div>
          </Parallax>
        </nav>

        <Parallax speedX={0} speedY={-0.075}>
          <span className="color-black">LOCOMOTIVE</span>
        </Parallax>

        <Parallax speedX={0} speedY={-0.03}>
          <span className="color-black">SCROLL</span>
        </Parallax>

        <div style={{ display: "flex", color: "white" }}>
          <Parallax speedX={0} speedY={-0.05}>
            <span>V</span>
          </Parallax>

          <Parallax speedX={0} speedY={-0.2}>
            <span>4</span>
          </Parallax>

          <Parallax speedX={0} speedY={-0.01}>
            <span>.</span>
          </Parallax>

          <Parallax speedX={0} speedY={-0.1}>
            <span>X</span>
          </Parallax>
        </div>

        {/* <svg role="img">
          <use xlink:href="dist/images/sprite.svg#logo"></use>
        </svg> */}
        <hr></hr>
      </Section>

      <Section number={2} bgColor="transparent" textColor="#fff">
        <Parallax speedX={0.1}>Test</Parallax>
      </Section>

      <Section number={3} bgColor="transparent" textColor="#fff" />
      <Section number={4} bgColor="transparent" textColor="#fff" />
      <Section number={5} bgColor="transparent" textColor="#fff">
        <Parallax speedX={0.1}>
          <div>🚂</div>
        </Parallax>
        <Parallax speedX={-0.1}>
          <div>🚂</div>
        </Parallax>
      </Section>
      <Section number={6} bgColor="transparent" textColor="#fff">
        <span className="color-black">DAMN</span>
        <span className="color-black">YOU REALLY</span>
        <span className="color-black">LIKE TO</span>
        <span className="color-white">SCROLL</span>
      </Section>
    </div>
  );
}

export default App;
