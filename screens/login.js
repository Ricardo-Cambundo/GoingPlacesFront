import AsyncStorage from "@react-native-async-storage/async-storage"
import { StackActions, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"
import axios from "axios"
import { decode } from "base-64"
import {jwtDecode} from "jwt-decode"
import { useCallback, useEffect, useRef, useState } from "react"
import { View, Text, StyleSheet, Pressable, SafeAreaView, Image, Platform, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import api from "../navigators/axios"
const Login = () =>{
    const navigation = useNavigation()
    const route = useRoute()
    useEffect(() => {
        
    })
    const user = useRef()
    const pass = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setError] = useState([])
    const styles = StyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            boxSizing: 'border-box',
            paddingHorizontal: 10,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginBottom: 0,
            backgroundColor: 'white',
            zIndex: 100,
            paddingBottom: 7,
            ...Platform.select({
                android: {
                    height: 95
                }
            })
            },
        goBack: {
            width: 40, 
            height: 40, 
            borderRadius: 50,
            backgroundColor: 'white',
            elevation: 4,
            shadowColor: 'black',
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowOffset: {width: 0, height: 0},
            justifyContent: 'center',
            alignItems: 'center',
            },
        title: {
            fontSize: 24,
            fontWeight: '900',
            color: '#003e77'
        },
        inputContainer: {
            backgroundColor: '#f3f3f3',
            marginVertical: 10,
            padding: 10,
            
            borderRadius: 10,
            flexDirection: 'row'
        },
        input: {
            fontSize: 15,
            fontWeight: '500'
        },
        icon: {
            transform: [{translateY: 6}],
            marginRight: 7,
            color: '#2182ED',
    
        },
        label: {
            color: 'grey',
            fontSize: 14,
            marginBottom: 2
        },
        change: {
            color: '#2182ED',
            fontSize: 15,
            fontWeight: '600',
            
            alignSelf: 'center'
        },
        button: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
        },
        button2: {
            backgroundColor: '#ff0077',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
        },
        save: {
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
        },
        error: {
            backgroundColor: true ? '#ff3d1f2d': '#fd7864',
            marginVertical: 5,
            paddingHorizontal: 5,
            flexDirection: 'row',
            height: 55,
            paddingTop: 10,
            paddingBottom: 5,
            borderRadius: 10
            
            
        },
        message: {
            width: '90%',
            marginTop: -10,
            alignSelf: 'center'
        },
        dont: {
            color: false ? '#dadada': 'grey',
            textAlign: 'center',
            marginVertical: 10
        },
        dont1: {
            color: false ? '#dadada': 'grey',
            textAlign: 'center',
            marginVertical: 15,
            marginTop: 4
        }
        
    })
    useFocusEffect(useCallback(() => {
        setError([])
    }, []))
    const login = () => {
        api.post('api/token/', {
            "username": username,
            "password": password
        })
        .then(res => {
            let tokens = res.data
            console.log(res.data)
            setError([])

            const parts = `${res.data.access}`.split('.')
            
            let user = JSON.parse(decode(parts[1]))
        
        api.get(`api/user/${user.user_id}/`)
        .then(res => {
            console.log('success')
            user = res.data
            let set = async () => {
                await AsyncStorage.setItem('password', JSON.stringify(password))
                await AsyncStorage.setItem('authTokens', JSON.stringify(tokens))
                await AsyncStorage.setItem('user', JSON.stringify(res.data))
                await AsyncStorage.setItem('profilepic', JSON.stringify(res.data.profilepic))
            }
            set()
            if (route.params.justLogin){
                navigation.dispatch(StackActions.pop())
            }
        })
    })
    .catch(err => {
        console.log(err.response.data)
        let detail = err.response?.data?.detail == 'No active account found with the given credentials' && "Nenhuma conta ativa encontrada com as credenciais fornecidas. Tente novamente ou cadastre-se."
        let user = err.response?.data?.username
        let pass = err.response?.data?.password
        user && !(errors.includes(user[0])) && setError([...user, ...errors])

        pass && !(errors.includes(pass[0])) && setError([...pass, ...errors])

        detail && !(errors.includes(detail)) && setError([detail, ...errors])
    })
            
         
    
        
    }
    const signup = () => {
        navigation.dispatch(StackActions.push('signup'))
    }
    return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
            }}>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <View style={styles.header}>
                        <Pressable onPress={()=>{
                            navigation.getParent().setOptions({
                                tabBarStyle: {
                                    display: 'flex'
                                }
                            })
                            navigation.goBack()
                        }}>
                            <View style={styles.goBack}>
                                <Icon name='close-outline' size={23}/>
                            </View>
                        </Pressable>
                
                    </View>
                    <View style={{flex: 1, ...Platform.select({
                        android: {
                            marginTop: 80
                        },
                        ios: {
                            marginTop: 40
                        }
                    })}}>
                        <View style={{width: '100%', height: 100, marginTop: 0}}>
                            <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/propImages/goingplacestitle.png')}/>
                        </View>
                        <View style={{paddingHorizontal: 20, paddingBottom: 50, marginTop: 50}}>
                        <Text style={styles.title}>Iniciar Sessão </Text>
                        <Pressable onPress={()=> {
                            user.current.focus()
                        }}>
                            <View style={styles.inputContainer}>
                                        <Icon style={styles.icon} name='person-outline' size={18}/><View style={{
                                            flexDirection: 'column',
                                            height: 40,
                                            borderLeftWidth: 1,
                                            borderLeftColor: '#e3e3e3',
                                            paddingLeft: 7,
                                            flex: 1
                                        }}>
                                            <Text style={styles.label}>Nome de Utilizador</Text>
                                            <TextInput ref={user} style={styles.input} value={username} onChangeText={(value)=>setUsername(value)}/>
                                        </View>
                                    </View>
                        </Pressable>
                        <Pressable onPress={()=> {
                                pass.current.focus()
                            }}>
                                <View style={styles.inputContainer}>
                                    <Icon style={styles.icon} name='lock-closed-outline' size={18}/><View style={{
                                        flexDirection: 'column',
                                        height: 40,
                                        borderLeftWidth: 1,
                                        borderLeftColor: '#e3e3e3',
                                        paddingLeft: 7,
                                        flex: 1
                                    }}>
                                        <Text style={styles.label}>Senha</Text><TextInput ref={pass} secureTextEntry={true} keyboardType="" style={styles.input} value={password} onChangeText={(value) => setPassword(value)}/>
                                        </View>
            
                                </View>
                            </Pressable>
                            <View style={styles.errors}>
            
            <FlatList data={errors} renderItem={(item) => {
                return (
                <View style={styles.error}><Pressable onPress={() => setError(errors.filter((err) => err != item.item))}><Icon
                size={30} style={{
                    marginRight: 5
                }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{item.item}</Text></View>
                )
            }} />
        </View>
        <TouchableOpacity onPress={() => {
            navigation.dispatch(StackActions.push('forgot2'))
                    }}>
                        <Text style={[styles.dont1]}>Esqueceu Senha?</Text>
                    </TouchableOpacity>
        <TouchableOpacity onPress={(e) => login(e)}>
                        <View style={styles.button}><Text style={styles.save}>Entrar</Text></View>
                    </TouchableOpacity>
                    <Text style={styles.dont}>ou</Text>
                    <TouchableOpacity onPress={() => signup()}>
                        <View style={styles.button2}><Text style={styles.save}>Cadastrar-me</Text></View>
                    </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
    )
}
export default Login