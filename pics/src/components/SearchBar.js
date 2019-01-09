import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

// passing method to prop, don't invoke it!
// will be called on render() if you do, but
// we want it to be called in the future

// onChange wires up a callback
// also, onClick, onSubmit
// only applies to certain types of tags

// convention for naming functions that handle changes:
// prefix with "on" or "handle"

// handling "this" keyword in classes
// 1) bind this in the constructor, creates new func with correct this value
// -- overwrites the existing function
// 2) use an arrow function in declaration
// 3) use arrow function to call in props onSubmit= { (event) => this.foo(event) }
