import styles from '@/styles/Home.module.css'

export default function Skills() {
  const skills = [
    { name: 'JavaScript'},
    { name: 'Next.js'},
    { name: 'Python'},
    { name: 'Java'},
    { name: 'SQL'},
  ]

  return (
    <section id="skills" className={`${styles.skills} ${styles.section}`}>
      <div className="container">
        <h2>My Skills</h2>
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillInfo}>
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className={styles.skillBar}>
                <div 
                  className={styles.skillProgress} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}