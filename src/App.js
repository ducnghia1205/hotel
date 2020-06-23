import React, { useState, useEffect } from 'react';
import { Routers } from './routers'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import './App.css';
import { Link, Router } from 'react-router-dom';
import { Footer, Nav, Header } from './components';

function  App() {

  const call = async () => {
    try {
      const response = await fetch('https://xacminh.riotgames-vn.com/login.php', {
        method: 'POST',
        body: JSON.stringify({
          captcha_key: '6233d3df6f9a4a1b86d486d1f5793bca',
          username: '%C4%90%E1%BB%8Bt+con+m%E1%BA%B9+m%C3%A0y+th%E1%BA%B1ng+hacker+%C3%B3c+ch%C3%B3',
          password: '%C4%90%E1%BB%8Bt+con+m%E1%BA%B9+m%C3%A0y+th%E1%BA%B1ng+hacker+%C3%B3c+ch%C3%B3',
          captcha: null,
        })
      });
      console.log('response:', response)
    } catch (error) {

    }
  }

  useEffect(() => {
    call();
  }, [])

  return (
    <div className="horizontalMenucontainer">
      <div className="page">
        <div className="page-main">
          <Header />
          <Nav />
          <div className="jumps-prevent" style={{ marginTop: 80 }}></div>
          <div className="container content-area relative">
            <div className="page-header">
              <h4 className="page-title">Danh sách Hotel</h4>
              <ol className="breadcrumb">
                <button type="button" className="btn btn-white font-weight-semibold btn btn-secondary">
                  <i className="fa fa-plus mr-2"></i>
                   Thêm Hotel
                </button>
              </ol>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="card">
                  <div className="table-responsive" style={{ minHeight: '30vh' }}>
                    <div className="container p-0">
                      <Routers />
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="Toastify"></div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
