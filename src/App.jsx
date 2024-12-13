import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Mythos from './pages/mythos';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path="/storyGenerator" element={<Home />} />
        <Route path="/storyGenerator/mythos" element={<Mythos />} />
        <Route path="/storyGenerator/about" element={<About />} />
        <Route path="/storyGenerator/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
