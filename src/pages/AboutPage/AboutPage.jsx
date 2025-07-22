// src/pages/AboutPage/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css'; // Import CSS Module

function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={`${styles.heroSection} section-padding text-center`}>
        <div className="container">
          <h1 className={styles.heroTitle}>Tentang Saya</h1>
          <p className={styles.heroSubtitle}>Mengenal lebih dekat perjalanan saya di dunia teknologi.</p>
        </div>
      </section>

      <section className={`${styles.aboutContentSection} container section-padding`}>
        <div className={styles.profileSummary}>
          <img 
            src="/assets/images/profile.jpeg" // Ganti dengan path foto profil Anda
            alt="Foto Profil Anda" 
            className={styles.profilePicture} 
          />
          <div className={styles.summaryText}>
            <p>
              Hi! I'm Khoirul Anam, a passionate React Developer and UI/UX Enthusiast based in Yogyakarta, Indonesia.
              With a background in Informatics Engineering and hands-on experience in building modern web applications,
              I focus on crafting solutions that are not only functional, but also deliver intuitive and delightful user experiences.
            </p>
            <p>
              I truly enjoy the process of transforming complex ideas into clean and efficient user interfaces.
              My expertise in frontend development—using both pure CSS and frameworks like React.js—combined with a strong understanding of UI/UX design principles,
              allows me to craft digital products that are not only functional, but also meaningful and impactful.
            </p>
            <p>
              Outside of coding, I enjoy reading tech books, playing games, and exploring nature.
              I'm always eager to learn new things and collaborate on exciting projects.
              Feel free to reach out—I'd love to connect!
            </p>
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Keahlian Teknis</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js (Hooks, Context API, Router)</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3 (Pure CSS, Responsive Design, CSS Modules)</li>
                <li>Redux (Opsional, jika Anda menguasainya)</li>
                <li>State Management (Context API, useState/useReducer)</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>UI/UX Design</h3>
              <ul>
                <li>Figma & Adobe XD (Wireframing, Prototyping, UI Design)</li>
                <li>User Research & Persona Development</li>
                <li>User Flow & Journey Mapping</li>
                <li>Information Architecture</li>
                <li>Usability Testing</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Tools & Lain-lain</h3>
              <ul>
                <li>Git & GitHub (Version Control)</li>
                <li>VS Code</li>
                <li>NPM / Yarn</li>
                <li>Vite / Webpack (Basic Understanding)</li>
                <li>Basic Backend Concepts (RESTful APIs)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Opsional: Bagian Pengalaman Kerja/Pendidikan jika Anda ingin menampilkan CV singkat */}
        
        <div className={styles.experienceSection}>
          <h2 className={styles.sectionTitle}>Pengalaman & Pendidikan</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3>[Jabatan Anda] di [Nama Perusahaan]</h3>
              <p className={styles.timelineDate}>[Bulan Tahun Mulai] - [Bulan Tahun Selesai]</p>
              <ul>
                <li>[Tugas utama 1]</li>
                <li>[Tugas utama 2]</li>
              </ul>
            </div>
            <div className={styles.timelineItem}>
              <h3>[Gelar Pendidikan] di [Nama Universitas]</h3>
              <p className={styles.timelineDate}>[Tahun Mulai] - [Tahun Lulus]</p>
              <p>[Fokus Studi atau Prestasi]</p>
            </div>
          </div>
        </div>
       

      </section>
    </div>
  );
}

export default AboutPage;