import { Briefcase, MapPin } from "lucide-react";
import { experience } from "../../data/resumeData";
import { useReveal } from "../../hooks/useReveal";
import "./Experience.css";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">// Experience</span>
          <h2 className="section-heading">Internships</h2>
          <p className="section-sub">
            Hands-on experience applying what I've learned in a real
            development team.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          {experience.map((e, i) => (
            <div
              className="timeline-item"
              key={e.role}
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <span className="timeline-dot">
                <Briefcase size={14} />
              </span>
              <div className="timeline-card glass">
                <div className="timeline-card-head">
                  <h3>{e.role}</h3>
                  <span className="timeline-duration">{e.duration}</span>
                </div>
                <p className="timeline-company">
                  {e.company}
                  <span className="timeline-loc">
                    <MapPin size={13} /> {e.location}
                  </span>
                </p>
                <ul className="timeline-points">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="timeline-tech">
                  {e.tech.map((t) => (
                    <span className="tech-badge" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
