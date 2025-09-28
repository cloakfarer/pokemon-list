import { render, screen } from "@testing-library/react";
import { Loader } from "./loader";

describe("Loader", () => {
  it("shows Pokéball loader", () => {
    render(<Loader />);

    expect(screen.getByAltText(/pokéball/i)).toBeInTheDocument();
  });
});
