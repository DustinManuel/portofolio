import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Rapi Triage Website',
      description: 'A website of triage that help doctor to make decision',
      technologies: ['Java', 'Flutter'],
      image: '/triage website.png',
      link: 'https://github.com/DustinManuel/RapiTriage_Final'
    }
  ]

  return (
    <section id="projects" className={`${styles.projects} ${styles.section}`}>
      <div className="container">
        <h2>My Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400}
                  height={250}
                  layout="responsive"
                />
              </div>
              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techTags}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className={styles.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}   