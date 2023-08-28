import styled from "styled-components";

export const StyledInput = styled.input`
  border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  min-width: 240px;
  background: ${({ theme }) => theme.colors.white};
`;
