"use client";

import styled from "styled-components";
import { StyledTypography } from "../Typography/styled";

export const TagContainer = styled.div`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
  gap: 0.5rem;
`;

export const NoWrapTypography = styled(StyledTypography)`
  white-space: nowrap;
`;
