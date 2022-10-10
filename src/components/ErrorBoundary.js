import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h1>Something went wrong</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default ErrorBoundary;
