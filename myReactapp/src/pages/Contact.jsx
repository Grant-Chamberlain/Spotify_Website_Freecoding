import { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p className="page-subtitle">We would love to hear from you.</p>

      {submitted ? (
        <div className="contact-success">
          <h2>Thanks for reaching out!</h2>
          <p>We will get back to you as soon as possible.</p>
          <button onClick={() => setSubmitted(false)}>Send another message</button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="What's on your mind?" required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
