import React, { useState } from "react";
import "../styles/skills.css";

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export interface Skill {
  name: string;
  category: string;
  icon: React.ReactNode;
  score: number;
  certifications: Certification[];
}

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  const certCount = skill.certifications.length;
  const minCertRows = 3;

  return (
    <div
      className="skillsCard-module"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      style={{ position: "relative", outline: "none" }}
    >
      {!hovered ? (
        <>
          <div className="skill-icon">{skill.icon}</div>
          <h2>{skill.name}</h2>
          <div className="skill-score">
            <span className="stars">
              {"★".repeat(skill.score)}
            </span>
            <span className="score-value">{skill.score}/10</span>
          </div>
        </>
      ) : (
        <div
          className="certifications"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.97)",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            padding: "2rem"
          }}
        >
          <div className="certifications-title" style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>
            Certifications:
          </div>
          <ul className="certifications-list" style={{ width: "100%" }}>
            {skill.certifications.map((cert: Certification, idx: number) => (
              <li key={idx}>
                <span className="cert-name">{cert.name}</span>
                <span className="cert-meta">
                  ({cert.issuer}, {cert.year})
                </span>
              </li>
            ))}
            {Array.from({ length: Math.max(0, minCertRows - certCount) }).map(
              (_, idx) => (
                <li key={`pad-${idx}`} className="invisible">
                  &nbsp;
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SkillCard;