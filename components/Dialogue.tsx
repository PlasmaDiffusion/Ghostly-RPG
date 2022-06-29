import * as WebBrowser from "expo-web-browser";
import { useState } from "react";
import { Alert, Button, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

interface Props {
  text: string;
  waitTime: number;
  onPress?: ()=> any;
}



export default function Dialogue({ text, waitTime, onPress=()=>{close()} }: Props) {
  const [message, setMessage] = useState(text);

  function close()
  {
    setMessage("");
  }

  if (message==="") return <></>;

  return (
    <View style={{ borderWidth: 1, borderColor: "grey" }}>
      <Text>{text}</Text>
      <View style={{ padding: "20%" }} />
      <Button
        onPress={onPress}
        title="Ok"
        color="#241584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
