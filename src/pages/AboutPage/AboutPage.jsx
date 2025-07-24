import React, { useEffect } from 'react';
import styles from './AboutPage.module.css';

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas saat load halaman
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.heading}>About Me</h1>
        <p className={styles.text}>
          Hi! I'm <strong>Khoirul Anam</strong>, a passionate <strong>React Developer</strong> and <strong>UI/UX Enthusiast</strong> based in <strong>Yogyakarta, Indonesia</strong>.
          With a background in <strong>Informatics Engineering</strong> and experience in building modern web applications,
          I focus on crafting solutions that are both <em>functional</em> and <em>delightful to use</em>.
        </p>
        <p className={styles.text}>
          I love transforming complex ideas into clean and efficient interfaces. My skills in <strong>frontend development</strong>—using <strong>pure CSS</strong> and <strong>React.js</strong>—alongside a deep understanding of <strong>UI/UX principles</strong>,
          allow me to create meaningful digital experiences.
        </p>
        <p className={styles.text}>
          Outside of coding, I enjoy <strong>reading tech books</strong>, <strong>playing games</strong>, and <strong>exploring nature</strong>.
          I'm always open to learning new things and collaborating on exciting projects.
        </p>
        <p className={styles.text}>
          <strong>Feel free to reach out — I'd love to connect!</strong>
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
