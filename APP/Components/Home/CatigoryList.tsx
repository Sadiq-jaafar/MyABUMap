import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CatigoryItem from "./CatigoryItem";

export default function CatigoryList({ setSelectedCatigory }) {
  const catigoryList = [
    {
      id: 1,
      value: "resturants",
      name: "Resturants",
      icon: require("./../../../assets/placeholder.jpg"),
    },
    {
      id: 2,
      value: "mosque",
      name: "Mosque",
      icon: require("./../../../assets/placeholder.jpg"),
    },
    {
      id: 3,
      value: "church",
      name: "Church",
      icon: require("./../../../assets/placeholder.jpg"),
    },
    {
      id: 4,
      value: "hotel",
      name: "Hotel",
      icon: require("./../../../assets/placeholder.jpg"),
    },
  ];
  return (
    <View>
      <Text style={styles.text}>Find Place</Text>
      <FlatList
        horizontal={true}
        data={catigoryList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCatigory(item.value)}>
            <CatigoryItem catigory={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    margin: 15,
    fontWeight: "bold",
  },
});
