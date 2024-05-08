import { View, Image, StyleSheet, TextInput, Dimensions } from "react-native";
import React from "react";
import colors from "../Config/Colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./../../assets/locatioon.jfif")}
      />
      <View style={styles.searchBar}>
        <TextInput placeholder="Search" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-evenly",
  },
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: colors.black,
    padding: 3,
    borderRadius: 50,
    paddingLeft: 10,
    width: Dimensions.get("screen").width * 0.6,
  },
});
