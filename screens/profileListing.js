import { useCallback, useEffect, useState } from "react"
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, Alert } from "react-native"
import { LineChart, ProgressChart } from "react-native-chart-kit"
import VerticalList from "../components/verticalList"
import Icon from 'react-native-vector-icons/Ionicons'
import { StackActions, useFocusEffect, useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "../navigators/axios"

const ProfileListing = () => {
  const navigation = useNavigation()
    const styles = StyleSheet.create({
        title1: {
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20
        },
        button: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
        },
        button2: {
            backgroundColor: '#ff0077',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
        },
        save: {
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
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
          fontSize: 12
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
          fontSize: 12
      },
      label: {
        marginLeft: 10,
        fontSize: 12.5,
        fontWeight: '500',
        color: '#002a52',
      },
      seeAll: {
        fontWeight: '700',
        color: '#007bee',
        textAlign:'right'
        
      },
    })
    const [data, setData] = useState([
        {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "24 mpg (cidade), 32 mpg (estrada)",
      "cor_exterior": "Cinza",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 10,
      "imagem": "https://www.powerimports.com.br/restrito/img/veiculos_seminovos/187/1622605841-162260584160b7001128aac.jpg",
      "marca": "Kia",
      "modelo": "Sportage",
      "motor": "4 cilindros 2.4L",
      "numero_de_portas": 4,
      "potencia": 181,
      "preco_por_dia": 48,
      "quilometragem": "11,000 milhas",
      "recursos": [
        "Tela Sensível ao Toque",
        "Câmera de Visão Traseira",
        "Controle de Estabilidade"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "175 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "LX"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "25 mpg (cidade), 28 mpg (estrada)",
      "cor_exterior": "Prata",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 12,
      "imagem": "https://img.clasf.com.br/2021/07/17/Hyundai-Santa-F-3-3-V6-Prata-20172018-Goinia-1474186-20210717144835.7552750015.jpg",
      "marca": "Hyundai",
      "modelo": "Santa Fe",
      "motor": "4 cilindros 2.5L",
      "numero_de_portas": 4,
      "potencia": 191,
      "preco_por_dia": 54,
      "quilometragem": "14,000 milhas",
      "recursos": [
        "Tela Touchscreen de 8 polegadas",
        "Câmera de Ré",
        "Alerta de Colisão Frontal"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "181 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "SE"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "20 mpg (cidade), 28 mpg (estrada)",
      "cor_exterior": "Branco",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 13,
      "imagem": "https://th.bing.com/th/id/R.61a7cc10ee204111bc08af1dfafc6f13?rik=AqA8zt1KEv8T2g&riu=http%3a%2f%2fwww.car-revs-daily.com%2fwp-content%2fuploads%2f2015%2f11%2f2016-Lexus-RX350-Eminent-White-Pearl-41.jpg&ehk=sD2gODToU9DmIffMLpS82yJmqc3DWgK2dq1ShKB0h80%3d&risl=&pid=ImgRaw&r=0",
      "marca": "Lexus",
      "modelo": "RX",
      "motor": "V6 3.5L",
      "numero_de_portas": 4,
      "potencia": 295,
      "preco_por_dia": 70,
      "quilometragem": "10,000 milhas",
      "recursos": [
        "Bancos de Couro",
        "Sistema de Navegação",
        "Teto Solar Panorâmico"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "267 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "350"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "27 mpg (cidade), 37 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 16,
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
        "Teto Solar",
        "Câmera 360°"
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
      "consumo_de_combustivel": "31 mpg (cidade), 41 mpg (estrada)",
      "cor_exterior": "Branco",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 18,
      "imagem": "https://i.ytimg.com/vi/rqAxZ6YTJ-Y/maxresdefault.jpg",
      "marca": "Hyundai",
      "modelo": "Elantra",
      "motor": "2.0L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 147,
      "preco_por_dia": 52,
      "quilometragem": "11,000 milhas",
      "recursos": [
        "Teto Solar Panorâmico",
        "Assentos de Couro",
        "Sistema de Áudio Premium"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "132 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "120 mph",
      "versao": "Limited"
    },
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
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "24 mpg (cidade), 34 mpg (estrada)",
      "cor_exterior": "Preto",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 22,
      "imagem": "https://4.bp.blogspot.com/-qYY1-tuYVAo/ULwGrW-F7hI/AAAAAAAAs9E/qxZa_9agDJE/s1600/Audi-A4-Attraction+(11).JPG",
      "marca": "Audi",
      "modelo": "A4",
      "motor": "2.0L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 201,
      "preco_por_dia": 80,
      "quilometragem": "10,000 milhas",
      "recursos": [
        "Tela MMI Touch",
        "Teto Solar",
        "Sistema de Som Bang & Olufsen"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "236 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "Premium Plus"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "20 mpg (cidade), 27 mpg (estrada)",
      "cor_exterior": "Branco",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 24,
      "imagem": "https://th.bing.com/th/id/R.61a7cc10ee204111bc08af1dfafc6f13?rik=AqA8zt1KEv8T2g&riu=http%3a%2f%2fwww.car-revs-daily.com%2fwp-content%2fuploads%2f2015%2f11%2f2016-Lexus-RX350-Eminent-White-Pearl-41.jpg&ehk=sD2gODToU9DmIffMLpS82yJmqc3DWgK2dq1ShKB0h80%3d&risl=&pid=ImgRaw&r=0",
      "marca": "Lexus",
      "modelo": "RX",
      "motor": "3.5L V6",
      "numero_de_portas": 4,
      "potencia": 295,
      "preco_por_dia": 75,
      "quilometragem": "9,000 milhas",
      "recursos": [
        "Sistema de Áudio Mark Levinson",
        "Assentos de Couro",
        "Teto Solar Panorâmico"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "267 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "350"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "27 mpg (cidade), 37 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Bege",
      "disponivel": true,
      "id": 26,
      "imagem": "https://www.coches.com/fotos_historicas/nissan/Altima-SR-2015/nissan_altima-sr-2015_r6.jpg",
      "marca": "Nissan",
      "modelo": "Altima",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 188,
      "preco_por_dia": 60,
      "quilometragem": "12,000 milhas",
      "recursos": [
        "Sistema de Navegação",
        "Câmera de Ré",
        "Conexão USB"
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
      "cor_exterior": "Verde",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 28,
      "imagem": "https://bengold.tv/wp-content/uploads/2019/07/Subaru-Outback-2020-verde.jpg",
      "marca": "Subaru",
      "modelo": "Outback",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 182,
      "preco_por_dia": 65,
      "quilometragem": "11,000 milhas",
      "recursos": [
        "Tração nas Quatro Rodas",
        "Tela Sensível ao Toque",
        "Assentos Aquecidos"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "176 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "Limited"
    },
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
    ])
    const [stats, setStats] = useState('Vendas')
    const [list, setList] = useState({
      labels: ['Jan.', 'Feb.', 'Mar.', 'Abr.', 'Mai.', 'Jun.'],
      datasets: [
        {
          data: [20, 45, 0, 0, 20, 0],
        }
      ],
      legend: ['Lucro dos últimos 6 mêses']
    })
    const [man, setMan] = useState(40)
    const [com, setCom] = useState(60)
    const [hig, setHig] = useState(85)
    const [acc, setAcc] = useState(55)
    const [user, setUser] = useState({})
    const [timestamp, setTimestamp] = useState(Date.now())
    const [ncars, setNCars] = useState([])
    useFocusEffect(useCallback(() => {
      setTimestamp(Date.now())
      
      

      AsyncStorage.getItem('user')
      .then(res => {
          setUser(JSON.parse(res))
          api.get(`api/user_cars/${JSON.parse(res).id}/`).then(res => {
          let cars = [...res.data]
          setNCars(cars.map((car) => {
            return {
              "ano": car.info.ano,
              "capacidade_de_passageiros": car.info.capacidade_de_passageiros,
              "disponivel": true,
              "imagem": "https://http2.mlstatic.com/volkswagen-jetta-20-tsi-highline-4p-2016-branco-top-teto-D_NQ_NP_942557-MLB28312487636_102018-F.jpg",
              "marca": car.info.marca,
              "modelo": car.info.modelo,
              "motor": car.info.motor,
              "numero_de_portas": car.info.numero_de_portas,
              "preco_por_dia": car.info.preco_por_dia,
              "quilometragem": car.info.quilometragem,
              "recursos": car.info.recursos,
              "tipo_de_combustivel": car.info.tipo_de_combustivel,
              "transmissao": car.info.transmissao,
              "velocidade_maxima": car.info.velocidade_maxima,
              "descricao": car.info.descricao,
              "discount3": car.info.discount3,
              "discount7": car.info.discount7,
              "discount15": car.info.discount15,
              "notice": car.info.notice,
              "plate": car.info.plate,
              "plano": car.info.plano,
              "max": car.info.max,
              "min": car.info.min,
              "imagens": car.info.images,
              "image": [...car.images][0],
              "locador": car.info.user,
              "manuntencao": car.info.manuntencao,
              "exatidao": car.info.exatidao,
              "comunicacao": car.info.comunicacao,
              "higiene": car.info.higiene,
              "extras": car.info.extras,
              "user": car.info.user,
              "avaliacao_geral": car.info.avaliacao_geral
                      
              

            }
        }))
      })
      })
  }, []))
    
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
            {
                data.length > 0 ? 
                <View style={{flex: 1, paddingVertical: 10, paddingBottom: 10}}>
                  
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => {
                              setStats('Vendas')
                          }}>
                    <View style={stats.includes('Vendas') ? styles.tag1 : styles.tag}>
                                  <Text style={stats.includes('Vendas') ? styles.tagText1 : styles.tagText}>Vendas</Text>
                              </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                              setStats('Médias')
                          }}>
                    <View style={stats.includes('Médias') ? styles.tag1 : styles.tag}>
                                  <Text style={stats.includes('Médias') ? styles.tagText1 : styles.tagText}>Médias</Text>
                              </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                              setStats('Avaliação geral')
                          }}>
                    <View style={stats.includes('geral') ? styles.tag1 : styles.tag}>
                                  <Text style={stats.includes('geral') ? styles.tagText1 : styles.tagText}>Avaliação geral</Text>
                              </View>
                    </TouchableOpacity>
                    
                    
                  </ScrollView>
                  
                  {stats.includes("Vendas") ? <LineChart 
                  bezier
                    data={list}
                    width={Dimensions.get('window').width+5}
                    height={220}
                    yAxisLabel="Kz."
                    
                    style={{
                      marginTop: 10,
                      marginRight: 30,
                      
                    }}
                    chartConfig={{
                      
                      backgroundColor: 'white',
                      backgroundGradientFrom: 'white',
                      backgroundGradientTo: 'white',
                      
                      color: (opacity = 1) => `rgba(2, 86, 165, ${opacity})`,
                      propsForLabels: {
                        dx: 0,
                        dy: 0
                        
                      },
                                              
                    }}
                    />
                    : stats.includes('Médias') ? <View>
                      <LineChart 
                  bezier
                    data={{
                      labels: ['Jan.', 'Feb.', 'Mar.', 'Abr.', 'Mai.', 'Jun.'],
                      datasets: [
                        {
                          data: [1, 5, 3, 4, 7, 3],
                        }
                      ],
                      legend: ['Retenção diária dos veículos em média por parte dos clientes'],
                      
                    }}
                    
                    width={Dimensions.get('window').width}
                    height={220}
                    yAxisLabel=""
                    formatYLabel={(val) => `${val} dia${val>1 ? 's' : ''}`}
                    style={{
                      marginTop: 10,
                      marginRight: 30,
                      backgroundColor: 'yellow'
                      
                      
                    }}
                    chartConfig={{
                      
                      backgroundColor: 'white',
                      backgroundGradientFrom: 'white',
                      backgroundGradientTo: 'white',
                      
                      color: (opacity = 1) => `rgba(2, 86, 165, ${opacity})`,
                      propsForLabels: {
                        dx: 0,
                        dy: 0
                        
                      },
                                              
                    }}
                    />
                    </View>
                    :
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginBottom: -15}}>
                            <ProgressChart data={{
                              labels: ['Manutenção', 'Comunicação', 'Higiene', 'd'],
                              data: [parseInt(acc)/100, parseInt(man)/100, parseInt(com)/100, parseInt(hig)/100],
                              colors: ['#00b7ff', '#0084ff', '#005aad', '#002a52'],
                            }}
                            strokeWidth={11}
                            radius={32}
                            hideLegend={true}
                            width={200}
                            height={200}
                            chartConfig={{
                              propsForDots: {
                      
                              },
                              backgroundColor: 'white',
                              backgroundGradientFrom: 'white',
                              backgroundGradientTo: 'white',
                      
                              color: (opacity = 1) => `rgba(2, 86, 165, ${opacity})`,
                              propsForLabels: {
                                dx: 0,
                                dy: 0
                      
                              },
                      
                            }}
                      
                            withCustomBarColorFromData
                            />
                            <View style={{justifyContent: 'space-around', height: 130, alignSelf: 'flex-start', marginRight: 15, marginTop: 10}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', height: 20}}>
                      
                              <View style={{width: 15, height: 15, borderRadius: 50, backgroundColor: '#00b7ff'}}></View>
                              <Text style={styles.label}>Exatidão {acc}%</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', height: 20}}>
                      
                                <View style={{width: 15, height: 15, borderRadius: 50, backgroundColor: '#0084ff'}}></View>
                                <Text style={styles.label}>Manutenção {man}%</Text>
                              </View>
                              <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                <View style={{width: 15, height: 15, borderRadius: 50, backgroundColor: '#005aad'}}></View>
                                <Text style={styles.label}>Comunicação {com}%</Text>
                              </View>
                              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{width: 15, height: 15, borderRadius: 50, backgroundColor: '#002a52'}}></View>
                                <Text style={styles.label}>Higiene {hig}%</Text>
                              </View>
                            </View>
                      
                          </View>}
                          
                          <Text style={styles.title1}>Meus Carros</Text>
                          <View style={{marginHorizontal: -15}}>
                                <VerticalList data={ncars.concat(data).slice(0, 3)}/>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('allCars', {
                                        data: ncars.concat(data),
                                        title: 'Ricardo Cambundo'
                                    })
                                }}>
                                    <View style={{flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'flex-end', alignItems: 'center',
                                    marginBottom: -10}}>
                                        <Text style={styles.seeAll}>Ver todos os meus carros</Text>
                                        <Icon name='chevron-forward-outline' size={18} color='#007bee' style={{transform: [{translateY: 1}]}}/>
                                    </View>
                                </TouchableOpacity>
                                
                            </View>
                            <TouchableOpacity style={{marginTop: 30}} onPress={() => {
                            if (user.drivers_license == true){
                              navigation.dispatch(StackActions.push('addcar'))
                            }else {
                              Alert.alert(
                                '',
                                'Para adicionar carros, precisas ser aprovado para conduzir primeiro.'
                              )
                            }

                  }}>
                    <View style={[styles.button, { }]}>
                        <Text style={[styles.save, {fontSize: 15}]}>Adicionar Carro</Text>
                    </View>
                </TouchableOpacity>

                </View>
                    :
                <View>
                    <View style={{paddingVertical: 35, alignItems: 'center'}}>
                <Text style={{color: '#b3b3b3', fontWeight: '700'}}>Ainda não adicionaste nenhum carro para aluguel</Text>
                <Image style={{width: Dimensions.get('window').width- 30, height: Dimensions.get('window').width, resizeMode: 'contain', marginVertical: -30, marginBottom: -55}} source={require('../assets/propImages/station.png')}/>
                </View>
                <TouchableOpacity onPress={() => {
                    if (user.drivers_license == true){
                      navigation.dispatch(StackActions.push('addcar'))
                    }else {
                      Alert.alert(
                        '',
                        'Para adicionar carros, precisas ser aprovado para conduzir primeiro.'
                      )
                    }
                }}>
                    <View style={styles.button}>
                        <Text style={styles.save}>Adicionar Carro</Text>
                    </View>
                </TouchableOpacity>
                </View>
            }
        </ScrollView>
    )
}
export default ProfileListing