import React, { Component } from "react";
import Card from "../../components/Shared/Card/Card";
import "./Games.css"
import axios from "axios";

class Games extends Component {
  state = {
    result: {},
    search: "",
    // gamesToRender: []
    game1: "",
    game1descr: "",
    game1pic: "",
    game2: "",
    game2descr: "",
    game2pic: "",
    game3: "",
    game3descr: "",
    game3pic: "",
    game4: "",
    game4descr: "",
    game4pic: "",
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
.get('/api/game')
.then((response) => {
  console.log(response.data)
  this.setState({
game1: response.data[0].name,
game1descr: response.data[0].descr,
game1pic: response.data[0].pic,
game2: response.data[1].name,
game2descr: response.data[1].descr,
game2pic: response.data[1].pic,
game3: response.data[2].name,
game3descr: response.data[2].descr,
game3pic: response.data[2].pic,
game4: response.data[3].name,
game4descr: response.data[3].descr,
game4pic: response.data[3].pic
  })
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
          <div className="col-sm-3">
            <Card
              src={this.state.game1pic}
              charname={this.state.game1}
              descr={this.state.game1descr}
              url="../SF2"
            />
          </div>
          <div className="col-sm-3">
            <Card
              src={this.state.game2pic}
              charname={this.state.game2}
              descr={this.state.game2descr}
              url="../Tekken7"
            />
          </div>
          <div className="col-sm-3">
            <Card
              src={this.state.game3pic}
              charname={this.state.game3}
              descr={this.state.game3descr}
              url="../DBFZ"
            />
          </div>
          <div className="col-sm-3">
            <Card
              src="https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg"
              charname="SSBU"
              desc="Now with more Min Min!"
              url="../SSBU"
            />
          </div>
          <div className="col-sm-3">
            <Card
              src={this.state.game4pic}
              charname={this.state.game4}
              descr={this.state.game4descr}
              url="../SSBU"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
