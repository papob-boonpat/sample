import React, { useEffect } from "react";
import Sample from "./Sample";

type Props = {
  onClick: () => void;
};
const Header = (props: Props) => {
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div className="p-4 bg-slate-900">
      <Sample onClick={props.onClick} />
    </div>
  );
};

export default Header;
