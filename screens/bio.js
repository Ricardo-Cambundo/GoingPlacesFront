import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation, useRoute } from "@react-navigation/native"
import axios from "axios"
import { useState } from "react"
import { StyleSheet, Text, View, Pressable, TouchableOpacity, TextInput, FlatList, TouchableWithoutFeedback, ScrollView, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

const Bio = () => {
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
        mainTitle: {
            color: 'black',
            fontWeight: '800',
            fontSize: 18,
        },
        subTitle: {
            color: '#b3b3b3',
            fontWeight: '500',
            fontSize: 14,
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
            marginHorizontal: 15,
            
            
        },
        button2: {
            backgroundColor: '#ff0077',
            paddingVertical: 13,
            paddingHoorizontal: 20,
            borderRadius: 10
        },
        save: {
            color: 'white',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '800'
        },
        seeAll: {
            fontWeight: '600',
            color: '#007bee',
          },
          extra: {
            flexDirection: 'row',
            gap: 10,
            marginTop: 15,
        },
        extraIcon: {
            color: '#007bee',
        },
        extraTitle: {
            fontWeight: '700',
            fontSize: 16,
            marginBottom: 2
        },
        extraDesc: {
            color: 'grey',
            fontSize: 14,
        },
        extraInfo: {
            flex: 1
        }
    })
    const [bio, setBio] = useState(route.params?.user?.bio != null ? route.params.user.bio : '')
    // 'Carros de qualidade para alugar, sem complicações. Tarifas acessíveis, veículos bem conservados e atendimento personalizado. Sua jornada, seu caminho – alugue agora para uma viagem tranquila à frente!'
    const [errors, setErrors] = useState([])
    const save = () => {
        if (bio.split(/\s(?=\S)/ig).length <=15){
            setErrors(['Você precisa de pelo menos 15 palavras para sua biografia!'])
        }else {
            console.log(route.params.user.id)
            let obj = {...route.params.user}
            axios.post(`http://192.168.1.2:8000/api/edit_user/${route.params.user.id}/`, {
                ...obj,
                bio: bio
            })
            .then(res => {
                console.log('response', res.data)
                Alert.alert(
                    'Salvo',
                    'A tua bio foi guardada.',
                    [{
                        text: 'Ok',
                                    onPress: () => {
                                        AsyncStorage.setItem('user', JSON.stringify(res.data)).then()
                                        navigation.goBack()
                                    }
                    }]
                )
            })
            .catch(err => {
                console.log('errr', err)
            })
        }
    }
    // "Carros de qualidade para alugar, sem complicações. Tarifas acessíveis, veículos bem conservados e atendimento personalizado. Sua jornada, seu caminho – alugue agora para uma viagem tranquila à frente!"
    const [tips, setTips] = useState(false)
    return (
    
        <TouchableWithoutFeedback>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={[styles.header]}>
                            <Pressable onPress={async ()=>{
            
                                navigation.goBack()
                                }}>
                                <View style={styles.goBack}>
                                    <Icon name='arrow-back' size={23}/>
                                </View>
                            </Pressable>
                            <Text style={styles.title}>Bio</Text>
                           <View></View>
                    </View>
                    <ScrollView>
                        <View style={{flex: 1, marginTop: 120, marginHorizontal: 15}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: -5, marginBottom: -5}}>
                            <Text style={styles.mainTitle}>Editar biografia</Text>
                            <TouchableOpacity onPress={() => setTips(!tips)} style={{alignItems: 'center'}}>
                                <Icon name='information-circle-outline' color={'#007bee'} size={24}/>
                                <Text style={styles.seeAll}>{tips ? 'Esconder dicas' : 'Ver dicas'}</Text></TouchableOpacity>
                        </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10, gap: 5}}>
                                    <Text style={styles.subTitle}>Mínimo de 15 palavras</Text>
                                    <Text style={{fontWeight: '900', fontSize: 17}}>|</Text>
                                    {bio.split(' ').length && bio.length > 0 &&<View style={styles.count}>
                                        <Text style={{fontSize: 17, color: '#9d9d9d', marginLeft: 5, alignSelf: 'center'}}>{bio.split(/\s(?=\S)/ig).length }</Text>
                                    </View>
                                    }
                                </View>
                                {tips && <View>
                                    <View style={styles.extra}>
                                                    <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                                                    <View style={styles.extraInfo}>
                                                        <Text style={styles.extraTitle}>Use uma linguagem envolvente</Text>
                                                        <Text style={styles.extraDesc}>Empregar palavras que evoquem emoções positivas e ressoem com potenciais clientes. Por exemplo, palavras como "qualidade", "acessível" e "suave" criam uma imagem positiva.</Text>
                                    
                                                    </View>
                                                </View><View style={styles.extra}>
                                                    <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                                                    <View style={styles.extraInfo}>
                                                        <Text style={styles.extraTitle}>Destaque a confiabilidade</Text>
                                                        <Text style={styles.extraDesc}>Mencione quaisquer elementos de construção de confiança, como avaliações de clientes, prêmios ou anos de experiência. Se for condutor pode mencionar os anos de experiência de condução.</Text>
                                    
                                                    </View>
                                                </View>
                                                <View style={styles.extra}>
                                                    <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                                                    <View style={styles.extraInfo}>
                                                        <Text style={styles.extraTitle}>Crie uma chamada para ação</Text>
                                                        <Text style={styles.extraDesc}>Incentive os clientes em potencial a agir. Por incluir frases como, "alugue agora para um passeio tranquilo à frente!".</Text>
                                    
                                                    </View>
                                                </View>
                                </View>}
                        <View style={{backgroundColor: '#f3f3f3', borderRadius: 10, paddingVertical: 10, marginVertical: 15, paddingHorizontal: 10}}>
                            <TextInput
                                placeholder='Biografia...'
                                style={styles.other}
                                value={bio}
                                onChangeText={(val) => {
                                    setBio(val)}}
                                multiline={true}
                                numberOfLines={8}
                                />
                        </View>
                        <FlatList data={errors} renderItem={(item) => {
                                        return (
                                        <View style={styles.error}><Pressable onPress={() => setErrors(errors.filter((err) => err != item.item))}><Icon
                                        size={30} style={{
                                            marginRight: 5
                                        }} name='close-circle-outline'/></Pressable><Text style={styles.message}>{item.item}</Text></View>
                                        )
                                    }} />
                        </View>
                        <View>
                        <TouchableOpacity onPress={() => {
                                save()
                            }}>
                            <View style={styles.button}>
                                <Text style={styles.save}>Salvar</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Bio