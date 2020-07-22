import React, { Component } from 'react';

class StreetFighter2 extends Component {
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
                    url={game.name.split(" ").join("")}
                  />
                </div>       
              ))}
            </div>
          </div>
        );
    }
}

export default StreetFighter2;