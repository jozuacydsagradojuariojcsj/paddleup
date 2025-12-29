import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import config from "../constants/api";

const Booking = ({ route }) => {
  const BASE_URL = config.API_URL;
  const { coachName, coachId } = route.params;
  const [coachNameState, setCoachName] = useState();
  const [coachIdState, setCoachId] = useState();
  const [accessToken, setAccessToken] = useState();
  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCoach = async () => {
      try {
        const token = await SecureStore.getItemAsync("accessToken");
        const userIdSecure = await SecureStore.getItemAsync("userId");
        const userNameSecure = await SecureStore.getItemAsync("userName");

        setUserId(userIdSecure);
        setUserName(userNameSecure);
        setAccessToken(token);

        if (!token) {
          navigation.navigate("Landing");
          return;
        }

        setCoachName(coachName);
        setCoachId(coachId);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCoach();
  });

  const client = axios.create({
    baseURL: BASE_URL,
  });

  const formattedDate = date.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleSumbit = async () => {
    try {
      const response = await client.post("/coach/bookCoach", {
        coachId: coachIdState,
        userId: userId,
        username: userName,
        date: formattedDate,
        time,
      });
      console.log("Data Sent:", response.data);

      navigation.replace("Success", { coachName: coachNameState });
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return (
    <>
      <SafeAreaView className="h-screen">
        <Header headerText={"BOOKING"} />

        <ScrollView
          className="p-4"
          contentContainerStyle={{
            paddingBottom: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-col justify-start p-5">
            <Text className="text-lg font-semibold">Choose Time:</Text>
            <View className="flex-row justify-evenly items-center pt-5">
              {/* 8AM - 1PM */}
              <Pressable
                className="w-[140px] h-[25px] rounded-full flex-row bg-[#45539D] items-center justify-center"
                onPress={() => setTime("8AM-10AM")}
              >
                <Text className="text-lg color-white font-semibold">
                  8AM-10AM
                </Text>
              </Pressable>
              <Pressable
                className="w-[140px] h-[25px] rounded-full flex-row bg-[#45539D] items-center justify-center"
                onPress={() => setTime("11AM-1PM")}
              >
                <Text className="text-lg color-white font-semibold">
                  11AM-1PM
                </Text>
              </Pressable>
            </View>

            {/* 2PM - 7PM */}
            <View className="flex-row justify-evenly items-center pt-5">
              <Pressable
                disabled={true}
                className="w-[140px] h-[25px] rounded-full flex-row bg-[#E03737] items-center justify-center"
                onPress={() => setTime("2PM-4PM")}
              >
                <Text className="text-lg color-white font-semibold">
                  2PM-4PM
                </Text>
              </Pressable>
              <Pressable
                className="w-[140px] h-[25px] rounded-full flex-row bg-[#45539D] items-center justify-center"
                onPress={() => setTime("5PM-7PM")}
              >
                <Text className="text-lg color-white font-semibold">
                  5PM-7PM
                </Text>
              </Pressable>
            </View>

            {/* 8PM - 10PM */}
            <View className="flex-row justify-evenly pt-5">
              <Pressable
                className="w-[140px] h-[25px] rounded-full flex-row bg-[#45539D] items-center justify-center"
                onPress={() => setTime("8PM-10PM")}
              >
                <Text className="text-lg color-white font-semibold">
                  8PM-10PM
                </Text>
              </Pressable>
            </View>
            <Text className="pt-5">Note: Red highlight means unavailable</Text>
          </View>

          <Text className="text-lg font-semibold pl-5">Choose Date</Text>
          <View className="flex-col items-center pt-10">
            <Pressable
              className="w-[150px] h-[55px] rounded-full flex-row bg-[#86B658] items-center justify-center"
              onPress={() => setShowDatePicker(true)}
            >
              <Text className="text-lg color-white font-semibold">
                Open Calendar
              </Text>
            </Pressable>

            {showDatePicker && (
              <DateTimePicker
                minimumDate={new Date()}
                value={date}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) setDate(selectedDate);
                }}
              />
            )}
          </View>
          <View className="flex-col items-center pt-10">
            <View className="items-start justify-start border border-black w-[250px] h-[250px] rounded-2xl p-5">
              <View className="flex-col pt-2">
                <Text className="text-xl">Coach:</Text>
                <Text className="text-xl pl-3">{coachNameState}</Text>
              </View>
              <View className="flex-col pt-5">
                <Text className="text-xl">Picked Date</Text>
                <Text className="text-xl pl-3">{formattedDate}</Text>
              </View>
              <View className="flex-col pt-5">
                <Text className="text-xl">Picked Time:</Text>
                <Text className="text-xl pl-3">{time}</Text>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center pt-10">
            <Pressable
              onPress={() => {
                navigation.navigate("Coach", { coachId: coachIdState });
              }}
              className="w-[150px] h-[55px] rounded-full flex-row bg-[#E03737] items-center justify-center"
            >
              <Text className="text-lg font-medium color-white">CANCEL</Text>
            </Pressable>
            <Pressable
              disabled={!coachNameState && !time && !date}
              onPress={() => {
                handleSumbit();
                console.log(
                  `coachId:${coachIdState} \n coachName:${coachNameState} \n userId:${userId} \n userName:${userName}`
                );
              }}
              className="w-[150px] h-[55px] rounded-full flex-row bg-[#86B658] items-center justify-center"
            >
              <Text className="text-lg font-medium color-white">BOOK</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Booking;
