import React from "react";
import { View, FlatList, Text } from "react-native";
import data from "../assets/data.json";
import MotorcycleCard from "../components/MotorcycleCard";

const MotorcyclesScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <MotorcycleCard
            motorcycle={item}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MotorcyclesScreen;