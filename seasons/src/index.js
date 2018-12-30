import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // babel builds a constructor
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  // React requires render
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// functional components can't handle async very well
// need class based w/ state

// extend React.Component, pull in build in
// functionality into component (sublass React.component)
// pulls in 'setState()', others

// state -> data relevant to a single component
// update state, app will rerender
// initialized when component is created
// only updated by using 'setState'

// never make a direct assignment to the state object
// except for initialization

// Component Lifecycle:

// constructor
// -- one time setup, called on created instance,
// render (not optional)
// -- return JSX
// componentDidMount (on 1st render)
// -- good for data-loading, convention
// componentDidUpdate  (on update)
// -- state/props change
// -- inputs, network requests
// -- render is technically called before ^
// componentWillUnmount ()
// -- good place for cleanup
// other infrequently used methods

// multiple returns inside render() can lead
// to lots of problems, use a helper
