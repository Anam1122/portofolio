// src/components/ProjectCard/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import Tilt from 'react-parallax-tilt';

function ProjectCard({ project }) {
  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.03} transitionSpeed={500}>
      <Link to={`/portfolio/${project.id}`} className={styles.projectCard}>
        <img 
          src={project.imageUrl || project.image} 
          alt={project.altText || `Gambar proyek ${project.title}`} 
          className={styles.projectImage} 
          loading="lazy"
        />
        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.shortDescription || project.description}</p>
          <div className={styles.projectTechs}>
            {project.technologies?.slice(0, 3)?.map((tech, index) => (
              <span key={index} className={styles.techTag}>{tech}</span>
            ))}
            {project.technologies?.length > 3 && (
              <span className={styles.techTag}>...</span>
            )}
          </div>
          <span className={styles.viewDetails}>Lihat Detail →</span>
        </div>
      </Link>
    </Tilt>
  );
}

export default ProjectCard;
