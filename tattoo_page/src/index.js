import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import AwardsPage from "./components/AwardsPage/AwardsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exac path="/" element={<Homepage />} />
        <Route exac path="/About" element={<AboutPage />} />
        <Route exac path="/Contact" element={<ContactPage />} />
        <Route exac path="/Gallery" element={<GalleryPage />} />
        <Route exac path="/Awards" element={<AwardsPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
