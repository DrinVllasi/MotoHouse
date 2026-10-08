import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MotorcyclesScreen from "./screens/MotorcyclesScreen";
import MotorcycleDetailsScreen from "./screens/MotorcycleDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Motorcycles"
          component={MotorcyclesScreen}
        />
        <Stack.Screen
          name="MotorcycleDetails"
          component={MotorcycleDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}