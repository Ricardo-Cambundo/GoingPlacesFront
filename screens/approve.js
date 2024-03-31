import { useNavigation, StackActions, useRoute, useFocusEffect } from "@react-navigation/native"
import { useCallback, useState } from "react"
import { StyleSheet, Text, View, Pressable, TouchableWithoutFeedback, TouchableOpacity, Image, ScrollView, FlatList, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker'
import api from "../navigators/axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
const Approve = () => {
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
        },
        button: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginBottom: 10,
            marginTop: 15
        },
        button1: {
            borderColor: '#007bee',
            borderWidth: 1,
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginBottom: 10,
            marginTop: 15

        },
        save: {
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
        },
        save1: {
            color: '#007bee',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
        },
        button3: {
            flexDirection: 'row',
            height: 65,
            alignSelf: 'center',
            marginTop: 15,
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
            fontSize: 14,
        },
        
    })
    const [images, setImages] = useState([])
    const [imagesF, setImagesF] = useState([])
    const [status, setStatus] = useState(route.params.status)
    const addImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
            
        })
        if (!result.canceled) {
            const image = result.assets[0]
            setImages([...images, image.uri])
            let obj ={
                uri: image.uri,
                base64: image.base64,
                ext: `${image.uri}`.split('.')[`${image.uri}`.split('.').length-1]

            }
            setImagesF([...imagesF, obj])
            // setBase(image.base64)
            
            // setExt(`${image.uri}`.split('.')[`${image.uri}`.split('.').length-1])
            // setPath(image.uri)
        }
        
    }
    const deleteImage = (index) => {
        setImages(images.filter((item, i) => i != index))
        setImagesF(imagesF.filter((item, i) => i != index))
    }
    const submit = () => {
        let user = {
            ...route.params.user
        }
        api.post(`api/add_license/${user.id}/`, {
            images: imagesF
        })
        .then(res => {
            Alert.alert(
                'Salvo',
                'Agora estás aprovado para conduzir.',
                [{
                    text: 'Ok',
                                onPress: () => {
                                    setStatus(true)
                                    AsyncStorage.setItem('user',JSON.stringify(res.data)).then()
                                    
                                    navigation.goBack()
                                }
                }]
            )
        })
        .catch(err => {
            console.log('errooooooor', err)
        })
    }
    useFocusEffect(useCallback(()=> {
        console.log('inside')
    }, []))
    return (
        <View style={{flex: 1, backgroundColor: 'white', }}>
             <View style={[styles.header]}>
                        <Pressable onPress={async ()=>{
                            
                            navigation.goBack()
                            }}>
                            <View style={styles.goBack}>
                                <Icon name='arrow-back' size={23}/>
                            </View>
                        </Pressable>
                        <Text style={styles.title}>Aprovação</Text>
            
                       <View></View>
                </View>
                <ScrollView style={{marginTop: 110, paddingHorizontal: 15,}}>
                    <View>
                        <Text style={{fontWeight: '700',
            fontSize: 16,}}>Status</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontWeight: '400',
            fontSize: 15, color: 'grey'}}>Aprovado para conduzir</Text>
                            {status ? <Icon name='remove-circle-outline' size={25} color={true ? 'lightgreen': 'red'}/> :
                            <Icon name='checkmark-done-circle-outline' size={25} color={route.params.user.drivers_license == true ? 'lightgreen': 'red'}/>}

                        </View>
                    </View>
                    <Text style={{fontWeight: '700',
            fontSize: 16, marginTop: 20}}>Benefícios</Text>
                    <View style={styles.extra}>
                    <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                    <View style={styles.extraInfo}>
                        <Text style={styles.extraTitle}>Aprovado para conduzir</Text>
                        <Text style={styles.extraDesc}>Um usuário aprovado para conduzir pode alugar veículos no aplicativo.</Text>
                    </View>
                    </View>
                    <View style={styles.extra}>
                    <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                    <View style={styles.extraInfo}>
                        <Text style={styles.extraTitle}>Programas de Fidelidade e Benefícios</Text>
                        <Text style={styles.extraDesc}>Um usuário aprovado para conduzir pode participar de programas de fidelidade, acumular pontos e receber benefícios exclusivos.</Text>
                    </View>
                    </View>
                    <View style={styles.extra}>
                    <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                    <View style={styles.extraInfo}>
                        <Text style={styles.extraTitle}>Avaliações e Comentários</Text>
                        <Text style={styles.extraDesc}>Um usuário aprovado para conduzir pode deixar avaliações e comentários sobre as experiências de aluguel.</Text>
                    </View>
                    </View>


                    <View style={styles.button3}><View style={styles.side}></View><View style={styles.verified}><Text style={styles.veri}>Já foste aprovado para conduzir!. Mas se desjares substituir as fotos atuais da carta de condução, podes proseguir.</Text></View></View>


                    <View>
                    <Text style={{fontWeight: '700',
            fontSize: 16, marginTop: 20}}>Passos para ser aprovado:</Text>
                    <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
                        <Icon size={20} color='#007bee' name='caret-forward-outline'/>
                        <Text style={{color: 'grey', flex: 1}}>Tirar uma foto com alta qualidade do parte frontal de sua carta de condução.</Text>
                    </View>
                    <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
                        <Icon size={20} color='#007bee' name='caret-forward-outline'/>
                        <Text style={{color: 'grey', flex: 1}}>Tirar uma foto com alta qualidade do parte traseira de sua carta de condução.</Text>
                    </View>
                    <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
                        <Icon size={20} color='#007bee' name='caret-forward-outline'/>
                        <Text style={{color: 'grey', flex: 1}}>Tirar uma foto de você mesmo a pegar a mesma carta de condução. Essa fota deverá conter a sua cara, e a parte frontal da carta de conduçáo.</Text>
                    </View>
                    <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
                        <Icon size={20} color='#007bee' name='caret-forward-outline'/>
                        <Text style={{color: 'grey', flex: 1}}>OBS: Essas fotos serão vistas apenas por locadores (dono do veículo que você quiser alugar) durante o processo de reserva de um veículo. Elas não serão vistas por outros na platforma.</Text>
                    </View>
                    
                    </View>
                    <FlatList style={{marginTop: 10}} columnWrapperStyle={{gap: 10, justifyContent: 'space-around', alignContent: 'flex-start'}} numColumns={2} data={images.concat(['all'])} renderItem={(item) => {
                if (item.item == 'all') {
                    return (
                        <TouchableOpacity onPress={() => {
                            if (images.length == 3){
                                Alert.alert(
                                    '',
                                    'Só precisamos de 3 imagens!',
                                    [{
                                        text: 'OK',
                                        onPress: ()=>{}
                                    }]
                                    
                                )
                            }else {
                                addImage()
                            }
                        }} style={{width: '47%', height: 140,}}>
                        <View style={{height: 130, marginVertical: 10, borderWidth: 1.2, borderColor: '#007bee', borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                            <Icon name='add-circle-outline' color='#007bee' size={34}/>
                            <Text style={{color: '#007bee', fontWeight: '500'}}>Adicionar Foto</Text>
                        </View>
                        </TouchableOpacity>
                    )
                }
                return (
                    <>
                    
                    <View style={{width: '47%', height: 130, backgroundColor: 'yellow', marginVertical: 10, borderRadius: 5}}>
                    <Image style={{width: '100%', height: 130, zIndex: 100, position: 'absolute', resizeMode: 'cover'}} source={{uri: item.item}}/>
                    </View>
                    <TouchableWithoutFeedback onPress={() => {
                        deleteImage(item.index)
                    }}>
                    <View style={{backgroundColor: 'black', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, opacity: 0.5, zIndex: 10, marginLeft: -50, marginTop: 15, marginRight: 5}}>
                        <Icon name='close-outline' color='white' size={15}/>
                    </View>
                    </TouchableWithoutFeedback>
                    </>
                )
            }}/>
            {
                    images.length < 3 ?
                    <TouchableOpacity onPress={() => {

                        Alert.alert(
                            '',
                            `Precisas de pelo menos 3 fotos para avançar. Faltam ${3 - images.length == 1 ? `${3 - images.length} foto` : `${3 - images.length} fotos`}.`
                        )
                    }}>
                        <View style={styles.button1}>
                            <Text style={styles.save1}>Submeter</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => {
                        submit()
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.save}>Submeter</Text>
                        </View>
                    </TouchableOpacity>
                }
                </ScrollView>
        </View>
    )
}
export default Approve