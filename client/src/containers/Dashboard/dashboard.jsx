import React, { Component } from "react";
import ComboList from "../../components/ComboList/ComboList";
import axios from "axios"
class Dashboard extends Component {
  state = {
    result: {},
    search: "",
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
            <div className="col-2"></div>
            <div className="col-7">
              <form>
                <div className="form-group">
                  <label htmlFor="ComboNamer">Combo Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="comboName"
                    value={this.state.comboName}
                    aria-describedby="ComboNamer"
                    placeholder="Enter your combo's name"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Combo Inputs</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.comboString}
                    name="comboString"
                    placeholder="Input your combo's commands here"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="ComboChecker"
                  />
                  <label className="form-check-label" htmlFor="ComboCheck1">
                    Are you sure?
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
