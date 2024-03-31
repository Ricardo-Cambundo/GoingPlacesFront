import { useNavigation, useRoute } from "@react-navigation/native"
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import TripTab from "../navigators/tripTab"
import { useEffect } from "react"

const TripInfo = () => {
    const route = useRoute()
    const navigation = useNavigation()
    useEffect(() => {
        
    })
    const styles = StyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 95,
            alignItems: 'flex-end',
            boxSizing: 'border-box',
            paddingHorizontal: 10,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginBottom: 0,
            backgroundColor: 'white',
            zIndex: 1,
            paddingBottom: 5,
            ...Platform.select({
                android: {
                height: 100
                }
            }),
            },
        goBack: {
            width: 40, 
            height: 40, 
            borderRadius: 50,
            backgroundColor: 'white',
            elevation: 10,
            shadowColor: 'black',
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowOffset: {width: 0, height: 0},
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.8
            },
        title: {
            marginLeft: '-10%',
            fontSize: 17,
            marginBottom: 10,
            fontWeight: '800'
        },
        
    })
    useEffect(() => {
        navigation.getParent()?.setOptions({
          tabBarStyle: {
              display: 'none'
          }
      })
          navigation.getParent()?.getParent()?.setOptions({
              tabBarStyle: {
                  display: 'none'
              }
          })
          return () => {
            navigation.getParent()?.setOptions({
              tabBarStyle: {
                  display: 'flex'
              }
          })
              navigation.getParent()?.getParent()?.setOptions({
                  tabBarStyle: {
                      display: 'flex'
                  }
              })
          }
      }, [])
    return (

        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={[styles.header]}>
                    <Pressable onPress={async ()=>{
                        navigation.getParent()?.getParent()?.setOptions({
                            tabBarStyle: {
                                display: 'flex'
                            }
                        })
                        navigation.getParent()?.setOptions({
                          tabBarStyle: {
                              display: 'flex'
                          }
                      })
                        
                        navigation.goBack()
                        }}>
                        <View style={styles.goBack}>
                            <Icon name='arrow-back' size={23}/>
                        </View>
                    </Pressable>
                    <Text style={styles.title}>Viagem</Text>
                    
                   <View></View>
            </View>
            <View style={{flex: 1, paddingTop: 100}}>
                <TripTab />
            </View>
        </View>
    )
}
export default TripInfo