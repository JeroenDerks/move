"use client";

import { Container, Wrapper } from "./styled";

export const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);
