"use client";

import { theme } from "@/theme";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext({});

export default function StylingThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
