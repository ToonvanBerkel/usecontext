import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Content from './Content';

const App = () => {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
};

export default App;