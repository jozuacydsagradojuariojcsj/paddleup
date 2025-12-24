import { Entypo, Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import {
  Pressable,
  Text,
  View
} from "react-native";
import Menu from "./Drawer";
const Header = ({headerText}) => {

  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
    <View className="bg-[#86B658] h-1/6 min-w-full flex-row items-center justify-between p-5">
        <Pressable
          onPress={() => {
            setShowDrawer(true);
            console.log("WTF balik gihapon ta dre");
          }}
          
        >
          <Ionicons name="menu" size={30} color={"#FFFFFF"}/>
          
        </Pressable>
        <Text className='text-lg font-bold text-white'>{headerText}</Text>
        <Entypo name='circle' size={30} color={"#FFFFFF"}/>
      </View>

      <Menu showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </>
      
  );
};

export default Header;
