import {
  Github,
  ExternalLink,
  CheckCircle2,
  Megaphone,
  ShoppingCart,
  Clapperboard,
  ClipboardCheck,
  Sprout,
} from "lucide-react";
import { projects } from "../../data/resumeData";
import { useReveal } from "../../hooks/useReveal";
import "./Projects.css";

const GLOWS = [
  "linear-gradient(135deg, #B9B3F5 0%, #E88BAF 100%)",
  "linear-gradient(135deg, #E9A5C7 0%, #B9B3F5 100%)",
];

const ICONS = {
  megaphone: Megaphone,
  cart: ShoppingCart,
  film: Clapperboard,
  check: ClipboardCheck,
  sprout: Sprout,
};

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">// Projects</span>
          <h2 className="section-heading">Featured Work</h2>
          <p className="section-sub">
            AI-powered and full-stack applications I've designed and built.
          </p>
        </div>

        <div className="projects-scroll">
        <div className="projects-grid">
          {projects.map((p, i) => {
            const ThumbIcon = ICONS[p.icon] || Megaphone;
            return (
            <article
              className="project-card glass"
              key={p.name}
              data-reveal
              data-reveal-delay={String(i + 1)}
            >
              <div
                className="project-thumb"
                style={{ background: GLOWS[i % GLOWS.length] }}
              >
                <span className="project-thumb-pattern" aria-hidden="true" />
                <span className="project-thumb-number">{String(i + 1).padStart(2, "0")}</span>
                <ThumbIcon className="project-thumb-icon" size={44} strokeWidth={1.3} />
                <span className="project-thumb-name">{p.name}</span>
              </div>

              <div className="project-body">
                <p className="project-tagline">{p.tagline}</p>
                <p className="project-desc">{p.description}</p>

                <ul className="project-features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={15} className="feature-icon" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span className="tech-badge" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                      <Github size={15} /> GitHub
                    </a>
                  )}
                  {p.demo ? (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-gradient btn-sm">
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
