import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CatigoryItem from "./CatigoryItem";

export default function CatigoryList() {
  const catigoryList = [
    {
      id: 1,
      value: "resturants",
      name: "Resturants",
      icon: require("./../../../assets/11696_new_profilepic.jpg"),
    },
    {
      id: 2,
      value: "mosque",
      name: "Mrosque",
      icon: require("./../../../assets/11696_new_profilepic.jpg"),
    },
    {
      id: 3,
      value: "church",
      name: "Church",
      icon: require("./../../../assets/11696_new_profilepic.jpg"),
    },
    {
      id: 5,
      value: "hotel",
      name: "Hotel",
      icon: require("./../../../assets/11696_new_profilepic.jpg"),
    },
  ];
  return (
    <View>
      <Text style={styles.text}>Find Place</Text>
      <FlatList
        horizontal={true}
        data={catigoryList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item.name)}>
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
