import React, { Component } from "react";
import ComboList from "../../components/ComboList/ComboList";
import axios from "axios"
import Card from "../../components/Shared/Card/Card"
import "./Dashboard.css"
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
    console.log(comboId)
    axios
    .delete(`api/combo/${comboId}`)
    .then(() => {
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
      })
    })
  }

  handleEdit = (event) => {
    alert("Edit button is working")
  }

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
            <div className="col-4"></div>
            <div className="col-sm-3">
              <h3>Favorite Character</h3>
              <Card
              src={"https://www.ssbwiki.com/images/thumb/5/5c/Joker_SSBU.png/250px-Joker_SSBU.png"}
              name={"Joker (SSBU)"}
              url={"/characters/Joker(SSBU)"}/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
