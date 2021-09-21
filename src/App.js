import React, { useEffect, useState } from "react";
import "./App.css";
import Display from "./Display/Display";

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="App">
      <Display images={images} />
    </div>
  );
};

export default App;
