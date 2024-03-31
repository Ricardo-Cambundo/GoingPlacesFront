import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { useNavigation } from "@react-navigation/native"
import { Text, View, StyleSheet, Pressable, TouchableWithoutFeedback, TouchableOpacity, Animated } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import ProfileInfo from "./profileInfo"
import ProfileReviews from "./profileReviews"
import ProfileListing from "./profileListing"
import ProfileTab from "../navigators/profileTab"
const Tab = createMaterialTopTabNavigator()
const MyProfile = () => {
    const navigation = useNavigation()
    const styles = StyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            boxSizing: 'border-box',
            paddingHorizontal: 10,
            
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
                    <Text style={styles.title}>Perfil</Text>
                    
                   <View></View>
            </View>
            <ProfileTab />
        </View>
    )
}
export default MyProfile