import { Image } from "react-native";
import StatusEffects from "./statusEffects";

export interface Battler {

    hp: number;
    maxHp: number;
    sp: number;
    maxSP: number;
    level: number;
    attack: number;
    defense: number;
    status: StatusEffects[];

    name? : string;
    sprite?: Image;

    exp: number;
    nextLevel?: number;

}

export function makeStartingPlayerBattler()
{
    let battler : Battler = {
        hp: 30,
        maxHp: 30,
        sp: 10,
        maxSP: 10,
        level: 1,
        attack: 2,
        defense: 1,
        status: [],
        
        // sprite: Image;
    
        exp: 0,
        nextLevel: 10,
    }

    return battler;
}

