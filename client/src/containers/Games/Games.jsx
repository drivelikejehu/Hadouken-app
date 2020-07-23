import React, { Component } from "react";
import Card from "../../components/Shared/Card/Card";
import "./Games.css";
import axios from "axios";

class Games extends Component {
  state = {
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
          {this.state.gamesToRender.map((game) => (
            <div className="col-sm-3">
              <Card 
                {...game}
                url={game.name.split(" ").join("")}
                key={game.name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Games;
