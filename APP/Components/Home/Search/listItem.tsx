import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../Config/Colors";

export default function listItem({ catigory }) {
  return (
    <View style={styles.container}>
      <Image source={catigory.icon} style={styles.image} />
      <Text style={styles.text}>{catigory.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.gray1,
    height: 100,
    width: 90,
    borderRadius: 10,
    margin: 5,
    padding: 5,
    display: "flex",
    elevation: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
  },
});
