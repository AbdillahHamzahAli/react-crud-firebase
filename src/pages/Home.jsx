import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <Link to="about">About Us</Link>
    </div>
  );
};

export default Home;
