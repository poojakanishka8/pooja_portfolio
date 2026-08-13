import { profile } from "../data/resumeData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <span className="dot">•</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="dot">•</span>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
