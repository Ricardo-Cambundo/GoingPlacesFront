import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/home"
import Search from "../screens/search"
import Icon from 'react-native-vector-icons/Ionicons'
import SearchStack from "./searchStack"
import { useEffect } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import HomeStack from "./homeStack"
import Drawer from "./drawer"
import InboxStack from "./inboxStack"
import TripStack from "./tripStack"

const Tab = createBottomTabNavigator()

const TabNav = () => {
    const navigation = useNavigation()
    
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            
        }}>
            <Tab.Screen options={{
                
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if(focused){
                        iconName = 'home'
                    }else {
                        iconName = 'home-outline'
                    }
                    return <Icon name={iconName} size={22} color={focused ? '#007bee' : 'black'}/>
                }
            }} 
            name='HomeDrawer' component={Drawer}/>
            <Tab.Screen options={{
                
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if(focused){
                        iconName = 'search'
                    }else {
                        iconName = 'search-outline'
                    }
                    return <Icon name={iconName} size={22} color={focused ? '#007bee' : 'black'}/>
                },
                
            }}
            name='search' component={SearchStack} />

            <Tab.Screen options={{
                
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if(focused){
                        iconName = 'car'
                    }else {
                        iconName = 'car-outline'
                    }
                    return <Icon name={iconName} size={24} color={focused ? '#007bee' : 'black'}/>
                },
                
            }}
            name='tripStack' component={TripStack} />

            <Tab.Screen options={{
                
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if(focused){
                        iconName = 'chatbox'
                    }else {
                        iconName = 'chatbox-outline'
                    }
                    return <Icon name={iconName} size={22} color={focused ? '#007bee' : 'black'}/>
                },
                
            }}
            name='inboxStack' component={InboxStack} />

        </Tab.Navigator>
    )
}
export default TabNav