import React from "react";

import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredinfo.css";
const FeaturedInfo = () => {
  return (
    <div className='admin_featured'>
      <div className='admin_featuredItem'>
        <span className='admin_featuredTitle'>Revenue</span>
        <div className='admin_featured_money_container'>
          <span className='admin_featuredMoney'>$1,555</span>
          <span className='admin_featuredMoneyRate'>
            -10.5
            <ArrowDownward className='admin_featured_icons negative' />
          </span>
        </div>
        <span className='admin_featured_subtitle'>Compared to last month</span>
      </div>
      <div className='admin_featuredItem'>
        <span className='admin_featuredTitle'>Sales</span>
        <div className='admin_featured_money_container'>
          <span className='admin_featuredMoney'>$4,555</span>
          <span className='admin_featuredMoneyRate'>
            2.5
            <ArrowUpward className='admin_featured_icons positive' />
          </span>
        </div>
        <span className='admin_featured_subtitle'>Compared to last month</span>
      </div>
      <div className='admin_featuredItem'>
        <span className='admin_featuredTitle'>Cost</span>
        <div className='admin_featured_money_container'>
          <span className='admin_featuredMoney'>$5000</span>
          <span className='admin_featuredMoneyRate'>
            -15.3
            <ArrowDownward className='admin_featured_icons negative' />
          </span>
        </div>
        <span className='admin_featured_subtitle'>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
