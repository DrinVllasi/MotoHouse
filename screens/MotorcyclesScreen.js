import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import data from "../assets/data.json";
import MotorcycleCard from "../components/MotorcycleCard";

const categories = ["All", "Naked", "Sport", "Cruiser", "Superbike", "Adventure"];

const MotorcyclesScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMotorcycles =
    selectedCategory === "All"
      ? data
      : data.filter(
          (motorcycle) => motorcycle.category === selectedCategory
        );

  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredMotorcycles}
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

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#101010",
},
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 8,
  },
  categoryButton: {
  paddingVertical: 8,
  paddingHorizontal: 12,
  margin: 4,
  borderRadius: 20,
  backgroundColor: "#242424",
  },
  selectedCategory: {
    backgroundColor: "#e63946",
  },
  categoryText: {
    color: "#dddddd",
    fontWeight: "600",
  },
  selectedCategoryText: {
    color: "#ffffff",
  },
});

export default MotorcyclesScreen;