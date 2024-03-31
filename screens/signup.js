import { StackActions, useNavigation } from "@react-navigation/native"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { StyleSheet, Text, View, Pressable, TouchableWithoutFeedback, TouchableOpacity, Image, TextInput, FlatList, Keyboard, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import api from '../navigators/axios'
const Signup = () => {
    
    const navigation = useNavigation()
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
            marginBottom: 10,
            
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
    const user = useRef()
    const conf = useRef()
    const mail = useRef()
    const pass = useRef()
    const full = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirm, setConfirm] = useState('')
    const [usernameError, setUsernameError] = useState('x')
    const [passwordError, setPasswordError] = useState('x')
    const [emailError, setEmailError] = useState('x')
    const [confirmError, setConfirmError] = useState('x')
    const [fullName, setFullName] = useState('')
    const [fullError, setFullError] = useState('x')
    const [p, setP] = useState(false)
    const [errors, setError] = useState([
        
    ])
    const validateFull = () => {
        if (fullName == ''){
            setFullError('Primeiro e último nome necessários.')
        }else if (fullName.split(/\s(?=\S)/ig).length < 2) {
            setFullError('Segundo nome necessário')
        }else if (fullName.split(/\s(?=\S)/ig).length > 2) {
            setFullError('Só o primeiro e último nome são necessários.')
        }else {
            setFullError('')
        }
    }
    const validateUsername = () => {
        if (username == ''){
            setUsernameError('Nome de usuário é necessário.')
        }else {
            setUsernameError('')
        }
    }
    const validateEmail = () => {
        
        const r = /^[^\s]*@[a-z0-9.-]*\.[a-z]{2,6}$/
        if (email == ''){
            setEmailError('Email é necessário.')
        }else if (!r.test(email)){
            setEmailError('Formato de email inválido.')
        }else {
            setEmailError('')
        }
        
    }
    const validatePassword = () => {
        if (password == ''){
            setPasswordError('Senha é necessária.')
        }else if (password.length < 8){
            setPasswordError('A senha precisa de pelo menos 8 caractéres')
        }else {
            setPasswordError('')
        }
         
    }

    const validateConfirm = () => {
        if (confirm != password){
            setConfirmError('A senha não corresponde à senha de confirmação.')
            
        }else {
            setConfirmError('')
        }
        
    }
    useEffect(() => {
        setP(usernameError == '' && emailError == '' && passwordError == '' && confirmError == '' && fullError == '')
        console.log(p)
    })
    useEffect(() => {
        validateFull()
        validateUsername()
        validateEmail()
        validatePassword()
        validateConfirm()
        
    })
    const signup = () => {
        Keyboard.dismiss()
        validateFull()
        validateUsername()
        validateEmail()
        validatePassword()
        validateConfirm()
        if (usernameError == '' && emailError == '' && passwordError == '' && confirmError == '' && fullError == ''){
            let words = fullName.split(' ')
            let caps = words.map(word => word.charAt(0).toUpperCase()+word.slice(1))
            let fname = caps.join(' ')
            api.post(`api/signup/`, {
                "username": username,
                "email": email,
                "password": password,
                "fullname": fname
            })
            .then(res => {
                console.log('submited')
                navigation.dispatch(StackActions.push('signup1', {'email': email, 'id': res.data.user_data.id}))
            })
            .catch(err => {
                console.log(err)
                let error = err.response.data.error == 'Account with this username already exists!' ? 'Já existe uma conta com este nome de usuário!' : 'Já existe uma conta com este email!'
                setError([error])
            })
        }
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                        <ScrollView style={{flex: 1, ...Platform.select({
                            android: {
                                marginTop: 80
                            },
                            ios: {
                                marginTop: 40
                            }
                        })}}>
                            {/* <View style={{width: '100%', height: 100, marginTop: 0}}>
                                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/propImages/goingplacestitle.png')}/>
                            </View> */}
                            <View style={{paddingHorizontal: 20, paddingBottom: 50, marginTop: 40}}>
                            <Text style={styles.title}>Criar Conta </Text>
                            <Pressable onPress={()=> {
                            full.current.focus()
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
                                            <Text style={styles.label}>Primeiro e último nome</Text>
                                            <TextInput ref={full} style={styles.input} value={fullName} onChangeText={(value)=>setFullName(value)}/>
                                        </View>
                                    </View>
                        </Pressable>
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
                                            <Text style={styles.label}>Nome de usuário</Text>
                                            <TextInput ref={user} style={styles.input} value={username} onChangeText={(value)=>setUsername(value)}/>
                                        </View>
                                    </View>
                        </Pressable>
                        <Pressable onPress={()=> {
                            mail.current.focus()
                        }}>
                            <View style={styles.inputContainer}>
                                    <Icon style={styles.icon} name='mail-outline' size={18}/><View style={{
                                        flexDirection: 'column',
                                        height: 40,
                                        borderLeftWidth: 1,
                                        borderLeftColor: '#e3e3e3',
                                        paddingLeft: 7,
            
                                        flex: 1
            
                                    }}>
                                        <Text style={styles.label}>Email</Text><TextInput ref={mail} keyboardType="email-address" style={styles.input} value={email} onChangeText={(value)=>setEmail(value)}/>
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
                                <Pressable onPress={()=> {
                                    conf.current.focus()
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
                                            <Text style={styles.label}>Confirmar Senha</Text><TextInput ref={conf} secureTextEntry={true} keyboardType="" style={styles.input} value={confirm} onChangeText={(value) => setConfirm(value)}/>
                                            </View>
            
                                    </View>
                                </Pressable>
                                <View style={styles.errors}>
                                {fullError.length > 2 && <View style={styles.error}><Pressable onPress={() => setFullError('')}><Icon
                                        size={30} style={{
                                            marginRight: 5
                                        }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{fullError}</Text></View>}
                                {usernameError.length > 2 && <View style={styles.error}><Pressable onPress={() => setUsernameError('')}><Icon
                                        size={30} style={{
                                            marginRight: 5
                                        }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{usernameError}</Text></View>}
                                    {emailError.length > 2 && <View style={styles.error}><Pressable onPress={() => setEmailError('')}><Icon
                                        size={30} style={{
                                            marginRight: 5
                                        }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{emailError}</Text></View>}
                                        {passwordError.length > 2 && <View style={styles.error}><Pressable onPress={() => setPasswordError('')}><Icon
                                        size={30} style={{
                                            marginRight: 5
                                        }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{passwordError}</Text></View>}
                                        {confirmError.length > 2 && <View style={styles.error}><Pressable onPress={() => setConfirmError('')}><Icon
                                        size={30} style={{
                                            marginRight: 5
                                        }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{confirmError}</Text></View>}
                                    <FlatList data={errors} renderItem={(item) => {
                                        return (
                                        <View style={styles.error}><Pressable onPress={() => setError(errors.filter((err) => err != item.item))}><Icon
                                        size={30} style={{
                                            marginRight: 5
                                        }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{item.item}</Text></View>
                                        )
                                    }} />
                                </View>
                                
                            </View>
                            
            
                        </ScrollView>
                    {p &&    <View style={{marginHorizontal: 15}}>
                            <TouchableOpacity onPress={() => signup()}>
                            <View style={styles.button2}><Text style={styles.save}>Continuar</Text></View>
                            </TouchableOpacity>
                        </View>}
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Signup