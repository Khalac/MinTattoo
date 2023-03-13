import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import TattoosPage from './components/TattoosPage/TattoosPage';
import ArtPage from './components/ArtPage/ArtPage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route exac path="/" element={<Homepage />} />
        <Route exac path="About" element={<AboutPage />} />
        <Route exac path="Contact" element={<ContactPage />} />
        <Route exac path="Tattoos" element={<TattoosPage />} />
        <Route exac path="Art" element={<ArtPage />} />
      </Routes>
    </BrowserRouter> 
  </React.StrictMode> 
);
