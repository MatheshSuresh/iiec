import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import LargeWidget from "../widgets/LargeWidget";
import SmallWidget from "../widgets/SmallWidget";
import Chart from "../charts/Chart";
import { DummyData } from "../DummyData";
import FeaturedInfo from "./FeaturedInfo";
import "./homepage.css";
const HomePage = () => {
  let history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);

  // if(userLogin)

  const { userInfo } = userLogin;

  if (!userInfo) {
    history.push("/");
  } else {
    const { isAdmin } = userInfo;
    if (!isAdmin) {
      history.push("/");
    }
  }

  return (
    <div className='admin_home_page'>
      <FeaturedInfo />
      <Chart
        data={DummyData}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
      <div className='admin_home_widgets'>
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  );
};

export default HomePage;
