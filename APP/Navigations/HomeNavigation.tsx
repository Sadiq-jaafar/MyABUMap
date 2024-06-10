import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../Screens/Home";
import PlaceDetail from "../Components/PlaceDetail/PlaceDetail";

type RootStackParamList = {
  home: undefined;
  "place-detail": { placeId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function HomeNavigation() {
  const isAndroid = true;

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        name="place-detail"
        component={PlaceDetail}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}
