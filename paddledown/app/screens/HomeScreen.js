import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const HomeScreen = () => {

    const navigation = useNavigation();

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
        <SafeAreaView className="h-screen flex-col flex-1">
            <Header headerText={"HOME"}/>
             <View className="border border-black h-full">
                <Text className="text-xl font-bold p-8">
                    Coaches
                </Text>
                <View className="border border-green-600 bg-[#86B658] w-full h-[325px] flex-row items-center">
                <FlatList 
                className="min-h-full"
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={coachMockData}
                keyExtractor={(item) => item.coachId}
                renderItem={({item}) => (
                    <View className="pr-2 pl-2 flex-col items-start justify-center min-h-full">
                        <View className="h-[175px] w-[200px] border border-red-600 flex-col"></View>
                        <View className="flex-row justify-between w-full p-2"> 
                            <Text className="text-sm font-medium color-white">{item.name}</Text>
                            <Text className="text-sm font-medium color-white">{item.stars} <Ionicons name="star"/></Text>
                        </View>
                        <Pressable className="border border-black bg-white min-h-6 min-w-[150px] rounded-full items-center" onPress={() => {
                            navigation.navigate("Coach")
                        }}>
                            <Text className="text-sm">More Information</Text>
                        </Pressable>
                    </View>
                )}>
                </FlatList>
                </View>
            </View>
        </SafeAreaView>
        </>
    )

}

export default HomeScreen;