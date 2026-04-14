function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p className="page-subtitle">Learn more about who we are and what we do.</p>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          We started as a small team with a big idea. Over the years we have grown
          into a passionate group of creators, developers, and designers who love
          building things that matter.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver high-quality digital experiences that delight
          users and solve real problems. We believe in clean code, thoughtful design,
          and continuous improvement.
        </p>
      </section>

      <section className="about-section">
        <h2>The Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">A</div>
            <h3>Alice</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">B</div>
            <h3>Bob</h3>
            <p>Backend Engineer</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">C</div>
            <h3>Charlie</h3>
            <p>Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
