// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <p>&copy; {currentYear} Nama Anda. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
          {/* Tambahkan link media sosial lain jika ada */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;