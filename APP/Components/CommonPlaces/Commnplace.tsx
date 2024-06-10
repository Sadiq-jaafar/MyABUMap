import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CommonPlaceItem from "./CommomPlaceItem";

export default function CommonPlace() {
  const catigoryList = [
    {
      id: 1,
      value: "senate",
      name: "Senate",
      icon: require("./../../../assets/senate22.jpg"),
    },
    {
      id: 2,
      value: "gymnazium",
      name: "Gymnazium",
      icon: require("./../../../assets/Gym.jpg"),
    },
    {
      id: 3,
      value: "kontagota Hall",
      name: "Mamman Kontagora Hall",
      icon: require("./../../../assets/placeholder.jpg"),
    },
    {
      id: 4,
      value: "kill",
      name: "Kashim Ibrahim Library",
      icon: require("./../../../assets/killl.jpg"),
    },
    {
      id: 5,
      value: "dam",
      name: "Dam",
      icon: require("./../../../assets/dam.jpg"),
    },
    {
      id: 6,
      value: "dam",
      name: "Dam",
      icon: require("./../../../assets/dam.jpg"),
    },
  ];
  return (
    <View>
      <Text style={styles.text}>Common Places</Text>
      <FlatList
        data={catigoryList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCatigory(item.value)}>
            <CommonPlaceItem catigory={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    margin: 40,
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
