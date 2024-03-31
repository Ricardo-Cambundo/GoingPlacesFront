import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"
import { useCallback, useState } from "react"
import { Pressable, StyleSheet, View, Platform, Text, FlatList, TouchableOpacity, Image, TouchableWithoutFeedback, SafeAreaView, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker'
import api, { baseURL } from "../navigators/axios"
const TripPhotos = ({  }) => {
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
            fontWeight: '800',
        },
        title2: {
            fontSize: 13,
            color: 'grey',
            fontWeight:'500'
        },
        button: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginBottom: 10,
            marginTop: 15
        },
        button1: {
            borderColor: '#007bee',
            borderWidth: 1,
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
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
        }
    })
    const [images, setImages] = useState([])
    const [imagesF, setImagesF] = useState([])
    const [prevImages, setPrevImages] = useState([])
    useFocusEffect(useCallback(() => {
        api.get(`api/get_trip/${route.params.data.id}/`)
        .then(res => {
            res.data.images && [...res.data.images].length > 0 && setPrevImages([...res.data.images])
        })
        .catch(err => {
            console.log('error', err)
        })
    }, []))
    const save = () => {
        api.post(`api/add_trip_photos/${route.params.data.id}/`, {
            images: imagesF,
            prevImages: prevImages
        })
        .then(res => {
            Alert.alert(
                'Salvo',
                'As imagens foram adicionadas e agora o locador pode ver essas imagens.',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            navigation.goBack()
                        }
                    }
                ]
            )
        })
        .catch(err => {
            console.log('err', err)
        })
    }
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
            let obj ={
                uri: image.uri,
                base64: image.base64,
                ext: `${image.uri}`.split('.')[`${image.uri}`.split('.').length-1]
            }
            setImages([...images, image.uri])
            setImagesF([...imagesF, obj])

            
        }
    }
    const deleteImage = (index) => {
        setImages(images.filter((item, i) => i != index - prevImages.length))
        setImagesF(imagesF.filter((item, i) => i != index - prevImages.length))
        
    }
    const deleteImageP = (index) => {
        // api.post(`api/add_trip_photos/${route.params.data.id}/`, {
        //     images: imagesF
        // })
        let delImage = prevImages[index]
        
        api.delete(`api/delete_image/?q=${delImage}`, {
            data: {
                id: route.params.data.id,
                images: prevImages.filter((item, i) => i != index)
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log('error', err)
        })
        setPrevImages(prevImages.filter((item, i) => i != index))

    }
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={[styles.header]}>
                            <Pressable onPress={async ()=>{
                                navigation.goBack()
                                }}>
                                <View style={styles.goBack}>
                                    <Icon name='arrow-back' size={23}/>
                                </View>
                            </Pressable>
                            <Text style={styles.title}>Fotos</Text>
            
                           <View></View>
                    </View>
                <View style={{flex: 1, paddingTop: 110, paddingHorizontal: 15}}>
                <Text style={styles.title2}>{!route.params.host ? 'Adicione pelo menos 15 fotos do veiculo antes de começar a viagem. Pega vários ângulos do veículo, do painel de controle e dos assentos. OBS: se o locador te pedir outras fotos, mande aqui.' : 'Essas são as imagens que o seu cliente mandou. Apenas ele poderá mandar imagens, se precisares de mais imagens que não sejam do veículo, poderás solicitar por mensagem, e depois o cliente mandará aqui para poderes ver.'}</Text> 
                <FlatList style={{marginTop: 10}} columnWrapperStyle={{gap: 10, justifyContent: 'space-around', alignContent: 'flex-start'}} numColumns={2} data={prevImages.concat(images.concat(['all']))} renderItem={(item) => {
                if (item.item == 'all') {
                    if (!route.params.host)
                        {return (
                        <TouchableOpacity onPress={() => {
                            addImage()
                        }} style={{width: '47%', height: 140,}}>
                        <View style={{height: 130, marginVertical: 10, borderWidth: 1.2, borderColor: '#007bee', borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                            <Icon name='add-circle-outline' color='#007bee' size={34}/>
                            <Text style={{color: '#007bee', fontWeight: '500'}}>Adicionar Foto</Text>
                        </View>
                        </TouchableOpacity>
                    )}else {
                        
                    }
                }
                    // return (
                    //     <>
                    
                    // <View style={{width: '47%', height: 130, backgroundColor: 'yellow', marginVertical: 10, borderRadius: 5, justifyContent: 'flex-end', flexDirection: 'row'}}>
                    // <Image style={{width: '100%', height: 130, zIndex: 100, position: 'absolute', resizeMode: 'cover'}} source={{uri: item.item}}/>
                    // <View style={{alignSelf: 'flex-end', backgroundColor: 'black', opacity: 0.7, flex: 1, height: 25, justifyContent: 'center', borderBottomRightRadius: 5, borderBottomLeftRadius: 5, zIndex: 100}}><Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>Primeira imagem a ser vista</Text></View>
                    // </View>
                    // <TouchableWithoutFeedback onPress={() => {
                    //     deleteImage(item.index)
                    // }}>
                    // <View style={{backgroundColor: 'black', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, opacity: 0.5, zIndex: 10, marginLeft: -50, marginTop: 15, marginRight: 5}}>
                    //     <Icon name='close-outline' color='white' size={15}/>
                    // </View>
                    // </TouchableWithoutFeedback>
                    
                    // </>
                    // )
                
                else if (images.includes(item.item)){
                     return (
                        <>
                        
                        <View style={{width: '47%', height: 130, backgroundColor: 'yellow', marginVertical: 10, borderRadius: 5}}>
                        <Image style={{width: '100%', height: 130, zIndex: 100, position: 'absolute', resizeMode: 'cover', borderRadius: 5}} source={{uri: item.item}}/>
                        </View>
                        {!route.params.host && <TouchableWithoutFeedback onPress={() => {
                            deleteImage(item.index)
                        }}>
                        <View style={{backgroundColor: 'black', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, opacity: 0.5, zIndex: 10, marginLeft: -50, marginTop: 15, marginRight: 5}}>
                            <Icon name='close-outline' color='white' size={15}/>
                        </View>
                        </TouchableWithoutFeedback>}
                        </>
                    )
                }
                else {
                    return (
                        <>
                        
                        <View style={{width: '47%', height: 130, backgroundColor: 'yellow', marginVertical: 10, borderRadius: 5}}>
                        <Image style={{width: '100%', height: 130, zIndex: 100, position: 'absolute', resizeMode: 'cover', borderRadius: 5}} source={{uri: `${baseURL}/media/${item.item}`}}/>
                        </View>
                        {!route.params.host && <TouchableWithoutFeedback onPress={() => {
                            deleteImageP(item.index)
                        }}>
                        <View style={{backgroundColor: 'black', height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5, opacity: 0.5, zIndex: 10, marginLeft: -50, marginTop: 15, marginRight: 5}}>
                            <Icon name='close-outline' color='white' size={15}/>
                        </View>
                        </TouchableWithoutFeedback>}
                        </>
                    )
                }
            }}/>
                </View>
            {!route.params.host && <SafeAreaView style={{marginHorizontal: 15}}>
                {
                    prevImages.concat(images).length < 15 ?
                    <TouchableOpacity onPress={() => {
                        Alert.alert(
                            '',
                            `Precisas de pelo menos 15 fotos para avançar. Faltam ${15 - prevImages.concat(images).length == 1 ? `${15 - prevImages.concat(images).length} foto` : `${15 - prevImages.concat(images).length} fotos`}.`,
                            [
                                {
                                    text: 'OK',
                                    onPress: () => {}
                                }
                            ]
                        )
                    }}>
                        <View style={styles.button1}>
                            <Text style={styles.save1}>Adicionar</Text>
                        </View>
                    </TouchableOpacity>
                    : images.length == 0 ?
                    <TouchableOpacity onPress={() => {
                        Alert.alert(
                            '',
                            `Não adicionaste nenhuma imagem. Desejas adicionar uma ou voltar para a tela de detalhes?`,
                            [
                                {
                                    text: "Adicionar",
                                    onPress: ()=>{}
                                },
                                {
                                    text: 'Voltar',
                                    onPress: () => {
                                        navigation.goBack()
                                    }
                                }
                            ]
                        )
                    }}>
                        <View style={styles.button1}>
                            <Text style={styles.save1}>Adicionar</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => {
                        save()
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.save}>Adicionar</Text>
                        </View>
                    </TouchableOpacity>
                }
            </SafeAreaView>}
                
        </View>
    )
}
export default TripPhotos