import styled from "styled-components";

export const StyledNavBar = styled.nav`
  position: sticky;
  background-color: ${(props) => props.theme.palette.secondary.main};
  height: 5rem;
  margin-top: -5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 10;
`;

export const NavContainer = styled.div``;
