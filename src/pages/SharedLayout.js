import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const SharedLayout = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
