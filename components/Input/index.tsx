"use client";

import { StyledInput } from "./styled";

export const Input = ({
  name,
  defaultValue,
}: {
  name: string;
  defaultValue?: string;
}) => <StyledInput {...{ name, defaultValue }} type="text" />;
