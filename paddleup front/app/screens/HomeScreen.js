import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/Colors";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header headerText={"Hello World"} />
    </SafeAreaView>
  );
};

export default HomeScreen;
