import { StackActions, useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"

import { StyleSheet, View, Text, Pressable, Image, Animated, TouchableWithoutFeedback, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import ApprovedModal from "./approvedModal"
import StarReview from "react-native-stars"
import VerticalList from "../components/verticalList"
import { SafeAreaView } from "react-native"
import Modal from 'react-native-modal'
import api, { baseURL } from "../navigators/axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
const Profile = ({}) => {
  const navigation = useNavigation()
    const [data, setData] = useState([
        {
            "ano": 2023,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "24 mpg (cidade), 34 mpg (estrada)",
            "cor_exterior": "Cinza",
            "cor_interior": "Preto",
            "disponivel": true,
            "id": 29,
            "imagem": "https://img1.icarros.com/dbimg/imgadicionalanuncio/5/184409663_1.jpg",
            "marca": "Audi",
            "modelo": "A4",
            "motor": "2.0L 4-cilindros",
            "numero_de_portas": 4,
            "potencia": 201,
            "preco_por_dia": 75,
            "quilometragem": "8,000 milhas",
            "recursos": [
              "Teto Solar Panorâmico",
              "Sistema de Som Bang & Olufsen",
              "Câmera 360 Graus"
            ],
            "tipo_de_combustivel": "Gasolina Premium",
            "torque": "236 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "140 mph",
            "versao": "Premium"
          },
          {
            "ano": 2023,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "25 mpg (cidade), 34 mpg (estrada)",
            "cor_exterior": "Preto",
            "cor_interior": "Bege",
            "disponivel": true,
            "id": 39,
            "imagem": "https://www.webmotors.com.br/wp-content/uploads/2020/12/15165254/Audi-A4-Performance-Black-2021-scaled.jpg",
            "marca": "Audi",
            "modelo": "A4",
            "motor": "4 cilindros 2.0L",
            "numero_de_portas": 4,
            "potencia": 201,
            "preco_por_dia": 70,
            "quilometragem": "7,000 milhas",
            "recursos": [
              "Teto Solar",
              "Sistema de Som Bang & Olufsen",
              "Bancos de Couro"
            ],
            "tipo_de_combustivel": "Gasolina Premium",
            "torque": "236 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "140 mph",
            "versao": "Premium"
          },
          {
            "ano": 2023,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "20 mpg (cidade), 28 mpg (estrada)",
            "cor_exterior": "Vermelho",
            "cor_interior": "Bege",
            "disponivel": true,
            "id": 32,
            "imagem": "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/2018-Lexus-RX350L-suv-red-1200x800-(1).jpg",
            "marca": "Lexus",
            "modelo": "RX",
            "motor": "3.5L V6",
            "numero_de_portas": 4,
            "potencia": 295,
            "preco_por_dia": 80,
            "quilometragem": "6,000 milhas",
            "recursos": [
              "Bancos de Couro",
              "Sistema de Entretenimento Traseiro",
              "Teto Solar Elétrico"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "268 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "135 mph",
            "versao": "350"
          },
          {
            "ano": 2023,
            "capacidade_de_passageiros": 5,
            "consumo_de_combustivel": "26 mpg (cidade), 35 mpg (estrada)",
            "cor_exterior": "Azul",
            "cor_interior": "Cinza",
            "disponivel": true,
            "id": 34,
            "imagem": "https://s3.amazonaws.com/dercocenter.cl/uploads/sites/6/2017/10/mazda-cx-5-galeria-ficha-exterior-10-1.jpg",
            "marca": "Mazda",
            "modelo": "CX-5",
            "motor": "2.5L 4-cilindros",
            "numero_de_portas": 4,
            "potencia": 187,
            "preco_por_dia": 60,
            "quilometragem": "8,000 milhas",
            "recursos": [
              "Câmera Traseira",
              "Tela Touchscreen",
              "Sistema de Som Bose"
            ],
            "tipo_de_combustivel": "Gasolina",
            "torque": "186 lb-ft",
            "transmissao": "Automática",
            "velocidade_maxima": "125 mph",
            "versao": "Touring"
          },
          {
            "ano": 2023,
            "capacidade_de_passageiros": 4,
            "consumo_de_combustivel": "16 mpg (cidade), 24 mpg (estrada)",
            "cor_exterior": "Vermelho",
            "cor_interior": "Preto",
            "disponivel": true,
            "id": 36,
            "imagem": "http://3.bp.blogspot.com/-CFTFf3Qp6iI/UFTxsefPKsI/AAAAAAAAYNo/cQmYQU-NdA0/s1600/chevrolet-camaro-Camaro_vermelho+(4).jpg",
            "marca": "Chevrolet",
            "modelo": "Camaro",
            "motor": "V8 6.2L",
            "numero_de_portas": 2,
            "potencia": 455,
            "preco_por_dia": 85,
            "quilometragem": "8,000 milhas",
            "recursos": [
              "Teto Solar",
              "Sistema de Som Premium",
              "Bancos Esportivos"
            ],
            "tipo_de_combustivel": "Gasolina Premium",
            "torque": "455 lb-ft",
            "transmissao": "Manual 6 marchas",
            "velocidade_maxima": "175 mph",
            "versao": "SS"
          },
          
          
    ])
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
            fontWeight: '800'
        },
        image: {
            width: 110, 
            height: 110,
            alignSelf: 'center',
            borderRadius: 100,
            borderWidth: 5,
            borderColor: '#ebebeb',
            marginTop: 10
        },
        name: {
            alignSelf: 'center',
            marginTop: 13,
            fontSize: 22,
            fontWeight: '900',
        },
        trip: {
            color: 'grey',
            fontSize: 14.5,
            fontWeight: '500'
        },
        dot: {
            color: 'grey',
            fontWeight: '900',
            marginTop: '-0.5%'
        },
        title1: {
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20
        },
        reviews: {
            width: '100%',
            marginRight: 12,
            borderRadius: 15,
            marginBottom: 10,
            
          },
          first: {
            flexDirection: 'row',
            gap: 8,
          },
          reviewImage: {
            width: 42,
            height: 42,
            borderRadius: 50
          },
          info: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 3,
            alignItems: 'flex-start',
            height: 42,
          },
          reviewName: {
            fontSize: 12,
            fontWeight: '600',
            marginRight: 5,
            alignSelf: 'flex-end'
          },
          reviewDate: {
            fontSize: 12.5,
          },
          review: {
            marginTop: 8,
            fontSize: 15,
          },
          seeAll: {
            fontWeight: '700',
            color: '#007bee',
            textAlign:'right'
          },
          desc: {
            color: 'grey',
            fontSize: 15
          },
          extra: {
            flexDirection: 'row',
            gap: 10,
            marginTop: 15,
        },
        extraIcon: {
            color: '#007bee',
        },
        extraTitle: {
            fontWeight: '700',
            fontSize: 16,
            marginBottom: 2
        },
        extraDesc: {
            color: 'grey',
            fontSize: 14,
        },
        extraInfo: {
            flex: 1
        },
    })
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const [open, setOpen] = useState(false)
    useEffect(() => {
    })
    const [textOverflowed, setTextOver] = useState(false)
    const [seeAll, setSeeAll] = useState(false)
    const handleTextLayout = (e) => {
       if (e.nativeEvent.lines.length >= 5){
        setTextOver(true)
      }
    }
    const [ncars, setNCars] =useState([])
    
    useEffect(() => {
      if (route.params?.item?.user){
        api.get(`api/user_cars/${route.params.item.user.id}/`).then(res => {
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
      }
    }, [])
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
         
            {/* <Modal visible={open} animationType='slide' transparent={true}>
                <View style={{flex: 1, backgroundColor: 'transparent', alignContent: 'flex-end', justifyContent: 'flex-end'}}>
                    <TouchableWithoutFeedback onPress={() => {
                        setOpen(false)
                    }}>
                        <View style={{flex: 1}}></View>
                    </TouchableWithoutFeedback>
                    <ApprovedModal name={route.params.item.item.name} setOpen={() => {
                        setOpen(false)
                    }}/>
                </View>
            </Modal> */}
            <Modal isVisible={open} animationIn={'slideInLeft'} animationOut={'slideOutRight'}>
                <View style={{backgroundColor: 'white', padding: 20}}>
                <Text style={{fontSize: 17,
            marginBottom: 10,
            fontWeight: '800'}}>Aprovado</Text>
                {/* <Text style={{color: 'grey', marginTop: 20}}>A definição automática de preços permite-lhe eliminar as conjeturas e aumentar os ganhos, ajustando dinamicamente o seu preço para corresponder à procura.</Text> */}
                 <View style={styles.extra}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>Aprovado para conduzir</Text>
                    <Text style={styles.extraDesc}>"Aprovado para conduzir" significa que {route.params.item.user ?
                    `${route.params.item.user.fullname}`.split(' ')[0]:`${route.params.item.item.name}`.split(' ')[0]} forneceu seu número de carta de condução e passou pelo processo de triagem de condutor do GoingPlaces.</Text>

                </View>
                </View>
                <TouchableOpacity onPress={() => setOpen(false)}>
                    <Text style={{textAlign: 'center', color: '#007bee', fontWeight: '500', marginTop: 15, marginBottom: 10}}>Fechar</Text>
                </TouchableOpacity>
                </View>
            </Modal>
            <View style={[styles.header]}>
                    <Pressable onPress={async ()=>{
                        navigation.goBack()
                        }}>
                        <View style={styles.goBack}>
                            <Icon name='arrow-back' size={23}/>
                        </View>
                    </Pressable>
                    <Text style={styles.title}>Perfil</Text>
                    
                   <View></View>
            </View>
            <Animated.ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{marginTop: 100}}>
                {
                  route.params?.item?.user ? 
                  <>
                  <Image style={styles.image} source={{uri: `${baseURL}${route.params.item.user.profilepic}`}}/>
                    <View style={{flexDirection: 'row', backgroundColor: 'white', width: 80, justifyContent: 'center', paddingVertical: 3, borderRadius: 50, marginTop: -20, marginLeft: -6, alignSelf: 'center', elevation: 2,  shadowColor: 'black', alignItems: 'center',
                                shadowOffset: {width: 1, height: 2},
                                shadowRadius: 4,
                                shadowOpacity: 0.1,}}>
                                          <Icon style={{marginLeft: -5}} name='star' size={20} color='#007bee'/>
                                          <Text style={{color: '#808080d7', marginLeft: 5, fontSize: 16, fontWeight: '700',}}>4.0</Text>
                                      </View>         
                  </>
                  :
                  <>
                  <Image style={styles.image} source={{uri: route.params.item.item.image}}/>
                    <View style={{flexDirection: 'row', backgroundColor: 'white', width: 80, justifyContent: 'center', paddingVertical: 3, borderRadius: 50, marginTop: -20, marginLeft: -6, alignSelf: 'center', elevation: 2,  shadowColor: 'black', alignItems: 'center',
                                shadowOffset: {width: 1, height: 2},
                                shadowRadius: 4,
                                shadowOpacity: 0.1,}}>
                                          <Icon style={{marginLeft: -5}} name='star' size={20} color='#007bee'/>
                                          <Text style={{color: '#808080d7', marginLeft: 5, fontSize: 16, fontWeight: '700',}}>4.0</Text>
                                      </View>
                  </>
                }
                    {/* <Image style={styles.image} source={{uri: route.params.item.item.image}}/>
                    <View style={{flexDirection: 'row', backgroundColor: 'white', width: 80, justifyContent: 'center', paddingVertical: 3, borderRadius: 50, marginTop: -20, marginLeft: -6, alignSelf: 'center', elevation: 2,  shadowColor: 'black', alignItems: 'center',
                                shadowOffset: {width: 1, height: 2},
                                shadowRadius: 4,
                                shadowOpacity: 0.1,}}>
                                          <Icon style={{marginLeft: -5}} name='star' size={20} color='#007bee'/>
                                          <Text style={{color: '#808080d7', marginLeft: 5, fontSize: 16, fontWeight: '700',}}>4.0</Text>
                                      </View> */}
                    <Text style={styles.name}>{route.params.item.user ? route.params.item.user.fullname :route.params.item.item.name}</Text>
                    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 15, gap: 5}}>
                        <Text style={styles.trip}>4 viagens</Text><Text style={styles.dot}>.</Text>
                        <Text style={styles.trip}>Juntou-se {route.params.item.user ? months[new Date(route.params.item.user.date_joined).getMonth()].slice(0, 3) : 'Nov'}. {route.params.item.user ? new Date(route.params.item.user.date_joined).getFullYear() : '2023'}</Text>
                    </View>
                    <View style={{paddingHorizontal: 15, marginTop: 25}}>
                    {(route.params.item?.user?.bio || route.params.host)  && <View><Text style={styles.title1}>Biografia</Text>
                    <Text style={styles.desc} numberOfLines={seeAll ? null : 5} ellipsizeMode="tail" onTextLayout={handleTextLayout}>{route.params.item.user ? route.params.item.user.bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</Text>
                    {textOverflowed && <View>{
                    !seeAll ? 
                    <TouchableOpacity onPress={()=>setSeeAll(true)
                    }>
                      <Text style={styles.seeAll}>Ler mais</Text>
                    </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={()=>setSeeAll(false)}>
                    <Text style={styles.seeAll}>Ler menos</Text>
                  </TouchableOpacity>
                    }</View>}
                    </View>}
                            <Text style={styles.title1}>Info verificada</Text>
                            <View style={{gap: 14}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: -3}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
                                      {/* route.params.item.user.drivers_license */}
                                        <Text style={{color: 'grey', fontSize: 16}}>Aprovado para conduzir</Text>
                                        <TouchableOpacity onPress={() => setOpen(true)}>
                                            <Icon name='help-circle-outline'  style={[styles.subTitle, {fontSize: 20}]}/>
                                        </TouchableOpacity>
                                    </View>
                                    {
                                      route.params.item.user ? 
                                      <View>
                                        {route.params.item?.user?.drivers_license ? <Icon name='checkmark-done-circle-outline' size={25} color={'#007bee'}/>: <Icon name='remove-circle-outline' size={25} color={'red'}/>}
                                      </View>
                                      :
                                      <Icon name='checkmark-done-circle-outline' size={25} color={'#007bee'}/>
                                    }
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Text style={{color: 'grey', fontSize: 16}}>Endereço Email</Text>
                                    <Icon name='checkmark-done-circle-outline'
                                    size={25} color={'#007bee'}/>
                    
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Text style={{color: 'grey', fontSize: 16}}>Número de telefone</Text>
                                    <Icon name='checkmark-done-circle-outline'
                                    size={25} color={'#007bee'}/>
                                </View>
                            </View>
                    
                            {route.params.host == true &&
                            <>
                            <Text style={[styles.title1, {marginTop: 30, marginBottom: 15}]}>Carros</Text>
                            <View style={{marginHorizontal: -15}}>
                                <VerticalList data={ncars.length > 0 ? ncars.concat(data.slice(1, 4)).slice(0, 3) : data.slice(1, 4)}/>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('allCars', {
                                        data: ncars.concat(data),
                                        title: route.params.item.user ? route.params.item.user.fullname : route.params.item.item.name
                                    })
                                }}>
                                    <View style={{flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'flex-end', alignItems: 'center',
                                    marginBottom: -10}}>
                                        <Text style={styles.seeAll}>Ver todos os carros desse locador</Text>
                                        <Icon name='chevron-forward-outline' size={18} color='#007bee' style={{transform: [{translateY: 1}]}}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Text style={[styles.title1, {marginTop: 30}]}>Avaliações de clientes</Text>
                            {
                                route.params.host == true ?
                                <TouchableOpacity onPress={() => {
                                    navigation.dispatch(StackActions.push('reviews1', {
                                      reviews: route.params.reviews,
                                      title: 'Avaliações de clientes'
                                  }))
                                }}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15, justifyContent: 'space-between'}}>
                    
                                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                    <Text style={{color: '#b3b3b3', fontSize: 16, fontWeight: '800', marginRight: 3}}>50%</Text>
                                                    <Icon name='star' size={17.5} color={'#007bee'}/>
                                                    {[...route.params.reviews].length > 0 && <Text style={{color: '#b3b3b3', fontWeight: '500', marginLeft: 5, fontSize: 16}}>({[...route.params.reviews].length} avaliações)</Text>}
                                                </View>
                                            <Icon name='chevron-forward-outline' size={24} color='#007bee' style={{transform: [{translateY: 1}]}}/>
                                              </View>
                                </TouchableOpacity>
                              :
                              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15, justifyContent: 'space-between'}}>
                                
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: '#b3b3b3', fontSize: 16, fontWeight: '800', marginRight: 3}}>50%</Text>
                    <Icon name='star' size={17.5} color={'#007bee'}/>
                    {[...route.params.reviews].length > 0 && <Text style={{color: '#b3b3b3', fontWeight: '500', marginLeft: 5, fontSize: 16}}>({[...route.params.reviews].length} avaliações)</Text>}
                                </View>
                            
                              </View>
                            }
                            {route.params.host == true && [...route.params.reviews].length > 2 ? [...route.params.reviews].slice(0, 2).map((i, index) => {
                                let item = {
                                  item: i
                                }
                                return (
                                  <View style={styles.reviews}>
                                    <View style={{flexDirection: 'row', gap: 10}}>
                                    <TouchableWithoutFeedback onPress={() => {
                                        navigation.dispatch(StackActions.push('profile', {
                                          item: item,
                                          reviews: route.params.reviews,
                                          host: false
                                        }))
                    
                                    }}>
                                      <Image style={styles.reviewImage} source={{uri: item.item.image}}/>
                                    </TouchableWithoutFeedback>
                                    <View style={{flex: 1}}>
                    
                            <View style={styles.info}>
                                <StarReview rating={5} count={5} half={false} fullStar={<Icon name='star' color='#007bee' size={15.5}/>}
                                halfStar={<Icon name='star-half' color='#ffe600' size={20}/>}
                                emptyStar={<Icon name='star' color='#d1d1d1' size={20}/>}/>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.reviewName}>{item.item.name}</Text>
                                    <Text style={styles.reviewDate}>27/11/2023</Text>
                                </View>
                            </View>
                            <View style={styles.second}>
                                <Text style={styles.review}>{item.item.review}</Text>
                            </View>
                            </View>
                                    </View>
                                  </View>
                                )
                              })  : [...route.params.reviews, ...route.params.reviews].map((i, index) => {
                                let item = {
                                  item: i
                                }
                                return (
                                  <View style={styles.reviews}>
                                    <View style={{flexDirection: 'row', gap: 10}}>
                                    <TouchableWithoutFeedback onPress={() => {
                                        navigation.dispatch(StackActions.push('profile', {
                                          item: item,
                                          reviews: route.params.reviews,
                                          host: false
                                        }))
                    
                                    }}>
                                      <Image style={styles.reviewImage} source={{uri: item.item.image}}/>
                                    </TouchableWithoutFeedback>
                                    <View style={{flex: 1}}>
                    
                            <View style={styles.info}>
                                <StarReview rating={5} count={5} half={false} fullStar={<Icon name='star' color='#007bee' size={15.5}/>}
                                halfStar={<Icon name='star-half' color='#ffe600' size={20}/>}
                                emptyStar={<Icon name='star' color='#d1d1d1' size={20}/>}/>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.reviewName}>{item.item.name}</Text>
                                    <Text style={styles.reviewDate}>27/11/2023</Text>
                                </View>
                            </View>
                            <View style={styles.second}>
                                <Text style={styles.review}>{item.item.review}</Text>
                            </View>
                            </View>
                                    </View>
                                  </View>
                                )
                              })}
                        </>
                            }
                              <Text style={[styles.title1, {marginTop: 30}]}>Avaliações de locadores</Text>
                    
                              {
                                route.params.host == true ?
                                <TouchableOpacity onPress={() => {
                                    navigation.dispatch(StackActions.push('reviews1', {
                                      reviews: route.params.reviews,
                                      title: 'Avaliações de locadores'
                                  }))
                                }}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15, justifyContent: 'space-between'}}>
                    
                                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                    <Text style={{color: '#b3b3b3', fontSize: 16, fontWeight: '800', marginRight: 3}}>50%</Text>
                                                    <Icon name='star' size={17.5} color={'#007bee'}/>
                                                    {[...route.params.reviews].length > 0 && <Text style={{color: '#b3b3b3', fontWeight: '500', marginLeft: 5, fontSize: 16}}>({[...route.params.reviews].length} avaliações)</Text>}
                                                </View>
                                            <Icon name='chevron-forward-outline' size={24} color='#007bee' style={{transform: [{translateY: 1}]}}/>
                                              </View>
                                </TouchableOpacity>
                              :
                              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15, justifyContent: 'space-between'}}>
                                
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: '#b3b3b3', fontSize: 16, fontWeight: '800', marginRight: 3}}>50%</Text>
                    <Icon name='star' size={17.5} color={'#007bee'}/>
                    {[...route.params.reviews].length > 0 && <Text style={{color: '#b3b3b3', fontWeight: '500', marginLeft: 5, fontSize: 16}}>({[...route.params.reviews].length} avaliações)</Text>}
                                </View>
                            
                              </View>
                            }
                            {route.params.host == true && [...route.params.reviews].length > 2 ? [...route.params.reviews].slice(0, 2).map((i, index) => {
                                let item = {
                                  item: i
                                }
                                return (
                                  <View style={styles.reviews}>
                                    <View style={{flexDirection: 'row', gap: 10}}>
                                    <TouchableWithoutFeedback onPress={() => {
                                        console.log('pressed')
                                        navigation.dispatch(StackActions.push('profile', {
                                          item: item,
                                          reviews: route.params.reviews,
                                          host: true
                                        }))
                    
                                    }}>
                                      <Image style={styles.reviewImage} source={{uri: item.item.image}}/>
                                    </TouchableWithoutFeedback>
                                    <View style={{flex: 1}}>
                    
                            <View style={styles.info}>
                                <StarReview rating={5} count={5} half={false} fullStar={<Icon name='star' color='#007bee' size={15.5}/>}
                                halfStar={<Icon name='star-half' color='#ffe600' size={20}/>}
                                emptyStar={<Icon name='star' color='#d1d1d1' size={20}/>}/>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.reviewName}>{item.item.name}</Text>
                                    <Text style={styles.reviewDate}>27/11/2023</Text>
                                </View>
                            </View>
                            <View style={styles.second}>
                                <Text style={styles.review}>{item.item.review}</Text>
                            </View>
                            </View>
                                    </View>
                    
                                  </View>
                                )
                              })  : [...route.params.reviews, ...route.params.reviews].map((i, index) => {
                                let item = {
                                  item: i
                                }
                                return (
                                  <View style={styles.reviews}>
                                    <View style={{flexDirection: 'row', gap: 10}}>
                                    <TouchableWithoutFeedback onPress={() => {
                                        navigation.dispatch(StackActions.push('profile', {
                                          item: item,
                                          reviews: route.params.reviews,
                                          host: true
                                        }))
                    
                                    }}>
                                      <Image style={styles.reviewImage} source={{uri: item.item.image}}/>
                                    </TouchableWithoutFeedback>
                                    <View style={{flex: 1}}>
                    
                            <View style={styles.info}>
                                <StarReview rating={5} count={5} half={false} fullStar={<Icon name='star' color='#007bee' size={15.5}/>}
                                halfStar={<Icon name='star-half' color='#ffe600' size={20}/>}
                                emptyStar={<Icon name='star' color='#d1d1d1' size={20}/>}/>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.reviewName}>{item.item.name}</Text>
                                    <Text style={styles.reviewDate}>27/11/2023</Text>
                                </View>
                            </View>
                            <View style={styles.second}>
                                <Text style={styles.review}>{item.item.review}</Text>
                            </View>
                            </View>
                                    </View>

                                  </View>
                                )
                              })}
                    </View>
                </View>
            </Animated.ScrollView>
        </SafeAreaView>
    )
}
export default Profile