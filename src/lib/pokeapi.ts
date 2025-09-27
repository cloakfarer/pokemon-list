import { TPokemon } from "@/models/PokeApi";

const API = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemon(id: number) {
  const res = await fetch(`${API}/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch Pokémon #${id}: ${res.status}`);
  }
  return (await res.json()) as TPokemon;
}

export async function fetchPokemonRange(ids: number[]) {
  const results = await Promise.allSettled(ids.map((id) => fetchPokemon(id)));

  const ok = results
    .flatMap((r) => (r.status === "fulfilled" ? [r.value] : []))
    .sort((a, b) => a.id - b.id);

  const errs = results.filter((r) => r.status === "rejected");
  if (errs.length) {
    console.warn(`Some Pokémon failed: ${errs.length} of ${ids.length}`);
  }

  return ok;
}
