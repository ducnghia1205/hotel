import React, { Component } from "react";
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-md-12 col-sm-12 text-center">
            © 2020
           <a href="/" target="_blank"> booking</a>
          </div>
        </div>
      </div>
    </footer>
  )
}