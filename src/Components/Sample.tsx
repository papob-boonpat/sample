import React from "react";
import { useFirst } from "../Provider/FirstProvider";

type Props = {
  onClick: () => void;
};
const Sample = (props: Props) => {
  const { value } = useFirst();
  return (
    <div className="text-white" onClick={props.onClick}>
      {value}
    </div>
  );
};

export default Sample;
