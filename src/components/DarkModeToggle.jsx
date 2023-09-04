import React from 'react';
import { useDarkMode } from '../DarkModeContext';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <img src={process.env.PUBLIC_URL + '/moon.svg'} alt="logo"/> : <img src={process.env.PUBLIC_URL + '/sun.svg'} alt="logo"/>}
    </button>
  );
};

export default DarkModeToggle;
