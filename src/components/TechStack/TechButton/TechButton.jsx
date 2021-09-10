import React from "react";
import { Grid } from "@material-ui/core";

import {
  StyledButton,
  IconContainer,
  ButtonContainer,
  ButtonTitle,
  ButtonDescription,
} from "../../styled/StyledButton/StyledButton";

const TechButton = () => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonContainer>
        <IconContainer>
          <StyledButton></StyledButton>
        </IconContainer>
        <ButtonTitle>Front-end</ButtonTitle>
        <ButtonDescription>
          React, Redux, Material Ui, Styled-Components
        </ButtonDescription>
      </ButtonContainer>
    </Grid>
  );
};

export default TechButton;
