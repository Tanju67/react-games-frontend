import React from "react";
import NavBar from "../components/shared/UIElemets/NavBar";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Index;
