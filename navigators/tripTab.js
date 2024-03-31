import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { StyleSheet, Text } from "react-native"
import TripDetails from "../screens/tripDetails"
import TripMessages from "../screens/TripMessages"
import { useCallback, useEffect, useState } from "react"
import { useFocusEffect, useRoute } from "@react-navigation/native"
import TripDetailsStack from "./tripDetailsStack"

const Tab = createMaterialTopTabNavigator()




const TripTab = () => {
    const route = useRoute()
    
   
     
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
            lazy: false,
            
            swipeEnabled: false,
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
                    lazy: false,
                    tabBarLabel: ({focused})=> {
                        if (focused) {
                            return (
                                <Text style={styles.tab}>Detalhes</Text>
                            )
                        }else {
                            return (
                                <Text style={styles.tab2}>Detalhes</Text>
                            )
                        }
                    },
                    
                
                }}
                name='tripDetails'
                >{() => {
        
                    return <TripDetails user={route.params?.user} data={route.params?.data} host={route.params?.host ? true: false} />
                }}</Tab.Screen>
                <Tab.Screen options={{
                    lazy: false,
                    
                    tabBarLabel: ({focused})=> {
                        if (focused) {
                            return (
                                <Text style={styles.tab}>Mensagens</Text>
                            )
                        }else {
                            return (
                                <Text style={styles.tab2}>Mensagens</Text>
                            )
                        }
                    },
                
                }}
                name='tripMessages' 
                >{() => {
        
                    return <TripMessages user={route.params?.user} data={route.params?.data} host={route.params?.host ? true: false} />
            
                }}</Tab.Screen>
        </Tab.Navigator>
    )
}
export default TripTab