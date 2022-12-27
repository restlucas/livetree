import React, { useEffect, useState, useRef } from 'react'

import styles from './Header.module.css';

const Header = () => {
 
  return (
    <header className={`${styles.header}`}>
      <h2>Livetree.</h2>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}>About us</li>
          <li className={styles.navItem}>Our mission</li>
          <li className={styles.navItem}>Projects</li>
          <li className={styles.navItem}>Partners</li>
          <li className={styles.navItem}>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header