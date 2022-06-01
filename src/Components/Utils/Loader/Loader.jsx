import React from "react";

// Styles
import "./Loader.styles.css";

const Loader = () => {
  return (
    <div className="container-loader">
      <div className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
