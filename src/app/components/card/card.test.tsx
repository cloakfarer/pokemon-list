import { basePokemon } from "@/models/fixtures";
import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Card", () => {
  it("shows name, ID, height, weight and TypeChip", () => {
    render(<Card pokemon={basePokemon} />);

    expect(
      screen.getByRole("heading", { level: 2, name: /bulbasaur/i })
    ).toBeInTheDocument();
    expect(screen.getByText("#1")).toBeInTheDocument();
    expect(screen.getByText("0.7 m")).toBeInTheDocument();
    expect(screen.getByText("6.9 kg")).toBeInTheDocument();
    expect(screen.getByText("grass")).toBeInTheDocument(); // TypeChip sichtbar
  });

  it("shows fallback image, if sprite is null", () => {
    render(<Card pokemon={basePokemon} />);

    expect(screen.getByAltText(/image not available/i)).toBeInTheDocument();
  });

  it("shows sprite image if sprite is not null", () => {
    render(
      <Card
        pokemon={{
          ...basePokemon,
          sprites: { ...basePokemon.sprites, front_default: "/foo.png" },
        }}
      />
    );
    const img = screen.getByAltText(
      /picture of a pokémon/i
    ) as HTMLImageElement;

    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toContain("/foo.png");
  });
});
