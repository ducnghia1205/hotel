import React, {Component, useEffect, useState} from "react";
import { observer } from 'mobx-react';
import {NavLink} from "react-router-dom";
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

const Hotel = (props) => {

  const [hotel, setHotel] = useState({});

  const callHotelDetail = async () => {

    try {
      let response = await fetch(`https://backendhotel.herokuapp.com/api/v1/hotel/${props.match.params.id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }

      });
      response = await response.json();
      setHotel(response.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    callHotelDetail();
  }, []);

  return (
    <div className="col-3 p-3">
      <NavLink to={`/hotel/${hotel._id}`} exact>
        <Card>
          <CardImg top width="100%" src="https://q-cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=" alt="Card image cap" />
          <CardBody>
            <CardTitle>{hotel.name}</CardTitle>
            <CardSubtitle>{hotel.phone}</CardSubtitle>
            <CardText>{hotel.description}</CardText>
            <CardText>Photos: {hotel.photos} </CardText>
          </CardBody>
        </Card>
      </NavLink>
    </div>
  )
}

export default observer(Hotel)
