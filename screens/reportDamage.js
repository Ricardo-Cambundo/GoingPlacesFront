import { useNavigation, useRoute } from "@react-navigation/native"
import { useState } from "react"
import { StyleSheet, Text, View, Pressable, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, ScrollView, Image } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker'
const ReportDamage = () => {
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
                fontWeight: '800',
            },
            title1: {
                fontSize: 15,
                fontWeight: '700',
                marginBottom: 10,
                marginVertical: 20
            },
            title2: {
                fontSize: 13,
                color: 'grey',
                fontWeight:'500'
            },
            report: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 14,
                borderTopWidth: 0.2,
                borderColor: '#c7c7c7',
            },
            reportText: {
                fontSize: 15.5,
                fontWeight: '500',
    
            },
            radioCircle: {
                width: 21, 
                height: 21,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: '#007bee',
                alignItems: 'center',
                justifyContent: 'center'
            },
            radioCircle1: {
                backgroundColor: '#007bee',
                width: 10,
                height: 10,
                borderRadius: 50
    
            },
            textArea: {
                backgroundColor: '#f3f3f3',
                height: 130,
                padding: 15,
                zIndex: 100,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
            },
            other: {
                backgroundColor: '#f3f3f3',
                marginVertical: 10,
                padding: 10,
                
                borderRadius: 10,
                flexDirection: 'row',
                
            },
            button: {
                backgroundColor: '#007bee',
                paddingVertical: 15,
                borderRadius: 50,
                marginVertical: 20,
                marginTop: 30
                
            },
            buttonText: {
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '700'
            },
            
    })
    const [report, setReport] = useState('')
    const [other, setOther] = useState('')
    const [images, setImages] = useState([])
    const [imagesF, setImagesF] = useState([])
    const addImage = async() => {
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
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={[styles.header]}>
                                <Pressable onPress={async ()=>{
                                    navigation.goBack()
                                    }}>
                                    <View style={styles.goBack}>
                                        <Icon name='arrow-back' size={23}/>
                                    </View>
                                </Pressable>
                                <Text style={styles.title}>Reportar Danos</Text>
            
                               <View></View>
                        </View>
                    <ScrollView style={{flex: 1, marginTop: 110, paddingHorizontal: 15}}>
                    <TouchableOpacity onPress={() => {
                        if (report.includes('Arranhões')){
                            setReport("")
                        }else {
                            setReport("Arranhões")
                        }
                    }}>
                        <View style={styles.report}>
                            <Text style={styles.reportText}>Arranhões</Text>
                            <View style={styles.radioCircle}>
                            {report.includes('Arranhões') && <View style={styles.radioCircle1}></View>}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if (report.includes('Amassados')){
                            setReport("")
                        }else {
                            setReport("Amassados")
                        }
                    }}>
                        <View style={styles.report}>
                            <Text style={styles.reportText}>Amassados</Text>
                            <View style={styles.radioCircle}>
                            {report.includes('Amassados') && <View style={styles.radioCircle1}></View>}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if (report.includes('Luzes')){
                            setReport("")
                        }else {
                            setReport("Luzes")
                        }
                    }}>
                        <View style={styles.report}>
                            <Text style={styles.reportText}>Luzes Quebradas</Text>
                            <View style={styles.radioCircle}>
                            {report.includes('Luzes') && <View style={styles.radioCircle1}></View>}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if (report.includes('xx')){
                            setReport("")
                        }else {
                            setReport("xx")
                        }
                    }}>
                        <View style={styles.report}>
                            <Text style={styles.reportText}>Outro</Text>
                            <View style={styles.radioCircle}>
                            {report.includes('xx') && <View style={styles.radioCircle1}></View>}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ display: (report.includes('xx'))  ? 'flex': 'none'}}>
                        <TextInput
                        placeholder='Outro inquietação...'
                        style={styles.other}
                        value={other}
                        onChangeText={(val) => {
                            setOther(val)}}
                        />
                    </View>

                    <Text style={styles.title1}>Descrição dos danos</Text>
                    <Text style={styles.title2}>Isso pode incluir detalhes como quando e onde o dano ocorreu ou quaisquer outras observações relevantes.</Text>
                    <View style={{backgroundColor: '#f3f3f3', borderRadius: 10, paddingVertical: 10,}}>
                    <TextInput
                    
                        placeholder='Outro inquietação...'
                        style={styles.textArea}
                        value={other}
                        onChangeText={(val) => {
                            setOther(val)}}
                        />
                    </View>
                    <Text style={styles.title1}>Imagens dos danos</Text>
                    <Text style={styles.title2}>Várias fotos de diferentes ângulos podem ajudar a documentar com precisão a extensão do dano.</Text>
                    <FlatList style={{marginTop: 10}} columnWrapperStyle={{gap: 10, justifyContent: 'space-around', alignContent: 'flex-start',}} numColumns={2} data={images.concat(['all'])} renderItem={(item) => {
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
            <View style={styles.button}>
                            <Text style={styles.buttonText}>Reportar</Text>
            </View>
                    </ScrollView>
                    
            </View>
        </TouchableWithoutFeedback>
    )
}
export default ReportDamage