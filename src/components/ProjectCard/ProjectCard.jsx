// src/components/ProjectCard/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css'; // Import CSS Module

function ProjectCard({ project }) {
  return (
    <Link to={`/portfolio/${project.id}`} className={styles.projectCard}>
      <img 
        src={project.imageUrl} 
        alt={project.altText || `Gambar proyek ${project.title}`} 
        className={styles.projectImage} 
        loading="lazy" // Tambahkan lazy loading untuk performa
      />
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.shortDescription}</p>
        <div className={styles.projectTechs}>
          {project.technologies.slice(0, 3).map((tech, index) => ( // Tampilkan maksimal 3 teknologi
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className={styles.techTag}>...</span>
          )}
        </div>
        <span className={styles.viewDetails}>Lihat Detail &rarr;</span>
      </div>
    </Link>
  );
}

export default ProjectCard;