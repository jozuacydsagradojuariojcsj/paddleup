import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Pressable,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@env";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [accessToken, setAccessToken] = useState(null);
  const [coaches, setCoaches] = useState();
  const [books, setBooks] = useState();
  const [coachName, setCoachName] = useState();

  const coachImages = {
    C123: require("../assets/coaches/jed.jpg"),
    C124: require("../assets/coaches/joshua.jpg"),
    C125: require("../assets/coaches/ian.jpg"),
  };

  const client = axios.create({
    baseURL: BASE_URL,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1️⃣ Get token from SecureStore
        const token = await SecureStore.getItemAsync("accessToken");

        // Save to state
        setAccessToken(token);

        // Redirect if no token
        if (!token) {
          navigation.navigate("Landing");
          return;
        }

        // 2️⃣ Fetch data using token
        const response = await client.get("/coach/getCoach", {
          headers: {
            accessToken: token, // <-- use token variable, NOT state
          },
        });

        // 3️⃣ Save data
        setCoaches(response.data);
        // axios returns parsed JSON in response.data
      } catch (e) {
        console.error("Internal Server Error:", e);
      }
    };

    fetchData();
  }, []);

  const refreshBookings = async () => {
    try {
      const userId = await SecureStore.getItemAsync("userId");
      const response = await client.get(`/coach/getBookUser/${userId}`);

      if (response) {
        setBooks(response.data[0].bookings);
        setCoachName(response.data[0].coachName);

        console.log("Response Data:", response.data[0].coachName);
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return (
    <>
      <SafeAreaView className="h-screen flex-col flex-1">
        <Header headerText={"HOME"} />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-xl font-bold p-3"></Text>
          <View className="border border-green-600 bg-[#86B658] w-full h-[325px] flex-col items-start">
            <Text className="text-2xl font-bold pt-2 pl-2 pb-0 color-white">
              Coaches:
            </Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={coaches}
              keyExtractor={(item) => item.coachId}
              renderItem={({ item }) => (
                <View className="pr-2 pl-2 flex-col items-start justify-center min-h-full">
                  <Image
                    className="h-[175px] w-[200px] rounded-2xl bg-cover"
                    source={coachImages[item.coachId]}
                  />

                  <View className="flex-row justify-between w-[200px] p-2">
                    <Text className="text-sm font-medium color-white">
                      {item.name}
                    </Text>
                    <Text className="text-sm font-medium color-white">
                      {item.stars} <Ionicons name="star" />
                    </Text>
                  </View>
                  <Pressable
                    className="border border-black bg-white min-h-6 min-w-[150px] rounded-full items-center"
                    onPress={() => {
                      navigation.navigate("Coach", { coachId: item.coachId });
                    }}
                  >
                    <Text className="text-sm">More Information</Text>
                  </Pressable>
                </View>
              )}
            ></FlatList>
          </View>
          <View className="h-full border border-red-600 p-3 pt-5">
            <View className="flex-row justify-between">
              <Text className="text-2xl font-semibold">Bookings:</Text>
              <Pressable
                onPress={() => {
                  refreshBookings();
                }}
              >
                <Ionicons name="refresh" size={25} />
              </Pressable>
            </View>
            <View className="h-1/2 flex-col">
              <View className="flex-col p-2 pt-3">
                <Text className="text-xl">Coach:</Text>
                <Text className="text-xl pl-3">
                  {coachName ? coachName : "No Bookings"}
                </Text>
              </View>
              <View className="flex-col p-2 pt-3">
                <Text className="text-xl">Date:</Text>
                <Text className="text-xl pl-3">
                  {books?.[0]?.date ?? "No Bookings"}
                </Text>
              </View>
              <View className="flex-col p-2 pt-3">
                <Text className="text-xl">Time:</Text>
                <Text className="text-xl pl-3">
                  {books?.[0]?.time ?? "No Bookings"}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
