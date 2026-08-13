import { Award, Code, ExternalLink } from "lucide-react";
import { certifications, profile, languages } from "../../data/resumeData";
import { useReveal } from "../../hooks/useReveal";
import "./Certifications.css";

export default function Certifications() {
  const ref = useReveal();

  return (
    <section id="certifications" className="section certifications" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">// Certifications</span>
          <h2 className="section-heading">Certifications &amp; Practice</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((c, i) => (
            <div
              className="cert-card glass"
              key={c.name}
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <span className="cert-icon">
                <Award size={18} strokeWidth={1.8} />
              </span>
              <div>
                <h3>{c.name}</h3>
                <p>{c.issuer}</p>
              </div>
            </div>
          ))}

          {/* Coding practice card */}
          <div className="cert-card cert-code glass" data-reveal data-reveal-delay="3">
            <span className="cert-icon cert-icon-code">
              <Code size={18} strokeWidth={1.8} />
            </span>
            <div>
              <h3>Problem Solving</h3>
              <p>Java • Data Structures • Algorithms</p>
              {profile.leetcode ? (
                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm cert-code-btn"
                >
                  View Coding Profile <ExternalLink size={14} />
                </a>
              ) : (
                <span className="cert-code-note">
                  Practiced through coursework &amp; project work
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="languages-row" data-reveal data-reveal-delay="2">
          <span className="languages-label">Languages</span>
          {languages.map((l) => (
            <span className="pill" key={l}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
