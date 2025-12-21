import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../constants/Colors";

const Header = ({ headerText }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>{headerText}</View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.primaryGreen,
  },
});
