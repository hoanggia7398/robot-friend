import React, { Component } from "react";
import SearchBox from "./SearchBox";
import initRobot from "./CardList";
import { robots } from "./robots";
import Scroll from "./Scroll";
class App extends Component {
  state = {
    robots: robots,
    searchfield: ""
  };

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };
  onDeleteClick = id => () => {
    const listAfterdelete = this.state.robots.filter(robots => {
      return robots.id !== id;
    });
    this.setState({ robots: listAfterdelete });
    console.log(listAfterdelete);
  };

  render() {
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>ROBOTFRIEND</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>{initRobot(filterRobots, this.onDeleteClick)}</Scroll>
      </div>
    );
  }
}

export default App;
