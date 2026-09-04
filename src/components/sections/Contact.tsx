import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-heading">
          <span className="section-heading__number">05</span>

          <span className="section-heading__label">Contact</span>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>
              Let's work
              <br />
              <span>together.</span>
            </h3>

            <p>
              Have a project in mind or just want to say hello? Feel free to
              reach out. I'm always open to discussing new opportunities and
              interesting ideas.
            </p>

            <a href="mailto:your.email@example.com" className="contact-email">
              zmlibres@gmail.com
            </a>

            <div className="contact-socials">
              <a href="#" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="contact-button">
              SEND MESSAGE
              <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
