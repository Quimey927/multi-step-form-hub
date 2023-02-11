import React, { useState, useEffect } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Container from './components/UI/Container/Container';
import StepActions from './components/StepActions/StepActions';
import './App.css';

const App = () => {
  const [deviceWidth, setDeviceWidth] = useState(null);

  // This useEffect is to get the initial devide width. It only runs on the first render
  // because React guaranties us that setDeviceWidth will never change.
  useEffect(() => {
    setDeviceWidth(window.innerWidth);
  }, [setDeviceWidth]);

  // This useEffect is to get the new device width if the user resizes his screen.
  useEffect(() => {
    function handleResize() {
      setDeviceWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
  });

  const mobileStructure = (
    <Container className="app">
      <Sidebar />
      <MainContent />
      <StepActions />
    </Container>
  );

  const desktopStructure = (
    <Container className="app">
      <Sidebar />
      <div className="right-column">
        <MainContent />
        <StepActions />
      </div>
    </Container>
  );

  if (deviceWidth <= 860) {
    return mobileStructure;
  }

  return desktopStructure;
};

export default App;
