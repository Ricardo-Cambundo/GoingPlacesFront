import AsyncStorage from "@react-native-async-storage/async-storage"
import { StackActions, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"
import { useCallback, useEffect, useState } from "react"
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
 
 import api, { baseURL } from "../navigators/axios"

 
const TripDetails = ({data, host }) => {
    const route = useRoute()
    const navigation = useNavigation()
    const styles = StyleSheet.create({
        date: {
            fontSize: 17,
            fontWeight: '900'
        },
        time: {
            color: 'grey',
            marginTop: 3,
            fontSize: 14
        },
        title: {
            color: 'grey',
            marginBottom: 10,
            fontWeight: '500',
            fontSize: 15
        },
        title1: {
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20
        },
        para: {
            marginTop: -5,
            color: 'grey',
            fontSize: 15
        },
        report: {
            color: '#007bee',
            fontSize: 15,
            fontWeight: '600',
            alignSelf: 'center',
            marginTop: 30,
            marginBottom: 10
          },
          dealerImage: {
            width: 55,
            height: 55,
            borderRadius: 15,
            alignSelf: 'center',
            
          },
          dealerInfo: {
            marginLeft: 10,
            paddingVertical: 8,
            justifyContent: 'space-around',
            height: 60
            
          },
          dealerName: {
            fontSize: 15,
            fontWeight: '800',
          },
          dealerLocal: {
            color: '#b1b1b1',
            fontWeight: '700',
            fontSize: 13
          },
          option: {
            flexDirection: 'row',
            marginTop: 25
          },
          chevron: {
            flex: 1,
            textAlign: 'right',
            alignSelf: 'center',
            fontSize: 23,
            color: '#007bee'
          },
          optionIcon: {
            color: '#007bee',
            fontSize: 17,
            marginTop: 2
          },
          optionTexts: {
            gap: 3,
            marginLeft: 14
          },
          optionLabel: {
            fontWeight: '600',
            fontSize: 16,
            
          },
          optionDesc: {
            color: '#b3b3b3',
            fontSize: 13
          },
          info1: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8,
            alignItems: 'flex-end',
            backgroundColor: '#e9e9e9',
            paddingHorizontal: 5,
            paddingVertical: 10,
            borderRadius: 10
        },
        label1: {
            fontSize: 13,
            fontWeight: '500',
            color: '#969696',
            
        },
        value1: {
            fontSize: 14,
            fontWeight: '700',
            color: '#4b4b4b',
        },
        info: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8,
            alignItems: 'flex-end'
        },
        button: {
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginBottom: 10,
            marginTop: 25,
            marginBottom: 10,
            borderColor: '#007bee',
            borderWidth: 1.5
        },
        button2: {
            backgroundColor: '#ff0077',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 10
        },
        save: {
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '500',
            color: '#007bee'
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
      }
    })
    const [photos, setPhotos] = useState([])
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const [extras, setExtras] = useState([
      {
        id: 1,
        name: 'Reabastecimento pré-pago',
        description: 'Economize tempo, facilite a entrega e evite taxas adicionais adicionando este Extra, que permite que você devolva meu carro em qualquer nível de combustível.',
        price: 5000,
      },
      
    ])
    const [user, setUser] = useState(null)
    useEffect(() => {
        data?.data  && api.get(`api/user/${data.client}/`)
        .then(res => {
          setUser(res.data)
        })
    }, [])
    
    const [reviews, setReviews] = useState([
        {name: 'Maria Pereira', image: 'https://th.bing.com/th/id/OIP.BN1TZdlBTRjJ5eucko166wAAAA?rs=1&pid=ImgDetMain',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'}, 
        {name: 'Josefina Nanga', image: 'https://th.bing.com/th/id/R.eae93f57ebd151d1fc189c953f580c5a?rik=QFqunJn9%2fzMcXg&riu=http%3a%2f%2fatlantablackstar.com%2fwp-content%2fuploads%2f2015%2f01%2flanisha-cole-photography_uk-trip-26.jpg&ehk=pET%2fGpy2ze6kM9VBX7oceu6NzL3AszYd9m%2bn41ZLPck%3d&risl=&pid=ImgRaw&r=0',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.'}, 
        {name: 'Beatriz Filipe', image: 'https://kelownadentistry.com/wp-content/uploads/2018/11/beautiful-young-black-woman-smiling-P2R8G2K-700x612.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}, 
      {name: 'Carlos Bastos', image: 'https://c.stocksy.com/a/XJC000/z9/47339.jpg',
    review: 'Lorem ipsum dolor sit amet.'}, 
        {name: 'Noélio Deodato', image: 'https://cdn7.dissolve.com/p/D145_16_499/D145_16_499_1200.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'}])
    const [total, setTotal] = useState('50000')
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20, paddingHorizontal: 15, paddingBottom: 20}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Text style={styles.title}>Começo</Text>
                        <View></View>
                        <Text style={styles.title}>Final</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.date}>{data?.data ? `${new Date(data.data.iniDate).getDate()} ${months[new Date(data.data.iniDate).getMonth()]}, ${new Date(data.data.iniDate).getFullYear()}`: '25 Fev, 2024'}</Text>
                            <Text style={styles.time}>{data.data?.iniHour ? `${data.data.iniHour}:${data.data.iniMinutes}` : '12:30'}</Text>
                        </View>
                        <Icon style={{alignSelf: 'center', fontSize: 30}} name='caret-forward-outline'/>
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.date}>{data?.data ? `${new Date(data.data.finalDate).getDate()} ${months[new Date(data.data.finalDate).getMonth()]}, ${new Date(data.data.finalDate).getFullYear()}`: '25 Fev, 2024'}</Text>
                            <Text style={styles.time}>{data.data?.finalHour ? `${data.data.finalHour}:${data.data.finalMinutes}`: '14:30'}</Text>
                        </View>
                    </View>
                    {/* <Text style={styles.title1}>Local de entrega</Text>
                    <Text style={styles.para}>Camama, BPC, Casa 142</Text> */}
                    {!host && <TouchableOpacity onPress={() => {
                      navigation.dispatch(StackActions.push('reportDamage', {
                        data: data
                      }))
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.save}>Reportar Danos</Text>
                        </View>
                    </TouchableOpacity>}
            
                    <Text style={styles.title1}>{host == true ? 'Locador (Você)' : 'Teu Locador'}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableWithoutFeedback onPress={()=>{
            
                                            navigation.dispatch(StackActions.push('profile', {
                                              item: {
                                                user: data.data?.car?.user,
                                                item: {name: 'Carla Cambundo', image: 'https://ent-nts.ca/c/ecolenationaletheatre/uploads/zva_bank_img.file/Audrey-Dwyer-Colour-Cylla-Von-Tiedemann-NTS-565.jpg',
                                                }
                                              },
                                              reviews: reviews,
                                              host: true
                                            }))
                                          }}>
                                            <View>
                        {
                              data?.data?.car?.user ?
                              <>
                              <Image style={{width: 65, height: 65, borderRadius: 50}} source={{uri: `${baseURL}${data.data.car.user.profilepic}`}}/>
                                                <View style={{flexDirection: 'row', backgroundColor: '#f0f0f0', width: 80, justifyContent: 'center', paddingVertical: 3, borderRadius: 50, marginTop: -6, marginLeft: -6, alignItems: 'center'}}>
                                                    <Icon style={{marginLeft: -5}} name='star' size={20} color='#007bee'/>
                                                    <Text style={{color: '#808080d7', marginLeft: 5, fontSize: 16, fontWeight: '700',}}>4.0</Text>
                                                </View>
            
                              </>
                              :
                              <>
                              <Image style={{width: 65, height: 65, borderRadius: 50}} source={{uri: 'https://ent-nts.ca/c/ecolenationaletheatre/uploads/zva_bank_img.file/Audrey-Dwyer-Colour-Cylla-Von-Tiedemann-NTS-565.jpg'}}/>
                                                <View style={{flexDirection: 'row', backgroundColor: '#f0f0f0', width: 80, justifyContent: 'center', paddingVertical: 3, borderRadius: 50, marginTop: -6, marginLeft: -6, alignItems: 'center'}}>
                                                    <Icon style={{marginLeft: -5}} name='star' size={20} color='#007bee'/>
                                                    <Text style={{color: '#808080d7', marginLeft: 5, fontSize: 16, fontWeight: '700',}}>4.0</Text>
                                                </View>
                              </>
                            }
            
                                            </View>
                                          </TouchableWithoutFeedback>
                                          <View style={styles.dealerInfo}>
                                              <Text style={styles.dealerName}>{data.data?.car?.user ? data.data.car.user.fullname : 'Carla Cambundo'}</Text>
                                              <Text style={styles.dealerLocal}>Locador</Text>
                                          </View>
                    </View>
                    <Text style={styles.title1}>Detalhes da viagem</Text>
            
                    <TouchableOpacity onPress={() => {
                      navigation.dispatch(StackActions.push('tripPhotos', {
                        data: data,
                        host: host
                      }))
                            // navigation.getParent().getParent().navigate('tripPhotos')
                        }}>
                            <View style={styles.option}>
                                <Icon name='image-outline' style={styles.optionIcon}/>
                                <View style={styles.optionTexts}>
                                    <Text style={styles.optionLabel}>Fotos para viagem</Text>
                                    <Text style={styles.optionDesc}>{host ? 'Ver imagens para a viagem do cliente' : 'Ver ou adicionar imagens para a sua viagem'}</Text>
                                </View>
                                <Icon name='chevron-forward' style={styles.chevron}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{backgroundColor: 'white',
                                paddingHorizontal: 15,
                                paddingVertical: 20,
                                borderRadius: 10,
                                shadowColor: 'black',
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    shadowOffset: {width: 0, height: 2},
                    elevation: 1,
                    marginVertical: 5
                    }}>
                        <View style={styles.info}>
                                        <Text style={styles.label1}>Preço diário</Text>
                                        <Text style={styles.value1}>Kz. {data.datal ? `${data.data.car?.notice ? parseInt(data.data.car.preco_por_dia).toLocaleString() : (parseFloat((data.data.car.preco_por_dia + 5000)).toLocaleString())}` : parseFloat(50000 + (50000 ? '': 5000)).toLocaleString()}</Text>
                                    </View>
                        <View style={styles.info}>
                                        <Text style={styles.label1}>Dias de aluguer</Text>
                                        <Text style={styles.value1}>{data?.data ? data?.data?.days : 8 } dia{(data.data?.total ? data.data.days : 8) > 1 ? 's' : ''}</Text>
                                    </View>
                                    <View style={styles.info}>
                                        <Text style={styles.label1}>Preço diário x {data?.data ? data.data.days: 8} dia{(data?.data?.total ? data.data.days : 8) > 1 ? 's' : ''}</Text>
                                        <Text style={styles.value1}>Kz. {parseFloat(50000 + (50000 ? '': 5000)).toLocaleString()}</Text>
                                    </View>
                                    <View style={styles.info}>
                                        <Text style={styles.label1}>Descontos </Text>
                                        <Text style={styles.value1}>Kz. {data.data ? parseFloat(data.data.discount).toLocaleString() : parseFloat(50000 + (50000 ? '': 5000)).toLocaleString()}</Text>
                                    </View>
                                    
                                    <View style={styles.info1}>
                                        <Text style={styles.label1}>Total</Text>
                                        <Text style={styles.value1}>Kz. {data.data ? parseFloat(data.data.total).toLocaleString() : parseInt(total).toLocaleString()}</Text>
                                    </View>
                    </View>
                    {
                      data.data && [...data.data?.extraInfo].length > 0 && <View>
                        <Text style={styles.title1}>Extras</Text>
                        {[...data.data.extraInfo].map((item, i) => {
                        return (
                          <View style={styles.extra} key={i}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>{extras[item-1].name}</Text>
                    <Text style={styles.extraDesc}>{extras[item-1].description}</Text>

                </View>
            </View>
                        )
                      })}
                        </View>
                    }
                    <Text style={styles.title1}>Sobre o veículo</Text>
                    <TouchableOpacity onPress={() => {
                            // navigation.dispatch(StackActions.push('transHistory'))
                           
                            navigation.dispatch(StackActions.push('car', {
                              data: data.data.car,
                              prop: true
                            }))
                        }}>
                            <View style={styles.option}>
                                <Icon name='reader-outline' style={styles.optionIcon}/>
                                <View style={styles.optionTexts}>
                                    <Text style={styles.optionLabel}>{data.data ? `${data.data.car.marca} ${data.data.car.modelo} ${data.data.car.ano}`: 'Mercedes-Benz C-Class 2015'}</Text>
                                    <Text style={styles.optionDesc}>Ver informações sobre o veículo</Text>
                                </View>
                                <Icon name='chevron-forward' style={styles.chevron}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{fontSize: 15, fontWeight: '700',}}>Matrícula</Text>
                        <Text style={{fontSize: 15, color: 'grey'}}>{data.data?.car?.plate ? `${data.data.car.plate}`.toUpperCase() : 'LD-42-52-AO'}</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{fontSize: 15, fontWeight: '700',}}>{!host ? 'Minha Proteção' : 'Proteção do cliente'}</Text>
                        <Text style={{fontSize: 15, color: 'grey'}}>{data.data?.plan ? data.data.plan : 'Mínima'}</Text>
                        </View>
                        <Text style={styles.title1}>Condutor primário</Text>
                       {!host && <Text style={styles.para}>Você deve estar presente para a recepção e devolução do veículo e é responsável pelo veículo.</Text>}
                        <TouchableOpacity onPress={() => {
                           navigation.dispatch(StackActions.push('profile', {
                            item: {
                              user: user,
                              item: {name: 'Carla Cambundo', image: 'https://ent-nts.ca/c/ecolenationaletheatre/uploads/zva_bank_img.file/Audrey-Dwyer-Colour-Cylla-Von-Tiedemann-NTS-565.jpg',
                              }
                            },
                            reviews: reviews,
                            host: false
                          }))
                        }}>
                          <View style={{marginTop: 20}}>
                          {
                                (data?.data && user) ?
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                                <Image style={{width: 45, height: 45, borderRadius: 50}} source={{uri: `${baseURL}${user.profilepic}`}}/>
                                  <Text style={{fontWeight: '500', fontSize: 15}}>{user.fullname}</Text>
                                </View>
                                :
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                          
                                <Image style={{width: 45, height: 45, borderRadius: 50}} source={{uri: 'https://ent-nts.ca/c/ecolenationaletheatre/uploads/zva_bank_img.file/Audrey-Dwyer-Colour-Cylla-Von-Tiedemann-NTS-565.jpg'}}/>
                                  <Text style={{fontWeight: '500', fontSize: 15}}>Filipe Bastos</Text>
                                </View>
                              }
                                              </View>
                        </TouchableOpacity>
                        {!host && <TouchableOpacity onPress={() => {
                      navigation.dispatch(StackActions.push('cancelTrip', {
                        data: data,
                        host: host
                      }))
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.save}>Cancelar viagem</Text>
                        </View>
                    </TouchableOpacity>}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default TripDetails