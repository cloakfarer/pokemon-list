import { render, screen } from "@testing-library/react";
import { TypeChip } from "./type-chip";

describe("TypeChip", () => {
  it("shows type text and contains type class", () => {
    render(<TypeChip type="grass" />);
    const chip = screen.getByText("grass");

    expect(chip).toBeInTheDocument();
    expect(chip.className).toMatch(/grass/);
  });
});
