import { styled } from "styled-components";

export const StyledTypography = styled.p<{ margin?: string }>`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  margin: ${({ margin }) => margin || 0};
  font-family: sans-serif;
  font-weight: 300;
`;
