import React, {Component, useEffect, useState} from "react";
import { observer } from 'mobx-react';

import './dashboard.css';
import { Card, CardImg, CardTitle, CardSubtitle, CardText, CardBody } from "reactstrap";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [hotels, setHotels] = useState([]);

  const callListHotel = async () => {

    try {
      let response = await fetch('https://backendhotel.herokuapp.com/api/v1/hotel', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }

      });
      response = await response.json();
      setHotels(response.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    callListHotel();
  }, []);

  return (

    <div className='row d-flex center p-0 m-0'>
      {hotels.length && hotels.map(h =>
        <div className="col-3 p-3">
          <NavLink to={`/hotel/${h._id}`} exact>
            <Card>
              <CardImg top width="100%" src="https://q-cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=" alt="Card image cap" />
              <CardBody>
                <CardTitle>{h.name}</CardTitle>
                <CardSubtitle>{h.phone}</CardSubtitle>
                <CardText>{h.description}</CardText>
              </CardBody>
            </Card>
          </NavLink>
        </div>
      )}
    </div>

  )
}

export default observer(Dashboard)
