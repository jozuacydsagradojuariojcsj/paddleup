import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export default function SuccessfullyBookedScreen({ route }) {
  const coachName = route.params.coachName;
  const navigation = useNavigation();

  return (
    <SafeAreaView className="h-screen">
      <Header headerText={"BOOKING"} />
      <View className="h-2/3 flex-col justify-center items-center">
        <MaterialIcons name="check-circle-outline" size={150} />
        <View className="flex-col justify-evenly items-center">
          <Text className="pt-10 text-2xl font-bold items-center uppercase">
            BOOKED COACh {coachName}
          </Text>
          <Text className="text-2xl font-bold items-center pb-10">
            SUCCESSFULLY!
          </Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.replace("HomeScreen");
          }}
          className="w-[150px] h-[55px] bg-[#86B658] rounded-full items-center justify-center"
        >
          <Text className="text-2xl font-bold color-white">HOME</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
