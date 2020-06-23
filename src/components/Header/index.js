  import React, { Component } from "react";
import { observer } from 'mobx-react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="d-flex">
          <a id="horizontal-navtoggle" className="animated-arrow hor-toggle">
            <span></span>
          </a>
          <NavLink className="header-brand" to="/" >
            <img src={require('../../assets/img/logo.png')} className="header-brand-img desktop-logo" alt="Logo" />
          </NavLink>
          <div className="d-flex order-lg-2 ml-auto header-right-icons header-search-icon">
            <a href="#" className="nav-link nav-link-lg d-md-none navsearch">
              <i className="fa fa-search"></i>
            </a>
            <div className="default-header">
              <form className="form-inline">
                <div className="search-element">
                  <input type="search" className="form-control header-search" placeholder="Search…" tabIndex="1" />
                  <button className="btn btn-primary-color" type="submit">
                    <i className="fa fa-search"></i>
                  </button></div>
              </form>
            </div>
            <div className="dropdown d-md-flex notifications">
              <a className="nav-link icon"><i className="fa fa-bell-o"></i>
              </a>
            </div>
            <div className="dropdown d-md-flex header-settings">
              <a className="nav-link" href="/profile">
                <span>
                  <img src="https://lh3.googleusercontent.com/a-/AOh14GiQsOKve-lQFp5jEWp0Hr4GQgGFlZOPNBLNvNr5_Q"
                    alt="profile-user"
                    className="avatar brround cover-image mb-0 ml-0" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(Header)
