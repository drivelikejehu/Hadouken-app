import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("HAL");
  };

  render() {
    return (
      <div className="container">
        <h1>Welcome to Hadouken!</h1>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col">
            <form onSubmit={this.handleFormSubmit}>
              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                      type="text"
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
                    <Link to="/games">
                      <button className="btn btn-primary" type="submit">
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col">
                <h4>Need to sign up?</h4>
              <Link to="/signup">
                <button className="btn btn-primary">Signup</button>
              </Link>
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
