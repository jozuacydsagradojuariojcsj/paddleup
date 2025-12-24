import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const Coach = () => {
  const coachMockData = [
    {
      coachId: "C123",
      name: "Jed Juario",
      stars: 4.9,
      achievement1: "2 years of competetive pickleball experience",
      achievement2: "3x Champion (Centrio, Ayala Picklemall CDO, Kibawe)",
      rate: "350/HR/Person",
      rate2: "250/HR/Person if 4PAX Above",
      email: "juariojedcyrus@gmail.com",
      facebook: "Jed Cyrus Sagrado Juario",
      contact: "09269673682",
      booking: [],
    },
    {
      coachId: "C124",
      name: "Joshua Manlangit",
      stars: 4.9,
      achievement1: "2 years of competetive pickleball experience",
      achievement2: "3x Champion (Centrio, Ayala Picklemall CDO, Kibawe)",
      rate: "350/HR/Person",
      rate2: "250/HR/Person if 4PAX Above",
      email: "joshuamanlangit@gmail.com",
      facebook: "Joshua Manlangit",
      contact: "09269673682",
      booking: [],
    },
    {
      coachId: "C125",
      name: "Ian Malacaman",
      stars: 4.9,
      achievement1: "2 years of competetive pickleball experience",
      achievement2: "3x Champion (Centrio, Ayala Picklemall CDO, Kibawe)",
      rate: "350/HR/Person",
      rate2: "250/HR/Person if 4PAX Above",
      email: "ianmalacaman@gmail.com",
      facebook: "Ian Malacaman",
      contact: "09269673682",
      booking: [],
    },
  ];

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
            <View className="w-[125px] h-[125px] border border-black rounded-full"></View>
            <Text className="pt-2">Jed Juario</Text>
          </View>
          <View className="flex-col">
            <Text className="text-lg font-semibold text-left">
              Achievements:
            </Text>
            <Text className="mt-2 text-base text-left pl-2">
              2 years of competetive pickleball experience
            </Text>
            <Text className="mt-2 text-base text-left pl-2">
              3x Champion (Centrio, Ayala Picklemall CDO, Kibawe)
            </Text>
          </View>

          <View className="border bg-[#86B658] w-[320px] h-[120px] rounded-2xl flex-col p-3">
            <Text className="font-bold text-lg">RATES: (2 HOURS MINIMUM)</Text>
            <Text className="font-semibold text-md pl-4 pt-2">
              ~350/HR/PERSON
            </Text>
            <Text className="font-semibold text-md pl-4 pt-2">
              ~250/HR/PERSON
            </Text>
          </View>

          <View className="flex-col pt-5">
            <Text className="font-bold text-lg">Contact me at:</Text>
            <View className="flex-row pl-4 pt-2">
              <MaterialIcons name="email" size={25}/>
              <Text className="font-semibold text-base pl-2">
                juariojedcyrus@gmail.com
              </Text>
            </View>
            <View className="flex-row pl-4 pt-2">
              <MaterialIcons name="facebook" size={25}/>
              <Text className="font-semibold text-base pl-2">
                Jed Cyrus Juario
              </Text>
            </View>
            <View className="flex-row pl-4 pt-2 pb-5">
              <MaterialIcons name="phone" size={25}/>
              <Text className="font-semibold text-base pl-2">
                09269673682
              </Text>
            </View>
            <View className="w-[320px] h-[60px] rounded-full bg-[#86B658] flex-row items-center justify-center">
                <Text className="text-lg color-white">BOOK COACH NOW!</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Coach;
