import StatusEffects from "./statusEffects";

interface Battler {

    hp: number;
    sp: number;
    level: number;
    attack: number;
    defense: number;
    status: StatusEffects[];

}


export default Battler;