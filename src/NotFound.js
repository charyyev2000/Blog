import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>This page cannot be found</p>
      <Link to="/">back to home</Link>
    </div>
  );
};

export default NotFound;
