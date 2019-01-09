import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;

// key prop allows the diff with the virtalDOM
// -- assign to root element
// completely a performance consideration for lists
