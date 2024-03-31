import { StackActions, useNavigation, useRoute } from "@react-navigation/native"
import axios from "axios"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View, Pressable, Image, TouchableWithoutFeedback, TouchableOpacity, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import api from "../navigators/axios"
const Signup1 = () => {
    const navigation = useNavigation()
    const route = useRoute()
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
            fontSize: 17,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 15,
            alignSelf: 'center'
            },
        title1: {
            color: 'grey',
            alignSelf: 'center',
            fontSize: 14.5,
            textAlign: 'center'
        },
        image: {
            height: 190,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: 15,
            marginBottom: 10
        },
        text: {
            color: 'grey',
            fontSize: 14.5,
            marginTop: 5,
            textAlign: 'center'
        },
        button: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginTop: 40
        },
        button2: {
            backgroundColor: '#ff0077',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginBottom: 10
        },
        resend: {
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
        },
        button3: {
            flexDirection: 'row',
            height: 55,
            alignSelf: 'center'
        },
        side: {
            backgroundColor: '#0080009d',
            width: 6,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10
            
        },
        verified: {
            paddingLeft: 15,
            backgroundColor: !true ? '#4df7562f': '#aaffaf',
            justifyContent: 'center',
            width: '98%',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10
        },
        veri: {
            fontWeight: '400',
            fontSize: 14
        },
        button4: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginBottom: 10,
            marginTop: 25
        }
    })
    const [verified, setVeri] = useState(false)
    const [done, setDone] = useState('')
    const [id, setId] = useState(route.params.id)
    const checkValid = () => {
        
        api.get(`api/user/${id}/`)
        .then(res=> {
            setVeri(res.data.is_verified)
        })
        .catch(err => {
        })
        
        setTimeout(checkValid, 1000)
        }
    useEffect(() => {
        checkValid()
        return () => {
            clearTimeout(checkValid)
        }
    })
    const resend = () => {
        api.get(`api/resend/${id}/`)
        .then(res => {
            Alert.alert(
                'Email Reenviado',
                'Um novo email de verifação foi mandado.',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            
                        }
                    }
                ]
            )
        })
        .catch(err => {
            console.log('error', err)
        })
        
    }
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.header}>
                <Pressable onPress={()=>{
                                if (verified){
                                    clearTimeout(checkValid)

                    navigation.dispatch(StackActions.popToTop())
                                }else {
                                    api.delete(`api/delete_user/${id}/`)
                                    .then(res => {
                                        clearTimeout(checkValid)
                                        route.params.id = null
                                        navigation.dispatch(StackActions.popToTop())
                                    })
                                }
                }}>
                    <View style={styles.goBack}>
                        <Icon name='close-outline' size={23}/>
                    </View>
                </Pressable>
            </View>
            <View style={{flex: 1, paddingTop: 90, paddingHorizontal: 15}}>
            <Text style={styles.title}>Verificação de Email</Text>
            <Text style={styles.title1}>Você precisa verificar o seu email para completar o cadastro</Text>
            <Image style={styles.image} source={require('../assets/propImages/mail.png')}/>
            {!verified ? 
            <View style={{paddingHorizontal: 15}}>
            <Text style={styles.text}>Foi enviado um email para <Text style={{fontWeight: '700'}}>{route.params.email}</Text> com um link para verificar sua conta. Se você não recebeu o email depois de alguns minutos, você pode pressionar "Reenviar email".
            <Text style={{fontWeight: '700'}}>Se você sair desta tela sem concluir a verificação, você terá que criar um novo usuário novamente.</Text></Text>
    
                        <View style={styles.buttons}>
            <TouchableOpacity onPress={()=>resend()}>
                <View style={styles.button}><Text style={styles.resend}>Reenviar Email</Text></View>
            </TouchableOpacity>
    
                        </View>
        </View>:
        <View>
        <View style={styles.button3}><View style={styles.side}></View><View style={styles.verified}><Text style={styles.veri}>O seu endereço de email foi verificado com sucesso e a sua conta foi ativada.</Text></View></View>
        <Pressable onPress={()=>{
                        clearTimeout(checkValid)

            navigation.goBack()
            navigation.goBack()

            }}>
            <View style={styles.button4}><Text style={styles.resend}>Entrar</Text></View>
        </Pressable>
    </View>
            }
            </View>
            
        </View>
    )
}
export default Signup1