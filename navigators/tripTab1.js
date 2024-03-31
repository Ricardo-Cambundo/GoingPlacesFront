import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { StyleSheet, Text } from "react-native"
import TripDetails from "../screens/tripDetails"
import TripMessages from "../screens/TripMessages"
import MyTrips from "../screens/myTrips"
import TripClients from "../screens/tripClients"

const Tab = createMaterialTopTabNavigator()

const TripTab1 = () => {
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
                marginLeft: '4%',
            }
        }}>
            <Tab.Screen options={{
                    tabBarLabel: ({focused})=> {
                        if (focused) {
                            return (
                                <Text style={styles.tab}>Minhas Viagens</Text>
                            )
                        }else {
                            return (
                                <Text style={styles.tab2}>Minhas Viagens</Text>
                            )
                        }
                    },
                
                }}
                name='myTrips' component={MyTrips}
                />
                <Tab.Screen options={{
                    tabBarLabel: ({focused})=> {
                        if (focused) {
                            return (
                                <Text style={styles.tab}>Clientes</Text>
                            )
                        }else {
                            return (
                                <Text style={styles.tab2}>Clientes</Text>
                            )
                        }
                    },
                
                }}
                name='tripClients' component={TripClients}
                />
        </Tab.Navigator>
    )
}
export default TripTab1