// src/components/AboutSection/AboutSection.jsx
import React from 'react';
import styles from './AboutSection.module.css';
import profileImg from '/images/profile.png'; //anti sesuai foto kamu

const AboutSection = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.text} data-aos="fade-right">
          <h2 className={styles.title}>Tentang Saya</h2>
          <p className={styles.paragraph}>
            Saya <strong>Khoirul</strong>, pengembang perangkat lunak yang fokus pada solusi digital berkelanjutan.
            Portofolio ini mencerminkan perjalanan saya dalam membangun aplikasi web, integrasi sistem, dan proyek-proyek edukatif seperti <em>AgriNuklir</em>.
          </p>
          <div className={styles.actions}>
            <a href="/CV-Khoirul.pdf" download className={styles.button}>
              Unduh CV
            </a>
            <a href="#contact" className={`${styles.button} ${styles.secondary}`}>
              Hubungi Saya
            </a>
          </div>
        </div>
        <div className={styles.imageWrapper} data-aos="fade-left">
          <img src={profileImg} alt="Khoirul" className={styles.profileImage} />
          <div className={styles.blob}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
