import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("@/lib/pokeapi", () => ({
  fetchPokemonRange: vi.fn(async () => [
    {
      id: 1,
      name: "bulbasaur",
      height: 7,
      weight: 69,
      sprites: { front_default: null },
      types: [],
    },
    {
      id: 2,
      name: "ivysaur",
      height: 10,
      weight: 130,
      sprites: { front_default: null },
      types: [],
    },
    {
      id: 3,
      name: "venusaur",
      height: 20,
      weight: 1000,
      sprites: { front_default: null },
      types: [],
    },
  ]),
}));

import { List } from "./list";

describe("List", () => {
  it("renders a Card per Pokémon", async () => {
    const ui = await List({});
    render(ui);
    const headings = screen.getAllByRole("heading", { level: 2 });

    expect(headings).toHaveLength(3);
    expect(headings.map((h) => h.textContent)).toEqual([
      "bulbasaur",
      "ivysaur",
      "venusaur",
    ]);
  });
});
