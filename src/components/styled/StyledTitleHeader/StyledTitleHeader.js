import styled, { keyframes } from "styled-components";

const moveTitleText = keyframes`
from {
    left: -30px;
  }
}
to {
    left: ${(props) => props.moveTitle};
}
`;

export const StyledTitleHeader = styled.header`
  margin-left: 8rem;
  padding: 0;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  animation: ${moveTitleText} 5s alternate infinite;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 2rem;
    margin-left: 0.4rem;
    transition: 0.5s all ease;
  }
`;

export const HeaderText = styled.h1`
  font-size: 7rem;
  margin: 0;
  padding: 0;
  color: ${(props) => props.color};
  cursor: default;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 4rem;
    transition: 0.5s all ease;
  }
`;

export const SecondaryTitleHeader = styled.header`
  padding: 0;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};

  @media ${({ theme }) => theme.mediaQueries.sm} {
    top: ${(props) => props.smTop};
    right: ${(props) => props.smRight};
    transition: 0.5s all ease;
  }
`;

export const HeaderSecondaryText = styled.h3`
  font-size: 4rem;
  font-family: ${(props) => props.theme.fontFamily.primary};
  color: ${(props) => props.color};
  cursor: default;
  text-shadow: 1px 1px 0 #a9a9a9;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 2.5rem;
    transition: 0.5s all ease;
  }
`;
