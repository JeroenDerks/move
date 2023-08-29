import { render, screen, fireEvent } from "@testing-library/react";
import { ConfirmButton } from "@/components/ConfirmButton";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";

const renderWithTheme = (component: React.ReactNode) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

describe("Confirm button", () => {
  it("renders a button", () => {
    renderWithTheme(<ConfirmButton>Delete</ConfirmButton>);

    const button = screen.getByRole("button", { name: /Delete/i });

    expect(button.innerHTML).toEqual("Delete");
  });

  it("renders a confirm state onces the button is pressed", async () => {
    renderWithTheme(<ConfirmButton>Delete</ConfirmButton>);

    const button = screen.getByRole("button", { name: /Delete/i });

    expect(button.innerHTML).not.toEqual("Sure?");
    expect(button.innerHTML).toEqual("Delete");

    await fireEvent.click(button);

    expect(button.innerHTML).toEqual("Sure?");
  });
});
