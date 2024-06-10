import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import colors from "./../../Config/Colors";

export default function CommonPlaceItem({ catigory }) {
  return (
    <View style={styles.container}>
      <Image source={catigory.icon} style={styles.image} />
      <Text style={styles.text}>{catigory.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: 350,
    height: 200,
    marginRight: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
