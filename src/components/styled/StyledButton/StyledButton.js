import styled, { keyframes } from "styled-components";
import Button from "../../Button/Button";
import theme from "../../../theme/theme";

const scrollBorderAnimation = keyframes`
from {
  width: 60px;
  height: 60px;
  border-color: ${theme.palette.highlight.main};
}
to {
  width: 53px;
  height: 53px;
  border-color: ${theme.palette.highlight.dark};
}
`;

export const ButtonContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 8rem;
  border: 2px solid;
  border-color: ${(props) => props.theme.palette.secondary.dark};
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.palette.primary.light};
`;

export const IconContainer = styled.div`
  position: absolute;
  top: -24%;
  right: 40.5%;
  height: 3.4rem;
  width: 3.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.highlight.main};
  border: 3px solid;
  border-radius: 50%;
  border-color: ${(props) => props.theme.palette.highlight.main};
  transition: 0.2s;

  &:hover {
    border-color: ${(props) => props.theme.palette.optional.main};

    & button {
      background-color: ${(props) => props.theme.palette.highlight.dark};
      color: ${(props) => props.theme.palette.optional.main};
    }
  }
  &:active {
    border-color: ${(props) => props.theme.palette.highlight.main};
  }
`;

export const StyledButton = styled(Button)`
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.highlight.main};
  color: ${(props) => props.theme.palette.primary.main};
  border: none;
  border-radius: 50%;
  border-color: ${(props) => props.theme.palette.highlight.main};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.highlight.dark};
    color: ${(props) => props.theme.palette.optional.main};
  }
`;

export const ButtonTitle = styled.h3`
  text-align: center;
  margin-top: 2.3rem;
  margin-bottom: 0.6rem;
  color: ${(props) => props.theme.palette.text.light};
`;

export const ButtonDescription = styled.p`
  font-size: 1.1rem;
  margin: 0 1rem 0 1rem;
  font-family: ${(props) => props.theme.fontFamily.secondary};
`;

export const ScrollButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 8rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScrollIconBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 5px solid #32557f;
  border-top: none;
  border-bottom: none;
  border-radius: 50px/80px;
  border-color: ${(props) => props.theme.palette.highlight.main};

  &:hover {
    animation: ${scrollBorderAnimation} 0.3s forwards;
  }
  &:active {
    animation: ${scrollBorderAnimation} 1s backwards;
  }
`;
