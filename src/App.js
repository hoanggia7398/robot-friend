import React, { Component } from "react";
import SearchBox from "./SearchBox";
import initRobot from "./CardList";
import { robots } from "./robots";
import Scroll from "./Scroll";
import Switch from "react-switch";
import styled from "styled-components";

const DeleteStatus = styled.span`
  font-size: 30px;
  color: red;
`;

class App extends Component {
  state = {
    robots: robots,
    searchfield: "",
    isDelete: false
  };

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };
  onDeleteClick = id => () => {
    if (this.state.isDelete) {
      const listAfterdelete = this.state.robots.filter(robots => {
        return robots.id !== id;
      });
      this.setState({ robots: listAfterdelete });
      console.log(listAfterdelete);
    }
  };
  toggleDelete = () => {
    this.setState({ isDelete: !this.state.isDelete });
  };
  render() {
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>ROBOT FRIEND</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <label htmlFor="normal-switch">
          <DeleteStatus>
            {this.state.isDelete ? "Enable Delete" : "Disable Delete"}
          </DeleteStatus>
          <Switch
            onChange={this.toggleDelete}
            checked={this.state.isDelete}
            id="normal-switch"
          />
        </label>
        <Scroll>{initRobot(filterRobots, this.onDeleteClick)}</Scroll>
      </div>
    );
  }
}

export default App;
