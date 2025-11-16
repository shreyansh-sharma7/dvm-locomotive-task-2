import { useEffect, useState } from "react";
// @ts-ignore: missing type declarations for the JS component
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
    <div className="" style={{ backgroundColor: bgColor }}>
      {/* <Section number={0} bgColor="transparent" textColor="#fff"></Section> */}
      <Section number={1} bgColor="transparent" textColor="#fff">
        <div style={{}}>
          <nav
            className="color-black"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Parallax direction="x" speed={0.5}>
              <div>LOCOMOTIVE.CA</div>
            </Parallax>
            <Parallax direction="x" speed={-0.5}>
              <div>V4.X</div>
            </Parallax>
          </nav>
          <Parallax speed={-0.075}>
            <span className="color-black">LOCOMOTIVE</span>
          </Parallax>

          <Parallax speed={-0.03}>
            <span className="color-black">SCROLL</span>
          </Parallax>

          {/* <Parallax speed={1}> */}
          <div style={{ display: "flex", color: "white" }}>
            <Parallax speed={-0.05}>
              <span>V</span>
            </Parallax>
            <Parallax speed={-0.2}>
              <span>4</span>
            </Parallax>
            <Parallax speed={-0.01}>
              <span>.</span>
            </Parallax>
            <Parallax speed={-0.1}>
              <span>X</span>
            </Parallax>
            {/* </Parallax> */}
          </div>
        </div>
      </Section>
      <Section number={2} bgColor="transparent" textColor="#fff">
        Test
      </Section>
      <Section number={3} bgColor="transparent" textColor="#fff" />
      <Section number={4} bgColor="transparent" textColor="#fff" />
      <Section number={5} bgColor="transparent" textColor="#fff" />
      <Section number={6} bgColor="transparent" textColor="#fff" />
    </div>
  );
}

export default App;
