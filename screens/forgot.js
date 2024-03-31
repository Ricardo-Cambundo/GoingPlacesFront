import { StackActions, useNavigation, useRoute } from "@react-navigation/native"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Pressable, Image, FlatList, TextInput, Keyboard } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

const Forgot = () => {
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
        mainTitle: {
            color: 'black',
            fontWeight: '800',
            fontSize: 18,
        },
        subTitle: {
            marginTop: 3,
            color: '#b3b3b3',
            fontWeight: '500',
            fontSize: 14,
            marginBottom: 10
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
            borderRadius: 10,
            
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
            fontSize: 18,
            fontWeight: '800'
        },
        forgot: {
            color: '#2182ED',
            marginBottom: 5,
            alignSelf: 'center',
            fontWeight: '700',
            color: '#007bee'
        }
    })
    const newP = useRef()
    const re = useRef()
    const [newPass, setNewPass] = useState('')
    const [newErr, setNewErr] = useState('')
    const [retype, setRetype] = useState('')
    const [reErr, setReErr] = useState('')
    const [errors, setError] = useState([
    ])
    const newPassValidation = () => {
        if (newPass.length <= 8){
            setNewErr('A nova senha é muito curta. Precisa de pelo menos 8 caractéres.')
        }else if (newPass != retype) {
            setNewErr('A nova senha não corresponde à senha de confirmação.')
        }else {
            setNewErr('')
        }
    }
    useEffect(() => {
        newPass.length > 0 && newPassValidation()
    })
    const submit = () => {
        if (newErr == ''){
            axios.get(`http://192.168.1.2:8000/api/email_verify_password1/${route.params.user.id}/`)
            .then(res => {
                navigation.dispatch(StackActions.push('forgot1', {
                    user: route.params.user,
                    new: newPass
                }))
            })
        }
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
                        <View style={{flex: 1, paddingTop: 120, paddingHorizontal: 15}}>
                        <View>
                            <Text style={styles.mainTitle}>Mudar Senha</Text>
                            <Text style={styles.subTitle}>Digite a sua nova senha</Text>
                            <Pressable onPress={() =>
                                            newP.current.focus()}>
                                                <View style={styles.inputContainer}>
                                                    <Icon style={styles.icon} name='lock-closed-outline' size={18}/><View style={{
                                                        flexDirection: 'column',
                                                        height: 40,
                                                        borderLeftWidth: 1,
                                                        borderLeftColor: '#e3e3e3',
                                                        paddingLeft: 7,
                                                        flex: 1
                                                    }}>
                                                        <Text style={styles.label}>Nova Senha</Text><TextInput ref={newP}  keyboardType="" secureTextEntry={true} style={styles.input} value={newPass} onChangeText={(value)=>setNewPass(value)}/>
                                                        </View>
                                                </View>
                                            </Pressable>
                                            <Pressable onPress={() => {
                                                re.current.focus()
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
                                                        <Text style={styles.label}>Confirmar nova senha</Text><TextInput ref={re} keyboardType="" secureTextEntry={true} style={styles.input} value={retype} onChangeText={(value)=>setRetype(value)}/>
                                                        </View>
                                                </View>
                                            </Pressable>
                                        </View>
                                        <View style={styles.errors}>
                                            <FlatList data={errors} renderItem={(item) => {
                                                return (
                                                <View style={styles.error}><Pressable onPress={() => setError(errors.filter((err) => err != item.item))}><Icon
                                                size={30} style={{
                                                    marginRight: 5
                                                }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{item.item}</Text></View>
                                                )
                                            }} />
                                            {newErr.length > 2 && <View style={styles.error}><Pressable onPress={() => setNewErr('')}><Icon
                                                    size={30} style={{
                                                        marginRight: 5
                                                    }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{newErr}</Text></View>}
                        </View>
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
export default Forgot