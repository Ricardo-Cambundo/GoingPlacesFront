import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CarInfo from "../screens/carInfo";
import Reviews from "../screens/reviews";
import { StyleSheet, Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator()

const CarSlider = () => {
    const styles = StyleSheet.create({
        tab: {
            fontWeight: '700',
            width: '200%',
            fontSize: 16,
            color: '#007bee'
        },
        tab2: {
            fontSize: 15,
            color: '#b9b9b9',
            fontWeight: '600'
        }
    })
    return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
            <Tab.Navigator screenOptions={{
                tabBarIndicatorStyle: {
                    height: 6,
                    borderRadius: 20,
                    width: '30%',
                    marginLeft: '8%',
                    backgroundColor: '#007bee',
            
                },
                tabBarContentContainerStyle: {
                    marginTop: -10
            
                },
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
                    }
                }}
                name='info' component={CarInfo}/>
                <Tab.Screen options={{
                    tabBarLabel: ({focused})=> {
                        if (focused) {
                            return (
                                <Text style={styles.tab}>Avaliações</Text>
                            )
                        }else {
                            return (
                                <Text style={styles.tab2}>Avaliações</Text>
                            )
                        }
                    }
                }}
                name='reviews' component={Reviews}/>
            </Tab.Navigator>
        </View>
    )
}
export default CarSlider