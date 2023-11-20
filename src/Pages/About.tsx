import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(false);
  return (
    <div>
      <button onClick={() => navigate(-1)}>back</button>
      <h1>About</h1>
      <button
        className={`border border-black w-8 ${
          isLike ? "text-red-500" : "text-black"
        }`}
        onClick={() => {
          setIsLike((prev) => !prev);
        }}
      >
        Like
      </button>
      <button onClick={() => navigate(`/contact${isLike ? `?isLike=1` : ""}`)}>
        go to contact
      </button>
    </div>
  );
};

export default About;
