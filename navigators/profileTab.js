import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileListing from "../screens/profileListing";
import ProfileReviews from "../screens/profileReviews";
import ProfileInfo from "../screens/profileInfo";
import { StyleSheet, Text } from "react-native";
import ReviewsStack from "./profileStack";
import Favorites from "../screens/favorites";

const Tab = createMaterialTopTabNavigator()
const ProfileTab = () => {
    const styles = StyleSheet.create({
        tab: {
            color: '#007bee',
            fontWeight: '700',
            width: '200%',
            height: '150%',
            fontSize: 14
        },
        tab2: {
            fontSize: 15,
            color: '#b3b3b3'
        }
    })
    return (
        <Tab.Navigator screenOptions={{
            tabBarIndicatorContainerStyle: {
                backgroundColor: 'white'
            },
            tabBarStyle: {
                // backgroundColor: !isDarkMode ? 'white': 'black',
                marginTop: -10
            },
            tabBarIndicatorStyle: {
                backgroundColor: '#007bee',
                height: 6,
                //37% 20%
                width: 60,
                marginLeft: '3.45%',
                borderRadius: 20,
            }
        }}>
                <Tab.Screen options={{
                    tabBarLabel: ({focused})=> {
                        if (focused) {
                            return (
                                <Text style={styles.tab}>Info</Text>
                            )
                        }else {
                            return (
                                <Text style={styles.tab2}>Info</Text>
                            )
                        }
                    },
                
                }}
                name='Info' component={ProfileInfo}
                />
                <Tab.Screen options={{
                    tabBarLabel: ({focused})=> {
                        if (focused) {
                            return (
                                <Text style={styles.tab}>Avalições</Text>
                            )
                        }else {
                            return (
                                <Text style={styles.tab2}>Avalições</Text>
                            )
                        }
                    },
                
                }}
                name='Avalições' component={ProfileReviews}
                />
                <Tab.Screen options={{
                    tabBarLabel: ({focused})=> {
                        if (focused) {
                            return (
                                <Text style={styles.tab}>Listagem</Text>
                            )
                        }else {
                            return (
                                <Text style={styles.tab2}>Listagem</Text>
                            )
                        }
                    },
                
                }}
                name='Listagem' component={ProfileListing}
                />
                <Tab.Screen options={{
                    tabBarLabel: ({focused})=> {
                        if (focused) {
                            return (
                                <Text style={styles.tab}>Favoritos</Text>
                            )
                        }else {
                            return (
                                <Text style={styles.tab2}>Favoritos</Text>
                            )
                        }
                    },
                
                }}
                name='Favoritos' component={Favorites}
                />
        </Tab.Navigator>
    )
}
export default ProfileTab