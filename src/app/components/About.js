import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className={`${styles.about} ${styles.section}`}>
      <div className="container">
        <h2>About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Im a 2nd year Computer Science student at Bina Nusantara University.
            </p>
            <p>
              My academic journey at BINUS has equipped me with good fundamentals in algorithms, 
              data structures, and Data Science. I am interested 
              in learning something new and i like to adapt to new environment.
            </p>
            <div className={styles.eduInfo}>
              <h3>Education</h3>
              <p><strong>Bina Nusantara University</strong></p>
              <p>Bachelor of Computer Science (2023-2027)</p>
              <p>Concentration: Data Science</p>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <Image src="/BINUS.png" width={500} height={500} alt="BINUS University" />
          </div>
        </div>
      </div>
    </section>
  )
}