import { React, useEffect, useState } from "react";
import "./App.css";

function App() {
  const IMGS_BASE_URL = "./images/";
  let [images, setImages] = useState([]);
  let [hoveredImage, setHoveredImage] = useState(0);
  useEffect(() => {
    setImages(
      [1, 2].map((image) => ({
        src: require(`${IMGS_BASE_URL}${image}${(image !== hoveredImage && "BlackWhite") || ""}.jpg`).default,
        id: image,
      }))
    );
  }, [hoveredImage]);
  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.src} alt="" onMouseEnter={() => setHoveredImage(image.id)} onMouseLeave={() => setHoveredImage(0)} />
      ))}
    </div>
  );
}

export default App;
