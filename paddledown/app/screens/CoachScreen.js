import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import config from "../constants/api";

const Coach = ({ route }) => {
  const BASE_URL = config.API_URL;
  const { coachId } = route.params;
  const navigation = useNavigation();
  const [coach, setCoach] = useState();
  const [accessToken, setAccessToken] = useState(null);
  const coachImages = {
    C123: require("../assets/coaches/jed.jpg"),
    C124: require("../assets/coaches/joshua.jpg"),
    C125: require("../assets/coaches/ian.jpg"),
  };

  const client = axios.create({
    baseURL: BASE_URL,
  });

  useEffect(() => {
    const fetchCoach = async () => {
      try {
        const token = await SecureStore.getItemAsync("accessToken");

        setAccessToken(token);

        if (!token) {
          navigation.navigate("Landing");
          return;
        }

        const response = await client.get(`coach/getOneCoach/${coachId}`);
        setCoach(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCoach();
  }, [coachId]);

  return (
    <>
      <SafeAreaView className="h-screen flex-col items-center justify-center">
        <Header headerText={"COACH"} />

        <ScrollView
          className="p-5"
          contentContainerStyle={{
            paddingBottom: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="items-center">
            <Image
              className="w-[125px] h-[125px] border border-black rounded-full"
              source={coachImages[coachId]}
            />
            <Text className="pt-2">{coach ? coach.name : "Loading..."}</Text>
          </View>
          <View className="flex-col pb-2">
            <Text className="text-lg font-semibold text-left">
              Achievements:
            </Text>
            <Text className="mt-2 text-base text-left pl-2">
              {coach ? coach.achievement1 : "Loading..."}
            </Text>
            <Text className="mt-2 text-base text-left pl-2">
              {coach ? coach.achievement2 : "Loading..."}
            </Text>
          </View>

          <View className="border bg-[#86B658] w-[320px] h-[120px] rounded-2xl flex-col p-3">
            <Text className="font-bold text-lg">RATES: (2 HOURS MINIMUM)</Text>
            <Text className="font-semibold text-md pl-4 pt-2">
              ~{coach ? coach.rate : "Loading..."}
            </Text>
            <Text className="font-semibold text-md pl-4 pt-2">
              ~{coach ? coach.rate2 : "Loading..."}
            </Text>
          </View>

          <View className="flex-col pt-5">
            <Text className="font-bold text-lg">Contact me at:</Text>
            <View className="flex-row pl-4 pt-2">
              <MaterialIcons name="email" size={25} />
              <Text className="font-semibold text-base pl-2">
                {coach ? coach.email : "Loading..."}
              </Text>
            </View>
            <View className="flex-row pl-4 pt-2">
              <MaterialIcons name="facebook" size={25} />
              <Text className="font-semibold text-base pl-2">
                {coach ? coach.facebook : "Loading..."}
              </Text>
            </View>
            <View className="flex-row pl-4 pt-2 pb-5">
              <MaterialIcons name="phone" size={25} />
              <Text className="font-semibold text-base pl-2">
                {coach ? coach.contact : "Loading..."}
              </Text>
            </View>
            <Pressable
              disabled={!coach}
              onPress={() => {
                navigation.navigate("Booking", {
                  coachName: coach.name,
                  coachId: coachId,
                });
                console.log(coach);
              }}
              className="w-[320px] h-[60px] rounded-full bg-[#86B658] flex-row items-center justify-center "
            >
              <Text className="text-lg color-white font-semibold">
                BOOK COACH NOW!
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Coach;
