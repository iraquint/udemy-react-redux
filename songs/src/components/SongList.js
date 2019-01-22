import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          {" "}
          <div className="right floated content">
            {" "}
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};
// take state data, then calculate & pass as props
// runs every time state is changed

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);

// the syntax above is actually: "{selectSong: selectSong}"
// which says, call the selectSong action creator "selectSong"

// connect defined in file
// 1) import connect at the top
// 2) call connect, pass it component as 2nd function call
// 3) define mapStateToProps
// 4) mapStateToProps gets state, returns props as object

// connect can also call action creators
