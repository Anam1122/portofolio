// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'; // Import CSS Module
import projectsData from '../../data/projects'; // Import data proyek (pastikan path relatif benar)
import ProjectCard from '../../components/ProjectCard/ProjectCard'; // Import komponen ProjectCard

function HomePage() {
  // Ambil 3 proyek unggulan, atau sesuaikan jumlahnya
  const featuredProjects = projectsData.slice(0, 3); 

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} section-padding`}>
        <div className={`${styles.heroContent} container`}>
          <h1 className={styles.heroTitle}>Halo, saya <span className={styles.highlight}>[Khoirul Anam]</span>.</h1>
          <p className={styles.heroSubtitle}>
            Seorang **React Developer** dengan *passion* mendalam dalam **UI/UX Design**.
            Saya membangun aplikasi web yang efisien dan ramah pengguna.
          </p>
          <div className={styles.heroActions}>
            <Link to="/portfolio" className={`${styles.button} ${styles.primaryButton}`}>Lihat Portofolio</Link>
            <Link to="/contact" className={`${styles.button} ${styles.secondaryButton}`}>Hubungi Saya</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={`${styles.featuredProjectsSection} section-padding`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>Proyek Unggulan</h2>
          <div className={styles.projectsGrid}>
            {featuredProjects.map(project => (
              // Menggunakan komponen ProjectCard yang sudah dibuat
              <ProjectCard key={project.id} project={project} /> 
            ))}
          </div>
          <div className={`${styles.ctaContainer} text-center`}>
            <Link to="/portfolio" className={`${styles.button} ${styles.primaryButton}`}>Lihat Semua Proyek</Link>
          </div>
        </div>
      </section>

      {/* About Section Snippet (Opsional) */}
      <section className={`${styles.aboutSnippetSection} section-padding`}>
        <div className={`${styles.aboutContent} container text-center`}>
          <h2 className={styles.sectionTitle}>Tentang Saya</h2>
          <p className={styles.aboutText}>
            Saya adalah seorang pengembang yang bersemangat dalam menciptakan pengalaman digital yang intuitif dan menarik. 
            Dengan latar belakang di bidang IT dan fokus pada *frontend development* serta *user experience*, 
            saya selalu mencari cara untuk menggabungkan fungsionalitas yang kuat dengan desain yang indah.
          </p>
          <Link to="/about" className={`${styles.button} ${styles.secondaryButton}`}>Baca Selengkapnya</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;