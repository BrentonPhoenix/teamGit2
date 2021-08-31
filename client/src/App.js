import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './components/site/Header'
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import SiteIndex from './components/site/SiteIndex';
import {
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header />
     <Router>
       {/* <Sidebar /> */}
       <SiteIndex />
     </Router>
     <Footer />
    </div>
  );
}

export default App;