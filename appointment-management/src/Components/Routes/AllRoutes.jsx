import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Appointment from '../AppointmentPage/Appointment';
import Home from '../Home';
import Test from '../Test';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/appointment' element={<Appointment />}></Route>
      <Route path='/test' element={<Test />}></Route>
    </Routes>
  )
}

export default AllRoutes
