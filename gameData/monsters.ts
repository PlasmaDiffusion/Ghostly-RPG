import { Battler } from "../interfaces/battler";

export enum monsters {
  SLIME,
}

export function getMonster(monsterId: monsters) {
  let battler: Battler;

  switch (monsterId) {
    case monsters.SLIME:
      battler = {
        hp: 6,
        maxHp: 6,
        sp: 10,
        maxSP: 10,
        level: 1,
        attack: 2,
        defense: 1,
        status: [],
        // sprite: Image;
        name:"Undead Slime",
        exp: 2,
      };
      break;
  }

  return battler;
}
