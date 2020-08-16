import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./Login.css";
// import jwt from "jsonwebtoken";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: false,
  };

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
      error: false,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/users", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/games")
      })
      .catch((error) => {
        this.setState({error: true});
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Welcome to Hadouken!</h1>

        {this.state.error && (
          <div className="row" id="login-alert">
            <div className="col">
              <p>User Login Failed</p>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col">
            <form onSubmit={this.handleFormSubmit}>
              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      aria-describedby="emailHelp"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      aria-describedby="emailHelp"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-warning" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col">
                <Link to="signup">Need to create an account?</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default Login;
