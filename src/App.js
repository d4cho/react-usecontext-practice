import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
// import ClassContextComponent from './ClassContextComponent';
import { ThemeProvider } from './ThemeContext';

// export const ThemeContext = React.createContext();

const App = () => {
  // const [darkTheme, setDarkTheme] = useState(true);

  // const toggleTheme = () => {
  //   setDarkTheme(!darkTheme);
  // };

  return (
    <>
      {/* <ThemeContext.Provider value={darkTheme}> */}
      <ThemeProvider>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
      {/* </ThemeContext.Provider> */}
    </>
  );
};

export default App;
