import { StackActions, useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
const TransHistory = () => {
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
        container: {
            flexDirection: 'row',
            marginVertical: 13
        },
        image: {
            width: 65,
            height: 65,
            borderRadius: 20,
            marginRight: 10,
            resizeMode: 'cover',
        },
        info: {
            justifyContent: 'space-around',
            height: 50,
            alignSelf: 'center'

        },
        prices: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'space-around',
            height: 50,
            alignSelf: 'center'
        },
        name: {
            fontWeight: '800'
        },
        date: {
            fontSize: 12.5,
            color: 'grey',
            fontWeight: '500'
        },
        total: {
            fontWeight: '800',
        },
        price: {
            fontSize: 12.5,
            color: 'grey',
            fontWeight: '600',
            marginRight: 5
        }
    })
    const [data, setData] = useState([
        {
            "ano": 2022,
            "capacidade_de_passageiros": 7,
            "consumo_de_combustivel": "24 mpg (cidade), 29 mpg (estrada)",
            "cor_exterior": "Cinza",
            "cor_interior": "Preto",
            "disponivel": true,
            "id": 31,
            "imagem": "https://img2.icarros.com/dbimg/imgadicionalanuncio/5/201016786_1.jpg",
            "marca": "Kia",
            "modelo": "Sorento",
            "motor": "2.5L 4-cilindros",
            "numero_de_portas": 4,
            "potencia": 191,
            "preco_por_dia": 50,
            "quilometragem": "10,000 milhas",
            "recursos": [
              "Terceira Fila de Bancos",
              "Câmera Traseira",
              "Controle de Clima Dual Zone"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "182 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "125 mph",
            "versao": "LX"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "23 mpg (cidade), 33 mpg (estrada)",
            "cor_exterior": "Preto",
            "cor_interior": "Preto",
            "disponivel": true,
            "id": 33,
            "imagem": "https://ag-spots-2014.o.auroraobjects.eu/2014/10/08/other/2880-1800-crop-mercedes-benz-c-63-amg-coupe-black-series-c604508102014184950_1.jpg",
            "marca": "Mercedes-Benz",
            "modelo": "C-Class",
            "motor": "2.0L 4-cilindros",
            "numero_de_portas": 4,
            "potencia": 255,
            "preco_por_dia": 85,
            "quilometragem": "5,000 milhas",
            "recursos": [
              "Teto Solar Panorâmico",
              "Sistema de Navegação",
              "Assentos de Couro"
            ],
            "tipo_de_combustivel": "Gasolina Premium",
            "torque": "273 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "140 mph",
            "versao": "C300"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "23 mpg (cidade), 34 mpg (estrada)",
            "cor_exterior": "Branco",
            "cor_interior": "Preto",
            "disponivel": true,
            "id": 35,
            "imagem": "https://i.ytimg.com/vi/W4zIhv_XPfg/maxresdefault.jpg",
            "marca": "Ford",
            "modelo": "Fusion",
            "motor": "4 cilindros 2.0L",
            "numero_de_portas": 4,
            "potencia": 188,
            "preco_por_dia": 55,
            "quilometragem": "12,000 milhas",
            "recursos": [
              "Câmera de Ré",
              "Sistema de Som Premium",
              "Controle de Cruzeiro"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "129 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "125 mph",
            "versao": "SE"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "24 mpg (cidade), 32 mpg (estrada)",
            "cor_exterior": "Azul",
            "cor_interior": "Preto",
            "disponivel": true,
            "id": 37,
            "imagem": "https://i.pinimg.com/originals/ab/b7/6d/abb76d4ffedf37e0bbc8231ba834caaa.jpg",
            "marca": "Volkswagen",
            "modelo": "Golf",
            "motor": "4 cilindros 2.0L",
            "numero_de_portas": 4,
            "potencia": 228,
            "preco_por_dia": 60,
            "quilometragem": "9,000 milhas",
            "recursos": [
              "Teto Solar Panorâmico",
              "Sistema de Navegação",
              "Bancos Esportivos"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "258 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "155 mph",
            "versao": "GTI"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "27 mpg (cidade), 37 mpg (estrada)",
            "cor_exterior": "Prata",
            "cor_interior": "Cinza",
            "disponivel": true,
            "id": 38,
            "imagem": "http://4.bp.blogspot.com/-SnZrMgYYIOA/UiTXmFBbNmI/AAAAAAAAyMU/PdhOzW9CzEY/s1600/Altima+(2).jpg",
            "marca": "Nissan",
            "modelo": "Altima",
            "motor": "4 cilindros 2.5L",
            "numero_de_portas": 4,
            "potencia": 188,
            "preco_por_dia": 48,
            "quilometragem": "11,000 milhas",
            "recursos": [
              "Teto Solar",
              "Câmera de Ré",
              "Controle de Cruzeiro"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "180 lb-ft",
            "transmissao": "CVT",
            "velocidade_maxima": "130 mph",
            "versao": "SV"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "28 mpg (cidade), 38 mpg (estrada)",
            "cor_exterior": "Azul",
            "cor_interior": "Bege",
            "disponivel": true,
            "id": 41,
            "imagem": "https://worldautosales.com/wp-content/uploads/2018/07/2012-Hyundai-Sonata-Blue-01-1024x683.jpg",
            "marca": "Hyundai",
            "modelo": "Sonata",
            "motor": "4 cilindros 2.5L",
            "numero_de_portas": 4,
            "potencia": 191,
            "preco_por_dia": 52,
            "quilometragem": "10,000 milhas",
            "recursos": [
              "Teto Solar",
              "Câmera de Ré",
              "Bancos de Couro"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "181 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "125 mph",
            "versao": "Limited"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "26 mpg (cidade), 33 mpg (estrada)",
            "cor_exterior": "Verde",
            "cor_interior": "Cinza",
            "disponivel": true,
            "id": 43,
            "imagem": "https://bengold.tv/wp-content/uploads/2019/07/Subaru-Outback-2020-verde.jpg",
            "marca": "Subaru",
            "modelo": "Outback",
            "motor": "4 cilindros 2.5L",
            "numero_de_portas": 4,
            "potencia": 182,
            "preco_por_dia": 53,
            "quilometragem": "9,000 milhas",
            "recursos": [
              "Teto Solar Panorâmico",
              "Sistema de Navegação",
              "Bancos de Couro"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "176 lb-ft",
            "transmissao": "CVT",
            "velocidade_maxima": "125 mph",
            "versao": "Limited"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "27 mpg (cidade), 37 mpg (estrada)",
            "cor_exterior": "Azul",
            "cor_interior": "Preto",
            "disponivel": true,
            "id": 44,
            "imagem": "https://inv.assets.sincrod.com/ChromeColorMatch/us/WHITE_cc_2019NIC040006_02_1280_RAY.jpg",
            "marca": "Nissan",
            "modelo": "Altima",
            "motor": "2.5L 4-cilindros",
            "numero_de_portas": 4,
            "potencia": 188,
            "preco_por_dia": 55,
            "quilometragem": "12,000 milhas",
            "recursos": [
              "Sistema de Navegação",
              "Câmera de Ré",
              "Controle de Clima Dual"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "180 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "125 mph",
            "versao": "SV"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "26 mpg (cidade), 33 mpg (estrada)",
            "cor_exterior": "Preto",
            "cor_interior": "Cinza",
            "disponivel": true,
            "id": 46,
            "imagem": "https://external-preview.redd.it/DnhfMl4K-5hOdfBfoMBxyWs7Gl5MDBLeEcK2nnJr0BQ.jpg?width=960&crop=smart&auto=webp&s=23c6a37b467dbdf6c9d323226d536a6c328c02f6",
            "marca": "Hyundai",
            "modelo": "Tucson",
            "motor": "2.4L 4-cilindros",
            "numero_de_portas": 4,
            "potencia": 181,
            "preco_por_dia": 53,
            "quilometragem": "14,000 milhas",
            "recursos": [
              "Teto Solar",
              "Sistema de Som Premium",
              "Assistência de Frenagem"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "175 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "125 mph",
            "versao": "Limited"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "29 mpg (cidade), 35 mpg (estrada)",
            "cor_exterior": "Vermelho",
            "cor_interior": "Preto",
            "disponivel": true,
            "id": 48,
            "imagem": "https://ic1.maxabout.us/autos/cars_india/K/2019/8/kia-seltos-intense-red.jpg",
            "marca": "Kia",
            "modelo": "Seltos",
            "motor": "1.6L 4-cilindros",
            "numero_de_portas": 4,
            "potencia": 175,
            "preco_por_dia": 48,
            "quilometragem": "9,000 milhas",
            "recursos": [
              "Teto Solar",
              "Sistema de Som Harman Kardon",
              "Assistência de Faixa"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "195 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "125 mph",
            "versao": "SX"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "27 mpg (cidade), 37 mpg (estrada)",
            "cor_exterior": "Branco",
            "cor_interior": "Preto",
            "disponivel": true,
            "id": 49,
            "imagem": "https://www.dailyautostx.com/wp-content/uploads/2019/01/3-3.jpg",
            "marca": "Nissan",
            "modelo": "Altima",
            "motor": "4 cilindros 2.5L",
            "numero_de_portas": 4,
            "potencia": 188,
            "preco_por_dia": 55,
            "quilometragem": "15,000 milhas",
            "recursos": [
              "Sistema de Navegação",
              "Câmera de Ré",
              "Bancos Aquecidos"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "180 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "125 mph",
            "versao": "SV"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "26 mpg (cidade), 33 mpg (estrada)",
            "cor_exterior": "Azul",
            "cor_interior": "Bege",
            "disponivel": true,
            "id": 51,
            "imagem": "https://img.besthqwallpapers.com/Uploads/21-10-2019/109208/subaru-outback-2020-exterior-blue-station-wagon-new-blue-outback.jpg",
            "marca": "Subaru",
            "modelo": "Outback",
            "motor": "4 cilindros 2.5L",
            "numero_de_portas": 4,
            "potencia": 182,
            "preco_por_dia": 65,
            "quilometragem": "18,000 milhas",
            "recursos": [
              "Sistema de Áudio Harman Kardon",
              "Teto Panorâmico",
              "Tração nas Quatro Rodas"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "176 lb-ft",
            "transmissao": "CVT",
            "velocidade_maxima": "125 mph",
            "versao": "Limited"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "25 mpg (cidade), 28 mpg (estrada)",
            "cor_exterior": "Vermelho",
            "cor_interior": "Bege",
            "disponivel": true,
            "id": 53,
            "imagem": "https://www.karrscars.com/wp-content/uploads/2019/03/DSC_6788.jpg",
            "marca": "Hyundai",
            "modelo": "Santa Fe",
            "motor": "4 cilindros 2.5L",
            "numero_de_portas": 4,
            "potencia": 191,
            "preco_por_dia": 70,
            "quilometragem": "14,000 milhas",
            "recursos": [
              "Teto Solar Panorâmico",
              "Bancos de Couro",
              "Sistema de Entretenimento Traseiro"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "181 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "125 mph",
            "versao": "Limited"
          },
    ])
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
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
                            <Text style={styles.title}>Historial</Text>
            
                           <View></View>
                    </View>
                <ScrollView style={{paddingTop: 100, paddingHorizontal: 15, flex: 1}}>
                    <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 10,
            marginVertical: 20}}>Historial de transações</Text>
                <FlatList data={data} renderItem={(item) => {
                    return (
                        <TouchableOpacity onPress={() => {
                          navigation.dispatch(StackActions.push('transaction', {
                            data: item.item
                          }))
                        }}>
                        <View style={styles.container}>
                            <View style={{width: 65,
                                height: 65,
                                borderRadius: 20,
                                marginRight: 10,
                                backgroundColor: 'orange'
                                }}>
                                <Image source={{uri: item.item.imagem}} style={styles.image}/>
                            </View>
                            
                            <View style={styles.info}>
                                <Text style={styles.name}>{item.item.marca} {item.item.versao}</Text>
                                <Text style={styles.date}>{months[new Date().getMonth()].slice(0, 3)}. {new Date().getDate()}, {new Date().getFullYear()} | {new Date().getHours() < 10 ? `0${new Date().getHours()}`: new Date().getHours() }:{new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}`: new Date().getMinutes() }</Text>
                            </View>
                            <View style={styles.prices}>
                                <Text style={styles.total}>Kz. {parseFloat((item.item.preco_por_dia + 5000)*2).toLocaleString()}</Text>

                                <View style={{flexDirection: 'row-reverse'}}>
                                <View style={{backgroundColor: '#007bee', width: 18, height: 18, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                <Icon name='pricetags' color="white" size={11}/>
                                </View>
                                <Text style={styles.price}>Kz. ${parseFloat(item.item.preco_por_dia)+5000}/dia</Text>
                                </View>
                            </View>
                            
                        </View>
                        </TouchableOpacity>
                    )
                }}/>
                </ScrollView>
        </View>
    )
}
export default TransHistory