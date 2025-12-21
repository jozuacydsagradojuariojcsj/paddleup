import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants/Colors";

const LOGO_IMAGE = require("../../app/assets/images/logo.png");

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.authContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backArrow}>{"<"}</Text>
      </TouchableOpacity>

      <Image source={LOGO_IMAGE} style={styles.logoAuth} />
      <Text style={styles.authTitle}>Get started with your account</Text>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity
        style={[styles.button, styles.mainAuthButton]}
        onPress={() => console.log("Sign Up Pressed")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.authLinkText}>
        Already have an account?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("Landing")}
        >
          Log in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    padding: 30,
    backgroundColor: COLORS.white,
    alignItems: "center",
    paddingTop: 80,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
    zIndex: 10,
  },
  backArrow: {
    fontSize: 24,
    color: COLORS.darkText,
  },
  logoAuth: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 15,
  },
  authTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.darkText,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    padding: 15,
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  mainAuthButton: {
    backgroundColor: COLORS.primaryGreen,
    width: "100%",
    marginTop: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  authLinkText: {
    marginTop: 20,
    fontSize: 16,
    color: COLORS.darkText,
  },
  link: {
    color: COLORS.primaryGreen,
    fontWeight: "bold",
  },
});

export default SignUpScreen;
