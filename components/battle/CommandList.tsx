import * as WebBrowser from "expo-web-browser";
import { useState } from "react";
import { Alert, Button, StyleSheet, TouchableOpacity } from "react-native";
import {Battler} from "../../interfaces/battler";
import {monsters} from "../../gameData/monsters"
import Dialogue from "../Dialogue";

import { Text, View } from "../Themed";

interface Props {
  player: Battler;
  enemy: Battler;
  setPlayer: (player: Battler) => any;
  setEnemy: (enemy: Battler) => any;
}

export default function CommandList({
  player,
  enemy,
  setPlayer,
  setEnemy,
}: Props) {
  const [open, setOpen] = useState(true);
  const [battleDialogue, setBattleDialogue] = useState("");


  function attack(player: Battler, enemy: Battler, playerIsAttacking: boolean) {

    // No actions can be performed while a battle message / animation is occurring
    if (battleDialogue !== "") return;

    if (playerIsAttacking)
    {
        const damage = Math.max(0,(player.attack * 2) - enemy.defense);
    
        enemy.hp -= damage;
        setEnemy(enemy);
        setBattleDialogue(`${enemy.name} takes ${damage} damage!`);
    }
    else {
        const damage = Math.max(0,(enemy.attack * 2) - player.defense);
    
        player.hp -= damage;
        setPlayer(enemy);
        setBattleDialogue(`Ghos takes ${damage} damage!`);
    }

  }

  if (!open) return <></>;

  return (
    <View style={{ borderWidth: 1, borderColor: "grey" }}>
        <Dialogue text={battleDialogue} waitTime={0} />

        {/* Commands occur here */}
      <Button
        onPress={() => {
          attack(player, enemy, true);
        }}
        title="Attack"
        color="#241584"
        accessibilityLabel="Learn more about this purple button"
      />
            <Button
        onPress={() => {
          attack(player, enemy, true);
        }}
        title="Possess"
        color="#241584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
