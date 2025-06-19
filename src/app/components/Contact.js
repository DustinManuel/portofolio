import styles from '@/styles/Home.module.css'

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} ${styles.section}`}>
      <div className="container">
        <h2>Get In Touch</h2>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <p>
              <strong>Email:</strong> dustin.manuel@binus.ac.id
            </p>
            <p>
              <strong>Phone:</strong> +62 823-8531-4193
            </p>
            <p>
              <strong>LinkedIn:</strong> https://www.linkedin.com/in/dustin-manuel17/
            </p>
            <p>
              <strong>GitHub:</strong> https://github.com/DustinManuel
            </p>
          </div>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}