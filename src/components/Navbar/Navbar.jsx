import React from 'react'
import styles from './styles.module.css'
import { FaBuilding, FaBell } from 'react-icons/fa';
import Image from './passport.jpg'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <FaBuilding className={styles.icon} />
        <h2 className={styles.title}>CorporateIntern</h2>
      </div>
      <div className={styles.links}>
        <a href="#" className={styles.link}>Dashboard</a>
        <a href="#" className={styles.link}>Projects</a>
        <a href="#" className={styles.link}>Tickets</a>
        <a href="#" className={styles.link}>Documents</a>
        <a href="#" className={styles.link}>Chats</a>
        <a href="#" className={styles.link}>Mentorship</a>
        <a href="#" className={styles.link}>Analytics</a>
      </div>
      <div className={styles.user}>
        <div className={styles.notification}>
          <span className={styles.badge}>5</span>
          <FaBell />
        </div>
        <img
          src={Image}
          alt="User"
          className={styles.avatar}
        />
        <span className={styles.username}>Alex Kumar</span>
      </div>
    </div>
  )
}

export default Navbar
