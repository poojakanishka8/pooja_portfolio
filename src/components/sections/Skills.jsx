import {
  Code2,
  Globe,
  Database,
  BrainCircuit,
} from "lucide-react";
import { skillGroups } from "../../data/resumeData";
import { useReveal } from "../../hooks/useReveal";
import "./Skills.css";

const CATEGORY_ICONS = {
  "Programming Languages": Code2,
  "Web Development": Globe,
  "Database": Database,
  "Core Concepts": BrainCircuit,
  "AI & APIs": BrainCircuit,
};

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">// Skills</span>
          <h2 className="section-heading">What I Work With</h2>
          <p className="section-sub">
            Technologies and concepts I've applied through coursework,
            internships, and personal projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = CATEGORY_ICONS[group.category] || Code2;
            return (
              <div
                className="skill-card glass"
                key={group.category}
                data-reveal
                data-reveal-delay={String((i % 4) + 1)}
              >
                <div className="skill-card-head">
                  <span className="skill-icon">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <h3>{group.category}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((s) => (
                    <span className="skill-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
