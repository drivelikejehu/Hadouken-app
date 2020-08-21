import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Account extends Component {
  state = {
    avatar: "",
    avatarUrl: "https://www.fillmurray.com/140/200",
    username: "",
    birthday: "",
  };
  //Lifecycle method that grabs user info from backend
  componentDidMount() {
    // Can't be written until user info is done, but is not complicated otherwise
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitAvatar = (event) => {
    event.preventDefault();
    this.setState({
      avatar: "",
      avatarUrl: this.state.avatar,
    });
    console.log("Submit Avatar");
  };

  handleSubmitUsername = (event) => {
    event.preventDefault();
    this.setState({
      username: "",
    });
    console.log(`username is ${this.state.username}`);
  };

  handleSubmitBirthday = (event) => {
    event.preventDefault();
    console.log(`birthday is ${this.state.birthday}`);
    axios
      .put("api/user/:1", {
        birthday: this.state.birthday,
      })
      // can take out this console.log after site is up and running
      // Write a display function for the changed data
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
              <img src={this.state.avatarUrl} alt="Placeholder" />
            </div>
            <div className="col-sm-4">
              <div className="card justify-content-center">
                <div className="card-body">
                  <form onSubmit={this.handleSubmitAvatar}>
                    <div className="form-group">
                      <input
                        id="avatar"
                        type="text"
                        name="avatar"
                        value={this.state.avatar}
                        placeholder="Enter new Avatar url"
                        onChange={this.handleInputChange}
                      />
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                  <form onSubmit={this.handleSubmitUsername}>
                    <div className="form-group">
                      <input
                        id="username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        placeholder="Enter new username"
                        onChange={this.handleInputChange}
                      />
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                  <form onSubmit={this.handleSubmitBirthday}>
                    <div className="form-group">
                      <input
                        id="birthday"
                        type="text"
                        name="birthday"
                        value={this.state.birthday}
                        placeholder="Enter new birthday"
                        onChange={this.handleInputChange}
                      />
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-warning">
              <Link to="dashboard/1">Go to the dashboard</Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Account;
