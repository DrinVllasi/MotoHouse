import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import MotorcyclesScreen from "./screens/MotorcyclesScreen";
import MotorcycleDetailsScreen from "./screens/MotorcycleDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "MotoHouse" }}
        />

        <Stack.Screen
          name="Motorcycles"
          component={MotorcyclesScreen}
          options={{ title: "Motorcycles" }}
        />

        <Stack.Screen
          name="MotorcycleDetails"
          component={MotorcycleDetailsScreen}
          options={{ title: "Motorcycle Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}