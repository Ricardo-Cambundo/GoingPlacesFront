import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import Login from "./login"
import MyProfile from "./myProfile"
import AsyncStorage from "@react-native-async-storage/async-storage"
const ProfileMan = () =>{
    const [log, setLog] = useState(false)
    const navigation = useNavigation()
    const get = () => {
        AsyncStorage.getItem('authTokens')
    .then(res => {
        setLog(res!== null && res!== undefined)
    })
    setTimeout(get, 1000)
    }
    useEffect(() => {
        get()
        return () => {
            clearTimeout(get)
        }
    })
    useEffect(() => {
        navigation.getParent().setOptions({
            tabBarStyle: {
                display: 'none'
            },
        })
        return () => {
            navigation.getParent().setOptions({
                tabBarStyle: {
                    display: 'flex'
                }
            })
        }
    })
    const styles = StyleSheet.create({
        
    })
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
           {
            log ? <MyProfile />
            :
            <Login />
           }
        </SafeAreaView>
    )
}
export default ProfileMan