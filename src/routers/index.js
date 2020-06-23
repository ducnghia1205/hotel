import React from "react";
import { Switch, Router } from "react-router-dom";
import HomeRoute from "./HomeRoute";
import { Dashboard, Booking, Hotel, NotFound } from "../containers";
// import Booking from "../containers/booking";
// import Dashboard from "../containers/dashboard";

export const Routers = (props) => {
  console.log('props:', props)
  return (
    <Switch>
      <HomeRoute path="/" component={Dashboard} props={props} exact />
      <HomeRoute path="/booking" component={Booking} props={props} />
      <HomeRoute
        path="/hotel/:id"
        component={Hotel}
      />
      <HomeRoute
        component={NotFound}
      />
    </Switch>
  )
}
  ;
