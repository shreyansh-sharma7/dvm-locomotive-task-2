import React from "react";
import "../styles/section.css";

type SectionProps = {
  number?: number;
  bgColor?: string;
  textColor?: string;
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ number, children }) => {
  return (
    <section className={`section section-${number}`}>
      <div className="section-content">{children}</div>
      {/* <div>test</div> */}
    </section>
  );
};

export default Section;
