import AsyncStorage from "@react-native-async-storage/async-storage"
import { StackActions, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"
import { useCallback, useEffect, useState } from "react"
import { Text, View, StyleSheet, Image, TouchableOpacity, Switch, Alert, ScrollView, Modal } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import AddImage from "./addImage"
import { LinearGradient } from "expo-linear-gradient"
import { baseURL } from "../navigators/axios"
const ProfileInfo = () => {
    const route = useRoute()
    const styles = StyleSheet.create({
        image: {
            width: 110, 
            height: 110,
            alignSelf: 'center',
            borderRadius: 100,
            borderWidth: 5,
            borderColor: '#ebebeb',
            marginTop: 10
        },
        name: {
            fontSize: 18,
            fontWeight: '700',
        },
        function: {
            marginTop: 5,
            color: '#b3b3b3',
            fontSize: 14,
            fontWeight: '500'
        },
        seeAll: {
            fontWeight: '700',
            color: '#007bee',
            textAlign:'right',
            paddingHorizontal: 10
          },
          desc: {
            color: 'grey',
            fontSize: 14,
            marginTop: 16,
            paddingHorizontal: 10
          },
          option: {
            flexDirection: 'row',
            marginTop: 25
          },
          chevron: {
            flex: 1,
            textAlign: 'right',
            alignSelf: 'center',
            fontSize: 23,
            color: '#007bee'
          },
          optionIcon: {
            color: '#007bee',
            fontSize: 17,
            marginTop: 2
          },
          optionTexts: {
            gap: 3,
            marginLeft: 14
          },
          optionLabel: {
            fontWeight: '600',
            fontSize: 16,
            
          },
          optionDesc: {
            color: '#b3b3b3',
            fontSize: 13
          },
          title1: {
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20,
            paddingHorizontal: 10
        },
    })
    const [textOverflowed, setTextOver] = useState(false)
    const [seeAll, setSeeAll] = useState(null)
    const navigation = useNavigation()
    
    const handleTextLayout = (e) => {
        if (e.nativeEvent.lines.length >= 5){
            setTextOver(true)
        }
    }
    const [notis, setNotis] = useState(true)
    const logout = () => {
        Alert.alert(
            'Logout',
            `Tem certeza de que deseja sair de ricardocmbd?`,
            [
                {
                    text: 'Cancelar',
                    onPress: () => {
                        console.log('No pressed!')
                    }
                },
                {
                    text: 'Log out',
                    onPress: async ()=>{
                        await AsyncStorage.multiRemove(['authTokens', 'user', 'password', 'profilepic'])
                        navigation.goBack()
                        
                        
                    }
                    ,
                    style: 'destructive'
                }
            ]
        )
    }
    const [user, setUser] = useState({})
    const [profilepic, setProfile] = useState(null)
    useEffect(() => {
        AsyncStorage.getItem('user')
        .then(res => {
            
            setUser(JSON.parse(res))
            console.log(user.drivers_license)
            
        })
        AsyncStorage.getItem('profilepic')
        .then(res => {
            setProfile(JSON.parse(res))
            console.log('profilepic', profilepic)
        })
    }, [])
    const [timestamp, setTimestamp] = useState(Date.now())
    //the obj of this useeffect is to force a re fetch of the image every time the image has been changed
    useFocusEffect(useCallback(() => {
        setTimestamp(Date.now())
        AsyncStorage.getItem('user')
        .then(res => {
            console.log(res)
            setUser(JSON.parse(res))
        })
    }, []))
    
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
            
            <View style={{flexDirection: 'row', gap: 15}}>
                <View>
                {profilepic == null ? <Image source={require('../assets/propImages/blankprofile.jpg')} style={styles.image}/>:    <>
                {route.params?.newImage != null ?
                <Image style={styles.image} source={{uri: route.params?.newImage}}/>:

                <Image key={3} style={styles.image} source={{uri: `${baseURL}${profilepic}?${timestamp}`}}/>
                }</>}
                            <View style={{flexDirection: 'row', backgroundColor: 'white', width: 80, justifyContent: 'center', paddingVertical: 3, borderRadius: 50, marginTop: -20, marginLeft: -6, alignSelf: 'center', elevation: 2,  shadowColor: 'black', alignItems: 'center',
                                        shadowOffset: {width: 1, height: 2},
                                        shadowRadius: 4,
                                        shadowOpacity: 0.1,}}>
                                                  <Icon style={{marginLeft: -5}} name='star' size={20} color='#007bee'/>
                                                  <Text style={{color: '#808080d7', marginLeft: 5, fontSize: 16, fontWeight: '700',}}>4.0</Text>
                                              </View>
                </View>
                        <View style={{marginTop: 20,}}>
                            <Text style={styles.name}>{user.fullname}</Text>
                            <Text style={styles.function}>Condutor</Text>
                        </View>
            </View>
            <Text style={styles.title1}>Info verificada</Text>
                            <View style={{gap: 14, paddingHorizontal: 10}}>
                                <TouchableOpacity onPress={() => {
                                    navigation.dispatch(StackActions.push('approve', {
                                        user: user,
                                    status: user.drivers_license
                                    }))
                                }}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: -3}}>
                                        <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                                            <Text style={{color: 'grey', fontSize: 16}}>Aprovado para conduzir</Text>
                                    
                                        </View>
                                        {!user.drivers_license ? <Icon name='remove-circle-outline' size={25} color={'red'}/>: <Icon name='checkmark-done-circle-outline' size={25} color={'#007bee'}/>}
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Text style={{color: 'grey', fontSize: 16}}>Endereço Email</Text>
                                        <Icon name='checkmark-done-circle-outline'
                                        size={25} color={'#007bee'}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Text style={{color: 'grey', fontSize: 16}}>Número de telefone</Text>
                                        <Icon name='checkmark-done-circle-outline'
                                        size={25} color={'#007bee'}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
            {user.bio != null ? <View>
                <Text style={styles.desc} numberOfLines={seeAll ? null : 5} ellipsizeMode="tail" onTextLayout={handleTextLayout}>{user.bio}</Text>
                        {textOverflowed && <View>{
                        !seeAll ?
                        <TouchableOpacity onPress={()=>setSeeAll(true)
                        }>
                          <Text style={styles.seeAll}>Ler mais</Text>
                        </TouchableOpacity>
                      :
                      <TouchableOpacity onPress={()=>setSeeAll(false)}>
                        <Text style={styles.seeAll}>Ler menos</Text>
                      </TouchableOpacity>
                        }</View>}
            </View>:
            <TouchableOpacity onPress={() => {
                navigation.dispatch(StackActions.push('bio', {
                    user: user
                }))
            }}>
                <View>
                   <LinearGradient style={{height: 100, flex: 1, marginTop: 10, marginBottom: -10, borderRadius: 15, flexDirection: 'row'}} colors={['#004488','#3b5998', '#e7e7e7']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                    <Text style={{ color: 'white', flex: 2, paddingHorizontal: 20, alignSelf: 'center', fontSize: 16, fontWeight: '800'}}>Adicione uma bio para conquistar maior confiança.</Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Image source={require('../assets/propImages/biography.png')} style={{resizeMode: 'contain', width: 100, height: 100, marginRight: 5}}/>
                    </View>
                    </LinearGradient>
                </View>
            </TouchableOpacity>}
            <View style={{marginTop: 5}}>
            <TouchableOpacity onPress={() => {
                    navigation.dispatch(StackActions.push('bio', {
                        user: user,
                    }))
                }}>
                    <View style={styles.option}>
                        <Icon name='reader-outline' style={styles.optionIcon}/>
                        <View style={styles.optionTexts}>
                            <Text style={styles.optionLabel}>Biografia</Text>
                            <Text style={styles.optionDesc}>Adicionar ou editar biografia</Text>
                        </View>
                        <Icon name='chevron-forward' style={styles.chevron}/>
                    </View>
                </TouchableOpacity>
                { <TouchableOpacity onPress={() => {
                    navigation.dispatch(StackActions.push('editAccount', {
                        user: user,
                        profilepic: profilepic
                    }))
                }}>
                    <View style={styles.option}>
                        <Icon name='person-outline' style={styles.optionIcon}/>
                        <View style={styles.optionTexts}>
                            <Text style={styles.optionLabel}>Detalhes Pessoais</Text>
                            <Text style={styles.optionDesc}>Ver e editar detalhes pessoais</Text>
                        </View>
                        <Icon name='chevron-forward' style={styles.chevron}/>
                    </View>
                </TouchableOpacity>}
                <TouchableOpacity onPress={() => {
                    navigation.dispatch(StackActions.push('transHistory'))
                }}>
                    <View style={styles.option}>
                        <Icon name='timer-outline' style={styles.optionIcon}/>
                        <View style={styles.optionTexts}>
                            <Text style={styles.optionLabel}>Historial Pessoal</Text>
                            <Text style={styles.optionDesc}>Ver historial de todas as suas transações</Text>
                        </View>
                        <Icon name='chevron-forward' style={styles.chevron}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.option}>
                    <Icon name='lock-closed-outline' style={styles.optionIcon}/>
                    <View style={styles.optionTexts}>
                        <Text style={styles.optionLabel}>Mandar Notificações</Text>
                        <Text style={styles.optionDesc}>{notis ? 'Ligado' : 'Desligado'}</Text>
                    </View>
                    <View style={{justifyContent: 'space-between', flex: 1, flexDirection:'row'}}>
                        <View></View>
                        <Switch thumbColor={'white'} trackColor={{true: '#007bee', false: ''}} value={notis} onValueChange={(val)=>setNotis(val)}/>

                    </View>
                </View>
                <View style={styles.option}>
                    <Icon name='reader-outline' style={styles.optionIcon}/>
                    <View style={styles.optionTexts}>
                        <Text style={styles.optionLabel}>Termos de Uso</Text>
                        <Text style={styles.optionDesc}>Ver termos de uso</Text>
                    </View>
                    <Icon name='chevron-forward' style={styles.chevron}/>
                </View>
                <View style={styles.option}>
                    <Icon name='lock-closed-outline' style={styles.optionIcon}/>
                    <View style={styles.optionTexts}>
                        <Text style={styles.optionLabel}>Política de Privacidade</Text>
                        <Text style={styles.optionDesc}>Ver política de privacidade</Text>
                    </View>
                    <Icon name='chevron-forward' style={styles.chevron}/>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.dispatch(StackActions.push('helpCenter'))
                }}>
                    <View style={styles.option}>
                    <Icon name='help-circle-outline' style={styles.optionIcon}/>
                        <View style={styles.optionTexts}>
                            <Text style={styles.optionLabel}>Centro de Ajuda</Text>
                            <Text style={styles.optionDesc}>Ver termos de uso</Text>
                        </View>
                        <Icon name='chevron-forward' style={styles.chevron}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {
                    logout()
                }}>
                    <View style={[styles.option, {marginBottom: 30}]}>
                        <Icon name='log-out-outline' style={[styles.optionIcon, {fontSize: 19}]}/>
                        <View style={styles.optionTexts}>
                            <Text style={styles.optionLabel}>Logout</Text>
                            <Text style={styles.optionDesc}>Sair da conta</Text>
                        </View>
                        <Icon name='chevron-forward' style={[styles.chevron]}/>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default ProfileInfo