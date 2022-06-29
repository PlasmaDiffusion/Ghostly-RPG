import { Image } from "react-native";
import StatusEffects from "./statusEffects";

interface Battler {

    hp: number;
    sp: number;
    level: number;
    attack: number;
    defense: number;
    status: StatusEffects[];
    
    sprite: Image;

    exp: number;
    nextLevel: number;

}


export default Battler;