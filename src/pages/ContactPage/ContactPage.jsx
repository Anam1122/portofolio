import React, { useState } from 'react';
import styles from './ContactPage.module.css';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sederhana: hanya console log
    console.log('Message submitted:', formData);
    alert('Thank you! Your message has been sent.');

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact Me</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
