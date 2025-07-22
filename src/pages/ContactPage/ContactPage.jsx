// src/pages/ContactPage/ContactPage.jsx
import React, { useState } from 'react';
import styles from './ContactPage.module.css'; // Import CSS Module

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // Untuk feedback status pengiriman form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Mengirim...');
    
    // Ini adalah CONTOH menggunakan Formspree.io
    // Anda perlu mengganti 'YOUR_FORMSPREE_FORM_ID' dengan ID formspree Anda.
    // Daftar gratis di https://formspree.io/
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Pesan berhasil terkirim! Terima kasih.');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        const data = await response.json();
        if (data.errors) {
          setStatus(data.errors.map(error => error.message).join(', '));
        } else {
          setStatus('Gagal mengirim pesan. Silakan coba lagi.');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Terjadi kesalahan jaringan. Silakan coba lagi nanti.');
    }
  };

  return (
    <div className={styles.contactPage}>
      <section className={`${styles.heroSection} section-padding text-center`}>
        <div className="container">
          <h1 className={styles.heroTitle}>Hubungi Saya</h1>
          <p className={styles.heroSubtitle}>
            Saya selalu terbuka untuk kolaborasi, peluang kerja, atau sekadar berdiskusi.
          </p>
        </div>
      </section>

      <section className={`${styles.contactContentSection} container section-padding`}>
        <div className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>Mari Terhubung</h2>
          <p>Anda bisa menghubungi saya melalui:</p>
          <ul className={styles.contactList}>
            <li>
              <strong>Email:</strong> <a href="mailto:your.email@example.com" className={styles.contactLink}>your.email@example.com</a>
            </li>
            <li>
              <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>linkedin.com/in/yourprofile</a>
            </li>
            <li>
              <strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>github.com/yourusername</a>
            </li>
            {/* Tambahkan media sosial atau platform lain */}
          </ul>
        </div>

        <div className={styles.contactFormContainer}>
          <h2 className={styles.sectionTitle}>Kirim Pesan</h2>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Nama Lengkap:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Pesan:</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
                required
              ></textarea>
            </div>
            <button type="submit" className={`${styles.submitButton} ${styles.button}`} disabled={status === 'Mengirim...'}>
              Kirim Pesan
            </button>
            {status && <p className={styles.formStatus}>{status}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;