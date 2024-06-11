import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { userLocationContext } from "../Context/userLocationContext";
import PlaceMarker from "../Home/PlaceMarker";

type Place = {
  name: string;
  coords: {
    latitude: number;
    longitude: number;
  };
};

type GoogleMapViewProps = {
  placeList: Place[];
};

const GoogleMapView: React.FC<GoogleMapViewProps> = ({ placeList }) => {
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
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title="Me" coordinate={mapRegion} />
          {placeList.slice(0, 6).map((item, index) => (
            <PlaceMarker key={index} item={item} />
          ))}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GoogleMapView;
