// Components/Home/PlaceList.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import PlaceItem from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Place = {
  results: {
    id: string;
    name: string;
    vicinity: string;
  };
  // Add other properties as needed
};

type PlaceListProps = {
  placeList: Array<Place> | null;
};

type RootStackParamList = {
  "place-detail": { place: Place };
};

const PlaceList: React.FC<PlaceListProps> = ({ placeList }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      {placeList && placeList.length !== 0 ? (
        <Text style={styles.text}>Found {placeList.length} places</Text>
      ) : (
        <Text style={styles.text}>Place not found</Text>
      )}

      <FlatList
        data={placeList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("place-detail", { place: item })}
          >
            <PlaceItem place={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.results.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default PlaceList;

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import PlaceItem from "./PlaceItem";
// import HomeNavigation from "../../Navigations/HomeNavigation"; // Assuming this is where your stack navigation is defined
// import { useNavigation } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// type Place = {
//   id: string;
//   name: string;
//   // Add other properties as needed
// };

// type PlaceListProps = {
//   placeList: Array<Place> | null;
// };

// type RootStackParamList = {
//   "place-detail": { place: Place };
// };

// export default function PlaceList({ placeList }: PlaceListProps) {
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//   return (
//     <View>
//       {placeList && placeList.length !== 0 ? (
//         <Text style={styles.text}>Found {placeList.length} places</Text>
//       ) : (
//         <Text style={styles.text}>Place not found</Text>
//       )}

//       <FlatList
//         data={placeList}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => navigation.navigate("place-detail", { place: item })}>
//             <PlaceItem place={item} />
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
// });
