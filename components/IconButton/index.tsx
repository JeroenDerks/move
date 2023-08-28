"use client";

import { StyledLink } from "./styled";

export const IconButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};
