import {createContext} from 'react';

const ThemeContext = createContext({
  switchTheme: () => {},
});

export default ThemeContext;
