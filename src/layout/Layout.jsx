import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
        </main>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
