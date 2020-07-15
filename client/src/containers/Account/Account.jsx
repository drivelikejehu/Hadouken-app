import React, { Component } from "react";

class Account extends Component {
  state = {
    avatar: "",
    avatarUrl: "https://www.fillmurray.com/140/200",
    username: "",
    birthday: "",
  };
  //Lifecycle method that grabs user info from backend
  //componentDidMount(){}

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
    this.setState({
      birthday: "",
    });
    console.log(`birthday is ${this.state.birthday}`);
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
            <div className="col-sm-2"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Account;
