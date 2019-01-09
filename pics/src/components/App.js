import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar"; // convention to have components at end of imports
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("search/photos", {
      params: {
        query: term
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

// prop names to classes we create can be anything
// axios - 3rd party, fetch() - built into modern browsers

// this has to be attached in context when passed down as prop
// otherwise the this refers to the prop object, not the instance
