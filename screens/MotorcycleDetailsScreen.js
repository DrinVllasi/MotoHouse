import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import motorcycleImages from "../assets/motorcycleImages";

const MotorcycleDetailsScreen = ({ route }) => {
  const { motorcycle } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={motorcycleImages[motorcycle.image]}
        style={styles.image}
      />

      <Text style={styles.category}>{motorcycle.category}</Text>

      <Text style={styles.name}>{motorcycle.name}</Text>

      <Text style={styles.price}>
        €{motorcycle.price.toLocaleString("en-IE")}
      </Text>

      <View style={styles.specifications}>
        <Text style={styles.sectionTitle}>Specifications</Text>

        <View style={styles.specRow}>
          <Text style={styles.specLabel}>Engine</Text>
          <Text style={styles.specValue}>{motorcycle.engine}</Text>
        </View>

        <View style={styles.specRow}>
          <Text style={styles.specLabel}>Power</Text>
          <Text style={styles.specValue}>{motorcycle.power} </Text>
        </View>

        <View style={styles.specRow}>
          <Text style={styles.specLabel}>Torque</Text>
          <Text style={styles.specValue}>{motorcycle.torque}</Text>
        </View>

        <View style={styles.specRow}>
          <Text style={styles.specLabel}>Weight</Text>
          <Text style={styles.specValue}>{motorcycle.weight} </Text>
        </View>

        <View style={styles.specRow}>
          <Text style={styles.specLabel}>Seat Height</Text>
          <Text style={styles.specValue}>{motorcycle.seatHeight} </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: 280,
    resizeMode: "contain",
  },
  category: {
    fontSize: 13,
    color: "#666666",
    textTransform: "uppercase",
    fontWeight: "600",
    marginHorizontal: 20,
    marginTop: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222222",
    marginHorizontal: 20,
    marginTop: 5,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222222",
    marginHorizontal: 20,
    marginTop: 10,
  },
  specifications: {
    margin: 20,
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 10,
  },
  specRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  specLabel: {
    fontSize: 15,
    color: "#666666",
  },
  specValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222222",
  },
});

export default MotorcycleDetailsScreen;