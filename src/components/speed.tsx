export interface SpeedTotem {
  name: string;
  head: string;
  speed: number;
}

export const cochon: SpeedTotem = {
  name: "cochon",
  head: "🐷",
  speed: 20,
};

export const lapin: SpeedTotem = {
  name: "lapin",
  head: "🐰",
  speed: 100,
};

export const dragon: SpeedTotem = {
  name: "dragon",
  head: "🐲",
  speed: 300,
};

export default [cochon, lapin, dragon];
