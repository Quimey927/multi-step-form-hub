import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import Container from './components/UI/Container/Container';
import StepActions from './components/StepActions/StepActions';
import './App.css';

const App = () => {
  const [deviceWidth, setDeviceWidth] = useState(null);
  const step = useSelector((state) => state.step.step);

  useEffect(() => {
    setDeviceWidth(window.innerWidth);

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [setDeviceWidth]);

  useEffect(() => {
    function handleResize() {
      setDeviceWidth(window.innerWidth);
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('resize', handleResize);
  });

  const mobileStructure = (
    <Container className="app">
      <Sidebar />
      <MainContent />
      {step !== 1 && step !== 5 && <StepActions />}
    </Container>
  );

  const desktopStructure = (
    <Container className="app">
      <Sidebar />
      <div className="right-column">
        <MainContent />
        {step !== 1 && step !== 5 && <StepActions />}
      </div>
    </Container>
  );

  if (deviceWidth <= 765) {
    return mobileStructure;
  }

  return desktopStructure;
};

export default App;
