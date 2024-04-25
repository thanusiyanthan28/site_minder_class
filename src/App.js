import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Calander } from './components/Calander';
import { Check } from './components/Check';
import { Fullscreen } from './components/Fullscreen';
import Header from './components/Header';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/component1" element={<Calander />} />
          <Route path="/component2" element={<Check />} />
          <Route path="/component3" element={<Fullscreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;