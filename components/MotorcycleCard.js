import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "./Button";

const motorcycleImages = {
  "mt07.jpg": require("../assets/images/mt07.jpg"),
  "ninja650.jpg": require("../assets/images/ninja650.jpg"),
};

const MotorcycleCard = ({ motorcycle, navigation }) => {
  return (
    <View style={styles.card}>
      <Image
        source={motorcycleImages[motorcycle.image]}
        style={styles.image}
      />

      <Text style={styles.name}>{motorcycle.name}</Text>
      <Text style={styles.price}>€{motorcycle.price}</Text>
      <Text style={styles.category}>{motorcycle.category}</Text>

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
    backgroundColor: "#ffffff",
    margin: 10,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dddddd",
  },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },

  category: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default MotorcycleCard;