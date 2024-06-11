import React from "react";
import { View, StyleSheet } from "react-native";
import GoogleMapView from "./GoogleMapView";

const placeList = [
  {
    name: "Place 1",
    coords: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  // Add more places here
];

const PlaceDetail: React.FC = () => {
  return (
    <View style={styles.container}>
      <GoogleMapView placeList={placeList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlaceDetail;
