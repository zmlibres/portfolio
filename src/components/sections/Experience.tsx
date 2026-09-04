import "./Experience.css";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        {/* Section heading */}
        <div className="section-heading">
          <span className="section-heading__number">02</span>

          <span className="section-heading__label">EXPERIENCE</span>
        </div>

        <div className="experience__intro">
          <h2>Where I've worked.</h2>
        </div>

        {/* Experience list */}
        <div className="experience__list">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.startDate}`}
              className="experience__item"
            >
              {/* Date */}
              <div className="experience__date">
                <span>{experience.startDate}</span>
                <span>—</span>
                <span>{experience.endDate ?? "Present"}</span>
              </div>

              {/* Details */}
              <div className="experience__details">
                <div className="experience__header">
                  <div>
                    <h3>{experience.role}</h3>

                    <p className="experience__company">{experience.company}</p>
                  </div>

                  <span className="experience__number">0{index + 1}</span>
                </div>

                <p className="experience__description">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="experience__technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
