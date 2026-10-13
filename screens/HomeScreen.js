
import React, { useState } from "react";import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-swiper";

import data from "../assets/data.json";
import motorcycleImages from "../assets/motorcycleImages";

export default function HomeScreen({ navigation }) {
  const featuredMotorcycles = data.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Introduction */}
      <View style={styles.intro}>
        <Text style={styles.eyebrow}>FIND YOUR NEXT RIDE</Text>

        <Text style={styles.heading}>
          RIDE BEYOND{"\n"}
          <Text style={styles.headingAccent}>LIMITS.</Text>
        </Text>

        <Text style={styles.description}>
          Discover motorcycles built for every kind of rider.
          Find the machine that matches your style.
        </Text>
      </View>

      {/* Motorcycle carousel */}
      <View style={styles.carouselSection}>
        <View style={styles.carouselHeader}>
          <Text style={styles.sectionLabel}>THE COLLECTION</Text>
          <Text style={styles.swipeHint}>SWIPE TO EXPLORE ↔</Text>
        </View>

        {featuredMotorcycles.length > 0 && (
          <View style={styles.carousel}>
            <Swiper
              loop={false}
              showsPagination={false}
              autoplay={false}
              onMomentumScrollEnd={(event, state) => {
                console.log("Active slide:", state.index);
                setActiveIndex(state.index);
              }}
              removeClippedSubviews={false}
            >

              {featuredMotorcycles.map((motorcycle, index) => (
                <View key={motorcycle.id} style={styles.slide}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={motorcycleImages[motorcycle.image]}
                      style={styles.motorcycleImage}
                      resizeMode="contain"
                    />

                    <View style={styles.imageCounter}>
                      <Text style={styles.imageCounterText}>
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(featuredMotorcycles.length).padStart(2, "0")}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.motorcycleInfo}>
                    <Text style={styles.category}>
                      {motorcycle.category.toUpperCase()}
                    </Text>

                    <Text style={styles.motorcycleName}>
                      {motorcycle.name}
                    </Text>

                    <View style={styles.priceRow}>
                      <View>
                        <Text style={styles.priceLabel}>STARTING AT</Text>
                        <Text style={styles.price}>
                          €{motorcycle.price.toLocaleString("en-IE")}
                        </Text>
                      </View>

                      <TouchableOpacity
                        style={styles.viewButton}
                        onPress={() =>
                          navigation.navigate("MotorcycleDetails", {
                            motorcycle,
                          })
                        }
                        activeOpacity={0.8}
                      >
                        <Text style={styles.viewButtonText}>VIEW BIKE</Text>
                        <Text style={styles.viewButtonArrow}> →</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </Swiper>
          </View>
        )}

        <TouchableOpacity
          style={styles.allMotorcyclesButton}
          onPress={() => navigation.navigate("Motorcycles")}
          activeOpacity={0.8}
        >
          <Text style={styles.allMotorcyclesText}>
            BROWSE ALL MOTORCYCLES
          </Text>
          <Text style={styles.allMotorcyclesArrow}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLine} />

        <Text style={styles.footerBrand}>
          MOTO<Text style={styles.headingAccent}>HOUSE</Text>
        </Text>

        <Text style={styles.footerSlogan}>
          BUILT FOR THE LOVE OF RIDING.
        </Text>

        <TouchableOpacity
          style={styles.aboutButton}
          onPress={() => navigation.navigate("About")}
          activeOpacity={0.8}
        >
          <Text style={styles.aboutButtonText}>ABOUT MOTOHOUSE →</Text>
        </TouchableOpacity>

        <Text style={styles.copyright}>
          © MotoHouse. Find your next ride.
        </Text>
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
    paddingBottom: 24,
    alignItems: "center",
  },

  // Introduction
  intro: {
    width: "100%",
    maxWidth: 900,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
  },
  eyebrow: {
    color: "#e63946",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 3,
    marginBottom: 12,
  },
  heading: {
    color: "#ffffff",
    fontSize: 38,
    fontWeight: "900",
    letterSpacing: 1,
    lineHeight: 43,
  },
  headingAccent: {
    color: "#e63946",
  },
  description: {
    color: "#aaaaaa",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
    maxWidth: 420,
  },

  // Carousel
  carouselSection: {
    width: "100%",
    maxWidth: 900,
    paddingHorizontal: 20,
  },
  carouselHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionLabel: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  swipeHint: {
    color: "#888888",
    fontSize: 10,
    letterSpacing: 1,
  },
  carousel: {
    height: 510,
    backgroundColor: "#181818",
    borderRadius: 8,
    overflow: "hidden",
  },
  slide: {
    flex: 1,
    paddingBottom: 34,
  },
  imageContainer: {
    height: 285,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  motorcycleImage: {
    width: "100%",
    height: "100%",
  },
  imageCounter: {
    position: "absolute",
    right: 14,
    top: 14,
    backgroundColor: "#101010",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  imageCounterText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  motorcycleInfo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    justifyContent: "center",
  },
  category: {
    color: "#e63946",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 6,
  },
  motorcycleName: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 14,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceLabel: {
    color: "#888888",
    fontSize: 9,
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  price: {
    color: "#ffffff",
    fontSize: 21,
    fontWeight: "bold",
  },
  viewButton: {
    backgroundColor: "#e63946",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  viewButtonText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  viewButtonArrow: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },

  // Browse all
  allMotorcyclesButton: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#444444",
    paddingVertical: 16,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  allMotorcyclesText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  allMotorcyclesArrow: {
    color: "#e63946",
    fontSize: 17,
    marginLeft: 12,
  },

  // Footer
  footer: {
    width: "100%",
    maxWidth: 900,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 38,
    paddingBottom: 12,
  },
  footerLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#303030",
    marginBottom: 24,
  },
  footerBrand: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 2,
  },
  footerSlogan: {
    color: "#888888",
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 8,
  },
  aboutButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 14,
  },
  aboutButtonText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  copyright: {
    color: "#666666",
    fontSize: 10,
    marginTop: 14,
  },
});
