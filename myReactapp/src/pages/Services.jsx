function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies.',
    },
    {
      title: 'UI / UX Design',
      description: 'Beautiful interfaces grounded in user research and best practices.',
    },
    {
      title: 'Consulting',
      description: 'Expert guidance to help you plan, build, and scale your product.',
    },
  ];

  return (
    <div className="page">
      <h1>Our Services</h1>
      <p className="page-subtitle">Here is what we can do for you.</p>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
