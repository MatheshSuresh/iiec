import React, { useEffect } from "react";
import Hero from "../components/home/Hero.jsx";
import DailyDealsSection from "../components/home/DailyDealsSection.jsx";
import FeaturedCategory from "../components/home/FeaturedCategory.jsx";
import OtherSections from "../components/home/OtherSections.jsx";

const HomeScreen = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(orderList());
  // }, [dispatch]);
  return (
    <div>
      <Hero></Hero>
      <DailyDealsSection></DailyDealsSection>
      <FeaturedCategory></FeaturedCategory>
      <OtherSections></OtherSections>
    </div>
  );
};

export default HomeScreen;
