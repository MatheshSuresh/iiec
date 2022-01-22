import React from "react";
import "./largeWidget.css";
const LargeWidget = () => {
  const Button = ({ type }) => {
    return <button className={"largeWidget_button " + type}>{type}</button>;
  };
  return (
    <div className='largeWidget'>
      <h3 className='largeWidget_title'>Last Transactions</h3>
      <table className='largeWidget_table'>
        <tr className='largeWidget_table_row'>
          <th className='largeWidget_th'>Customer</th>
          <th className='largeWidget_th'>Date</th>
          <th className='largeWidget_th'>Amount</th>
          <th className='largeWidget_th'>Status</th>
        </tr>
        <tr className='largeWidget_table_row'>
          <td className='largeWidget_user'>
            <img
              className='largeWidget_img'
              src='/images/developer.jpg'
              alt=''
            />
            <span className='largeWidget_name'>Fahim Arif</span>
          </td>
          <td className='largeWidget_date'>24 August 2021</td>
          <td className='largeWidgetAmount'>$500</td>
          <td className='largeWidget_status'>
            <Button type='approved' />
          </td>
        </tr>
        <tr className='largeWidget_table_row'>
          <td className='largeWidget_user'>
            <img
              className='largeWidget_img'
              src='/images/developer.jpg'
              alt=''
            />
            <span className='largeWidget_name'>Fahim Arif</span>
          </td>
          <td className='largeWidget_date'>24 August 2021</td>
          <td className='largeWidgetAmount'>$500</td>
          <td className='largeWidget_status'>
            <Button type='decliend' />
          </td>
        </tr>
        <tr className='largeWidget_table_row'>
          <td className='largeWidget_user'>
            <img
              className='largeWidget_img'
              src='/images/developer.jpg'
              alt=''
            />
            <span className='largeWidget_name'>Fahim Arif</span>
          </td>
          <td className='largeWidget_date'>24 August 2021</td>
          <td className='largeWidgetAmount'>$500</td>
          <td className='largeWidget_status'>
            <Button type='pending' />
          </td>
        </tr>
        <tr className='largeWidget_table_row'>
          <td className='largeWidget_user'>
            <img
              className='largeWidget_img'
              src='/images/developer.jpg'
              alt=''
            />
            <span className='largeWidget_name'>Fahim Arif</span>
          </td>
          <td className='largeWidget_date'>24 August 2021</td>
          <td className='largeWidgetAmount'>$500</td>
          <td className='largeWidget_status'>
            <Button type='pending' />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default LargeWidget;
