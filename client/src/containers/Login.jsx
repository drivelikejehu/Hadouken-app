import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
// import jwt from "jsonwebtoken";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSuccessNavigate = (event) => {
    window.location.href=`/dashboard/${this.props.match.params.id}`
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/user", {email: this.state.email, password: this.state.password})
      .then((response) => {
        console.log(response);
        console.log(response.data.data)
      })
      .catch((error) => {
          // alert("Your Email or password credentials were incorrect, please retry.")
        console.log(error);
        this.setState({error: true})
      });
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
                  {this.state.error===true && <div className="alert alert-danger" role="alert">Invalid username or password</div>}
                  <div className="form-group">
                    {/* <Link to="/games"> */}
                    <button className="btn btn-warning" type="submit">
                      Login
                    </button>
                    {/* </Link> */}
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
