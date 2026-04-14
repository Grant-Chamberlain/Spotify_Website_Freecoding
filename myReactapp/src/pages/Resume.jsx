function Resume() {
  return (
    <div className="page resume">
      <h1>Resume</h1>
      <p className="page-subtitle">A snapshot of my experience and skills.</p>

      <section className="resume-section">
        <h2>Experience</h2>

        <div className="resume-entry">
          <div className="resume-header">
            <h3>Frontend Developer</h3>
            <span className="resume-date">2024 &ndash; Present</span>
          </div>
          <p className="resume-company">Acme Corp</p>
          <ul>
            <li>Built responsive web apps with React and modern CSS.</li>
            <li>Collaborated with designers to translate Figma mockups into pixel-perfect UI.</li>
            <li>Improved page load times by 35% through code splitting and lazy loading.</li>
          </ul>
        </div>

        <div className="resume-entry">
          <div className="resume-header">
            <h3>Junior Developer</h3>
            <span className="resume-date">2022 &ndash; 2024</span>
          </div>
          <p className="resume-company">Startup Inc.</p>
          <ul>
            <li>Developed internal dashboards using React and Node.js.</li>
            <li>Wrote unit and integration tests to maintain 90%+ code coverage.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>

        <div className="resume-entry">
          <div className="resume-header">
            <h3>B.S. Computer Science</h3>
            <span className="resume-date">2018 &ndash; 2022</span>
          </div>
          <p className="resume-company">State University</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {['JavaScript', 'React', 'HTML & CSS', 'Node.js', 'Git', 'Figma', 'Python'].map(
            (skill) => (
              <span className="skill-tag" key={skill}>{skill}</span>
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default Resume;
