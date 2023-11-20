import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Contact = () => {
  const [params] = useSearchParams();
  return (
    <div>
      <h1>Contact</h1>
      {params.get("isLike") ? (
        <div>user was like {params.get("isLike")}</div>
      ) : null}
      <Link to={"map"}>go to map</Link>
    </div>
  );
};

export default Contact;
