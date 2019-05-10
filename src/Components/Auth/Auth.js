import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      password: "",
      user_name: "",
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
  componentDidMount() {
    axios.get("/auth/user").then(res => {
      this.props.setUser(res.data);
    });
  }

  login = () => {
    const loginPayload = {
      username: this.state.user_name,
      password: this.state.password
    };
    axios
      .post("/auth/login", loginPayload)
      .then(res => {
        this.props.setUser(res.data);
      })
      .catch(err => alert(err));
  };
  register() {
    const loginPayload = {
      username: this.state.username,
      password: this.state.password,
      user_name: this.state.user_name,
    };
    axios
      .post("/api/admin_register", loginPayload)
      .then(res => {
        this.props.setUser(res.data);
      })
      .catch(err => alert(err));
  }

  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  logout = () => {
    axios.get("/auth/logout").then(() => {
      this.props.setUser(null);
    });
  };

  render() {
    const { user_name, password,} = this.state;
    const { user } = this.props;
    return (
      <header>
        <div>
          <div />
          <nav>
            <ul>
              {!user ? (
                <li>
                  <input
                    placeholder="user_name"
                    name="user_name"
                    value={user_name}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  <input
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />

                  <button onClick={this.register}>Register</button>
                  <button onClick={this.login}>login</button>
                </li>
              ) : (
                <button onClick={this.logout}>logout</button>
              )}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};
const mapDispatchToProps = {
  setUser: setUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
