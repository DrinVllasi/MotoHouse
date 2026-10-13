import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

import motorcycleImages from "../assets/motorcycleImages";

export default function MotorcycleDetailsScreen({ route }) {
  const { motorcycle } = route.params;

  const specifications = [
    { label: "ENGINE", value: motorcycle.engine },
    { label: "POWER", value: motorcycle.power },
    { label: "TORQUE", value: motorcycle.torque },
    { label: "WEIGHT", value: motorcycle.weight },
    { label: "SEAT HEIGHT", value: motorcycle.seatHeight },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Motorcycle image */}
      <View style={styles.imageContainer}>
        <Image
          source={motorcycleImages[motorcycle.image]}
          style={styles.motorcycleImage}
          resizeMode="contain"
        />
      </View>

      {/* Motorcycle information */}
      <View style={styles.details}>
        <Text style={styles.category}>
          {motorcycle.category.toUpperCase()}
        </Text>

        <Text style={styles.name}>{motorcycle.name}</Text>

        <Text style={styles.priceLabel}>PRICE</Text>
        <Text style={styles.price}>
          €{motorcycle.price.toLocaleString("en-IE")}
        </Text>

        {/* Specifications */}
        <View style={styles.specificationsSection}>
          <Text style={styles.sectionTitle}>SPECIFICATIONS</Text>

          {specifications.map((specification, index) => (
            <View
              key={specification.label}
              style={[
                styles.specificationRow,
                index === specifications.length - 1 &&
                  styles.lastSpecificationRow,
              ]}
            >
              <Text style={styles.specificationLabel}>
                {specification.label}
              </Text>

              <Text style={styles.specificationValue}>
                {specification.value}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  content: {
    paddingBottom: 35,
    alignItems: "center",
  },

  // Image
  imageContainer: {
    width: "100%",
    maxWidth: 850,
    height: 300,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  motorcycleImage: {
    width: "100%",
    height: "100%",
  },

  // Main information
  details: {
    width: "100%",
    maxWidth: 850,
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  category: {
    color: "#e63946",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 8,
  },
  name: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  priceLabel: {
    color: "#888888",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 5,
  },
  price: {
    color: "#e63946",
    fontSize: 27,
    fontWeight: "bold",
  },

  // Specifications
  specificationsSection: {
    marginTop: 32,
    backgroundColor: "#1b1b1b",
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 5,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 10,
  },
  specificationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
  },
  lastSpecificationRow: {
    borderBottomWidth: 0,
  },
  specificationLabel: {
    color: "#999999",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  specificationValue: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
  },
});