import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MotorcyclesScreen from "./screens/MotorcyclesScreen";
import MotorcycleDetailsScreen from "./screens/MotorcycleDetailsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#101010" },
        headerTintColor: "#ffffff",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarStyle: {
          backgroundColor: "#101010",
          borderTopColor: "#303030",
          height: 76,
          paddingBottom: 12,
          paddingTop: 8,
        },
        tabBarActiveTintColor: "#e63946",
        tabBarInactiveTintColor: "#888888",
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "MotoHouse",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Motorcycles"
        component={MotorcyclesScreen}
        options={{
          title: "Motorcycles",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="motorbike"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "About MotoHouse",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{
          headerStyle: { backgroundColor: "#101010" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
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