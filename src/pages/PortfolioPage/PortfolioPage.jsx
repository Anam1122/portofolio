// src/pages/PortfolioPage/PortfolioPage.jsx
import React from 'react';
import projectsData from '../../data/projects'; // Import data proyek
import ProjectCard from '../../components/ProjectCard/ProjectCard'; // Import komponen ProjectCard
import styles from './PortfolioPage.module.css'; // Import CSS Module

function PortfolioPage() {
  return (
    <div className={styles.portfolioPage}>
      <section className={`${styles.heroSection} section-padding text-center`}>
        <div className="container">
          <h1 className={styles.heroTitle}>Koleksi Proyek Saya</h1>
          <p className={styles.heroSubtitle}>
            Jelajahi berbagai proyek yang telah saya kerjakan, mulai dari pengembangan web hingga desain UI/UX.
          </p>
        </div>
      </section>

      <section className={`${styles.projectsSection} section-padding`}>
        <div className="container">
          {/* Opsional: Bagian filter/sort di sini jika proyek Anda sangat banyak */}
          {/* <div className={styles.filterBar}>
            <button className={styles.filterButton}>Semua</button>
            <button className={styles.filterButton}>React.js</button>
            <button className={styles.filterButton}>UI/UX Design</button>
          </div> */}

          <div className={styles.projectsGrid}>
            {projectsData.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;