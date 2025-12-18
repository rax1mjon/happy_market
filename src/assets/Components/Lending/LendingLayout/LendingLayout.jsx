import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import LandingHeader from "../LendingHeader/LendingHeader";

const LendingLayout = () => {
  return (
    <>
      <LandingHeader />

      <main className="pb-8 pt-40 sm:pt-25">
        <Outlet />
      </main>

      <Footer></Footer>
    </>
  );
};

export default LendingLayout;
