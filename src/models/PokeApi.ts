export type TNamedAPIResource = {
  name: string; // The name of the referenced resource.
  url: string; // The URL of the referenced resource.
};

export type TPokemon = {
  id: number;
  name: string;
  height: number; // In decimeters
  weight: number; // In hectograms
  types: TPokemonType[];
  sprites: TPokemonSprite;
};

export type TPokemonType = {
  slot: number; // The order the Pokémon's types are listed in.
  type: TNamedAPIResource;
};

export type TPokemonSprite = {
  front_default: string | null; // The default depiction of this Pokémon from the front in battle.
  front_shiny: string | null; // The shiny depiction of this Pokémon from the front in battle.
  front_female: string | null; // The female depiction of this Pokémon from the front in battle.
  front_shiny_female: string | null; // The shiny female depiction of this Pokémon from the front in battle.
  back_default: string | null; // The default depiction of this Pokémon from the back in battle.
  back_shiny: string | null; // The shiny depiction of this Pokémon from the back in battle.
  back_female: string | null; // The female depiction of this Pokémon from the back in battle.
  back_shiny_female: string | null; // The shiny female depiction of this Pokémon from the back in battle.
};
