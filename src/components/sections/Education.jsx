import { GraduationCap } from "lucide-react";
import { education } from "../../data/resumeData";
import { useReveal } from "../../hooks/useReveal";
import "./Education.css";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">// Education</span>
          <h2 className="section-heading">Academic Background</h2>
        </div>

        <div className="edu-list">
          {education.map((ed, i) => (
            <div
              className="edu-card glass"
              key={ed.degree}
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <span className="edu-icon">
                <GraduationCap size={20} strokeWidth={1.8} />
              </span>
              <div className="edu-info">
                <div className="edu-top">
                  <h3>{ed.degree}</h3>
                  <span className="edu-duration">{ed.duration}</span>
                </div>
                <p className="edu-school">{ed.school}</p>
                <p className="edu-detail">{ed.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
