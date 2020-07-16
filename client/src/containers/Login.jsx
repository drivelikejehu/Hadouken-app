import React, { Component } from "react";

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

  handleFormSubmit = () => {
    console.log("HAL")
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome to Hadouken!</h1>
        <div className="row">
          <div className="col-sm-3"></div>
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
                      type="text"
                      className="form-control"
                      id="inputPassword"
                      aria-describedby="emailHelp"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="card-body">
                    bottom
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  }
}

export default Login;
