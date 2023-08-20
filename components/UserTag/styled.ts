"use client";

import styled from "styled-components";

export const TagContainer = styled.div`
  height: 2rem;
  padding: 0.5rem 1rem;
  border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  width: max-content;
`;
