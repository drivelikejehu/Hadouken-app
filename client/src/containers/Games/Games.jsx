import React, { Component } from "react";
import Card from "../../components/Shared/Card/Card";

class Games extends Component {
  state = {
    result: {},
    search: "",
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
      <div className="container text-center">
        <form onSubmit={this.handleFormSubmit}>
          <div className="row">
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
        <div className="row">
          <div className="col-2"></div>
          <div className="col-3">
            <Card
              src="https://www.fightersgeneration.com/games/sf2-fly.jpg"
              charName="SF2"
              desc="The World Warriors"
              url="../SF2"
            />
          </div>
          <div className="col-2"></div>
          <div className="col-3">
            <Card
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Official_Tekken_7_Logo.jpg/220px-Official_Tekken_7_Logo.jpg"
              charName="Tekken 7"
              desc="3D Mishima"
              url="../Tekken7"
            />
          </div>
          <div className="col-2"></div>
          <div className="col-2"></div>
          <div className="col-3">
            <Card
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/DBFZ_cover_art.jpg/220px-DBFZ_cover_art.jpg"
              charName="DBFZ"
              desc="Cell's Revenge"
              url="../DBFZ"
            />
          </div>
          <div className="col-2"></div>
          <div className="col-3">
            <Card
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg"
              charName="SSBU"
              desc="Now with more Min Min!"
              url="../SSBU"
            />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default Games;
