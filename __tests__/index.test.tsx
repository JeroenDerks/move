import { render, screen, fireEvent } from "@testing-library/react";
import { ConfirmButton } from "@/components/ConfirmButton";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";
import "@testing-library/jest-dom";

describe("Confirm button", () => {
  it("renders a button", () => {
    render(
      <ThemeProvider theme={theme}>
        <ConfirmButton>Delete</ConfirmButton>
      </ThemeProvider>
    );

    const button = screen.getByRole("button", {
      name: /Delete/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("renders a confirm state onces the button is pressed", async () => {
    render(
      <ThemeProvider theme={theme}>
        <ConfirmButton>Delete</ConfirmButton>
      </ThemeProvider>
    );

    const button = screen.getByRole("button", {
      name: /Delete/i,
    });

    expect(button.innerHTML).not.toEqual("Sure?");
    expect(button.innerHTML).toEqual("Delete");

    await fireEvent.click(button);

    expect(button.innerHTML).toEqual("Sure?");
  });
});
