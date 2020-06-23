import React, { Component } from "react";
import { observer } from 'mobx-react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
  return (
    <div className="sticky" style={{ marginBottom: -58 }}>
      <div className="horizontal-main hor-menu clearfix">
        <div className="horizontal-mainwrapper container clearfix">
          <nav className="horizontalMenu clearfix">
            <div className="overlapblackbg"></div>
            <ul className="horizontalMenu-list">
              <li aria-haspopup="true">
                <NavLink to="/" >
                  <i className="fa fa-home"></i>Hotel
                </NavLink>
              </li>
              <li aria-haspopup="true">
                <NavLink to="/booking" >
                  <i className="fa fa-puzzle-piece"></i>
                  <span className="pulse bg-warning" style={{ top: '1.3rem' }}>
                  </span>Booking
                </NavLink>
              </li>
              <li aria-haspopup="true">
                <NavLink to="/setting" >
                  <i className="fa fa-gift">
                  </i>Setting
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
