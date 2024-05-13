import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './toggle.css';

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="toggle-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
      <i className={`bx bx-moon icon-moon ${theme === 'light' ? 'icon-hidden' : ''}`}></i>
      <i className={`bx bx-sun icon-sun ${theme === 'dark' ? 'icon-hidden' : ''}`}></i>
    </button>
  );
}

export default Toggle;
