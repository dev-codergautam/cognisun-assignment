import React from 'react';
import Header from './view/include/Header';
import Footer from './view/include/Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
