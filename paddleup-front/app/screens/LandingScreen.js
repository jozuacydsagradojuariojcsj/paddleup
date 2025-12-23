import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants/Colors";
import { useState } from "react";
import axios from "axios";

const LOGO_IMAGE = require("../assets/images/logo.png");
const client = axios.create({
  baseURL: "http://192.168.1.17:3000",
});

const LogInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /*  const [userData, setUserData] = useState({
    userId: "",
    username: "",
  }); */

  const handleLogin = async () => {
    console.log("Sending login data:", { identifier: username, password });

    try {
      const response = await client.post("/user/login", {
        identifier: username,
        password,
      });

      console.log("Full response:", response.data);

      const { token } = response.data; // extract token
      console.log("Token:", token);

      navigation.navigate("HomeScreen");
    } catch (e) {
      if (e.response) {
        // Backend responded with error status (401, 400, etc.)
        console.error("Login failed:", e.response.data);
      } else if (e.request) {
        // Network error
        console.error("No response from server:", e.request);
      } else {
        console.error("Error:", e.message);
      }
    }
  };

  return (
    <View style={styles.authContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backArrow}>{"<"}</Text>
      </TouchableOpacity>

      <Image source={LOGO_IMAGE} style={styles.logoAuth} />
      <Text style={styles.authTitle}>Welcome Back!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email/Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.button, styles.mainAuthButton]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.authLinkText}>
        Don't have an account?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>
          Sign Up
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

export default LogInScreen;
