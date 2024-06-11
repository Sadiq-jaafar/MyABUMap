import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import GoogleMapViewFull from "../Components/Search/GoogleMapViewFull";
import SearchBar from "../Components/Search/SearchBar";
import GoogleMapView from "../Components/Home/GoogleMapView";
import PlaceList from "../Components/Home/plist";
import PlaceItem from "../Components/Home/PlaceItem";
import List from "../Components/Search/lists";
import Lists from "../Components/Search/lists";

export default function Search() {
  const [placeList, setPlaceList] = useState([]);
  return (
    <View style={styles.all}>
      <View style={styles.SearchContainer}>
        <SearchBar />
      </View>
      <GoogleMapViewFull placeList={placeList} />
      <View style={styles.Lists}>
        <Lists />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  all: {
    marginTop: 30,
  },
  SearchContainer: {
    margin: 10,
    position: "absolute",
    zIndex: 20,
  },
  Lists: {
    marginTop: 550,
    position: "absolute",
  },
});
