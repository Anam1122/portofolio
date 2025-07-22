// src/pages/ProjectDetailPage/ProjectDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../../data/projects';
import styles from './ProjectDetailPage.module.css';

function ProjectDetailPage() {
  const { projectId } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate(); // Untuk navigasi jika proyek tidak ditemukan
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Cari proyek berdasarkan ID
    const foundProject = projectsData.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
      // Opsional: Gulir ke atas halaman saat memuat detail proyek
      window.scrollTo(0, 0); 
    } else {
      // Jika proyek tidak ditemukan, arahkan ke halaman portofolio atau 404
      navigate('/portfolio'); 
    }
  }, [projectId, navigate]);

  if (!project) {
    return <div className="container section-padding text-center">Memuat proyek...</div>; // Atau tampilkan spinner
  }

  return (
    <div className={styles.projectDetailPage}>
      <section className={`${styles.heroSection} section-padding text-center`}>
        <div className="container">
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <p className={styles.projectRole}>{project.shortDescription}</p>
        </div>
      </section>

      <section className={`${styles.mainContent} container section-padding`}>
        <div className={styles.projectHeaderImage}>
          <img src={project.imageUrl} alt={project.altText} className={styles.mainImage} />
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.descriptionColumn}>
            <h2 className={styles.sectionHeading}>Ikhtisar Proyek</h2>
            {/* Menggunakan dangerouslySetInnerHTML karena longDescription bisa mengandung HTML/Markdown */}
            <div 
              className={styles.longDescription} 
              dangerouslySetInnerHTML={{ __html: project.longDescription.replace(/\n/g, '<br/>') }}
            ></div>
            
            <div className={styles.projectLinks}>
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.button} ${styles.primaryButton}`}
                >
                  Lihat Live Demo
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.button} ${styles.secondaryButton}`}
                >
                  Lihat Kode di GitHub
                </a>
              )}
              {project.figmaLink && (
                <a 
                  href={project.figmaLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.button} ${styles.tertiaryButton}`}
                >
                  Lihat Figma Prototype
                </a>
              )}
            </div>
          </div>

          <div className={styles.sidebarColumn}>
            <div className={styles.techStack}>
              <h3 className={styles.sidebarHeading}>Teknologi & Tools</h3>
              <ul className={styles.techList}>
                {project.technologies.map((tech, index) => (
                  <li key={index} className={styles.techItem}>{tech}</li>
                ))}
              </ul>
            </div>
            {/* Anda bisa menambahkan bagian lain di sidebar, misal: peran, durasi proyek, dsb. */}
          </div>
        </div>
      </section>
      
      {/* Opsional: Bagian lain seperti "More Projects" */}
      {/* <section className={`${styles.moreProjects} section-padding text-center`}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Proyek Lainnya</h2>
          <div className={styles.moreProjectsGrid}>
            // Anda bisa tampilkan ProjectCard dari proyek lain di sini
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default ProjectDetailPage;