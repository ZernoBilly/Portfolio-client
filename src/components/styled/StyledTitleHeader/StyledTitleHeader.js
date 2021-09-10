import styled, { keyframes } from "styled-components";

const moveTitleText = keyframes`
from {
    left: 0px;
}
to {
    left: ${(props) => props.moveTitle};
}
`;

export const StyledTitleHeader = styled.header`
  margin-left: 1rem;
  padding: 0;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  animation: ${moveTitleText} 5s alternate infinite;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 0.1rem;
  }
`;

export const HeaderText = styled.h1`
  font-size: 7rem;
  margin: 0;
  padding: 0;
  color: ${(props) => props.color};

  @media ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 4rem;
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
  }
`;

export const HeaderSecondaryText = styled.h3`
  font-size: 4rem;
  font-family: ${(props) => props.theme.fontFamily.primary};
  color: ${(props) => props.color};

  @media ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 2rem;
  }
`;
