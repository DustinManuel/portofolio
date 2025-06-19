import styles from '@/styles/Home.module.css'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>DM</div>
          <div className={styles.footerLinks}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.footerSocial}>
            <a href="https://www.linkedin.com/in/dustin-manuel17/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/DustinManuel" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/dustin.mn?igsh=MXA3eGdzNjdkMmx2Yw%3D%3D&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Dustin Manuel. All rights reserved.</p>
          <p>Bina Nusantara University Student</p>
        </div>
      </div>
    </footer>
  )
}