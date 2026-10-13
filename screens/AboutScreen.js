import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function AboutScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>OUR STORY</Text>

        <Text style={styles.heading}>
          MORE THAN{"\n"}
          <Text style={styles.accent}>A MACHINE.</Text>
        </Text>

        <Text style={styles.description}>
          MotoHouse is built around the passion for motorcycles,
          the freedom of the open road, and finding the right ride
          for every rider.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>WHAT WE BELIEVE</Text>

        <Text style={styles.sectionHeading}>Every ride has a story.</Text>

        <Text style={styles.body}>
          Choosing a motorcycle is about more than specifications.
          It's about your riding style, your goals, and the experience
          you want every time you hit the road.
        </Text>
      </View>

      <View style={styles.features}>
        <View style={styles.featureRow}>
          <Text style={styles.featureNumber}>01</Text>
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Explore the lineup</Text>
            <Text style={styles.featureDescription}>
              Browse motorcycles across different categories and styles.
            </Text>
          </View>
        </View>

        <View style={styles.featureRow}>
          <Text style={styles.featureNumber}>02</Text>
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Know the details</Text>
            <Text style={styles.featureDescription}>
              Compare prices, engine sizes, power, weight, and more.
            </Text>
          </View>
        </View>

        <View style={styles.featureRow}>
          <Text style={styles.featureNumber}>03</Text>
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>Find your style</Text>
            <Text style={styles.featureDescription}>
              Discover a motorcycle that fits the way you want to ride.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.cta}>
        <Text style={styles.ctaHeading}>READY TO FIND YOUR RIDE?</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Motorcycles")}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>EXPLORE MOTORCYCLES →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerLine} />

        <Text style={styles.footerBrand}>
          MOTO<Text style={styles.accent}>HOUSE</Text>
        </Text>

        <Text style={styles.footerText}>
          BUILT FOR THE LOVE OF RIDING.
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
    paddingBottom: 30,
    alignItems: "center",
  },
  hero: {
    width: "100%",
    maxWidth: 900,
    paddingHorizontal: 24,
    paddingTop: 35,
    paddingBottom: 35,
  },
  eyebrow: {
    color: "#e63946",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 3,
    marginBottom: 14,
  },
  heading: {
    color: "#ffffff",
    fontSize: 38,
    fontWeight: "900",
    lineHeight: 44,
    letterSpacing: 1,
  },
  accent: {
    color: "#e63946",
  },
  description: {
    color: "#aaaaaa",
    fontSize: 14,
    lineHeight: 23,
    marginTop: 16,
    maxWidth: 520,
  },
  section: {
    width: "100%",
    maxWidth: 900,
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderTopWidth: 1,
    borderTopColor: "#303030",
  },
  sectionLabel: {
    color: "#e63946",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 12,
  },
  sectionHeading: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  body: {
    color: "#aaaaaa",
    fontSize: 14,
    lineHeight: 23,
  },
  features: {
    width: "100%",
    maxWidth: 900,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#303030",
  },
  featureNumber: {
    color: "#e63946",
    fontSize: 15,
    fontWeight: "bold",
    width: 48,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 7,
  },
  featureDescription: {
    color: "#999999",
    fontSize: 13,
    lineHeight: 20,
  },
  cta: {
    width: "100%",
    maxWidth: 900,
    paddingHorizontal: 24,
    paddingTop: 35,
    paddingBottom: 30,
  },
  ctaHeading: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#e63946",
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  footer: {
    width: "100%",
    maxWidth: 900,
    paddingHorizontal: 24,
    alignItems: "center",
    paddingTop: 10,
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
  footerText: {
    color: "#777777",
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 8,
  },
});