// src/components/Header/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Khoirul<span>Anam</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
            <span className={`${styles.bar} ${menuOpen ? styles.bar1 : ''}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.bar2 : ''}`}></span>
            <span className={`${styles.bar} ${menuOpen ? styles.bar3 : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
