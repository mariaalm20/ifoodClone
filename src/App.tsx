import React, {useState} from 'react';
import Routes from './routes';
import {Colors} from './Themes';

const App = () => {
  const [theme, setTheme] = useState(Colors.primaryLight);

  return <Routes />;
};

export default App;
