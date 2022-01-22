import React, { useState } from "react";
import { KeyboardArrowRightOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function DropDown() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [close, setClose] = useState(false);
  const [close2, setClose2] = useState(false);

  const onMouseEnter1 = () => {
    setDropdown(true);
  };

  const onMouseLeave1 = () => {
    setDropdown(false);
  };

  const onMouseEnter2 = () => {
    setDropdown2(true);
    setClose(true);
  };

  const onMouseLeave2 = () => {
    setDropdown2(false);
    setClose(false);
  };

  const onMouseEnter3 = () => {
    setDropdown3(true);
    setClose(true);
  };

  const onMouseLeave3 = () => {
    setDropdown3(false);
    setClose(false);
  };

  return (
    <div>
      <div className='hero_collapse_menu'>
        <ul className='main_collapse_menu'>
          <Link className='flex-space_between' to='#'>
            <li
              onMouseLeave={onMouseLeave1}
              onMouseEnter={onMouseEnter1}
              className='collapse_menu_item'
            >
              Computer System
              <KeyboardArrowRightOutlined />
            </li>
            {dropdown && (
              <div
                onMouseEnter={onMouseEnter1}
                onMouseLeave={onMouseLeave1}
                className={`mega_collapse_menu ${close ? "close" : ""}`}
              >
                <div className='rows'>
                  <div className='cols'>Desktop</div>
                  <div className='cols'>Laptop/Notebook</div>
                  <div className='cols'>Gaming Laptop</div>
                  <div className='cols'>Shopping Tool</div>
                </div>
                <div className='rows'>
                  <div className='col'>
                    <Link to='/shop/614c12938a441070c0d0799a'>
                      Desktop Computer
                    </Link>
                  </div>
                  <div className='col'>
                    <Link to='/shop/614c17d58a441070c0d0799b'>
                      Laptop/Notebook
                    </Link>
                  </div>
                  <div className='col'>
                    <Link to='/shop/614c18e88a441070c0d0799c'>
                      Gaming Laptop
                    </Link>
                  </div>
                  <div className='col'>
                    <Link to='/shop/614c194b8a441070c0d0799d'>
                      Monitor Buying Guide
                    </Link>
                  </div>
                </div>
                <div className='rows'>
                  <div className='col'>
                    <Link to='#'>All-in-one Computer</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Chromebook</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>11th Gen Intel Gaming Laptop</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Battery and adapter</Link>
                  </div>
                </div>
                <div className='rows'>
                  <div className='col'>
                    <Link to='#'>Business Desktop</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Microsoft Surface</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>10th Gen Intel Gaming Laptop</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Memory Finder</Link>
                  </div>
                </div>
                <div className='rows'>
                  <div className='col'>
                    <Link to='#'>All-in-one Computer</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Chromebook</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>11th Gen Intel Gaming Laptop</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Battery and adapter</Link>
                  </div>
                </div>
              </div>
            )}
          </Link>
          <Link to='#'>
            <li
              onMouseEnter={onMouseEnter2}
              onMouseLeave={onMouseLeave2}
              className='collapse_menu_item'
            >
              Mobiles
              <KeyboardArrowRightOutlined />
            </li>
            {dropdown2 && (
              <div
                onMouseEnter={onMouseEnter2}
                onMouseLeave={onMouseLeave2}
                className='mega_collapse_menu-2 dropdown_2'
              >
                <div className='rows'>
                  <div className='cols'>TV & Home Theater</div>
                  <div className='cols'>Home Appliances</div>
                  <div className='cols'>Mobile Phones</div>
                  <div className='cols'>Portable Electronics</div>
                </div>
                <div className='rows'>
                  <div className='col'>
                    <Link to='/shop/6148ce6b043d544188162d31'>TV & Vide</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Home Appliences</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Cell Phones</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Headphones</Link>
                  </div>
                </div>
                <div className='rows'>
                  <div className='col'>
                    <Link to='#'>Home Audio & Home Theater</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Small Kitcen Applience</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Battery, Power Banks & Charger</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Gadget & Wearable</Link>
                  </div>
                </div>
                <div className='rows'>
                  <div className='col'>
                    <Link to='#'>Business Desktop</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Microsoft Surface</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>10th Gen Intel Gaming Laptop</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Memory Finder</Link>
                  </div>
                </div>
                <div className='rows'>
                  <div className='col'>
                    <Link to='#'>All-in-one Computer</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Chromebook</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>11th Gen Intel Gaming Laptop</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Battery and adapter</Link>
                  </div>
                </div>
              </div>
            )}
          </Link>
          <Link to='#'>
            <li
              onMouseEnter={onMouseEnter3}
              onMouseLeave={onMouseLeave3}
              className='collapse_menu_item'
            >
              Apparel {"&"} Accessories
              <KeyboardArrowRightOutlined />
            </li>
            {dropdown3 && (
              <div
                onMouseEnter={onMouseEnter3}
                onMouseLeave={onMouseLeave3}
                className='mega_collapse_menu-3'
              >
                <div className='rows'>
                  <div className='cols'>Lugges, Bags & Fashion</div>
                  <div className='cols'>Watches & Accessories</div>
                  <div className='cols'>Jewelry & Accessories</div>
                </div>
                <div className='rows'>
                  <div className='col'>
                    <Link to='#'>Luggage & Bags</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Watches</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Jewelry</Link>
                  </div>
                </div>
                <div className='rows'>
                  <div className='col'>
                    <Link to='#'>Shoes</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Men's</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Men's Jewelry</Link>
                  </div>
                </div>
                <div className='rows'>
                  <div className='col'>
                    <Link to='#'>Sunglass</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Women's</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Necklaces & Earrings</Link>
                  </div>
                </div>
                <div className='rows'>
                  <div className='col'>
                    <Link to='#'>Accessories</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Luxury</Link>
                  </div>
                  <div className='col'>
                    <Link to='#'>Weeding & Anniversary Rings</Link>
                  </div>
                </div>
              </div>
            )}
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              Toys {"&"} Drones
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              Flower {"&"} Gifts
              <KeyboardArrowRightOutlined />
            </li>
          </Link>

          <Link to='#'>
            <li className='collapse_menu_item'>
              Health {"&"} Sports
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              {" "}
              Home {"&"} Tools
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              Smart Tv
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              Fashion {"&"} Beauty
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li className='collapse_menu_item'>
              Gaming
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
          <Link to='#'>
            <li
              style={{ borderBottomWidth: "0" }}
              className='collapse_menu_item'
            >
              Baby {"&"} Kid's
              <KeyboardArrowRightOutlined />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
