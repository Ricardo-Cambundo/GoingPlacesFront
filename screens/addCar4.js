import * as ImagePicker from "expo-image-picker"
import { useState } from "react"
import { Alert, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
const AddCar4 = ({handleScroll, images, setImages, imagesF, setImagesF}) => {
    const styles = StyleSheet.create({
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
    // ['.', '', '', '',]
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
    return (
        <View style={{flex: 1, backgroundColor: 'white', width: Dimensions.get('window').width, paddingHorizontal: 15, paddingTop: 110}}>
            <Text style={styles.title2}>Fotos de alta qualidade aumentam seu potencial de ganho, atraindo mais clientes. Adicione pelo menos 6 fotos, incluindo múltiplos ângulos do exterior com todo o carro no quadro, bem como fotos do interior. (recomendável começar com uma foto frontal do carro).</Text>
            <FlatList style={{marginTop: 10}} columnWrapperStyle={{gap: 10, justifyContent: 'space-around', alignContent: 'flex-start'}} numColumns={2} data={images.concat(['all'])} renderItem={(item) => {
                if (item.item == 'all') {
                    return (
                        <TouchableOpacity onPress={() => {
                            addImage()
                        }} style={{width: '47%', height: 140,}}>
                        <View style={{height: 130, marginVertical: 10, borderWidth: 1.2, borderColor: '#007bee', borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                            <Icon name='add-circle-outline' color='#007bee' size={34}/>
                            <Text style={{color: '#007bee', fontWeight: '500'}}>Adicionar Foto</Text>
                        </View>
                        </TouchableOpacity>
                    )
                }else if (item.index == 0){
                    return (
                        <>
                    
                    <View style={{width: '47%', height: 130, backgroundColor: 'yellow', marginVertical: 10, borderRadius: 5, justifyContent: 'flex-end', flexDirection: 'row'}}>
                    <Image style={{width: '100%', height: 130, zIndex: 100, position: 'absolute', resizeMode: 'cover'}} source={{uri: item.item}}/>
                    <View style={{alignSelf: 'flex-end', backgroundColor: 'black', opacity: 0.7, flex: 1, height: 25, justifyContent: 'center', borderBottomRightRadius: 5, borderBottomLeftRadius: 5, zIndex: 100}}><Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>Primeira imagem a ser vista</Text></View>
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
            {/* <View style={{flexDirection: 'row', gap: 10, flexWrap: 'wrap'}}>
                {['.', '', '', '', ''].map((item) => {
                    return (
                        <View style={{flex: 1, height: 100, backgroundColor: 'yellow'}}></View>
                    )
                })}
            </View> */}
            <View>
                {
                    images.length < 6 ?
                    <TouchableOpacity onPress={() => {
                        handleScroll(5)
                        Alert.alert(
                            '',
                            `Precisas de pelo menos 6 fotos para avançar. Faltam ${6 - images.length == 1 ? `${6 - images.length} foto` : `${6 - images.length} fotos`}.`
                        )
                    }}>
                        <View style={styles.button1}>
                            <Text style={styles.save1}>Continuar</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => {
                        handleScroll(5)

                    }}>
                        <View style={styles.button}>
                            <Text style={styles.save}>Continuar</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}
export default AddCar4