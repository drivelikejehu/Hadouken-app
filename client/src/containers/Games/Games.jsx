import React, { Component } from "react";
import Card from "../../components/Shared/Card/Card";
import "./Games.css";
import axios from "axios";

class Games extends Component {
  state = {
    result: {},
    search: "",
    gamesToRender: [],
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

  componentDidMount() {
    axios
      .get("/api/game")
      .then((response) => {
        console.log(response);
        this.setState({
          gamesToRender: response.data,
        });
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

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
                      placeholder="Choose your arena"
                      name="search"
                      value={this.state.search}
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
        <div className="row">
          {this.state.gamesToRender.map((game, index) => (
            <div className="col-sm-3">
              <Card
                key={index}
                src={game.pic}
                name={game.name}
                desc={game.descr}
                // url="SF2"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Games;
