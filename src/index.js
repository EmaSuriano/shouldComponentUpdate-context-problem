import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { number, string } from "prop-types";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "sans-serif",
  height: "100vh"
};

class Parent extends Component {
  static childContextTypes = {
    value: string
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ value: this.state.value + 1 });
      console.log("increasing the value" + this.state.value);
    }, 1000);
  }

  shouldComponentUpdate() {
    return this.state.value < 5;
  }

  state = {
    value: 1
  };

  getChildContext() {
    return { value: this.state.value };
  }

  render() {
    return this.props.children;
  }
}

class Child extends Component {
  static contextTypes = {
    value: number
  };

  render() {
    const { value } = this.context;
    return <h1>The value from Context is: {value}</h1>;
  }
}

const App = () => (
  <div style={styles}>
    <Parent>
      <Child />
    </Parent>
  </div>
);

render(<App />, document.getElementById("root"));
