import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PopularSlide from "../components/popularSlide";
import NewestSlide from "../components/NewestSlide";
import LuxurySlide from "../components/LuxurySlide";
import { StyleSheet, Text, ScrollView } from "react-native";
import { View } from "react-native";


const Tab = createMaterialTopTabNavigator()
const HomeSliderTab = () => {
    return (
            <View style={{height: 410}}>
            
                <Tab.Navigator screenOptions={{
                    tabBarIndicatorStyle: {
                        height: 6,
                        borderRadius: 20,
                        width: 90,
                        marginLeft: 24,
                        backgroundColor: 'white'
                    },
                    swipeEnabled: false,
                    tabBarContentContainerStyle: {
                        borderWidth: 0
                    },
            
            
            
                }}>
                    <Tab.Screen options={{

                        tabBarItemStyle: {
            
                        },
                        tabBarLabel: ({focused})=> {
                            if (focused) {
                                return (
                                    <Text style={styles.tab}>Popular</Text>
                                )
                            }else {
                                return (
                                    <Text style={styles.tab2}>Popular</Text>
                                )
                            }
                        }
                    }}
                    name='Popular' component={PopularSlide}/>
                    <Tab.Screen options={{
                        tabBarLabel: ({focused})=> {
                            if (focused) {
                                return (
                                    <Text style={styles.tab}>Recente</Text>
                                )
                            }else {
                                return (
                                    <Text style={styles.tab2}>Recente</Text>
                                )
                            }
                        }
                    }}
                    name='Newest' component={NewestSlide}/>
                    <Tab.Screen options={{
                        tabBarLabel: ({focused})=> {
                            if (focused) {
                                return (
                                    <Text style={styles.tab}>Luxo</Text>
                                )
                            }else {
                                return (
                                    <Text style={styles.tab2}>Luxo</Text>
                                )
                            }
                        }
                    }}
                    name='Luxury' component={LuxurySlide}/>
                </Tab.Navigator>
        </View>
    )
}
const styles = StyleSheet.create({
    tab: {
        fontWeight: '700',
        width: '200%',
        fontSize: 16,
        color: '#2e2e2e'
    },
    tab2: {
        fontSize: 15,
        color: '#b9b9b9',
        fontWeight: '600'
    }
})
export default HomeSliderTab