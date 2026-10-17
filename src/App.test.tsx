import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the identity information", () => {
    render(<App />);

    expect(screen.getByText("Dmytro Molodtsov")).toBeInTheDocument();
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
  });

  it("renders the language switcher controls", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: /english/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /українська/i }),
    ).toBeInTheDocument();
  });
});
