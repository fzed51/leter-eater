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

export const chat: SpeedTotem = {
  name: "chat",
  head: "🐱",
  speed: 150,
};

export const licorne: SpeedTotem = {
  name: "licorne",
  head: "🦄",
  speed: 75,
};

export const souris: SpeedTotem = {
  name: "souris",
  head: "🐁",
  speed: 50,
};

export default [dragon, cochon, chat, lapin, licorne, souris].sort(
  (a, b) => a.speed - b.speed
);
