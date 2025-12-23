import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { React, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/Colors";
import { Icon } from "@/components/ui/icon";
import { MenuIcon } from "lucide-react-native";
/* import Header from "../components/Header"; */

const HomeScreen = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <SafeAreaView>
      <View className="border border-green-600 flex h-1/3 w-full flex-row items-center justify-between p-5">
        <Pressable
          onPress={() => {
            console.log("WTF balik gihapon ta dre");
          }}
        >
          <Icon as={MenuIcon}></Icon>
        </Pressable>
        <Text>2</Text>
        <Text>3</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
