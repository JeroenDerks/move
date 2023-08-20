"use client";

import styled from "styled-components";

export const TagContainer = styled.div`
  height: 2rem;
  padding: 0.5rem 1rem;
  border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  border-radius: 1rem;
`;
