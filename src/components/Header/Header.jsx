// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Import CSS Module

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}> {/* Menggunakan kelas global 'container' */}
        <Link to="/" className={styles.logo}>Tahu Bulat</Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink}>About</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;