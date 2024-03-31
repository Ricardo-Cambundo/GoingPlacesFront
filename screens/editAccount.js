import { StackActions, useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useRef, useState } from "react"
import { StyleSheet, View, Text, Pressable, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Modal, FlatList } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import AddImage from "./addImage"
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import api, { baseURL } from "../navigators/axios"
const EditAccount = () => {
    const navigation = useNavigation()
    
    const route = useRoute()
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
        image:  {
            width: 130, 
            height: 130,
            alignSelf: 'center',
            borderRadius: 100,
            borderWidth: 5,
            borderColor: 'white',
            marginTop: 10
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
            fontSize: 13,
            fontWeight: '600',
            
            alignSelf: 'center'
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
        subTitle: {
            color: '#b3b3b3',
            fontWeight: '500',
            fontSize: 14,
        },
        
    })
    const usernameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const [username, setUsername] = useState(route.params.user.username)
    const [email, setEmail] = useState(route.params.user.email)
    const [phone, setPhone] = useState(JSON.stringify(route.params.user.phone_number) == 0 ? '': route.params.user.phone_number)
    const [password, setPassword] = useState("ricardo1610")
    const [usernameError, setUsernameError] = useState('x')
    const [emailError, setEmailError] = useState('x')
    const [phoneEror, setPhoneError] = useState('x')
    const [user, setUser] = useState()
    const [errors, setError] = useState([
    ])
    const [visible, setVisible] = useState(false)
    const [uri, setUri] = useState(null)
    const [timestamp, setTimestamp] = useState(Date.now())
    const validateUsername = () => {
        if (username == ''){
            setUsernameError('Nome de usuário é necessário.')
        }else if (username == route.params.user.username){
            
            setUsernameError('x')
        }
        else {
            // http://192.168.1.2:8000/api/username/ricardocmbd/
            if (username != route.params.user.username){
                api.get(`api/username/${username}/`)
                .then(res => {
                    console.log('suc')
                    setUsernameError('')
                })
                .catch(err => {
                    console.log('err', err)
                    let error = err.response.data.error == 'Account with this username already exists!' ? 'Já existe uma conta com este nome de usuário!' : 'Já existe uma conta com este email!'
                    setUsernameError(error)
                })
            }
        }
    }
    const validateEmail = () => {
        
        const r = /^[^\s]*@[a-z0-9.-]*\.[a-z]{2,6}$/
        if (email == ''){
            setEmailError('Email é necessário.')
        }else if (!r.test(email)){
            setEmailError('Formato de email inválido.')
        }
        else if (email == route.params.user.email){
            setEmailError('x')
        }else {
            if (email != route.params.user.email){
                api.get(`api/email_exists/${email}/`)
                .then(res => {
                    setEmailError('')
                })
                .catch(err => {
                    let error = err.response.data.error == 'Account with this username already exists!' ? 'Já existe uma conta com este nome de usuário!' : 'Já existe uma conta com este email!'
                    setEmailError(error)
                })
            }
        }
        
    }
    useEffect(() => {
        validateUsername()
        validateEmail()
        validatePhone()
        
    })
    const validatePhone = () => {
        
        if (phone == '' && route.params.user.phone_number > 0){
            setPhoneError('Número de telefone é necessário.')
        }else if (phone.length < 9 && route.params.user.phone_number > 0){
            setPhoneError('Número de telefone inválido.')
        }
        else if (phone == ''){
            setPhoneError('x')
        }else {
            setPhoneError('')
        }
        
    }
    
    const submit = async () => {
        await validateUsername()
        await validateEmail()
        await validatePhone()
        if (usernameError == '' && emailError == '' && phoneEror == ''){
            setError(['Só podes mudar um detalhe de cada vez. Por exemplo mude somente o nome de usuário, a seguir pressione o "continuar".'])
        }
        else if (usernameError == '' && emailError == 'x' && phoneEror == 'x'){
            navigation.dispatch(StackActions.push('editAccount1', {
                username: username,
                action: 'only username',
                user: route.params.user
            }))
        }else if (usernameError == 'x' && emailError == 'x' && phoneEror == 'x'){
            setError(["Não mudaste nada."])
        }else if (usernameError == 'x' && emailError == '' && phoneEror == 'x'){
            navigation.dispatch(StackActions.push('editAccount1', {
                email: email,
                action: 'only email',
                user: route.params.user
            }))
        }else if (usernameError == 'x' && emailError == 'x' && phoneEror == ''){
            console.log('lets go')
        }else if (usernameError == '' && emailError == ''){
            setError(['Só podes mudar um detalhe de cada vez, por exemplo mude somente o nome de usuário, a seguir pressione o "continuar".', 'Ou mude somente o email, a seguir pressione o "continuar".'])
        }
        
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={{flex: 1, backgroundColor: 'white'}}>
            <Modal visible={visible} animationType="slide">
                <AddImage user={route.params.user} uri={uri} setUri={setUri} profilepic={route.params.profilepic} setVisible={(bool) => {
                    setVisible(bool)
                }} />
            </Modal>
                <View style={[styles.header]}>
                        <Pressable onPress={async ()=>{
                            
                            uri != null && AsyncStorage.setItem('newImage', uri).then()
                            navigation.goBack()
                            }}>
                            <View style={styles.goBack}>
                                <Icon name='arrow-back' size={23}/>
                            </View>
                        </Pressable>
                        <Text style={styles.title}>Perfil</Text>
            
                       <View></View>
                </View>
                <View style={{paddingTop: 90, paddingHorizontal: 15, justifyContent: 'space-between', flex: 1}}>
                <View>
                    <TouchableOpacity onPress={() => {
                        setVisible(true)
                    }}>
                        <View>
                            {route.params?.profilepic == null && uri == null ? <Image source={require('../assets/propImages/blankprofile.jpg')} style={styles.image} />: <>
                            {
                                uri != null ? 
                                <Image style={styles.image} source={{uri: uri}}/>
                                :
                                <Image style={styles.image} source={{uri: `${baseURL}${route.params.profilepic}?${timestamp}`}}/>
                            }
                            </>}
                            <View style={{backgroundColor: '#ebebeb', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 150, borderColor: 'white', borderWidth: 5, alignSelf: 'center', transform: [{translateY: -40}, {translateX: 40}]}}>
                                <Icon size={18} style={{transform: [{translateX: 1}]}} name='create' color='#007bee'/>
                            </View>
                    
                    </View>
                    </TouchableOpacity>
                    <Text style={styles.subTitle}>Obs: Só podes mudar um detalhe de cada vez. Por exemplo mude somente o nome de usuário, a seguir pressione o "continuar".</Text>
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
                                    <Pressable onPress={() => emailRef.current.focus()}>
                                        <View style={styles.inputContainer}>
                                            <Icon style={styles.icon} name='mail-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Email</Text><TextInput keyboardType="email-address" ref={emailRef} style={styles.input} value={email} onChangeText={(value)=>setEmail(value)}/>
                                                </View>
                                        </View>
                                    </Pressable>
                                    <Pressable onPress={() => phoneRef.current.focus()}>
                                        <View style={styles.inputContainer}>
                                            <Icon style={styles.icon} name='call-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Telefone</Text><TextInput maxLength={9} keyboardType="phone-pad" ref={phoneRef} style={styles.input} value={phone} onChangeText={(value)=>setPhone(value)}/>
                                                </View>
                                        </View>
                                    </Pressable>
                                    <View style={styles.inputContainer}>
                                    <Icon style={styles.icon} name='lock-closed-outline' size={18}/><View style={{
                                        flexDirection: 'column',
                                        height: 40,
                                        borderLeftWidth: 1,
                                        borderLeftColor: '#e3e3e3',
                                        paddingLeft: 7,
                                        flex: 1
                                    }}>
                                        <Text style={styles.label}>Senha</Text><TextInput
                                        editable={false}
                                        secureTextEntry={true} keyboardType="" style={styles.input} value={password} onChangeText={(value) => setPassword(value)}/>
                                        </View>
                                        <TouchableOpacity style={styles.change} onPress={()=>{
                                            navigation.dispatch(StackActions.push('changePassword', {
                                                user: route.params.user
                                            }))
                                            // navigation.push('ChangePassword', {
                                            //     password: password,
                                            //     user: user
                                            // })
                                        }}>
                                            <Text style={styles.change}>Mudar</Text>
                                        </TouchableOpacity>
                                </View>
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
                            </View>
                            {phoneEror.length > 2 && <View style={styles.error}><Pressable onPress={() => setPhoneError('')}><Icon
                                        size={30} style={{
                                            marginRight: 5
                                        }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{phoneEror}</Text></View>}
                            {usernameError.length > 2 && <View style={styles.error}><Pressable onPress={() => setUsernameError('')}><Icon
                                        size={30} style={{
                                            marginRight: 5
                                        }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{usernameError}</Text></View>}
                                    {emailError.length > 2 && <View style={styles.error}><Pressable onPress={() => setEmailError('')}><Icon
                                        size={30} style={{
                                            marginRight: 5
                                        }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{emailError}</Text></View>}
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
export default EditAccount