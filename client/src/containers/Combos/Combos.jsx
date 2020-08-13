import React, { Component } from "react";
import axios from "axios";
import ComboList from "../../components/ComboList/ComboList";

class Combos extends Component {
  state = {
    result: {},
    search: "",
    characterName: null,
    combosToRender: [],
    comboName: "",
    comboString: "",
  };

  componentDidMount() {
    // if(this.props.match.params.character ===! null){   
    // axios
    // .get("/api/combo/")
    // .then((response) => {
    //   this.setState({
    //     combosToRender: response.data,
    //   });
    // })
    // .catch((err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    // });
    // }
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
  handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("api/combo", {
        comboName: this.state.comboName,
        comboString: this.state.comboString,
      })
      .catch((err, response) => {
        console.log(err);
        this.setState({
          error: true,
          errorMessage: err.response.data.message,
        });
      }).then(() => {
        console.log("comboList updated");
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
      });
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <div className="container">
    <h1>{this.props.match.params.character}'s Combo Page</h1>
          <div className="row">
            <div className="col">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {/* {char}'s Saved Combos */}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/">
                    {/* {combo1} */}
                  </a>
                  <a className="dropdown-item" href="/">
                    {/* {combo2} */}
                  </a>
                  <a className="dropdown-item" href="/">
                    {/* {combo3} */}
                  </a>
                </div>
              </div>
            </div>
          </div>
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
                <ComboList combosToRender={this.state.combosToRender} />
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

export default Combos;
