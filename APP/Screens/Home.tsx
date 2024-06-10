import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CatigoryList from "../Components/Home/CatigoryList";
import nearByPlace from "../Services/GlobalApi";
import PlaceList from "../Components/Home/PlaceList";
import { userLocationContext } from "../Components/Context/userLocationContext";
import colors from "../Config/Colors";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(userLocationContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (location && location.coords) {
      getNearBySearch("");
    }
  }, [location]);

  const getNearBySearch = (value: string) => {
    if (!location || !location.coords) {
      console.error("Location is not available");
      return;
    }

    console.log("Category", value);

    nearByPlace(location.coords.latitude, location.coords.longitude, value)
      .then((resp) => {
        setPlaceList(resp.data.results);
        console.log(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching nearby places", error);
      });
  };

  if (!location || !location.coords) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Map</Text>
      <GoogleMapView placeList={placeList} />
      <CatigoryList
        setSelectedCatigory={(value: string) => getNearBySearch(value)}
      />
      {placeList ? <PlaceList placeList={placeList} /> : null}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            // Navigate to "place-detail" screen
            navigation.navigate("place-detail");
          }}
        >
          <Ionicons name="compass-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  iconButton: {
    backgroundColor: "green",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
