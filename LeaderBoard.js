
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { db } from "../firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

export default function LeaderboardScreen() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "players"), orderBy("score", "desc"), limit(10));
      const snapshot = await getDocs(q);
      setPlayers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Leaderboard</Text>
      <FlatList
        data={players}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <Text>{index + 1}. {item.name} - {item.score} pts</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});
