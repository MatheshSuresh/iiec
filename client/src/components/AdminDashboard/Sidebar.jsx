import React from "react";
import {Link} from "react-router-dom";
import {
  LineStyle,
  TrendingUp,
  Timeline,
  PermIdentity,
  Group,
  AccountCircle,
  MailOutline,
  ChatBubbleOutline,
  DynamicFeed,
  WorkOutline,
  ErrorOutline,
} from "@material-ui/icons";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div
      classname='admin_side_bar'
      style={{
        minWidth: "255px",
        paddingLeft: "20px",
        borderRight: "1px solid #dbdbdb",
        marginTop: "0",
      }}
    >
      <div classname='admin_side_bar_wrapper'>
        <div classname='admin_side_bar_menu'>
          <h3 className='admin_side_bar_title mt-3'>Dashboard</h3>
          <ul classname='admin_side_bar_list' style={{padding: "10px"}}>
            <Link to='/admin'>
              <li className='admin_side_bar_item active'>
                <LineStyle className='admin_side_bar_icons' />
                Home
              </li>
            </Link>
            <li className='admin_side_bar_item'>
              <Timeline className='admin_side_bar_icons' />
              Analytics
            </li>
            <li className='admin_side_bar_item'>
              <TrendingUp className='admin_side_bar_icons' />
              Sales
            </li>
          </ul>
        </div>
        <div className='admin_side_bar_menu'>
          <h3 className='admin_side_bar_title'>Quick Menu</h3>
          <ul className='admin_side_bar_list'>
            <Link to='/admin/users'>
              <li className='admin_side_bar_item'>
                <PermIdentity />
                Users
              </li>
            </Link>
            <Link to='/admin/product-list'>
              <li className='admin_side_bar_item'>
                <WorkOutline />
                Services
              </li>
            </Link>
            <Link to='/admin/order-list'>
              <li className='admin_side_bar_item'>
                <AccountCircle />
                Orders
              </li>
            </Link>
            <Link to='/admin/lead-gen'>
              <li className='admin_side_bar_item'>
                <Group />
                Lead Generation
              </li>
            </Link>
          </ul>
        </div>
        <div className='admin_side_bar_menu'>
          <h3 className='admin_side_bar_title'>Notifications</h3>
          <ul className='admin_side_bar_list'>
            <li className='admin_side_bar_item'>
              <MailOutline />
              Mail
            </li>
            <li className='admin_side_bar_item'>
              <DynamicFeed />
              Feedback
            </li>
            <li className='admin_side_bar_item'>
              <ChatBubbleOutline />
              Messages
            </li>
          </ul>
        </div>
        <div className='admin_side_bar_menu'>
          <h3 className='admin_side_bar_title'>Staff</h3>
          <ul className='admin_side_bar_list'>
            <li className='admin_side_bar_item'>
              <WorkOutline />
              Manage
            </li>
            <li className='admin_side_bar_item'>
              <Timeline />
              Analytics
            </li>
            <li className='admin_side_bar_item'>
              <ErrorOutline />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
