import React from "react";
import ChargesTypeWrapper from "../components/chargesType/chargeWrapper";
import ChargesTopBar from "../components/chargesType/chargesTopBar";
import { Sidebar } from "../components";
import { Outlet } from "react-router-dom";
export const Charges = () => {
  // useEffect(() => {
  //   getToken;
  // }, []);
  return (
    <div className="w-full h-screen bg-gray600">
      <ChargesTopBar />
      <section className="w-full flex mt-16 bg-gray600 relative">
        <Sidebar />
        <div className="mx-auto">
          <ChargesTypeWrapper />
          <Outlet />
        </div>
      </section>
    </div>
  );
};
