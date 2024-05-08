import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CatigoryList from "../Components/Home/CatigoryList";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Map</Text>
      <GoogleMapView />
      <CatigoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontWeight: "bold",
    marginTop: 20,
  },
});
