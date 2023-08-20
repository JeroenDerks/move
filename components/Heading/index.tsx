"use client";

import { H1, H2, H3, H4 } from "./styled";

export const Heading = ({ variant, children }: HeadingProps) => {
  if (variant === "h1") return <H1>{children}</H1>;
  if (variant === "h2") return <H2>{children}</H2>;
  if (variant === "h3") return <H3>{children}</H3>;
  if (variant === "h4") return <H4>{children}</H4>;
};

type HeadingProps = {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4";
};
