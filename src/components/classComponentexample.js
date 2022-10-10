import React, { Component } from "react";

export default class ClassComponentExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
    this.handleChange=this.handleChange.bind(this)
  }
  componentDidMount() {
    console.log("mount");
  }
  componentDidUpdate(prevprops, prevState) {
    console.log(prevprops);
    console.log(prevState);
    console.log("update");
  }
  componentWillUnmount() {}
  handleChange(e) {
    console.log(this)
    console.log(e);
    this.setState((prevState) => ({
      inputText: "Hi"
    }));
    //this.setState({inputText:"Hii"})
    // console.log("textchange");
  }
  render() {
    const { name = "noname" } = this.props;
    const { inputText } = this.state;
    return (
      <div>
        <input
          type="text"
          value={inputText}
          placeholder="default text"
          onChange={this.handleChange}
        />
        <h1>{name}</h1>
      </div>
    );
  }
}
