import styles from '@/styles/Home.module.css'

export default function Achievements() {
  const achievements = [
    {
      title: "Binus Rector Cup Basketball 2024",
      year: "2024",
      description: "Achieved Rank 3",
      icon: "🏀🏆"
    },
    {
      title: "Kemanggisan 3x3 Festival Basketball",
      year: "2024",
      description: "Won 2nd place in BINUS Kemanggisan 3x3 Competition",
      icon: "🏀🏆"
    }
  ]

  return (
    <section id="achievements" className={`${styles.achievements} ${styles.section}`}>
      <div className="container">
        <h2>My Achievements</h2>
        <div className={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.achievementCard}>
              <div className={styles.achievementIcon}>{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p className={styles.achievementYear}>{achievement.year}</p>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}