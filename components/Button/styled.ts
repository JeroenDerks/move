import { styled } from "styled-components";

export const StyledButton = styled.button<ButtonProps>`
  background: ${({ theme }) => theme.colors.yellow};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin: ${({ $margin }) => $margin || 0};
  border: none;
  cursor: pointer;
`;

type ButtonProps = {
  $margin?: string;
};
