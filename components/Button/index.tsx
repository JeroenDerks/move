"use client";

import { StyledButton } from "./styled";

export const Button = ({
  background,
  children,
  disabled,
  margin,
  onClick,
  type,
}: {
  background?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  margin?: string;
  type?: "submit" | "button";
}) => {
  return (
    <StyledButton
      $margin={margin}
      $background={background}
      {...{ disabled, onClick, type }}
    >
      {children}
    </StyledButton>
  );
};
