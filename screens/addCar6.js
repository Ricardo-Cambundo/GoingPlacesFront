import { StackActions, useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import api from "../navigators/axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

const AddCar6 = ({plan, setPlan, brand, year, model,  cili,  num, vel, mileage, trans, cate, fuel, obj, freq, freqShare, notice, shortest, longest, feat, plate, bio, images, price, autoPrice, disc1, disc2, disc3, imagesF, doors, seats }) => {
    const styles = StyleSheet.create({
        title1: {
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20
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
        row: {
            justifyContent: 'space-between',
            paddingVertical: 10,
            alignItems: 'center',
            paddingHorizontal: 5
        },
        label: {
            fontWeight: '600',
            fontSize: 14,
            flex: 1,
            textAlign: 'center',
            color: '#007bee'
        },
        value: {
            color: 'grey',
            fontWeight: '500',
            fontSize: 13,
            textAlign: 'center'
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
    // plan, setPlan, brand, year, model,  cili,  num, vel, mileage, trans, cate, fuel, obj, freq, freqShare, notice, shortes, longest, feat, plate, bio, images, price, autoPrice, disc1, disc2, disc3
    // {
    //     "ano": 2022,
    //     "capacidade_de_passageiros": 5,
    //     "consumo_de_combustivel": "30 mpg (cidade), 40 mpg (estrada)",
    //     "cor_exterior": "Branco",
    //     "cor_interior": "Preto",
    //     "disponivel": true,
    //     "id": 6,
    //     "imagem": "https://http2.mlstatic.com/volkswagen-jetta-20-tsi-highline-4p-2016-branco-top-teto-D_NQ_NP_942557-MLB28312487636_102018-F.jpg",
    //     "marca": "Volkswagen",
    //     "modelo": "Jetta",
    //     "motor": "4 cilindros 1.4L",
    //     "numero_de_portas": 4,
    //     "potencia": 147,
    //     "preco_por_dia": 55,
    //     "quilometragem": "12,000 milhas",
    //     "recursos": [
    //       "Sistema de Som Premium",
    //       "Faróis de LED",
    //       "Sensor de Estacionamento"
    //     ],
    //     "tipo_de_combustivel": "Gasolina",
    //     "torque": "184 lb-ft",
    //     "transmissao": "Automática",
    //     "velocidade_maxima": "130 mph",
    //     "versao": "SE"
    //   },
    const add = () => {
        
        AsyncStorage.getItem('user')
        .then(res => {
            let user = JSON.parse(res)
            let obj = {
                info: {
                    marca: brand,
                    modelo: model,
                    ano: year,
                    motor: `${num} clindros ${cili}`,
                    cili: cili,
                    num: num, 
                    velocidade_maxima: vel,
                    quilometragem: mileage,
                    transmissao: trans,
                    capacidade_de_passageiros: seats,
                    versao: 'SE',
                    numero_de_portas: doors,
                    recursos: feat,
                    descricao: bio,
                    tipo_de_combustivel: fuel,
                    preco_por_dia: price,
                    plano: plan == '' ? '75' : plan,
                    discount3: disc1,
                    discount7: disc2,
                    discount15: disc3,
                    precos_automaticos: autoPrice,
                    plate: plate,
                    max: longest,
                    min: shortest,
                    notice: notice,
                    avaliacao_geral: 0,
                    locador: user,
                    manuntencao: 0,
                    exatidao: 0,
                    comunicacao: 0,
                    higiene: 0,
                    extras: null,
                    user: user,
                    categoria: cate
                    
                },
                images: imagesF
            }
            api.post(`api/addCar/${user.id}/`, {
                ...obj
            })
            .then(res => {
                Alert.alert(
                    'Sucesso',
                    'O seu veiculo foi adicionado ao aplicativo para ser alugado.',
                    [
                        {
                            text: 'OK',
                            onPress: ()=> {
                                navigation.dispatch(StackActions.pop())
                            }
                        }
                    ]
                )
            })
            .catch(err => {
                console.log('err', err)
            })
        })
    }
    const navigation = useNavigation()
    return (
        <View style={{flex: 1, backgroundColor: 'white', width: Dimensions.get('window').width, paddingHorizontal: 15, paddingTop: 110}}>
            <Text style={styles.title1}>Selecione um plano de proteção</Text>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => {
                    setPlan('60')
                }}>
                    <View style={plan.includes('60') ? styles.tag1 : styles.tag}>
                        <Text style={plan.includes('60') ? styles.tagText1 : styles.tagText}>60</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setPlan('')
                }}>
                    <View style={plan == '' ? styles.tag1 : styles.tag}>
                        <Text style={plan == '' ? styles.tagText1 : styles.tagText}>75</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setPlan('80')
                }}>
                    <View style={plan.includes('80') ? styles.tag1 : styles.tag}>
                        <Text style={plan.includes('80') ? styles.tagText1 : styles.tagText}>80</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setPlan('85')
                }}>
                    <View style={plan.includes('85') ? styles.tag1 : styles.tag}>
                        <Text style={plan.includes('85') ? styles.tagText1 : styles.tagText}>85</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setPlan('90')
                }}>
                    <View style={plan.includes('90') ? styles.tag1 : styles.tag}>
                        <Text style={plan.includes('90') ? styles.tagText1 : styles.tagText}>90</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {
                plan == '' ?
                <View style={{marginTop: 25, padding: 10, elevation: 4, backgroundColor: 'white', borderRadius: 10, shadowColor: 'black', shadowRadius: 4,shadowOpacity: 0.5, shadowOffset: {width: 0, height: 0}, marginBottom: 10}}>
                    <View style={styles.row}>
                        <Text style={styles.label}>O que eu vou ganhar?</Text>
                        <Text style={styles.value}>75%</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Deductível</Text>
                        <Text style={styles.value}>Kz 215,000.00</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Cobertura de responsabilidade civil</Text>
                        <Text style={styles.value}>Kz 635,000,000.00</Text>
                    </View> 
                </View>
                : plan == '60' ?
                <View style={{marginTop: 25, padding: 10, elevation: 4, backgroundColor: 'white', borderRadius: 10, shadowColor: 'black', shadowRadius: 4,shadowOpacity: 0.5, shadowOffset: {width: 0, height: 0}, marginBottom: 10}}>
                    <View style={styles.row}>
                        <Text style={styles.label}>O que eu vou ganhar?</Text>
                        <Text style={styles.value}>60%</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Deductível</Text>
                        <Text style={styles.value}>Kz 100,000.00</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Cobertura de responsabilidade civil</Text>
                        <Text style={styles.value}>Kz 635,000,000.00</Text>
                    </View> 
                </View>
                : plan == '80' ?
                <View style={{marginTop: 25, padding: 10, elevation: 4, backgroundColor: 'white', borderRadius: 10, shadowColor: 'black', shadowRadius: 4,shadowOpacity: 0.5, shadowOffset: {width: 0, height: 0}, marginBottom: 10}}>
                    <View style={styles.row}>
                        <Text style={styles.label}>O que eu vou ganhar?</Text>
                        <Text style={styles.value}>80%</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Deductível</Text>
                        <Text style={styles.value}>Kz 635,000.00</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Cobertura de responsabilidade civil</Text>
                        <Text style={styles.value}>Kz 635,000,000.00</Text>
                    </View> 
                </View>
                : plan == '85' ? 
                <View style={{marginTop: 25, padding: 10, elevation: 4, backgroundColor: 'white', borderRadius: 10, shadowColor: 'black', shadowRadius: 4,shadowOpacity: 0.5, shadowOffset: {width: 0, height: 0}, marginBottom: 10}}>
                    <View style={styles.row}>
                        <Text style={styles.label}>O que eu vou ganhar?</Text>
                        <Text style={styles.value}>85%</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Deductível</Text>
                        <Text style={styles.value}>Kz 1,392,600.00</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Cobertura de responsabilidade civil</Text>
                        <Text style={styles.value}>Kz 635,000,000.00</Text>
                    </View> 
                </View>
                : 
                <View style={{marginTop: 25, padding: 10, elevation: 4, backgroundColor: 'white', borderRadius: 10, shadowColor: 'black', shadowRadius: 4,shadowOpacity: 0.5, shadowOffset: {width: 0, height: 0}, marginBottom: 10}}>
                    <View style={styles.row}>
                        <Text style={styles.label}>O que eu vou ganhar?</Text>
                        <Text style={styles.value}>90%</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Deductível</Text>
                        <Text style={styles.value}>Kz 2,110,000.00</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Cobertura de responsabilidade civil</Text>
                        <Text style={styles.value}>Kz 635,000,000.00</Text>
                    </View> 
                </View>
            }
            <TouchableOpacity onPress={() => {
                Alert.alert(
                    'Pronto para adicionar esse veículo?',
                    'Ainda podes editar algumas informações. Deseja adionar esse veiculo ao aplicativo?\nObs: Após adicionar, já não terás como editar essa listagem, por isso certifique se de que tudo esteja de acordo.',
                    [{
                        text: 'Adicionar',
                        onPress: () =>{
                            add()
                        }
                    }, 
                    {
                        text: 'Continuar a editar',
                        onPress: () => {
                            
                        }
                    }
                ]
                )
                }}>
                    <View style={styles.button}>
                        <Text style={styles.save}>Adicionar Listagem</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}
export default AddCar6