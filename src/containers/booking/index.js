import React, { Component } from "react";
import { observer } from 'mobx-react';
const token_type = 'Bearer';

const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWI5MjRjNjE1ODY3YTNkMzQzNzdmOWIiLCJpYXQiOjE1OTI4MTk1NjUsImV4cCI6MTU5MjkwNTk2NX0.XozpEmBOm5wfk-P70t8JxovSRs1e_7YLPKZS6sDhczU'

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    }
  }
  callBookingList = async () => {

    try {
      let response = await fetch(`https://backendhotel.herokuapp.com/admin/booking`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `${token_type} ${access_token}`

        }

      });
      response = await response.json();
      console.log('response', response.data.bookings[0].hotel);
      this.setState({bookings: response.data.bookings})
    } catch (error) {

    }
  }
  componentDidMount() {
    this.callBookingList()
  }



  render() {
    console.log(this.state.bookings)
    return (
      <div className="container-fluid px-0">
        <div className="row" style={{ minHeight: '30vh', marginLeft: 0, marginRight: 0, overflow: 'hidden' }}>
          <div className="col-8" style={{ flex: '0 0 70%' }}>
            <table style={{border: '1px'}}>
              <thead>
              <tr>
                <th>ID</th>
                <th style={{ paddingRight:20 }}>Hotel</th>
                <th style={{ paddingRight:20 }}>Start Date</th>
                <th style={{ paddingRight:20 }}>EndDate</th>
                <th style={{ paddingRight:20 }}>Adults</th>
                <th>Children</th>
              </tr>
              </thead>
              <tbody>
              {this.state.bookings && this.state.bookings.map((item, index) =>
                <tr>
                  <td>{item._id}</td>
                  <td><label>{index}</label></td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>{item.adults}</td>
                  <td>{item.children}</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div >
      </div>
    )
  }
}


export default observer(Booking)
