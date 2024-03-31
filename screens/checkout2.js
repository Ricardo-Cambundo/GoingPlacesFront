import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation, useRoute } from "@react-navigation/native"
import axios from "axios"
import LottieView from "lottie-react-native"
import { useEffect, useRef, useState } from "react"
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard, Pressable, TouchableOpacity, FlatList, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import api from "../navigators/axios"
const Checkout2 = ({handleScroll, option, phone, discount, setDiscount, setPhone, total, extra, extraInfo, plan}) => {
    const route = useRoute()
    const naviagton = useNavigation()
    const styles = StyleSheet.create({
        
        inputContainer: {
            backgroundColor: '#f3f3f3',
            marginVertical: 10,
            padding: 10,
            
            borderRadius: 10,
            flexDirection: 'row',
            
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
        title1: {
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20,
            marginTop: 10
        },
        title: {
            fontSize: 14,
            fontWeight: '600',
            color: 'grey'
        },
        button: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginBottom: 10,
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
        info: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8,
            alignItems: 'flex-end'
        },
        info1: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8,
            alignItems: 'flex-end',
            backgroundColor: '#e9e9e9',
            paddingHorizontal: 5,
            paddingVertical: 10,
            borderRadius: 10
        },
        label1: {
            fontSize: 13,
            fontWeight: '500',
            color: '#969696',
            
        },
        value1: {
            fontSize: 14,
            fontWeight: '700',
            color: '#4b4b4b',
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
    const [errors, setError] = useState([])
    const phoneRef = useRef()
    const iniDate = new Date(route.params.iniDate)
    const finalDate = new Date(route.params.finalDate)
    const loadingRef = useRef(null)
    const [password, setPassword] = useState('')
    const passRef = useRef(null)
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    useEffect(()=> {
        loadingRef.current?.play(30, 120)
     }, [])
    const addTrip = () => {
         let obj = {
            client: route.params.user.id,
            car_owner: route.params.ownerId,
            images: null,
            data: {
                car: route.params.data,
                iniDate: route.params.iniDate,
                finalDate: route.params.finalDate,
                iniHour: route.params.iniHour,
                finalHour: route.params.finalHour,
                iniMinutes: route.params.iniMinutes,
                finalMinutes: route.params.finalMinutes,
                discount: parseInt(discount),
                local: null,
                days: route.params.days,
                discount: discount,
                total: total,
                messages: [],
                ownerPhone: phone,
                images: null,
                dateAdded: Date.now(),
                extraInfo: extraInfo,
                extras: extra,
                plan: plan

            }
        }
        api.post(`api/add_trip/`, obj)
        .then(res => {
            console.log('saved')
            handleScroll(3)
        })
    }
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={{flex: 1, backgroundColor: 'white', width: Dimensions.get('window').width, paddingTop: 110, paddingHorizontal: 15, justifyContent: 'space-between'}}>
               {
                option == '' ?
                <View>
                    <Text style={styles.title1}>Qual é o número de telefone associado a conta bancária que pretende usar para pagar?</Text>
                    <Pressable onPress={() => {
                                            phoneRef.current.focus()
                                        }}>
                                            <View style={styles.inputContainer}>
                                                <Icon style={styles.icon} name='call-outline' size={18}/><View style={{
                                                    flexDirection: 'column',
                                                    height: 40,
                                                    borderLeftWidth: 1,
                                                    borderLeftColor: '#e3e3e3',
                                                    paddingLeft: 7,
                                                    flex: 1
                                                }}>
                                                    <Text style={styles.label}>Contacto telefónico</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                                        <Text style={{marginRight: 7}}>(+244)</Text>
                                                        <TextInput
                                                        maxLength={9}
                                                        ref={phoneRef} style={styles.input} value={phone}
                                                        keyboardType="number-pad"
                                                        onChangeText={(value)=>setPhone(value)}/>
                                                    </View>
                                                </View>
                                            </View>
                                        </Pressable>
                                        <Text style={styles.title1}>Senha da sua conta no aplicativo GoingPlaces</Text>
                                        <Pressable onPress={() => {
                                        passRef.current.focus()
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
                                                <Text style={styles.label}>Senha atual</Text><TextInput ref={passRef}secureTextEntry={true} keyboardType="" style={styles.input} value={password} onChangeText={(value) => setPassword(value)}/>
                                                </View>
                                        </View>
                                    </Pressable>
                </View>
                :
                <View>
                </View>
               }
                <View style={{backgroundColor: 'white',
                        paddingHorizontal: 15, 
                        paddingVertical: 20,
                        borderRadius: 10,
                        shadowColor: 'black',
            shadowOpacity: 0.1,
            shadowRadius: 4,
            shadowOffset: {width: 0, height: 2},
            elevation: 1,
            marginVertical: 5
            }}>
                <View style={styles.info}>
                                <Text style={styles.label1}>Dias de aluguer</Text>
                                <Text style={styles.value1}>{route.params.days} dia{route.params.days > 1 ? 's' : ''}</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label1}>Data e hora de recolha</Text>
                                <Text style={styles.value1}>{iniDate.getDate()} {months[iniDate.getMonth()].length > 3 ? `${months[iniDate.getMonth()].slice(0, 3)}.` : months[iniDate.getMonth()]} {iniDate.getFullYear()} às {route.params.iniHour}h</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label1}>Data e hora de deixada</Text>
                                <Text style={styles.value1}>{finalDate.getDate()} {months[finalDate.getMonth()].length > 3 ? `${months[finalDate.getMonth()].slice(0, 3)}.` : months[finalDate.getMonth()]} {finalDate.getFullYear()} às {route.params.finalHour}h</Text>
                            </View>
                            <View style={styles.info1}>
                                <Text style={styles.label1}>Total</Text>
                                <Text style={styles.value1}>Kz. {parseInt(total).toLocaleString()}</Text>
                            </View>
            </View>
               {/* <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                <Text style={styles.title}>Total a pagar</Text>
                <View style={{flexDirection: 'row', gap: 10}}>
                    <Icon name='cash-outline' size={20} color='#007bee'/>
                    <Text style={{fontWeight: '600'}}>Kz. {parseInt(total).toLocaleString()}</Text>
                </View>
               </View> */}
               <FlatList data={errors} renderItem={(item) => {
                                        return (
                                        <View style={styles.error}><Pressable onPress={() => setError(errors.filter((err) => err != item.item))}><Icon
                                        size={30} style={{
                                            marginRight: 5
                                        }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{item.item}</Text></View>
                                        )
                                    }} />
               <TouchableOpacity onPress={() => {

                        AsyncStorage.getItem('password')
                        .then(res => {
                            if (JSON.parse(res) != password){
                                setError(['Senha incorrecta. Por favor tente novamente.'])
                            }else {
                                if (`${phone}`.length < 1) {
                                    setError(['O contacto telefónico é necessário!'])
                                }else if (`${phone}`.length >= 1 && `${phone}`.length < 9){
                                    setError(['Contacto telefónico inválido!'])
                                }else {
                                    setError([])
                                    Alert.alert(
                                        'Confirme mais uma vez',
                                        'Tem a certeza de que pretende prosseguir com o pagamento? Esta ação é irreversível e você será cobrado imediatamente.',
                                        [{
                                            text: 'Confirmo',
                                            onPress: ()=> {
                                                addTrip()
                                            }
                                        }, {
                                            text: 'Cancelar',
                                            onPress: ()=> {
                                            }
                                        }]
                                    )
                                }
                            }
                        })
                }}>
                    <View style={styles.button}>
                        <Text style={styles.save}>Connfirmar pagamento</Text>
                    </View>
                </TouchableOpacity>
                <LottieView
                resizeMode="contain"
                style={{
                    width: Dimensions.get('window').width,
                    height:300,
                    flex: 1,
                    alignSelf: 'center'
                }}
                source={require('../assets/loading1.json')}
                />
            </View>
        </TouchableWithoutFeedback>
        
    )
}
export default Checkout2