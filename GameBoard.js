
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function GameBoard() {
  const [position, setPosition] = useState(0);

  const rollDice = () => {
    const dice = Math.floor(Math.random() * 6) + 1;
    setPosition(prev => prev + dice);
  };

  return (
    <View style={styles.board}>
      <Text>🎲 Chowkabara Board</Text>
      <Text>Player Position: {position}</Text>
      <Button title="Roll Dice" onPress={rollDice} />
    </View>
  );
}

const styles = StyleSheet.create({
  board: { alignItems: "center", margin: 20 },
});
