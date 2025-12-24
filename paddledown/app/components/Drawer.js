import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@/components/ui/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";
import { useRef } from "react";

const drawerItems = [
  {
    id: "HomeScreen",
    icon: <Ionicons name="home" size={20} />,
    text: "Homepage",
    path: "HomeScreen",
  },
  {
    id: "LoginScreen",
    icon: <MaterialIcons name="logout" size={20} />,
    text: "Logout",
    path: "LogIn",
  },
];

const Menu = ({ showDrawer, setShowDrawer }) => {
  const navigatingRef = useRef(false);

  const handleNavigate = (path) => {
    if (navigatingRef.current) return;

    navigatingRef.current = true;
    setShowDrawer(false);

    navigation.navigate(path);

    setTimeout(() => {
      navigatingRef.current = false;
    }, 300);
  };
  const navigation = useNavigation();

  return (
    <>
      <Drawer
        isOpen={showDrawer}
        size="md"
        anchor="left"
        onClose={() => {
          setShowDrawer(false);
        }}
      >
        <DrawerBackdrop onPress={() => setShowDrawer(false)} />
        <DrawerContent
          onPress={(e) => e.stopPropagation()}
          className="bg-[#B6E787] p-10 "
        >
          <DrawerHeader>
            <Text className="text-lg">Menu</Text>
          </DrawerHeader>
          <DrawerBody className="flex-column pt-10">
            {drawerItems.map((item) => (
              <Pressable
                key={item.id}
                className="flex-row items-center pt-3 pb-3"
                onPress={() => {
                  setShowDrawer(false);
                  navigation.navigate(item.path);
                }}
              >
                {item.icon}
                <Text className="pl-2 font-bold">{item.text}</Text>
              </Pressable>
            ))}
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
