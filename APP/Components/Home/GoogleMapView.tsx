import React, { useContext, useEffect, useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import * as Location from "expo-location";
import { userLocationContext } from "../Context/userLocationContext";

export default function GoogleMapView() {
  const { location } = useContext(userLocationContext);
  const [mapRegion, setMapRegion] = useState<Region | null>(null);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [location]);

  return (
    <View style={styles.mapContainer}>
      {mapRegion && (
        <MapView
          style={{
            width: Dimensions.get("screen").width * 0.89,
            height: Dimensions.get("screen").height * 0.25,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title="Me" coordinate={mapRegion} />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    marginTop: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
});
