import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { ClotheProvider } from './context/ClotheContext';
const App = () => {
  return (
    <ClotheProvider>
      <Router>
        <Routes />
      </Router>
    </ClotheProvider>
  );
};

export default App;
