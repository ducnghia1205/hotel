import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import { RootStore } from './stores';


ReactDOM.render(
  <Provider store={RootStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
