import { useEffect, useState } from "react";
// @ts-ignore: missing type declarations for the JS component
import Section from "./components/Section.tsx";
import "./styles/globals.css";

function App() {
  const [bgColor, setBgColor] = useState("rgb(212,201,201)");

  useEffect(() => {
    console.log("meow");
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
      <Section title="Section 1" bgColor="transparent" textColor="#fff" />
      <Section title="Section 2" bgColor="transparent" textColor="#fff" />
      <Section title="Section 3" bgColor="transparent" textColor="#fff" />
      <Section title="Section 4" bgColor="transparent" textColor="#fff" />
      <Section title="Section 5" bgColor="transparent" textColor="#fff" />
      <Section title="Section 6" bgColor="transparent" textColor="#fff" />
    </div>
  );
}

export default App;
