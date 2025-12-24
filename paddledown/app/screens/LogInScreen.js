import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants/Colors";

// Replace with your actual image paths
const LOGO_IMAGE = require("../assets/images/logo.png");
const BACKGROUND_IMAGE = require("../assets/images/background.png");

const windowHeight = Dimensions.get("window").height;

const LandingScreen = ({ navigation }) => {
  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={styles.landingBackground}>
      <View style={styles.landingOverlay} />
      <View style={styles.landingContent}>
        {/* Logo and Subtitle */}
        <View style={styles.landingHeader}>
          <Image source={LOGO_IMAGE} style={styles.logoLanding} />
          <Text style={styles.landingSubtitle}>
            Your first serve to a better game
          </Text>
        </View>
        {/* Buttons */}
        <View style={styles.landingButtons}>
          <TouchableOpacity
            style={[styles.button, styles.logInButton]}
            onPress={() => navigation.navigate("Landing")}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.signUpButton]}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  landingBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  landingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  landingContent: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingTop: windowHeight * 0.1,
    paddingBottom: 50,
    zIndex: 1,
  },
  landingHeader: {
    alignItems: "center",
  },
  landingButtons: {
    alignItems: "center",
  },
  landingSubtitle: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "700",
  },
  logoLanding: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  logInButton: {
    backgroundColor: COLORS.primaryGreen,
    opacity: 0.9,
  },
  signUpButton: {
    backgroundColor: COLORS.primaryGreen,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LandingScreen;
