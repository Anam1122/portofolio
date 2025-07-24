import React from 'react';
import { Link } from 'react-router-dom'; // 🔧 tambahkan import ini
import styles from './PortfolioPage.module.css';
import projects from '../../data/projects';

function PortfolioPage() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <h1 className={styles.heading}>My Projects</h1>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <Link to={`/portfolio/${project.id}`} className={styles.linkOverlay}></Link>
              <img src={project.image} alt={project.title} className={styles.image} />
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.techStack.map((tech, index) => (
                  <span key={index} className={styles.tag}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;
