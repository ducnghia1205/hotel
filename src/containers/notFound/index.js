import React, { Component } from "react";
import { observer } from 'mobx-react';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="container-fluid px-0">
        <div className="row"
          style={{
            minHeight: '30vh',
            marginLeft: 0, marginRight: 0,
            overflow: 'hidden',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}>
          <p>Không tìm thấy trang</p>
        </div >
      </div>
    )
  }
}


export default observer(NotFound)