import React, { useContext } from 'react';
// import { ThemeContext } from './App';
import { useTheme, useThemeUpdate } from './ThemeContext';

const FunctionContextComponent = () => {
  // const darkTheme = useContext(ThemeContext);
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1 style={themeStyles}>Function Theme</h1>
    </>
  );
};

export default FunctionContextComponent;
