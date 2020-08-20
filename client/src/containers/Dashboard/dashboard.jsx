import React, { Component } from "react";
import ComboList from "../../components/ComboList/ComboList";
import axios from "axios";
import Card from "../../components/Shared/Card/Card";
import "./Dashboard.css";
import {Link} from "react-router-dom"
class Dashboard extends Component {
  state = {
    result: {},
    search: "",
    characterName: null,
    combosToRender: [],
    comboName: "",
    comboString: "",
  };

  componentDidMount() {
    axios
      .get("/api/combo/")
      .then((response) => {
        this.setState({
          combosToRender: response.data,
        });
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleDelete = (comboId) => {
    console.log(comboId);
    axios.delete(`api/combo/${comboId}`).then(() => {
      console.log("combo deleted");
      axios
        .get("/api/combo/")
        .then((response) => {
          this.setState({
            combosToRender: response.data,
          });
        })
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
    });
  };

  handleEdit = (event) => {
    alert("Edit button is working");
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>Dashboard</h1>
          <div className="row"></div>
          <div className="row">
            <div className="col-3">
              <h3>Combo Glossary</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th>Name</th>
                    <th scope="col">Commands</th>
                  </tr>
                </thead>
                <ComboList
                  combosToRender={this.state.combosToRender}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                />
              </table>
            </div>
            <div className="col-3"></div>
            <div className="col-sm-3">
              <h3>Favorite Character</h3>
              <Card
                src={
                  "https://www.ssbwiki.com/images/thumb/5/5c/Joker_SSBU.png/250px-Joker_SSBU.png"
                }
                name={"Joker (SSBU)"}
                url={"/characters/Joker(SSBU)"}
              />
            </div>
          </div>
          <div className="row">
           <div className="col-sm-7"/>
            <div className="col-sm-1">
              <h3>User Games</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-3">
              <Card
                src={
                  "https://www.fightersgeneration.com/games/sf2-fly.jpg"
                }
                name={"Street Fighter 2"}
                url={"/games/1"}
              />
            </div>
            <div className="col-sm-1"/>
            <div className="col-sm-3">
              <Card
                src={
                  "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg"
                }
                name={"Super Smash Bros. Ultimate"}
                url={"/games/4"}
              />
            </div>
          </div>
          <div className="row">
            <div className="col" >
              <button className="btn btn-warning">
              <Link to="/games">Check out all the games?</Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
