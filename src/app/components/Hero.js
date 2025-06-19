import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Hero() {
  return (
    <section id="home" className={`${styles.hero} ${styles.section}`}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Hello, Im <span>Dustin Manuel</span></h1>
            <h2>Computer Science Student at BINUS University</h2>
            <p>Specializing in Data Science | GPA: 3.74</p>
            <div className={styles.heroButtons}>
              <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>View My Work</a>
              <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>Contact Me</a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image 
              src="/pp.jpg" 
              alt="Dustin Manuel" 
              width={400} 
              height={400}
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}