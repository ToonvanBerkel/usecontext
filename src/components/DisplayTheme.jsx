import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext);

  return <div>The current theme is {theme}</div>;
};

export default DisplayTheme;