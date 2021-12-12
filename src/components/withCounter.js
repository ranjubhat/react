import React from "react";

const withCounter = (WrappedCompoment, props) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    incrementCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      const { count } = this.state;

      return (
        <WrappedCompoment
          {...this.props}
          count={count}
          incrementCounter={this.incrementCounter}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
