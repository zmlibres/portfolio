import "./Projects.css";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-heading__number">03</span>

          <span className="section-heading__label">Projects</span>
        </div>

        <div className="projects-header">
          <h2>Selected work.</h2>

          <p>
            A collection of backend systems, services, and engineering work
            focused on reliability and real-world problem solving.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "project-card-featured" : ""
              }`}
              key={project.number}
            >
              <div className="project-number">{project.number}</div>

              <div className="project-content">
                <div className="project-main">
                  <h3>{project.title}</h3>

                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                {project.highlights && (
                  <div className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <div className="project-highlight" key={highlight}>
                        <span className="project-highlight-arrow">↗</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="project-arrow">↗</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
