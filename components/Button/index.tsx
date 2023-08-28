"use client";

import { StyledButton } from "./styled";

export const Button = ({
  children,
  disabled,
  margin,
  type,
}: {
  children: React.ReactNode;
  disabled: boolean;
  margin?: string;
  type: "submit";
}) => {
  return (
    <StyledButton $margin={margin} {...{ disabled, type }}>
      {children}
    </StyledButton>
  );
};
