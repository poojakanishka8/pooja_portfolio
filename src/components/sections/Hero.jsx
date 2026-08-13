import { ArrowRight, Download, Sparkles, Braces, Database, Terminal, Cpu } from "lucide-react";
import { profile } from "../../data/resumeData";
import { useReveal } from "../../hooks/useReveal";
import "./Hero.css";

export default function Hero() {
  const ref = useReveal();

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-bg-glow" aria-hidden="true" />
      <div className="hero-dots" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="pill hero-badge" data-reveal>
            <span className="badge-dot" />
            Available for Opportunities
          </div>

          <h1 className="hero-title" data-reveal>
            Hi, I'm <span className="hero-title-accent">Pooja C</span>
          </h1>

          <p className="hero-role" data-reveal>
            {profile.title}
          </p>

          <p className="hero-desc" data-reveal>
            I build practical software and AI-powered applications using
            Java, Python, JavaScript, databases, and modern web technologies.
          </p>

          <div className="hero-actions" data-reveal>
            <a href="#projects" className="btn btn-primary" onClick={(e) => scrollTo(e, "#projects")}>
              View My Projects <ArrowRight size={17} />
            </a>
            <a href={profile.resumeFile} className="btn btn-outline" download>
              Download Resume <Download size={17} />
            </a>
          </div>

          <div className="hero-positioning" data-reveal>
            <Sparkles size={15} />
            <span>{profile.positioning}</span>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="hero-card-glow" aria-hidden="true" />

          <div className="hero-card glass">
            <div className="hero-card-top">
              <span className="hero-card-dots" aria-hidden="true">
                <i /><i /><i />
              </span>
              <span className="hero-card-tag">portfolio.jsx</span>
            </div>

            <div className="hero-card-body">
              <div className="hero-orb-wrap">
                <div className="hero-orb" />
                <Cpu className="hero-orb-icon" size={34} strokeWidth={1.6} />
              </div>

              <div className="hero-code">
                <p><span className="tok-key">const</span> <span className="tok-var">developer</span> = {"{"}</p>
                <p className="indent"><span className="tok-prop">role</span>: <span className="tok-str">"CSE Student"</span>,</p>
                <p className="indent"><span className="tok-prop">stack</span>: <span className="tok-str">"Java · AI · Full Stack"</span>,</p>
                <p className="indent"><span className="tok-prop">status</span>: <span className="tok-str">"open_to_work"</span><span className="cursor" /></p>
                <p>{"}"}</p>
              </div>
            </div>

            <div className="hero-card-badges">
              <span className="tech-chip"><Braces size={13} /> Java</span>
              <span className="tech-chip"><Terminal size={13} /> Python</span>
              <span className="tech-chip"><Database size={13} /> SQL</span>
            </div>
          </div>

          <div className="floaty floaty-1 glass">
            <Sparkles size={14} /> AI / ML
          </div>
          <div className="floaty floaty-2 glass">
            <Braces size={14} /> Full Stack
          </div>
        </div>
      </div>
    </section>
  );
}
