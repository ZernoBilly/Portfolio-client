import React from "react";
import {
  StyledButton,
  ScrollButtonContainer,
  ScrollIconBorder,
} from "../styled/StyledButton/StyledButton";

const ScrollButton = () => {
  return (
    <ScrollButtonContainer>
      <ScrollIconBorder>
        <StyledButton icon={"ArrowDownwardIcon"}></StyledButton>
      </ScrollIconBorder>
    </ScrollButtonContainer>
  );
};

export default ScrollButton;
