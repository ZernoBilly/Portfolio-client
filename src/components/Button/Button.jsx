import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const Button = ({ className, icon }) => {
  const selectButtonIcon = (icon) => {
    switch (icon) {
      case "CodeIcon":
        return <CodeIcon style={{ fontSize: "2rem" }} />;
      case "ArrowDownwardIcon":
        return <ArrowDownwardIcon style={{ fontSize: "2rem" }} />;

      default:
        return "";
    }
  };
  return <button className={className}>{selectButtonIcon(icon)}</button>;
};

export default Button;
