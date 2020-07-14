import React, { Component } from "react";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  // handleFormSubmit = (event) => {
  //   this.setState({
  //     firstName: ,
  //     lastName: "",
  //     username: "",
  //     email: "",
  //     password: "",
  //     confirmPass: "",
  //   });
  // };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card justify-content-center">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="firstName"
                      value={this.state.firstName}
                      placeholder="First Name"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="lastName"
                      value={this.state.lastName}
                      placeholder="Last Name"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      value={this.state.username}
                      placeholder="Username"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      value={this.state.email}
                      placeholder="E-mail"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="password"
                      value={this.state.password}
                      placeholder="Password"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="confirmPass"
                      value={this.state.confirmPass}
                      placeholder="Confirm Password"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}
export default Signup;
