import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import api from "../navigators/axios";

const TripClients = () => {
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
            opacity: 0.8,
            display: 'none'
            },
        title: {
            fontSize: 17,
            marginBottom: 10,
            fontWeight: '800',
            marginRight: '-10%'
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
        },
        options: {
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#008cff',
            borderRadius: 7
          },
        
    })
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const [data, setData] = useState([
        {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "25 mpg (cidade), 31 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 20,
      "imagem": "https://s3.amazonaws.com/dercocenter.cl/uploads/sites/6/2017/10/mazda-cx-5-galeria-ficha-exterior-10-1.jpg",
      "marca": "Mazda",
      "modelo": "CX-5",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 187,
      "preco_por_dia": 58,
      "quilometragem": "13,000 milhas",
      "recursos": [
        "Tela de Toque Infotainment",
        "Câmera 360°",
        "Assentos Aquecidos"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "186 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "Touring"
    },
    ])
    const [trips, setTrips] = useState([])
    useFocusEffect(useCallback(() => {
        AsyncStorage.getItem('user')
        .then(res => {
            let user = JSON.parse(res)
            api.get(`api/client_trips/${user.id}/`)
            .then(res => {
                setTrips(res.data)
            })
        })
    }, []))
    
    return (
        <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
            <ScrollView style={{flex: 1}}>
            <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 10,
            marginVertical: 20}}>Viagens marcadas por clientes</Text>
            {
                !true ?
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{}}>Nenhuma viagem.</Text>
                </View>
                :
                <FlatList data={trips.concat(data)} renderItem={(item) => {
                    if (item.item?.data){
                            
                        if (item.item.data?.car?.notice){
                             <View>
                                 <Text>ds;flj</Text>
                             </View>
                        }else {
                         return (
                             <TouchableOpacity onPress={() => {
                                 AsyncStorage.getItem('user')
                           .then(res => {
                             navigation.dispatch(StackActions.push('tripInfo', {
                                 data: item.item,
                                 user: JSON.parse(res),
                                 host: true,
                               }))
                           })
                               }}>
                               <View style={styles.container}>
                                   <View style={{width: 65,
                                       height: 65,
                                       borderRadius: 20,
                                       marginRight: 10,
                                       backgroundColor: 'orange'
                                       }}>
                                       <Image source={{uri: item.item.data.car.imagem}} style={styles.image}/>
                                   </View>
                           
                                   <View style={styles.info}>
                                       <Text style={styles.name}>{item.item.data.car.marca} {item.item.data.car.modelo}</Text>
                                       <Text style={styles.date}>{months[new Date(item.item.data.dateAdded).getMonth()].slice(0, 3)}. {new Date(item.item.data.dateAdded).getDate()}, {new Date(item.item.data.dateAdded).getFullYear()} | {new Date(item.item.data.dateAdded).getHours() < 10 ? `0${new Date(item.item.data.dateAdded).getHours()}`: new Date(item.item.data.dateAdded).getHours() }:{new Date(item.item.data.dateAdded).getMinutes() < 10 ? `0${new Date(item.item.data.dateAdded).getMinutes()}`: new Date(item.item.data.dateAdded).getMinutes() }</Text>
                                   </View>
                                   <View style={styles.prices}>
                                       <Text style={styles.total}>Kz. {item.item.data.car?.notice? parseInt(item.item.data.car.preco_por_dia).toLocaleString(): (parseFloat((item.item.data.car.preco_por_dia + 5000)*2).toLocaleString())}</Text>
                                       <View style={{flexDirection: 'row-reverse'}}>
                                       <View style={{backgroundColor: '#007bee', width: 18, height: 18, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                       <Icon name='pricetags' color="white" size={11}/>
                                       </View>
                                       <Text style={styles.price}>Kz. ${parseFloat(item.item.data.total).toLocaleString()}/dia</Text>
                                       </View>
                                   </View>
                           
                               </View>
                               </TouchableOpacity>
                         )
                        } 
                     }
                    return (
                        <TouchableOpacity onPress={() => {
                            AsyncStorage.getItem('user')
                            .then(res => {
                              navigation.dispatch(StackActions.push('tripInfo', {
                                  data: item.item,
                                  host: true,
                                  user: JSON.parse(res)
                                }))
                            })
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
                
            }
            </ScrollView>
        </View>
    )
}
export default TripClients