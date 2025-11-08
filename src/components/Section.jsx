import '../styles/section.css';

const Section = ({ title, bgColor, textColor }) => {
  return (
    <section
      className="section"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="section-content">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default Section;
