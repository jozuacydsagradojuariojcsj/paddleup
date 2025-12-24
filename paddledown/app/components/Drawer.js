import {
    Drawer,
    DrawerBackdrop,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader
} from '@/components/ui/drawer';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {
    Pressable,
    Text
} from "react-native";

const drawerItems = [
    {
        id:"HomeScreen",
        icon:<Ionicons name='home' size={20}/>,
        text:"Homepage",
        path:"HomeScreen",
    },
    {
        id:"About",
        icon:<Ionicons name='information-circle-outline' size={20}/>,
        text:"About",
        path:"About",
    },
    {
        id:"Settings",
        icon:<Ionicons name='settings-outline' size={20}/>,
        text:"Settings",
        path:"Settings",
    },
    {
        id:"LoginScreen",
        icon:<MaterialIcons name='logout' size={20}/>,
        text:"Logout",
        path:"LogIn",
    }
]


const Menu = ({showDrawer, setShowDrawer}) => {

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
        <DrawerBackdrop />
        <DrawerContent className='bg-[#B6E787]'>
          <DrawerHeader>
            <Text className='text-lg'>Menu</Text>
          </DrawerHeader>
          <DrawerBody className='flex-column pt-5'>
            {drawerItems.map((item) => (
                <Pressable key={item.id} className='flex-row items-center pb-3' onPress={() => {
                    setShowDrawer(false);
                    navigation.navigate(item.path);
                }}>
                    {item.icon}
                    <Text className='pl-2 font-bold'>{item.text}</Text>
                </Pressable>
            ))}
          </DrawerBody>
          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
    )

}

export default Menu;