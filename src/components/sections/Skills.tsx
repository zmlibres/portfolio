import "./Skills.css";
import { skills } from "../../data/skills";

const categories = [
  {
    key: "backend",
    label: "BACKEND",
    description: "Building APIs, services, and event-driven systems.",
  },
  {
    key: "database",
    label: "DATABASE",
    description: "Working with persistent data and distributed state.",
  },
  {
    key: "devops",
    label: "DEVOPS & INFRA",
    description: "Containerization, development workflows, and environments.",
  },
  {
    key: "tools",
    label: "TOOLS",
    description: "Tools I use to build, test, and maintain software.",
  },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-heading__number">04</span>

          <span className="section-heading__label">Skills</span>
        </div>

        <div className="skills-header">
          <h2>What I work with.</h2>

          <p>
            Technologies and engineering practices I use to build reliable
            backend systems.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category.key,
            );

            return (
              <div className="skill-group" key={category.key}>
                <div className="skill-group-header">
                  <span className="skill-group-label">{category.label}</span>

                  <span className="skill-group-count">
                    {String(categorySkills.length).padStart(2, "0")}
                  </span>
                </div>

                <p className="skill-group-description">
                  {category.description}
                </p>

                <div className="skill-list">
                  {categorySkills.map((skill) => (
                    <div className="skill-item" key={skill.name}>
                      <span className="skill-dot" />
                      <span>{skill.name}</span>
                    </div>
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
