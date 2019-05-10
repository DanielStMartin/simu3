import React, { Component } from "react";
import routes from "./routes";
import {withRouter} from "react-router-dom"

import './App.css';

class App extends Component {
  render() {
    console.log(this.props.location)
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default withRouter(App)
