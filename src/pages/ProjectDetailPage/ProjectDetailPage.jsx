import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProjectDetailPage.module.css';
import projects from '../../data/projects';

function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>Project Not Found</h2>
        <button onClick={() => navigate('/portfolio')} className={styles.backButton}>← Back to Portfolio</button>
      </div>
    );
  }

  return (
    <section className={styles.project}>
      <div className={styles.container}>
        <button onClick={() => navigate('/portfolio')} className={styles.backButton}>← Back to Portfolio</button>
        <img src={project.image} alt={project.title} className={styles.image} />
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>
        <h4 className={styles.stackTitle}>Tech Stack</h4>
        <ul className={styles.stackList}>
          {project.techStack.map((tech, i) => (
            <li key={i} className={styles.stackItem}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectDetailPage;
