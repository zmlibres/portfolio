import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        {/* Section heading */}
        <div className="section-heading">
          <span className="section-heading__number">01</span>

          <span className="section-heading__label">ABOUT</span>
        </div>

        {/* Content */}
        <div className="about__content">
          <div className="about__text">
            <h2>A little about me.</h2>

            <p>
              I'm a software engineer focused on backend development,
              distributed systems, and building reliable services.
            </p>

            <p>
              I enjoy working on problems involving APIs, event-driven systems,
              data, and the messy parts of production software.
            </p>

            <p>
              For me, engineering isn't just about making something work. It's
              about understanding the problem, designing a solution that makes
              sense, and making sure it continues to work when things don't go
              as planned.
            </p>
          </div>

          {/* Engineering card */}
          <div className="about__card">
            <div className="about__card-header">
              <span>ENGINEERING</span>
              <span>01</span>
            </div>

            <div className="about__card-title">
              BACKEND
              <br />
              ENGINEER
            </div>

            <div className="about__technologies">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Kafka</span>
              <span>PostgreSQL</span>
              <span>Redis</span>
              <span>Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
