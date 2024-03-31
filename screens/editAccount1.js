import AsyncStorage from "@react-native-async-storage/async-storage"
import { StackActions, useNavigation, useRoute } from "@react-navigation/native"
import axios from "axios"
import { useRef, useState } from "react"
import { StyleSheet, View, Text, Pressable, TouchableOpacity, TouchableWithoutFeedback, TextInput, Keyboard, FlatList, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import api from "../navigators/axios"
const EditAccount1 = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const [errors, setErrors] = useState([])
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
        mainTitle: {
            color: 'black',
            fontWeight: '800',
            fontSize: 15,
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
        button: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginBottom: 10,
            marginHorizontal: 15
        },
        button2: {
            backgroundColor: '#ff0077',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 10
        },
        save: {
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
        },
        forgot: {
            color: '#2182ED',
            marginBottom: 5,
            alignSelf: 'center',
            fontWeight: '700',
            color: '#007bee'
        }
    })
    const pass = useRef()
    const [password, setPassword] = useState('')
    const submit = () => {
        AsyncStorage.getItem('password')
        .then(res => {
            if (password == JSON.parse(res)){
                setErrors([])
                if (route.params.action == 'only username'){
                    let obj = {...route.params.user}
                    api.post(`api/edit_user/${route.params.user.id}/`, {
                        ...obj,
                        "username": route.params.username
                    })
                    .then(res => {
                        AsyncStorage.setItem('user', JSON.stringify(res.data))
                        .then(res => {
                            Alert.alert(
                                'Salvo',
                                'As mudanças a tua conta foram guardadas.',
                                [
                                    {
                                        text: 'OK',
                                        onPress: () => {
                                            navigation.dispatch(StackActions.popToTop())
                                        }
                                    }
                                ]
                            )
                        })
                    })
                }else if (route.params.action == 'only email'){
                    let obj = {...route.params.user}
                    api.post(`api/edit_details1/${route.params.user.id}/`, {
                        email: route.params.email,
                        action: 'send',
                    })
                    .then(res => {
                        navigation.dispatch(StackActions.push('editAccount2', {
                            action: 'only email',
                            email: route.params.email,
                            user: route.params.user
                        }))
                    })
                }
            }else {
                setErrors(['Senha Incorrecta. Tente novamente.'])
            }
        })
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
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
                    <View style={{flex: 1, paddingHorizontal: 15, paddingTop: 120}}>
                    <Text style={styles.mainTitle}>Digite a senha da sua conta para continuar</Text>
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
                                        <TouchableOpacity onPress={() => {
                                            navigation.dispatch(StackActions.push('forgot', {
                                                user: route.params.user
                                            }))
                                        }}>
                                        <Text style={styles.forgot}>Esqueceu senha?</Text>
                                    </TouchableOpacity>
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
                    submit()
                }}>
                    <View style={styles.button}>
                        <Text style={styles.save}>Continuar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default EditAccount1