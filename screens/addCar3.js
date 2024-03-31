import { useRef, useState } from "react"
import { Dimensions, StyleSheet, Text, View, Pressable, TouchableWithoutFeedback, TouchableOpacity, TextInput, Image, Alert } from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import Icon from 'react-native-vector-icons/Ionicons'
const AddCar3 = ({handleScroll, feat, setFeat, plate, setPlate, bio, setBio}) => {
    const styles = StyleSheet.create({
        title2: {
            fontSize: 13,
            color: '#00e200',
            fontWeight:'500'
        },
        title1: {
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20
        },
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
        report: {
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 14,
            // borderTopWidth: 0.2,
            // borderColor: '#c7c7c7',
            gap: 10
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
        tags2:{
            flexWrap: 'wrap',
            flexDirection: 'row',
        },
        tag: {
            marginHorizontal: 5,
            backgroundColor: '#dbdbdb56',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 20,
            marginVertical: 5
        },
        tagText: {
            fontWeight: '500',
            color: '#969696',
            fontSize: 13
        },
        tag1: {
            marginHorizontal: 5,
            backgroundColor: '#008cff',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 20,
            marginVertical: 5
        },
        tagText1: {
            color: 'white',
            fontWeight: '500',
            fontSize: 13
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
    const features = [
        'Entrada AUX',
        'Aviso de ponto cego',
        'Conversível',
        'Entrada sem chave',
        'Carregadores USB',
        'Câmera de ré',
        'Bluetooth',
        'GPS',
        'Teto solar',
        'Apple CarPlay',
        'Bicicletário',
        'Assentos aquecidos',
        'Acessível para cadeira de rodas',


    ]
    const plateRef = useRef(null)
    
    return (
        <View style={{flex: 1, backgroundColor: 'white', width: Dimensions.get('window').width, paddingHorizontal: 15, paddingTop: 105}}>
            <Pressable  onPress={() => {
                                        plateRef.current.focus()
                                    }}>
                                        <View style={styles.inputContainer}>
                                            <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Qual é a matrícula do carro?</Text>
                                                <TextInput 
                                                 ref={plateRef} style={styles.input} value={plate} onChangeText={(value)=>setPlate(value)}/>
                                            </View>
                                        </View>
                                    </Pressable>
            <Text style={styles.title1}>Selecione os recursos que o teu carro possui (pelo menos 2)</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {[...['All'] ,...[...features]].map((i) => {
                        let item = {
                            item: {
                                name: i
                            }
                        }
                        if (item.item.name == 'All'){
                            return (
                                <TouchableWithoutFeedback onPress={() => {
                                    feat.length > 0 && setFeat([])
                                }}>
                                    <View style={feat.length == 0 ?styles.tag1: styles.tag}>
                                    <Text style={feat.length == 0?styles.tagText1: styles.tagText}>Tudo</Text>
                                                            </View>
                                </TouchableWithoutFeedback>
                            )
                        }
                        return (
                            <TouchableWithoutFeedback onPress={() => {
                                if (feat.includes(item.item.name)){
                                    setFeat(feat.filter((f) => f!=item.item.name))
                                }else {
                                    setFeat([...feat, item.item.name])
                                }
                            }}>
                                <View style={feat.includes(item.item.name) ? styles.tag1 : styles.tag}>
                                    <Text style={feat.includes(item.item.name) ? styles.tagText1 : styles.tagText}>{item.item.name}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                        })}
            </View>
            <Text style={styles.title1}>Descrição (fale sobre o que torna o seu carro único e aproveita estabelecer algumas regras)</Text>
            <Text style={styles.title2}>Obs: Listagens com descrições de pelo menos 50 palavras têm até 3 vezes mais chances de serem reservados.</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10, gap: 5}}>
                                    <Text style={styles.subTitle}>Mínimo de 50 palavras</Text>
                                    <Text style={{fontWeight: '900', fontSize: 17}}>|</Text>
                                    {bio.split(' ').length && bio.length > 0 &&<View style={styles.count}>
                                        <Text style={{fontSize: 17, color: '#9d9d9d', marginLeft: 5, alignSelf: 'center'}}>{bio.split(/\s(?=\S)/ig).length }</Text>
                                    </View>
                                    }
                                </View>
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
                        <TouchableOpacity onPress={() => {
                                    handleScroll(4)                       

                            if (!(/^[A-Z]{2,}-\d{2}-\d{2}-[A-Z]{2,}$/ig).test(`${plate}`)){
                                Alert.alert(
                                    'Matrícula inválida',
                                    'Por favor informe uma matrícula válida para continuar.',
                                    [{
                                        text: 'OK',
                                        onPress: ()=>{}
                                    }]
                                )
                            }else if (feat.length < 2){
                                Alert.alert(
                                    'Recursos em falta',
                                    'Por favor escolha pelo menos 2 recursos que o teu carro possui.',
                                    [{
                                        text: 'OK',
                                        onPress: ()=>{}
                                    }]
                                )
                            }else if (bio.split(/\s(?=\S)/ig).length < 50){
                                Alert.alert(
                                    'Palavras a menos na descrição',
                                    'A descrição precisa de pelo menos 50 palavras.',
                                    [{
                                        text: 'OK',
                                        onPress: ()=>{}
                                    }]
                                )
                            }else {
                                handleScroll(4)
                            }
                }}>
                    <View style={styles.button}>
                        <Text style={styles.save}>Continuar</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}
export default AddCar3