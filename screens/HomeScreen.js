import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import data from "../assets/data.json";
import motorcycleImages from "../assets/motorcycleImages";

const HomeScreen = ({ navigation }) => {
  const featuredMotorcycle = data.find(
    (motorcycle) => motorcycle.id === 2
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Hero section */}
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>YOUR NEXT ADVENTURE STARTS HERE</Text>

        <Text style={styles.heading}>
          RIDE BEYOND
          {"\n"}
          <Text style={styles.headingAccent}>LIMITS.</Text>
        </Text>

        <Text style={styles.description}>
          Discover motorcycles built for every road,
          every journey, and every kind of rider.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("Motorcycles")}
        >
          <Text style={styles.primaryButtonText}>
            EXPLORE MOTORCYCLES  →
          </Text>
        </TouchableOpacity>

        <View style={styles.heroImageContainer}>
          <Image
            source={motorcycleImages["mt07.jpg"]}
            style={styles.heroImage}
          />
        </View>

        <Text style={styles.imageCaption}>
          PERFORMANCE. PRECISION. FREEDOM.
        </Text>
      </View>

      {/* Featured motorcycle */}
      {featuredMotorcycle && (
        <View style={styles.featuredSection}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionEyebrow}>HANDPICKED FOR YOU</Text>
              <Text style={styles.sectionTitle}>Featured Bike</Text>
            </View>

            <Text style={styles.featuredNumber}>01 / 06</Text>
          </View>

          <View style={styles.featuredCard}>
            <View style={styles.featuredImageContainer}>
              <Image
                source={motorcycleImages[featuredMotorcycle.image]}
                style={styles.featuredImage}
              />
            </View>

            <Text style={styles.category}>
              {featuredMotorcycle.category.toUpperCase()}
            </Text>

            <Text style={styles.motorcycleName}>
              {featuredMotorcycle.name}
            </Text>

            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Starting at</Text>
              <Text style={styles.price}>
                €{featuredMotorcycle.price.toLocaleString("en-IE")}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() =>
                navigation.navigate("MotorcycleDetails", {
                  motorcycle: featuredMotorcycle,
                })
              }
            >
              <Text style={styles.secondaryButtonText}>
                VIEW MOTORCYCLE  →
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => navigation.navigate("Motorcycles")}
          >
            <Text style={styles.viewAllText}>
              VIEW ALL MOTORCYCLES  →
            </Text>
          </TouchableOpacity>
        </View>
      )}


      <View style={styles.footer}>
        <Text style={styles.footerBrand}>MotoHouse</Text>
        <Text style={styles.footerText}>
          FIND YOUR RIDE. OWN THE ROAD.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  content: {
    paddingBottom: 20,
  },
  hero: {
    backgroundColor: "#101010",
    paddingHorizontal: 24,
    paddingTop: 35,
    paddingBottom: 25,
  },
  eyebrow: {
    color: "#e63946",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  heading: {
    color: "#ffffff",
    fontSize: 42,
    fontWeight: "900",
    marginTop: 18,
    lineHeight: 48,
    letterSpacing: 1,
  },
  headingAccent: {
    color: "#e63946",
  },
  description: {
    color: "#aaaaaa",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 15,
    maxWidth: 360,
  },
  primaryButton: {
    backgroundColor: "#e63946",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginTop: 24,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  heroImageContainer: {
  marginTop: 25,
  backgroundColor: "#ffffff",
  borderRadius: 12,
  overflow: "hidden",
},
  heroImage: {
    width: "100%",
    height: 230,
    resizeMode: "contain",
  },
  imageCaption: {
    color: "#777777",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
    marginTop: 14,
  },
  featuredSection: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  sectionEyebrow: {
    color: "#e63946",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 6,
  },
  featuredNumber: {
    color: "#777777",
    fontSize: 12,
    marginBottom: 5,
  },
  featuredCard: {
    backgroundColor: "#1b1b1b",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#303030",
  },
  featuredImageContainer: {
  backgroundColor: "#ffffff",
  borderRadius: 8,
  overflow: "hidden",
 },
  featuredImage: {
    width: "100%",
    height: 210,
    resizeMode: "contain",
  },
  category: {
    color: "#e63946",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginTop: 18,
  },
  motorcycleName: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 7,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#383838",
  },
  priceLabel: {
    color: "#aaaaaa",
    fontSize: 14,
  },
  price: {
    color: "#ffffff",
    fontSize: 21,
    fontWeight: "bold",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#e63946",
    borderRadius: 6,
    padding: 14,
    alignItems: "center",
    marginTop: 18,
  },
  secondaryButtonText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  viewAllButton: {
    paddingVertical: 20,
    alignItems: "center",
  },
  viewAllText: {
    color: "#e63946",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#303030",
    marginTop: 15,
    paddingVertical: 25,
    alignItems: "center",
  },
  footerBrand: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  footerText: {
    color: "#777777",
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 8,
  },
});

export default HomeScreen;