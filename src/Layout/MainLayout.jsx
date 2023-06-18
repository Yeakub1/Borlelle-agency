import React from "react";
import Header from "../components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;
