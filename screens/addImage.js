import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity, Alert } from "react-native"
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import Icon from 'react-native-vector-icons/Ionicons'
import { useState } from "react"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import api, { baseURL } from "../navigators/axios"
const AddImage = ({setVisible, profilepic, uri, setUri, user}) => {
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
            paddingBottom: 7,
            // transform: [{translateY: diffClampScroll}],
            ...Platform.select({
                android: {
                height: 55
                },
                
                
            }),
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
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: '700',
            marginLeft: -37,
            marginTop: 5,     
            ...Platform.select({
                ios: {
                    marginTop: 55
                }
            })    
        },
        image:  {
            width: 130, 
            height: 130,
            alignSelf: 'center',
            borderRadius: 100,
            borderWidth: 5,
            borderColor: 'white',
            marginTop: 10,
            marginBottom: 40
        },
        button: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 10,
        },
        button2: {
            backgroundColor: '#ff0077',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginBottom: 20

        },
        save: {
            color: 'white',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '800'
        },
    })
    const [ext, setExt] = useState('')
    const [base, setBase] = useState('')
    const [path, setPath] = useState(uri)
    const [timestamp, setTimestamp] = useState(Date.now())
    const addImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        })
        if (!result.canceled) {
            const image = result.assets[0]
            setBase(image.base64)
            
            setExt(`${image.uri}`.split('.')[`${image.uri}`.split('.').length-1])
            setPath(image.uri)
        }
    }
    const save = () => {
        console.log('pressed', user.id, ext)
        api.post(`api/upload_pic/${user.id}/`, {
            "profilepic": base,
            "ext": ext
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            Alert.alert(
                'Salvo',
                'A tua foto de perfil foi guardada.',
                [{
                    text: 'Ok',
                                onPress: () => {
                                    AsyncStorage.setItem('profilepic', JSON.stringify(`/media/${res.data.data}`)).then()
                                    AsyncStorage.setItem('uri', JSON.stringify(path))
                                    setVisible(false) 
                                    setUri(path)
                                }
                }]
            )
        })
        .catch(err => {
            console.log('errrrrr', err)
        })
    }
    
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={[styles.header]}>
                        <Pressable onPress={()=>{
                            setVisible(false)
                            }}>
                            <View style={styles.goBack}>
                                <Icon name='close-outline' size={23}/>
                            </View>
                        </Pressable>
                        <Text style={styles.title}>Perfil</Text>
            
                       <View></View>
                </View>
                <View style={{paddingTop: 90, paddingHorizontal: 15}}>
                <View>
                            {profilepic == null && path == null ? <Image source={require('../assets/propImages/blankprofile.jpg')} style={styles.image}/> : <>
                            {
                                path != null ?
                                <Image style={styles.image} source={{uri: path}}/>
                                :
                                <Image style={styles.image} source={{uri: `${baseURL}${profilepic}?${timestamp}`}}/>
                            }
                            </>}
                            
                    
                    </View>
                    {profilepic !== null ? 
                    <View style={styles.buttons}>
                    
                    <TouchableOpacity onPress={()=>{
                        addImage()
                    }}>
                        <View style={styles.button2}><Text style={styles.save}>Mudar</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> {
                        save()
                    }}>
                        <View style={styles.button}><Text style={styles.save}>Guardar</Text></View>
                    </TouchableOpacity>
                    </View>
                :
                    <View>
                        {path == null ? 
                        <TouchableOpacity onPress={()=> {
                            addImage()
                        }}>
                            <View style={styles.button2}><Text style={styles.save}>Adicionar</Text></View>
                        </TouchableOpacity>
                        :
                    <View style={styles.buttons}>
                    
                    <TouchableOpacity onPress={()=>{addImage()}}>
                        <View style={styles.button2}><Text style={styles.save}>Mudar</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> {
                        save()
                    }}>
                        <View style={styles.button}><Text style={styles.save}>Guardar</Text></View>
                    </TouchableOpacity>
                    </View>}
                    </View>}
                </View>
        </View>
    )
}
export default AddImage