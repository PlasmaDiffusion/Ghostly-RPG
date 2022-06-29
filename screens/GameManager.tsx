import { useState } from 'react';
import { StyleSheet } from 'react-native';
import CommandList from '../components/battle/CommandList';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {Battler, makeStartingPlayerBattler} from '../interfaces/battler';
import {getMonster, monsters} from "../gameData/monsters"
import { RootTabScreenProps } from '../types';

//Handles start and end of battles, plus stores "battler" variables
export default function GameManager({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [player, setPlayer] = useState<Battler>(makeStartingPlayerBattler());
  const [enemy, setEnemy] = useState<Battler>(getMonster(monsters.SLIME));
  const [currentBattle, setCurrentBattle] = useState<monsters>(monsters.SLIME)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VS Slime</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CommandList player={player} enemy={enemy} setPlayer={setPlayer} setEnemy={setEnemy} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
