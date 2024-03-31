import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import MyProfile from "../screens/profileMan";
import { StyleSheet, Text, View, Image, Pressable, Switch } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { StackActions, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Settings from "../screens/settings";
import Promotions from "../screens/promotions";
import ProfileMan from "../screens/profileMan";
import ProfileStack from "./profileStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { baseURL } from "./axios";

const Draw = createDrawerNavigator()

const styles = StyleSheet.create({
    header: {
        marginBottom: 3,
        marginHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#dadada71',
        paddingBottom: 20
    },
    profilepic: {
        width: 55,
        height: 55,
        borderRadius: 100,
        backgroundColor: 'lightgrey',
    },
    username: {
        fontWeight: '600',
        fontSize: 17,
        marginTop: 25,
        flex: 1,
        color: '#5a5a5a'
    },
    drawerList: {
        borderBottomWidth: 2,
        borderBottomColor: '#dadada71',
        paddingBottom: 20
    },
    end: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 20,
        paddingVertical: 20
    }
})

const EndDrawerContent = (props) => {
    const [darkMode, setDarkMode] = useState(false)
    const [username, setUsername] = useState('Ricardo Cambundo')
    const navigation = useNavigation()
    const [profilepic, setProfile] = useState(null)
    const [user, setUser]= useState(null)
    const route = useRoute()
    const [timestamp, setTimestamp] = useState(Date.now())
    useFocusEffect(useCallback(() => {
        
        setTimestamp(Date.now())
    }, []))
    useEffect(() => {
        AsyncStorage.getItem('profilepic')
        .then(res => {
            setProfile(JSON.parse(res))
        })
        AsyncStorage.getItem('user')
        .then(res => {
            setUser(JSON.parse(res))
        })
    }, [])
    return (
        <DrawerContentScrollView {...props}>
            <View style={{paddingHorizontal: 10}}>
                <View style={styles.header}>
                    <View style={styles.profilepic}>
                        <Pressable onPress={()=>navigation.navigate('homeDrawer')}>
                        {profilepic == null ? <Image source={require('../assets/propImages/blankprofile.jpg')}  style={{width: 55, height: 55, borderRadius: 100}}/>:    <>
                {profilepic != null &&

                <Image key={3} style={{width: 55, height: 55, borderRadius: 100}}source={{uri: `${baseURL}${profilepic}?${timestamp}`}}/>
                }</>}
                            
                        </Pressable>
                    </View>
                    {username.length > 0 && <Text numberOfLines={1} ellipsizeMode="tail" style={styles.username}>{username}</Text>}
                </View>
                <View style={styles.drawerList}>
                    <DrawerItemList {...props}/>
                </View>
                <View style={styles.end}>
                    <Text style={{color: 'grey', fontWeight: '600', fontSize: 15}}>Modo Escuro</Text>
                    <Switch trackColor={{true: '#007bee', false: ''}} value={darkMode} onValueChange={(val) => {
                        setDarkMode(val)
                    }}/>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const Drawer = () => {
    return (
        <Draw.Navigator drawerContent={(props) => <EndDrawerContent {...props} />}>
            <Draw.Screen options={{
                headerShown: false,
                drawerItemStyle: {
                    display: "none"
                }
            }}  
            name='homeDrawer' component={HomeStack}/>
            <Draw.Screen options={{
                headerShown: false,
                drawerLabel: 'Perfil',
                drawerLabelStyle: {
                    fontSize: 17,
                    fontWeight: '600',
                    color: 'grey'
                },
                drawerItemStyle: {
                    justifyContent: 'center'
                },
                drawerIcon: () => {
                    return (
                        <View style={{backgroundColor: '#e7e7e7', padding: 9, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon style={{transform: [{translateY: 0}]}} name='person-outline' size={20} color='#007bee'/>
                        </View>
                    )
                },
                drawerItemStyle: {
                    backgroundColor: 'white'
                },
                swipeEnabled: false
            }}
            name='myprofile' component={ProfileStack}/>
            <Draw.Screen options={{
                
                drawerLabel: 'Definições',
                drawerLabelStyle: {
                    fontSize: 17,
                    fontWeight: '600',
                    color: 'grey'
                },
                drawerItemStyle: {
                    justifyContent: 'center'
                },
                drawerIcon: () => {
                    return (
                        <View style={{backgroundColor: '#e7e7e7', padding: 9, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon style={{transform: [{translateY: 0}]}} name='settings-outline' size={20} color='#007bee'/>
                        </View>
                    )
                },
                drawerItemStyle: {
                    backgroundColor: 'white'
                }
            }}
            name='settings' component={Settings}/>
            <Draw.Screen options={{
                
                drawerLabel: 'Promoções',
                drawerLabelStyle: {
                    fontSize: 17,
                    fontWeight: '600',
                    color: 'grey'
                },
                drawerItemStyle: {
                    justifyContent: 'center'
                },
                drawerIcon: () => {
                    return (
                        <View style={{backgroundColor: '#e7e7e7', padding: 9, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                        <Icon style={{transform: [{translateY: 0}]}} name='pricetags-outline' size={20} color='#007bee'/>
                        </View>
                    )
                },
                drawerItemStyle: {
                    backgroundColor: 'white'
                }
            }}
            name='promotions' component={Promotions}/>
        </Draw.Navigator>
    )
}
export default Drawer