import React, { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import DisplayTheme from './components/DisplayTheme';

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <h1>UseContext Voorbeeld</h1>
      <ThemeSwitcher />
      <DisplayTheme />
    </div>
  );
};

export default Content;