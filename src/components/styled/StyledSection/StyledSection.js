import styled from "styled-components";

export const StyledSection = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
`;
