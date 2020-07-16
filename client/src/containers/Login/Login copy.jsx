import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome to Hadouken!</h1>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="col">
              <div className="row">
              <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      I'm not a robot.
                    </label>
                  </div>
                  <div className="row justify-content-center">
                    {/* <div className="col-3"></div> */}
                    <div className="col">
                      <a
                        className="btn btn-primary"
                        href="/games"
                        type="submit"
                      >
                        Log in
                      </a>
                    </div>
                    <div className="col">
                      <a
                        type="button"
                        className="btn btn-primary"
                        id="signup"
                        href="/signup"
                      >
                        Sign Up
                      </a>
                    </div>
                    {/* <div className="col-3"></div> */}
                  </div>
                </form>
              </div>
            </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3"></div> */}
        </div>
      </div>
    );
  }
}

export default Login;
