import React from "react";
import "../styles/section.css";

type SectionProps = {
  number?: number;
  bgColor?: string;
  textColor?: string;
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  number,
  bgColor,
  textColor,
  children,
}) => {
  return (
    <section
      className={`section-${number}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="section-content">{children}</div>
    </section>
  );
};

export default Section;
