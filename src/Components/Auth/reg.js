import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { requestRegister } from "../ducks/reducer";
import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      user_name: "",
      message: ""
    };
  }
  componentDidMount() {
    axios.get("/auth/guest").then(res => {
      this.setState({
        loggedInUser: res.data
      });
    });
  }
  render() {
    let { loggedInUser, email, password, user_name } = this.state;
    console.log(this.props);
    return (
      <div className="register-form">
        <div>
          <li>
            <input
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              type="email"
              placeholder="Email"
            />
          </li>
          <li>
            <input
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              placeholder="Password"
            />
          </li>
          <li>
            <input
              value={user_name}
              onChange={e => this.setState({ user_name: e.target.value })}
              type="text"
              placeholder="User name"
            />
          </li>
       
          <div>
            <button
              onClick={() =>
                this.props.requestRegister(
                  this.state.email,
                  this.state.password,
                  this.state.user_name,
                  this.props.history
                )
              }
            >
              Complete Registration
            </button>
          </div>
        </div>
        {this.props.message}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  requestRegister
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);