// Components/Home/PlaceItem.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface PlaceItemProps {
  place: {
    name: string;
    vicinity: string;
  };
}

const PlaceItem: React.FC<PlaceItemProps> = ({ place }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/placeholder.jpg")} // Assuming this is in the correct path
        style={styles.image}
      />

      <View>
        <Text style={styles.placeName}>{place.name}</Text>
        <Text style={styles.vicinity}>{place.vicinity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 8,
  },
  placeName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  vicinity: {
    fontSize: 14,
    color: "#888",
  },
});

export default PlaceItem;
// import React from "react";
// import { View, Text, Image, StyleSheet } from "react-native";

// interface PlaceItemProps {
//   place: {
//     name: string;
//     vicinity: string;
//   };
// }

// const PlaceItem: React.FC<PlaceItemProps> = ({ place }) => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("./../../../assets/placeholder.jpg")}
//         style={styles.image}
//       />

//       <View>
//         <Text style={styles.placeName}>{place.name}</Text>
//         <Text style={styles.vicinity}>{place.vicinity}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: "#ccc",
//   },
//   image: {
//     width: 120,
//     height: 120,
//     marginRight: 10,
//     borderRadius: 8,
//   },
//   placeName: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   vicinity: {
//     fontSize: 14,
//     color: "#888",
//   },
// });

// export default PlaceItem;
