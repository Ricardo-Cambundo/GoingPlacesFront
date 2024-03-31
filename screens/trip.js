import { StyleSheet, Text, View, Platform, Pressable, ScrollView, FlatList, TouchableOpacity, Image } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import VerticalList from "../components/verticalList";
import { useState } from "react";
import { StackActions, useNavigation, useRoute } from "@react-navigation/native";
import TripTab1 from "../navigators/tripTab1";
const Trip = () => {
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
                            <Text style={styles.title}>Viagens</Text>
            
                            <View style={styles.options}><Icon color='white' name='options' size={28}/></View>
                    </View>
                    <View style={{flex: 1, paddingTop: 100}}>
                        <TripTab1 />
                    </View>
                    
        </View>
    )
}
export default Trip