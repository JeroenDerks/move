"use client";

import { StyledTypography } from "./styled";

export const Typography = ({
  children,
  margin,
}: {
  children: React.ReactNode;
  margin?: string;
}) => <StyledTypography {...{ margin }}>{children}</StyledTypography>;
