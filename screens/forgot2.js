import { useNavigation } from "@react-navigation/native"
import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { useEffect, useRef, useState } from "react"
import Icon from 'react-native-vector-icons/Ionicons'
import axios from "axios"

const Forgot2 = () => {
    const navigation = useNavigation()
    
    const usernameRef = useRef()
    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState('x')
    const [newPass, setNewPass] = useState('')
    const [retype, setRetype] = useState('')
    const newP = useRef()
    const re = useRef()
    const [newErr, setNewErr] = useState('')
    const validateUsername = () => {
        if (username == ''){
            setUsernameError('Nome de usuário é necessário.')
        }else {
            setUsernameError('')
        }
    }
    
    const passwordValidation = ()=> {
        if (password.length == 0){
            setPassErr('A senha é necessária.')
        }else {
            setPassErr('')
        }
    }
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
    
    useEffect(()=> {
        validateUsername()
    }, [username])
    const next = () => {
        
        if (usernameError == '' && newErr == ''){
            console.log('passe')
            axios.get(`http://192.168.1.2:8000/api/search_user/${username}/`)
            .then(res => {
                let user1 = res.data
                
                axios.get(`http://192.168.1.2:8000/api/email_verify_password1/${res.data.id}/`)
            .then(res => {
                navigation.navigate('forgot1', {
                    user: user1,
                    new: newPass,
                    email: user1.email
                })
            })
            })
            .catch(err => {
                let error = err.response.data.error == 'Account with this username does not exist!' && 'Conta com este nome de usuário não existe!'
                    setUsernameError(error)
            })
        }else {
            console.log(usernameError)
        }
    }
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
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
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
                        <Text style={styles.mainTitle}>Esqueceu Senha?</Text>
                        <Text style={styles.subTitle}>Qual é o nome de usuário da sua conta?</Text>
                        <Pressable onPress={() => {
                                    usernameRef.current.focus()
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
                                            <TextInput ref={usernameRef} style={styles.input} value={username} onChangeText={(value)=>setUsername(value)}/>
                                        </View>
                                    </View>
                                </Pressable>
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
                                                    <Text style={styles.label}>Nova senha</Text><TextInput ref={newP}  keyboardType="" secureTextEntry={true} style={styles.input} value={newPass} onChangeText={(value)=>setNewPass(value)}/>
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
                                                    <Text style={styles.label}>Confirmar senha</Text><TextInput ref={re} keyboardType="" secureTextEntry={true} style={styles.input} value={retype} onChangeText={(value)=>setRetype(value)}/>
                                                    </View>
                                            </View>
                                        </Pressable>
                                {usernameError?.length > 2 && <View style={styles.error}><Pressable onPress={() => setUsernameError('')}><Icon
                                                size={30} style={{
                                                    marginRight: 5
                                                }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{usernameError}</Text></View>}
                                                {newErr.length > 2 && <View style={styles.error}><Pressable onPress={() => setNewErr('')}><Icon
                                                size={30} style={{
                                                    marginRight: 5
                                                }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{newErr}</Text></View>}
                                                
                    </View>
                    <TouchableOpacity onPress={()=>next()}>
                                    <View style={styles.button}><Text style={styles.save}>Continuar</Text></View>
                    </TouchableOpacity>
            
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Forgot2
