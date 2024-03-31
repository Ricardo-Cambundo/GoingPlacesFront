import { StackActions, useNavigation, useRoute } from "@react-navigation/native"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Image, ScrollView } from "react-native"
import { View, Text, StyleSheet, TouchableWithoutFeedback, Pressable, TouchableOpacity, TextInput, Keyboard, Platform } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

const Search1 = ({setSearch}) => {
    const navigation = useNavigation()
    const route = useRoute()
    const textRef = useRef()
    useEffect(()=> {
        textRef.current.focus()
        
    }, [])
    const styles = StyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 95,
            alignItems: 'flex-end',
            boxSizing: 'border-box',
            paddingHorizontal: 15,
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
        input: {
            flex: 1,
            width: '95%',
            backgroundColor: '#dbdbdb44',
            height: 40,
            borderRadius: 10,
            flexDirection: 'row',
            paddingHorizontal: 7,
        
          },
          textInput: {
            flex: 1,
            fontSize: 15,
            borderWidth: 0,
            paddingLeft: 5,
            alignSelf: 'center',
            // color: '#a8a8a8',
            color: 'black'
          },
          cancel: {
            fontWeight: '700',
            color: '#007bee',
            alignSelf: 'center',
            marginTop: 8,
            marginLeft: 10
          },
          title: {
            color: 'grey',
            fontWeight: '800',
            fontSize: 11
          },
          history: {
            flexDirection: 'row',
            marginVertical: 9
          },
          iconCont: {
            backgroundColor: '#f0f0f0b4',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 13,
            height: 45,
            width: 45
          },
          icon: {
            fontSize: 24
          },
          info: {
            justifyContent: 'space-between',
            paddingVertical: 3,
            flex: 1
          },
          local: {
            fontWeight: '600',
            fontSize: 15.5
          },
          description: {
            fontSize: 12,
            color: 'grey',
          }
    })
    const [history, setHistory] = useState([
        {
            id: 1,
            name: 'Nosso Centro, Gamek',
            description: 'Gamek, Luanda'
        }, 
        {
            id: 2, 
            name: 'Aeroporto 4 de Fevereiro',
            description: 'Maianga, Cassequel, Luanda'
        },
        {
            id: 3,
            name: 'Condomínio Jardim de Rosas',
            description: 'Camama, Luanda',
            
        }
    ])
    const [municipios, setMunicipios] = useState([
        {
            id: 1,
            name: 'Luanda',
        }, 
        {
            id: 2,
            name: 'Belas'
        },
        {
            id: 3,
            name: 'Viana'
        },
        {
            id: 4,
            name: 'Cacuaco'
        }
    ])
    const [data, setData] = useState([
        
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
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "22 mpg (cidade), 31 mpg (estrada)",
            "cor_exterior": "Verde",
            "cor_interior": "Cinza",
            "disponivel": true,
            "id": 55,
            "imagem": "https://th.bing.com/th/id/OIP.rPUw89AH52-cqvaXo7mwBQHaFj?rs=1&pid=ImgDetMain",
            "marca": "Jeep",
            "modelo": "Cherokee",
            "motor": "4 cilindros 2.4L",
            "numero_de_portas": 4,
            "potencia": 180,
            "preco_por_dia": 65,
            "quilometragem": "16,000 milhas",
            "recursos": [
              "Sistema de Tração nas Quatro Rodas",
              "Tela de Entretenimento",
              "Bancos Aquecidos"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "171 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "125 mph",
            "versao": "Latitude"
          },
          {
            "ano": 2022,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "25 mpg (cidade), 31 mpg (estrada)",
            "cor_exterior": "Azul Profundo",
            "cor_interior": "Preto",
            "disponivel": true,
            "id": 57,
            "imagem": "https://i.ebayimg.com/00/s/NzcwWDExNzg=/z/6kcAAOSwJBdfqH8p/$_57.JPG?set_id=8800005007",
            "marca": "Mazda",
            "modelo": "CX-5",
            "motor": "4 cilindros 2.5L",
            "numero_de_portas": 4,
            "potencia": 187,
            "preco_por_dia": 70,
            "quilometragem": "14,000 milhas",
            "recursos": [
              "Tela Touchscreen de 10.25 polegadas",
              "Câmera de Ré",
              "Bancos de Couro"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "186 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "130 mph",
            "versao": "Grand Touring"
          },
          {
            "ano": 2023,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "29 mpg (cidade), 39 mpg (estrada)",
            "cor_exterior": "Azul",
            "cor_interior": "Bege",
            "disponivel": true,
            "id": 7,
            "imagem": "https://inv.assets.sincrod.com/ChromeColorMatch/us/WHITE_cc_2019NIC040006_02_1280_RAY.jpg",
            "marca": "Nissan",
            "modelo": "Altima",
            "motor": "4 cilindros 2.5L",
            "numero_de_portas": 4,
            "potencia": 188,
            "preco_por_dia": 52,
            "quilometragem": "9,000 milhas",
            "recursos": [
              "Sistema de Navegação",
              "Câmera 360°",
              "Assentos Aquecidos"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "180 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "125 mph",
            "versao": "SV"
          },
          {
            "ano": 2023,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "27 mpg (cidade), 35 mpg (estrada)",
            "cor_exterior": "Preto",
            "cor_interior": "Cinza",
            "disponivel": true,
            "id": 9,
            "imagem": "https://www.webmotors.com.br/wp-content/uploads/2020/12/15165449/Audi-A4-Performance-Black-2021-fechado-na-frente-scaled.jpg",
            "marca": "Audi",
            "modelo": "A4",
            "motor": "4 cilindros 2.0L",
            "numero_de_portas": 4,
            "potencia": 201,
            "preco_por_dia": 80,
            "quilometragem": "7,000 milhas",
            "recursos": [
              "Faróis de LED",
              "Assentos de Couro",
              "Sistema de Navegação MMI"
            ],
            "tipo_de_combustivel": "Gasolina Premium",
            "torque": "236 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "135 mph",
            "versao": "Premium"
          },
          {
            "ano": 2023,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "26 mpg (cidade), 33 mpg (estrada)",
            "cor_exterior": "Azul",
            "cor_interior": "Bege",
            "disponivel": true,
            "id": 11,
            "imagem": "https://web21st.imgix.net/assets/images/new-vehicles/subaru/subaru-outback-2018-se-premium-dark-blue-pearl.png",
            "marca": "Subaru",
            "modelo": "Outback",
            "motor": "4 cilindros 2.5L",
            "numero_de_portas": 4,
            "potencia": 182,
            "preco_por_dia": 60,
            "quilometragem": "6,000 milhas",
            "recursos": [
              "Sistema de Tração nas Quatro Rodas",
              "Teto Solar",
              "Assistência de Condução"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "176 lb-ft",
            "transmissao": "CVT",
            "velocidade_maxima": "130 mph",
            "versao": "Premium"
          },
          {
            "ano": 2023,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "25 mpg (cidade), 32 mpg (estrada)",
            "cor_exterior": "Vermelho",
            "cor_interior": "Preto",
            "disponivel": true,
            "id": 14,
            "imagem": "https://i0.wp.com/www.themummychronicles.com/wp-content/uploads/2017/08/DSC_2010.jpg?resize=3273%2C2191",
            "marca": "Mazda",
            "modelo": "CX-5",
            "motor": "4 cilindros 2.5L",
            "numero_de_portas": 4,
            "potencia": 187,
            "preco_por_dia": 56,
            "quilometragem": "7,000 milhas",
            "recursos": [
              "Câmera de Ré",
              "Assentos Aquecidos",
              "Sistema de Áudio Bose"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "186 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "125 mph",
            "versao": "Touring"
          },
          {
            "ano": 2023,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "30 mpg (cidade), 40 mpg (estrada)",
            "cor_exterior": "Cinza",
            "cor_interior": "Bege",
            "disponivel": true,
            "id": 17,
            "imagem": "http://img.revendapro.com.br/90dfaf168b7738c1d7cb5e4266451e4c_thumb.png",
            "marca": "Volkswagen",
            "modelo": "Jetta",
            "motor": "1.4L 4-cilindros",
            "numero_de_portas": 4,
            "potencia": 147,
            "preco_por_dia": 48,
            "quilometragem": "9,000 milhas",
            "recursos": [
              "Apple CarPlay",
              "Assistente de Estacionamento",
              "Faróis de LED"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "184 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "130 mph",
            "versao": "SE"
          },
    ])
    const [text, setText] = useState('')
    const [hotel, setHotel] = useState([
        {
            id: 1, 
            name: 'Hotel Alvalade',
            description: 'Alvalade, Avenida Comandante Gika'
        }
    ])
    const [distritos, setDistritos] = useState([
        {
            id: 1,
            name: 'Camama',
            description: 'Belas, Luanda'
        },
        {
            id: 1,
            name: 'Kilamba',
            description: 'Belas, Luanda'
        },
        {
            id: 1,
            name: 'Zango',
            description: 'Viana, Luanda'
        },
    ])
    const [places, setPlaces] = useState([])
    useEffect(() => {
        axios.get(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(`${text.length > 0 ? `${text} Luanda,Angola`: ''} `)}&apiKey=d814a96a316f465d835ee756b252f313`)
        .then(res => {
            let p = [...res.data.features]
            setPlaces(p)
            // places.map((place) => {
            //     console.log(place.properties.category)
            //     console.log(place.properties.suburb, place.properties.county, place.properties.name, place.properties.state, place.properties.street)

            //     // console.log(place.properties.address_line1)
            // })
        
        })
    }, [text])
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={styles.header}>
                    <View style={styles.input}><Icon name='search' size={20} style={{color: '#008cffb4', alignSelf: 'center', }}/><TextInput returnKeyType="search" onSubmitEditing={() => {
                        axios.get(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(`${text.length > 0 ? `${text} Luanda,Angola`: ''} `)}&apiKey=d814a96a316f465d835ee756b252f313`)
                        .then(res => {
                            let p = [...res.data.features]
                            setPlaces(p)
                        })
                    }} value={text} onChangeText={(val) => setText(val)} ref={textRef} placeholderTextColor={'grey'} placeholder="Municípios, bairros ou centralidades" style={styles.textInput}/></View>
                    <TouchableOpacity style={{}} onPress={()=>setSearch()}>
                        <View style={{alignSelf: 'center', height: 38}}>
                            <Text style={styles.cancel}>Cancelar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{flex: 1, ...Platform.select({
                            ios: {
                                paddingTop: 105,
                            },
                            android: {
                                marginTop: 65
                            }
                        })}}>
                    {
                        text.length > 0 ?
                        <View style={{flex: 1, paddingHorizontal: 15}}>
                            {places.length > 0 && 
                            places.map((place) => {
                                if (`${place.properties.name}`.length > 0 && place.properties.name != undefined && !(`${place.properties.name}`.includes('Luanda'))){
                                    console.log(`${place.properties.name}`)
                                    return (
                                        <TouchableWithoutFeedback onPress={()=> {
                                            setSearch(false)
                                            navigation.dispatch(StackActions.push('category', {
                                                title: place.properties.name,
                                                data: data,
                                                section: 'map'
                                              }))
                                           
                                        }}>
                                            <View style={styles.history}>
                                                    <View style={styles.iconCont}>
                                                        <Icon name='location' style={styles.icon}/>
                                                    </View>
                                                    <View style={styles.info}>
                                                        <Text style={styles.local}>{place.properties.name}</Text>
                                                        <Text style={styles.description}>{place.properties.suburb != undefined && `${place.properties.suburb}`.replace('Urban', '').replace('District', '').trim()}, {place.properties.street}, {`${place.properties.state}`.replace('Province', '').trim()}</Text>
                                                    </View>
                                                </View>
                                        </TouchableWithoutFeedback>
                                    )
                                }
                                
                            })}
                        </View>
                        :
                        <View style={{flex: 1, paddingHorizontal: 15}}>
                            {history.length > 0 &&
                            <View>
                                <Text style={styles.title}>Historial</Text>
                                {history.map((item) => {
                                    return (
                                        <TouchableOpacity onPress={()=> {
                                            setSearch(false)
                                            navigation.dispatch(StackActions.push('category', {
                                                title:item.name,
                                                data: data,
                                                section: 'map'
                                              }))
                                        }}>
                                        <View style={styles.history}>
                                            <View style={styles.iconCont}>
                                                <Icon name='time' style={styles.icon}/>
                                            </View>
                                            <View style={styles.info}>
                                                <Text style={styles.local}>{item.name}</Text>
                                                <Text style={styles.description}>{item.description}</Text>
                                            </View>
                                        </View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>}
                            {
                        hotel.length > 0 &&
                        <View>
                    
                            <Text style={[styles.title, {marginTop: 10}]}>Hotéis </Text>
                            {hotel.map((item) => {
                                    return (
                                        <TouchableWithoutFeedback onPress={()=> {
                                            setSearch(false)
                                            navigation.dispatch(StackActions.push('category', {
                                                title:item.name,
                                                data: data,
                                                section: 'map'
                                              }))
                                        }}>
                                        <View style={styles.history}>
                                            <View style={styles.iconCont}>
                                                <Image style={{width: 20, height: 20}} source={require('../assets/propImages/bed.png')} />
                                            </View>
                                            <View style={styles.info}>
                                                <Text style={styles.local}>{item.name}</Text>
                                                <Text style={styles.description}>{item.description}</Text>
                                            </View>
                                        </View>
                                        </TouchableWithoutFeedback>
                                    )
                                })}
                        </View>
                    }
                    {
                        distritos.length > 0 &&
                        <View>
                    
                            <Text style={[styles.title, {marginTop: 10}]}>Distritos </Text>
                            {distritos.map((item) => {
                                    return (
                                        <TouchableWithoutFeedback onPress={()=> {
                                            setSearch(false)
                                            navigation.dispatch(StackActions.push('category', {
                                                title:item.name,
                                                data: data,
                                                section: 'map'
                                              }))
                                        }}>
                                        <View style={styles.history}>
                                            <View style={styles.iconCont}>
                                                <Image style={{width: 20, height: 20}} source={require('../assets/propImages/bed.png')} />
                                            </View>
                                            <View style={styles.info}>
                                                <Text style={styles.local}>{item.name}</Text>
                                                <Text style={styles.description}>{item.description}</Text>
                                            </View>
                                        </View>
                                        </TouchableWithoutFeedback>
                                    )
                                })}
                        </View>
                    }
                            {
                        municipios.length > 0 &&
                        <View>
                    
                            <Text style={[styles.title, {marginTop: 10}]}>Municípios </Text>
                            {municipios.map((item) => {
                                    return (
                                        <TouchableWithoutFeedback onPress={()=> {
                                            setSearch(false)
                                            navigation.dispatch(StackActions.push('category', {
                                                title:item.name,
                                                data: data,
                                                section: 'map'
                                              }))
                                        }}>
                                        <View style={styles.history}>
                                            <View style={styles.iconCont}>
                                                <Image style={{width: 20, height: 20}} source={require('../assets/propImages/city.png')} />
                                            </View>
                                            <View style={{justifyContent: 'center', }}>
                                                <Text style={styles.local}>{item.name}, Luanda</Text>
                                            </View>
                                        </View>
                                        </TouchableWithoutFeedback>
                                    )
                                })}
                        </View>
                    }
                        </View>
                    }
                </ScrollView>
                
            </View>

        </TouchableWithoutFeedback>
    )
}
export default Search1