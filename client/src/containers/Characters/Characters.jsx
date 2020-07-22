import React, { Component } from "react";

class Characters extends Component {
  state = {
    searchTerm: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Hey");
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleFormSubmit}>
              <div className="row">
                <div className="col-sm-2"></div>
                <div className="col">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Find your fighter"
                      name="search"
                      value={this.state.searchTerm}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-sm-2">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;
