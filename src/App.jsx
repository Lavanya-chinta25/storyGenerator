import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Mythos from './pages/mythos';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        {/* Use relative paths without base during development */}
        <Route path="/" element={<Home />} />
        <Route path="/mythos" element={<Mythos />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
