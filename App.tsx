import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./APP/Navigations/TabNavigation";
import { useEffect, useState } from "react";

import * as Location from "expo-location";
import { userLocationContext } from "./APP/Components/Context/userLocationContext";

export default function App() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      try {
        let userLocation = await Location.getCurrentPositionAsync({});
        setLocation(userLocation);
      } catch (error) {
        setErrorMsg("Failed to fetch location");
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <userLocationContext.Provider value={{ location, setLocation }}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </userLocationContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
function useFonts(arg0: { "Inter-Black": any }): [any, any] {
  throw new Error("Function not implemented.");
}
