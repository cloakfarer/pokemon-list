import { fetchPokemon, fetchPokemonRange } from "@/lib/pokeapi";
import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("PokeAPI", () => {
  it("fetchPokemon: returns Pokémon for 200 OK", async () => {
    const bulba = {
      id: 1,
      name: "bulbasaur",
      height: 7,
      weight: 69,
      sprites: { front_default: "https://img/poke.png" },
      types: [],
    };
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify(bulba), {
        status: 200,
        headers: { "content-type": "application/json" },
      })
    );

    const res = await fetchPokemon(1);
    expect(res.id).toBe(1);
    expect(res.name).toBe("bulbasaur");
  });

  it("fetchPokemon: throws error for HTTP error (e.g. 404)", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response("Not found", { status: 404 })
    );

    await expect(fetchPokemon(9999)).rejects.toThrow(/404|failed|not/i);
  });

  it("fetchPokemonRange: returns sorted list", async () => {
    const mockPokemon = (id: number) => ({
      id,
      name: `poke-${id}`,
      height: 1,
      weight: 1,
      sprites: { front_default: null },
      types: [],
    });
    const mock = vi.spyOn(global, "fetch");
    mock
      .mockResolvedValueOnce(
        new Response(JSON.stringify(mockPokemon(2)), { status: 200 })
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify(mockPokemon(1)), { status: 200 })
      );

    const res = await fetchPokemonRange([2, 1]);
    expect(res.map((p) => p.id)).toEqual([1, 2]);
  });

  it("fetchPokemonRange: ignores failed requests", async () => {
    const mockResponse = (id: number) =>
      new Response(
        JSON.stringify({
          id,
          name: `p${id}`,
          height: 1,
          weight: 1,
          sprites: { front_default: null },
          types: [],
        }),
        { status: 200 }
      );
    const mock = vi.spyOn(global, "fetch");
    mock
      .mockResolvedValueOnce(mockResponse(1))
      .mockResolvedValueOnce(new Response("fail", { status: 500 }))
      .mockResolvedValueOnce(mockResponse(3));

    const res = await fetchPokemonRange([1, 2, 3]);
    expect(res.map((p) => p.id)).toEqual([1, 3]);
  });
});
