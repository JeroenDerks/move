import { styled } from "styled-components";

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 4rem;
  font-family: sans-serif;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-size: 3em;
  font-family: sans-serif;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2rem;
  font-family: sans-serif;
`;

export const H4 = styled.h4`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.25rem;
  font-family: sans-serif;
`;
