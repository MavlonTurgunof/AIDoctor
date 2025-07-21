import React from "react";
import Navbar from "../src/components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../src/components/Footer";

function Applayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Applayout;
