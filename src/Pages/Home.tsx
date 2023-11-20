import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">
        <div>go to about</div>
      </Link>
    </div>
  );
};

export default Home;
