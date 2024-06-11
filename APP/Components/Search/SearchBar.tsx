import React, { useState } from "react";
import { View, Image, StyleSheet, TextInput, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../Config/Colors";

// Define the SearchBar component as a functional component
const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0,0,0,0)", "transparent"]}
        style={styles.gradient}
      >
        <View style={styles.secondContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/11696_new_profilepic.jpg")}
          />
          <View style={styles.searchBar}>
            <TextInput
              placeholder="Search"
              value={searchInput}
              onChangeText={(value) => setSearchInput(value)}
              onSubmitEditing={() => console.log(searchInput)}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

// Define styles using a StyleSheet
const styles = StyleSheet.create({
  container: {
    marginTop: -18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 350,
  },
  secondContainer: {
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: colors.black,
    padding: 3,
    borderRadius: 50,
    paddingLeft: 10,
    width: Dimensions.get("screen").width * 0.6,
    height: 40,
  },
  gradient: {
    padding: 20,
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 15,
    marginTop: 3,
    marginRight: 25,
  },
});

export default SearchBar;
