// src/pages/HomePage/HomePage.jsx
import React, { useEffect } from 'react';
import styles from './HomePage.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import AboutSection from '../../components/AboutSection/AboutSection';
import ContactSection from '../../components/ContactSection/ContactSection';

const HomePage = () => {
  useEffect(() => {
    AOS.init({ once: true });

    const handleScroll = () => {
      const offset = window.scrollY * 0.2;
      document.querySelectorAll(`.${styles.parallax}`).forEach((el) => {
        el.style.setProperty('--scroll-y', `${offset}px`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.parallaxBg}`}>
        <div className={styles.heroContent} data-aos="fade-up" data-aos-duration="1000">
          <h1 className={styles.heroTitle}>
            Selamat Datang di <span className={styles.highlight}>My Portfolio</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Saya Khoirul, membangun solusi digital untuk masa depan
          </p>
          <div className={styles.heroActions} data-aos="zoom-in" data-aos-delay="300">
            <a href="#portfolio" className={`${styles.button} ${styles.primaryButton}`}>
              Lihat Proyek
            </a>
            <a href="#contact" className={`${styles.button} ${styles.secondaryButton}`}>
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Shapes Dekoratif */}
        <div className={styles.heroShapes}>
          <div className={`${styles.shapeOne} ${styles.parallax}`}></div>
          <div className={`${styles.shapeTwo} ${styles.parallax}`}></div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={styles.featuredProjectsSection} id="portfolio">
        <h2 className={styles.sectionTitle} data-aos="fade-up">Proyek Unggulan</h2>
        <div className={styles.projectsGrid}>
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className={styles.ctaContainer} data-aos="fade-up" data-aos-delay="200">
          <Link to="/portfolio" className={`${styles.button} ${styles.primaryButton}`}>
            Lihat Semua Proyek
          </Link>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default HomePage;
