import React from "react";
class MusicAlbum extends React.Component {
  static defaultProps = {
    albumTitle: "Poogy Tales",
    artistName: "Kaveret",
    numberOfSongs: "13",
    Length: "43:44",
    link: "https://youtu.be/llJ5Ko_14UM",
  };
  render() {
    // albumTitle="Poogy Tales" artistName="Kaveret" numberOfSongs="13" Length="43:44" link="https://youtu.be/llJ5Ko_14UM"
    return (
      <div>
        <h2>{this.props.albumTitle}</h2>
        <h4>By: {this.props.artistName}</h4>
        <div>Number of Songs in the album: {this.props.numberOfSongs}</div>
        <div>Album's length: {this.props.albumLength}</div>
        <a href={this.props.link}>To one of the songs in the album</a>
      </div>
    );
  }
}
export default MusicAlbum;
