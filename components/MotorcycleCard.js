import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "./Button";
import motorcycleImages from "../assets/motorcycleImages";

const MotorcycleCard = ({ motorcycle, navigation }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={motorcycleImages[motorcycle.image]}
          style={styles.image}
        />
      </View>

      <Text style={styles.category}>
        {motorcycle.category.toUpperCase()}
      </Text>

      <Text style={styles.name}>{motorcycle.name}</Text>

      <Text style={styles.price}>
        €{motorcycle.price.toLocaleString("en-IE")}
      </Text>

      <Button
        title="View Details"
        onPress={() =>
          navigation.navigate("MotorcycleDetails", {
            motorcycle: motorcycle,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1b1b1b",
    margin: 10,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#303030",
  },
  imageContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  category: {
    fontSize: 12,
    color: "#e63946",
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginTop: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 6,
  },
  price: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 8,
    marginBottom: 4,
  },
});

export default MotorcycleCard;