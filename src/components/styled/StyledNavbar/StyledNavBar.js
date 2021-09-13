import styled from "styled-components";

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  height: 4rem;
  margin-top: -4rem;
  top: 0;
  z-index: 10;
  background: none;

  @media ${({ theme }) => theme.mediaQueries.sm} {
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 5rem 0 2rem;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    transition: 0.5s all ease;
    margin: 0;
  }
`;

export const NavLogo = styled.h1`
  height: 2rem;
`;

export const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 7rem;
  cursor: pointer;
  background-color: red;
`;
