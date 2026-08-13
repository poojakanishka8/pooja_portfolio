import { Eye, Download } from "lucide-react";
import { profile } from "../../data/resumeData";
import { useReveal } from "../../hooks/useReveal";
import "./ResumeCTA.css";

export default function ResumeCTA() {
  const ref = useReveal();

  return (
    <section id="resume" className="section resume-cta" ref={ref}>
      <div className="container">
        <div className="resume-panel" data-reveal>
          <div className="resume-panel-glow" aria-hidden="true" />
          <div className="resume-panel-dots" aria-hidden="true" />
          <h2 className="resume-heading">Want to know more about me?</h2>
          <p className="resume-text">
            Take a closer look at my skills, projects, education, and
            experience.
          </p>
          <div className="resume-actions">
            <a href={profile.resumeFile} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Eye size={17} /> View Resume
            </a>
            <a href={profile.resumeFile} download className="btn btn-outline resume-btn-outline">
              <Download size={17} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
