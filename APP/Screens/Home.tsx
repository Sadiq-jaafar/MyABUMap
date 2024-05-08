import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../Components/Header";

export default function Home() {
  return (
    <View style={styles.header}>
      <Header />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
});
