import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import AwardsPage from "./components/AwardsPage/AwardsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exac path="/" element={<Homepage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Gallery" element={<GalleryPage />} />
        <Route path="/Awards" element={<AwardsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
