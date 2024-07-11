import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Service from '../pages/Service';
import Doctors from '../pages/Doctors/Doctors';
import DoctorsDetails from '../pages/Doctors/DoctorsDetails';

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/service" element={<Service />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorsDetails />} />
    </Routes>
  )
}

export default Routers