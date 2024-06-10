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
import List from "../Components/Home/Search/lists";
import Lists from "../Components/Home/Search/lists";

export default function Search() {
  const [placeList, setPlaceList] = useState([]);
  return (
    <View>
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
  SearchContainer: {
    margin: 20,
    position: "absolute",
    zIndex: 20,
  },
  Lists: {
    marginTop: 550,
    position: "absolute",
  },
});
