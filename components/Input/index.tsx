"use client";

import { StyledInput } from "./styled";

export const Input = ({ name }: { name: string }) => (
  <StyledInput name={name} type="text" />
);
