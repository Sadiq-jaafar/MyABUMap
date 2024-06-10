import React from "react";
import { Marker } from "react-native-maps";

// Define the type for the item prop
type Item = {
  name: string;
  coords: {
    latitude: number;
    longitude: number;
  };
};

// Define the type for the props
type PlaceMarkerProps = {
  item: Item;
};

const PlaceMarker: React.FC<PlaceMarkerProps> = ({ item }) => {
  return (
    <Marker
      title={item.name}
      coordinate={{
        latitude: item.coords.latitude,
        longitude: item.coords.longitude,
      }}
    />
  );
};

export default PlaceMarker;
