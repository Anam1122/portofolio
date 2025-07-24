// src/components/ContactSection/ContactSection.jsx
import React from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title} data-aos="fade-up">Hubungi Saya</h2>
        <form className={styles.form} data-aos="fade-up" data-aos-delay="100">
          <div className={styles.inputGroup}>
            <input type="text" name="name" required />
            <label>Nama</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className={styles.inputGroup}>
            <textarea name="message" rows="5" required></textarea>
            <label>Pesan</label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
