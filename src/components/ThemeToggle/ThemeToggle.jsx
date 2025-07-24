import React, { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Ambil dari localStorage jika ada, kalau tidak pakai light
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className={styles.toggle} onClick={toggleTheme} aria-label="Toggle Theme">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggle;
