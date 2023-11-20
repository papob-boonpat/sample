import React, { useEffect } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

const Contact = () => {
  const [params] = useSearchParams();
  const pathParams = useParams() as { isLike: string };
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div>
      <h1>Contact</h1>
      {params.get("isLike") ? (
        <div>user was like {params.get("isLike")}</div>
      ) : null}

      {pathParams.isLike === "true" ? <div> Like form path</div> : null}
      <Link to={"map"}>go to map</Link>

      <div>{JSON.stringify(location.state.userInfo, null, 2)}</div>
    </div>
  );
};

export default Contact;
