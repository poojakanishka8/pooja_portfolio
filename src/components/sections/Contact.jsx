import { Mail, Github, Linkedin, MapPin, Code } from "lucide-react";
import { profile } from "../../data/resumeData";
import { useReveal } from "../../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const ref = useReveal();

  const socials = [
    { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
    { icon: Github, href: profile.github, label: "GitHub" },
    { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
    ...(profile.leetcode ? [{ icon: Code, href: profile.leetcode, label: "LeetCode" }] : []),
  ];

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container contact-inner">
        <div className="contact-heading-wrap" data-reveal>
          <span className="eyebrow">// Contact</span>
          <h2 className="section-heading">Let's Build Something Together</h2>
          <p className="section-sub contact-sub">
            I'm open to software development opportunities, internships, and
            interesting projects.
          </p>
        </div>

        <div className="contact-card glass" data-reveal data-reveal-delay="1">
          <div className="contact-detail">
            <MapPin size={16} />
            <span>{profile.location}</span>
          </div>
          <a href={`mailto:${profile.email}`} className="contact-email">
            {profile.email}
          </a>

          <div className="social-row">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="social-circle"
                aria-label={s.label}
                title={s.label}
              >
                <s.icon size={19} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
