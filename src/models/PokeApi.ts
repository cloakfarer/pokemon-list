export type TNamedAPIResource = {
  name: string; // The name of the referenced resource.
  url: string; // The URL of the referenced resource.
};

export type TResponse = {
  count: number;
  next: string;
  previous: string;
  results: TPokemon;
};

export type TPokemon = {
  id: number;
  name: string;
  height: number; // In decimeters
  weight: number; // In hectograms
  types: TPokemonType[];
  sprites: TPokemonSprite[];
};

export type TPokemonType = {
  slot: number; // The order the Pokémon's types are listed in.
  type: TNamedAPIResource;
};

export type TPokemonSprite = {
  front_default: string; // The default depiction of this Pokémon from the front in battle.
  front_shiny: string; // The shiny depiction of this Pokémon from the front in battle.
  front_female: string; // The female depiction of this Pokémon from the front in battle.
  front_shiny_female: string; // The shiny female depiction of this Pokémon from the front in battle.
  back_default: string; // The default depiction of this Pokémon from the back in battle.
  back_shiny: string; // The shiny depiction of this Pokémon from the back in battle.
  back_female: string; // The female depiction of this Pokémon from the back in battle.
  back_shiny_female: string; // The shiny female depiction of this Pokémon from the back in battle.
};
