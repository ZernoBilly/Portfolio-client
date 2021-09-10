import React from "react";
import CodeIcon from "@material-ui/icons/Code";

const Button = ({ className }) => {
  return (
    <button className={className}>
      <CodeIcon style={{ fontSize: "2rem" }} />
    </button>
  );
};

export default Button;
