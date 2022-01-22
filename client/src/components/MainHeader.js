import React from "react";
import Topbar from "./common/TopBar";
import Header from "./common/Header";
import HeaderBottom from "./common/HeaderBottom";
const MainHeader = ({ children }) => {
  return (
    <>
      <Topbar></Topbar>
      <Header></Header>
      <HeaderBottom></HeaderBottom>
      {children}
    </>
  );
};

export default MainHeader;
