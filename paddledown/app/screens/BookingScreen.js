import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
const Booking = () => {
  return (
    <SafeAreaView className="h-screen">
      <Header headerText={"BOOKING"} />

      <ScrollView
        className="p-4"
        contentContainerStyle={{
          paddingBottom: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-col">
          <Text>Coach</Text>
          <Text className="pl-4">Jed Juario</Text>
        </View>

        <View className="flex-col">
          <Text>Date</Text>
          <Text className="pl-4">Date Picker</Text>
        </View>

        <View className="flex-col">
          <Text>Choose Time</Text>
          <Text className="pl-4">Time Picker</Text>
        </View>

        <View className="flex-row justify-between items-center pt-5">
          <Pressable className="w-[150px] h-[55px] rounded-full flex-row bg-[#E03737] items-center justify-center">
            <Text className="text-lg font-medium color-white">CANCEL</Text>
          </Pressable>
           <Pressable className="w-[150px] h-[55px] rounded-full flex-row bg-[#86B658] items-center justify-center">
            <Text className="text-lg font-medium color-white">BOOK</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Booking;
