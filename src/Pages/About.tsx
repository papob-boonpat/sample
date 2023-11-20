import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
type UserInfo = {
  name: string;
  email: string;
};
const About = () => {
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(false);
  const USERINFO: UserInfo = {
    name: "strong",
    email: "strong@xxx",
  };
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
      <br />
      <button onClick={() => navigate(`/contact${isLike ? `?isLike=1` : ""}`)}>
        go to contact
      </button>
      <br />
      <button onClick={() => navigate(`/contact/${isLike}`)}>
        go to contact with path params
      </button>
      <br />
      <button
        onClick={() =>
          navigate(`/contact`, {
            state: {
              userInfo: USERINFO,
            },
          })
        }
      >
        go to contact with state
      </button>
    </div>
  );
};

export default About;
