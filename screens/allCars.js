import { useNavigation, useRoute } from "@react-navigation/native"
import { Image } from "react-native"
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Pressable, ScrollView } from "react-native"
import StarReview from "react-native-stars"
import Icon from 'react-native-vector-icons/Ionicons'
import VerticalList from "../components/verticalList"

const AllCars = () => {
    const route = useRoute()
    const navigation = useNavigation()
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
        reviews: {
            width: '100%',
            marginRight: 12,
            borderRadius: 15,
            marginBottom: 10,
            
          },
          first: {
            flexDirection: 'row',
            gap: 8,
          },
          reviewImage: {
            width: 42,
            height: 42,
            borderRadius: 50
          },
          info: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 3,
            alignItems: 'flex-start',
            height: 42,
          },
          reviewName: {
            fontSize: 12,
            fontWeight: '600',
            marginRight: 5,
            alignSelf: 'flex-end'
          },
          reviewDate: {
            fontSize: 12.5,
          },
          review: {
            marginTop: 8,
            fontSize: 15,
          },
    })
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
    <View style={[styles.header]}>
                        <Pressable onPress={async ()=>{
                            navigation.goBack()
                            }}>
                            <View style={styles.goBack}>
                                <Icon name='arrow-back' size={23}/>
                            </View>
                        </Pressable>
                        <Text style={styles.title}>{route.params.title}</Text>
                        
                    <View></View>
                </View>
            <ScrollView style={{flex: 1}}>
            <View style={{marginTop: 110}}>
                <VerticalList data={route.params.data}/>
            </View>
            </ScrollView>
        </View>
    )
}
export default AllCars