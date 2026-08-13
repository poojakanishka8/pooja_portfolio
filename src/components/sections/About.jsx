import { GraduationCap, Code2, Layers } from "lucide-react";
import { profile, stats, interests } from "../../data/resumeData";
import { useReveal } from "../../hooks/useReveal";
import "./About.css";

const STAT_ICONS = [GraduationCap, Code2, Layers];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container about-grid">
        <div className="about-copy" data-reveal>
          <span className="eyebrow">// About</span>
          <h2 className="section-heading">About Me</h2>
          <p className="about-text">{profile.summary}</p>

          <p className="about-text about-text-2">
            I'm a B.E. Computer Science &amp; Engineering student who enjoys
            turning ideas into working software — from AI-powered agents to
            full-stack applications. My interests sit at the intersection of:
          </p>

          <ul className="about-interests">
            {interests.map((item) => (
              <li key={item} className="pill">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-stats" data-reveal data-reveal-delay="1">
          {stats.map((s, i) => {
            const Icon = STAT_ICONS[i % STAT_ICONS.length];
            return (
              <div className="stat-card glass" key={s.label}>
                <Icon size={22} className="stat-icon" strokeWidth={1.8} />
                <p className="stat-value">{s.value}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
