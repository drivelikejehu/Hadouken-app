import React, { Component } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import Input from "../../components/Shared/Input/Input";
// import jwt from "jsonwebtoken";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: false,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
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
        this.props.history.push(`/dashboard/${response.data.data.id}`);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err.response.data.message });
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Welcome to Hadouken!</h1>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <form onSubmit={this.handleFormSubmit}>
                  <Input
                    label="E-mail address"
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  <Input
                    label="Password"
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    aria-describedby="passwordHelp"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                  {this.state.error && (
                    <div className="alert alert-danger" role="alert">
                      <p>{this.state.error}</p>
                    </div>
                  )}
                  <div className="form-group">
                    <button className="btn btn-warning" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
