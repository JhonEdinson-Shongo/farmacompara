import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Auth from './components/auth'

function App() {
  return (
    <Router>
      <Auth></Auth>
    </Router>
  );
}

export default App;
