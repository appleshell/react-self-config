import React, { PureComponent, Component } from "react";
import ChildLeft from "./childCom1";
import ChildRight from "./childCom2";
import ChildThree from "./childCom3";

class Parent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      childName1: "cc1",
      childName2: "cc2",
      pCount: 0,
    };
  }

  componentDidMount() {
    console.log("parent mount");
  }

  componentDidUpdate() {
    console.log("parent update");
  }

  handlePClick = () => {
    this.setState({
      pCount: this.state.pCount + 1,
    });
  };

  child1Change = (val) => {
    this.setState({
      childName1: val,
    });
  };

  child2Change = (val) => {
    this.setState({
      childName2: val,
    });
  };

  render() {
    return (
      <div className="parent">
        <button onClick={this.handlePClick}>PPClick</button>
        <span>{this.state.pCount}</span>
        <ChildLeft name={this.state.childName1} onChange={this.child1Change} />
        <ChildRight name={this.state.childName2} onChange={this.child2Change} />
        <ChildThree name={this.state.childName2} onChange={this.child2Change} />
      </div>
    );
  }
}

export default Parent;
