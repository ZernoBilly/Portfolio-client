import styled, { keyframes } from "styled-components";
import bgImage from "../../../images/computer.jpg";

const changeBlendMode = keyframes`
from {
    background-color: #CAEBF2;
}

to {
    background-color: #bababa;
}

`;

export const StyledTitlePolygon = styled.div`
  height: 100%;
  width: 100%;

  background-color: ${(props) => props.theme.palette.optional.main};
  clip-path: polygon(37% 0, 100% 0, 100% 31%, 42% 100%, 0 100%, 0 35%);
  z-index: -1;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: soft-light;

  animation: ${changeBlendMode} 5s alternate infinite;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    background-position: 20% 50%;
  }
`;
