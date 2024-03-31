import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Text } from "react-native";

import Faq from "../screens/faq";
import Contact from "../screens/contact";

const Tab = createMaterialTopTabNavigator()
const HelpTab = () => {
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
                width: '40%',
                borderRadius: 20,
                marginLeft: '4%'
            }
        }}>
                <Tab.Screen options={{
                    tabBarLabel: ({focused})=> {
                        if (focused) {
                            return (
                                <Text style={styles.tab}>FAQ</Text>
                            )
                        }else {
                            return (
                                <Text style={styles.tab2}>FAQ</Text>
                            )
                        }
                    },
                
                }}
                name='Info' component={Faq}
                />
                <Tab.Screen options={{
                    tabBarLabel: ({focused})=> {
                        if (focused) {
                            return (
                                <Text style={styles.tab}>Contacte-nos</Text>
                            )
                        }else {
                            return (
                                <Text style={styles.tab2}>Contacte-nos</Text>
                            )
                        }
                    },
                
                }}
                name='Avalições' component={Contact}
                />
                
        </Tab.Navigator>
    )
}
export default HelpTab