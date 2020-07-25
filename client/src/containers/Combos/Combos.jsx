import React, { Component } from 'react';
import axios from 'axios';

class Combos extends Component {
    state = {
      result: {},
      search: "",
      comboToRender: [], 
    };

    handleFormSubmit = (event) => {
      event.preventDefault();
      console.log("this works right?")
    }

    handleInputChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    }

    componentDidMount() {
      axios
      .get("/api/combo")
      .then((response) => {
        console.log(response.data);
        this.setState({
          comboToRender: response.data
        });
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      })
    }


  render() {
    return (
    <>
      <div className="container">
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
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  {/* <td>{combo1}</td> */}
                  <td>lk</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  {/* <td>{combo2}</td> */}
                  <td>QCF-K,Rp</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  {/* <td>{combo3}</td> */}
                  <td>dp, lk, rk</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-2"></div>
          <div className="col-7">
            <form>
              <div className="form-group">
                <label htmlFor="ComboNamer">Combo Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="ComboNamer"
                  aria-describedby="ComboNamer"
                  placeholder="Enter your combo's name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Combo Inputs</label>
                <input
                  type="text"
                  className="form-control"
                  id="ComboInputs"
                  placeholder="Input your combo's commands here"
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
              <button type="submit" className="btn btn-primary"
              onClick={this.handleFormSubmit}>
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