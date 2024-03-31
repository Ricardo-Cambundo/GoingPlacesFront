import { StackActions, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native"
import { Alert, Dimensions, Image, SafeAreaView, ScrollView } from "react-native"
import { TouchableWithoutFeedback } from "react-native"
import { Animated, Pressable, StyleSheet, Text, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import NewestSlide from "../components/NewestSlide"
import CarSlider from "../navigators/carSlider"
import Recommmendations from "../components/recommendations"
import { TabBar } from "react-native-tab-view"
import CarInfo from "./carInfo"
import Reviews from "./reviews"
import { useCallback, useEffect, useRef, useState } from "react"
import StarReview from "react-native-stars"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { ProgressChart } from "react-native-chart-kit"
import Review1 from "../components/review1"
import Swiper from "react-native-swiper"
import { Modal } from "react-native"
import Extra from "./extra"
import ReportListing from "./reportListing"
import Dates from "./dates"
import Dates1 from "./dates1"
import { baseURL } from "../navigators/axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

const scrollY = new Animated.Value(0)


const Car = () => {
    
    const [extraOpen, setExtraOpen] = useState(false)
    const [openReport, setReportOpen] = useState(false)
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


    const route = useRoute()
    const [total, setTotal] = useState(route.params.data.preco_por_dia + 5000)
    const navigation = useNavigation()
    const [extras, setExtras] = useState([
      {
        id: 1,
        name: 'Reabastecimento pré-pago',
        description: 'Economize tempo, facilite a entrega e evite taxas adicionais adicionando este Extra, que permite que você devolva meu carro em qualquer nível de combustível.',
        price: 5000,
      },
      
    ])
    
    const [like, setLike] = useState(false)
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
    useEffect(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
            display: 'none'
        }
    })
        navigation.getParent()?.getParent()?.setOptions({
            tabBarStyle: {
                display: 'none'
            }
        })
        return () => {
          navigation.getParent()?.setOptions({
            tabBarStyle: {
                display: 'flex'
            }
        })
            navigation.getParent()?.getParent()?.setOptions({
                tabBarStyle: {
                    display: 'flex'
                }
            })
        }
    })
    const specifications = [
        {
            id: 1,
            name: 'Motor',
            image: require('../assets/propImages/carEngine.png'),
            prop: 'motor'
        },
        {
          id: 2,
          name: 'Transmissão',
          image: require('../assets/propImages/transmission.png'),
          prop: 'transmissao'
        },
        {
          id: 3,
          name: 'Velocidade Máxima',
          image: require('../assets/propImages/speedometer.png'),
          prop: 'velocidade_maxima'
        },
        {
          id: 4,
          name: 'Combustível',
          image: require('../assets/propImages/fuel.png'),
          prop: 'tipo_de_combustivel'
        },
        {
          id: 5,
          name: 'Quilometragem',
          image: require('../assets/propImages/dashboard.png'),
          prop: 'quilometragem'
        },
        {
          id: 6,
          name: 'Portas',
          image: require('../assets/propImages/car-door.png'),
          prop: 'numero_de_portas'
        },
        // {
        //     id: 7,
        //     name: 'Lotação',
        //     image: require('../assets/propImages/car-seat.png'),

        // }
    ]
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white'
            },
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
            backgroundColor: scrollY.interpolate({
                inputRange: [0, 210, 235, 236],
                outputRange: ['transparent', 'transparent', 'white', 'white'],
            })
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
        likeCont: {
            width: 40, 
            height: 40, 
            borderRadius: 50,
            backgroundColor: 'white',
            // elevation: 10,
            // shadowColor: 'black',
            // shadowRadius: 2,
            // shadowOpacity: 0.1,
            // shadowOffset: {width: 0, height: 0},
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.8
            
        },
        wrapper: {
          height: 330,
          
          
        },
        image: {
          height: 330,
          width: '100%',
          resizeMode: 'cover',
          
            // borderBottomLeftRadius: 20,
            // borderBottomRightRadius: 20
        },
        tags: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingTop: 15,
        },
        tagCont: {
            backgroundColor: '#dbdbdb56',
            paddingHorizontal: 10,
            borderRadius: 10,
            paddingTop: 5,
            height: 28
        },
        tag: {
            color: '#007bee',
            fontWeight: '700',
            transform: [{translateY: -1}],
        },
        title: {
            flexDirection: 'row',
            padding: 15,
            alignItems: 'flex-end',
            paddingBottom: 10
        },
        carBrand: {
            fontSize: 20,
            fontWeight: '600'
        },
        carModel: {
            fontSize: 14,
            fontWeight: '600',
            color: '#808080d7',
            marginLeft: 5,
            marginBottom: 1
        },
        tabs: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: '100%',
            zIndex: 0,
            justifyContent: 'space-around'
            
        },
        tab: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            
          },
          activeTab: {
          },
          tabIndicator: {
            backgroundColor: '#007AFF',
            zIndex: 1,
            height: 0,
            borderRadius: 20,
            width: '30%',
            marginLeft: '7%',
            backgroundColor: '#007bee',
            top: 43,
          },
          tabText1: {
            fontWeight: '700',
            width: '200%',
            fontSize: 16,
            color: '#007bee'
          },
          tabText2: {
            fontSize: 16,
            color: '#b9b9b9',
            fontWeight: '600'
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
          subTitle: {
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20

          },
          contacts: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center'
          },
          contact: {
            backgroundColor: '#f0f0f0',
            width: 55,
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50
          },
          description: {
            color: 'grey',
            fontSize: 15,
          },
          seeAll: {
            textAlign: 'right',
            fontWeight: '700',
            marginTop: 5,
            color: '#007bee'
          },
          specs: {
            justifyContent: 'space-between'
          },
          spec: {
            backgroundColor: '#002950',
            width: '32%',
            height: 115,
            borderRadius: 15,
            padding: 5,
            justifyContent: 'space-between',
            paddingBottom: 17,
            paddingHorizontal: 8,
            marginBottom: '2%'
        
          },
          specImage: {
            width: '40%', 
            height: '40%',
            marginTop: 7
            
          },
          specTitle: {
            fontWeight: '800',
            color: 'white',
            fontSize: 12.5
            
          },
          specInfo: {
            color: '#d1d1d1',
            justifyContent: 'flex-end',
            fontWeight: '500',
            fontSize: 13
          },
          reserves: {
            flex: 1,
          },
          reserveText: {
            fontWeight: '700',
            fontSize: 14.5,
            color: '#b1b1b1'
          },
          reserve: {
            backgroundColor: '#f3f3f3',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 15,
            paddingHorizontal: 10,
            marginTop: 10,
            paddingVertical: 10,
            gap: 2,
          },
          reserveIcon: {
            color: 'grey',
            transform: [{scale: 0.75}]
          },
          reserveInfo: {
            color: 'grey',
            fontWeight: '700',
            fontSize: 14.5,
            
          },
          policies: {
            flexDirection: 'row',
            gap: 14,
            backgroundColor: '#007bee21',
            paddingVertical: 10,
            borderRadius: 15,
            paddingHorizontal: 10
          },
          policy: {
            flex: 1,
          },
          policyTitle: {
            fontSize: 15,
            fontWeight: '600',
            color:'#002950'
          },
          policyText: {
            color: '#002950',
          },
          policyImage: {
            width: 45,
            height: 45,
            alignSelf: 'center'
          },
          feat: {
            backgroundColor: '#003f7a1f',
            marginRight: 10,
            width: 125,
            padding: 10,
            borderRadius: 15,
            alignItems: 'center',
            gap: 5

          },
          featImage: {
            width: 40,
            height: 40,
          },
          featText: {
            color: '#002950',
            fontWeight: '500',
            fontSize: 13
          },
          label: {
            marginLeft: 10,
            fontSize: 12.5,
            fontWeight: '700',
            color: '#002a52',
          },
          
          extraName: {
            fontWeight: '700',
            fontSize: 15,
          },
          extraDesc: {
            color: 'grey',
            fontSize: 15,
            marginTop: 5
          },
          extraPrice: {
            color: 'grey',
            fontWeight: '700',
            fontSize: 14
          },
          report: {
            color: '#007bee',
            fontSize: 15,
            fontWeight: '600',
            alignSelf: 'center',
            marginTop: 30,
            marginBottom: 40
          },
          checkout: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            borderTopColor: '#80808041',
            borderTopWidth: 1,
            paddingTop: 12,
            paddingBottom: 8,
            
          },
          checkoutInfo:  {
            alignSelf: 'flex-start',
            height: 30,
            gap: 5,
            justifyContent: 'space-between'
          },
          price: {
            fontWeight: '800',
            fontSize: 17,
          },
          total: {
            color: 'grey',
            fontWeight: '500'
          },
          button: {
            backgroundColor: '#007bee',
            alignSelf: 'flex-start',
            paddingHorizontal: 20,
            paddingVertical: 5,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
          },
          buttonText: {
            color: 'white',
            fontWeight: '700',
            fontSize: 15
          }
    })
    
    const scrollRef = useRef(null)
    const indicatorPos = new Animated.Value(0)
    const [activeTab, setActiveTab] = useState(0)
    const handleTabPress = (index) => {
        
        scrollRef.current.scrollTo({x: index * Dimensions.get('window').width, animated: true})

    }
    const likeValue = new Animated.Value(1)
    const [textOverflowed, setTextOver] = useState(false)
    const [seeAll, setSeeAll] = useState(false)
    const handleTextLayout = (e) => {
        const {lines} = e.nativeEvent
        if (lines.length >= 5){
            setTextOver(true)
        }
    }
    useEffect(() => {
      Animated.timing(likeValue, {
        toValue: 1.3,
        duration: 60,
        useNativeDriver: true
      }).start(() => {
        Animated.timing(likeValue, {
          toValue: 1,
          duration: 40,
          useNativeDriver: true
        }).start()
      })
    }, [like])
    const [hour, setHour] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [dayNum, setDayNum] = useState(new Date().getDate())
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())
    const [finalDay, setFinalDay] = useState(new Date().getDate())
    const [finalMonth, setFinalMonth] = useState(new Date().getMonth())
    const [man, setMan] = useState(40)
    const [com, setCom] = useState(60)
    const [hig, setHig] = useState(85)
    const [acc, setAcc] = useState(55)
    const [finalYear, setFinalYear] = useState(new Date().getFullYear())

    
    const [finalDate, setFinalDate] = useState(new Date(finalYear, finalMonth, finalDay, hour + 1))
    const [finalMinutes, setFinalMinutes] = useState(finalDate.getMinutes())
    const [iniDate, setIniDate] = useState(new Date(year, month, dayNum, hour))
    const [finalHour, setFinalHour] = useState(finalDate.getHours())
    useEffect(()=> {
      setIniDate(new Date(year, month, dayNum, hour))
      setFinalDate(new Date(year, month, dayNum, hour + 1)
      )
    }, [dayNum, year, month, hour])
    //multiplying the diffence between the final date and initial date with the price
    useEffect(() => {
        let date1 = iniDate.getTime()
        let date2 = finalDate.getTime()
        //convert back to days from milliseconds
        let differenceDays = Math.round((date2-date1) / (1000 * 60 * 60 * 24)+1)
        setTotal(differenceDays * (route.params.data.preco_por_dia + (route.params.data?.notice ? '' : 5000)))
    }, [iniDate, finalDate])

    const AnimatedIcon = Animated.createAnimatedComponent(Icon)
    const [openDate, setDate] = useState(false)
    const [openDate1, setDate1] = useState(false)
    const [bio, setBio] = useState(route.params.data.descricao ? 
      route.params.data.descricao : `Desfrute da comodidade e do conforto do meu ${route.params.data.marca}  para viagens incríveis. Para garantir uma experiência impecável, algumas regras simples: proibido transportar animais de estimação, assegurando a higiene e preservação do veículo. Com flexibilidade e transparência, reserve agora e embarque numa viagem sem preocupações! E por favor retorne o veículo nas mesmas condições em que o encontrares! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)
      useEffect(() => {
        console.log(route.params.data.exatidao)
      })
      const [user, setUser] = useState(null)
      useFocusEffect(useCallback(() => {
        AsyncStorage.getItem('user')
        .then(res => {
          setUser(JSON.parse(res))
        })
      }, []))
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
           <Modal visible={openDate} animationType='slide'>
            <Dates year={year} hour={hour} minutes={minutes} month={month} day={dayNum} setYear={(y)=>setYear(y)} setHour={(h) => setHour(h)} setMinutes={(m)=>setMinutes(m)} setMonth={(m)=>setMonth(m)} setDay={(d) => setDayNum(d)}setOpenDate={()=> {
              setDate(false)
            }}/>
            </Modal>
            <Modal visible={openDate1} animationType='slide'>
            <Dates1 finalMinutes={finalMinutes} setFinalMinutes={setFinalMinutes} iniDate={iniDate} prevHour={hour} prevDay={dayNum} prevMonth={month} prevYear={year} setFinalDate={(d) => setFinalDate(d)} finalDate={finalDate} year={finalDate.getFullYear()} hour={finalDate.getHours()} minutes={minutes} month={finalDate.getMonth()} day={finalDate.getDate()} setYear={(y)=>setFinalYear(y)} setHour={(h) => setFinalHour(h)} setMinutes={(m)=>setMinutes(m)} setMonth={(m)=>setFinalMonth(m)} setDay={(d) => setFinalDay(d)}setOpenDate={()=> {
              setDate1(false)
            }}/>
            </Modal>
          <Modal visible={extraOpen} animationType='slide'>
            <Extra setExtraOpen={()=> {
              setExtraOpen(false)
            }} />
          </Modal>
          <Modal visible={openReport} animationType="slide">
            <ReportListing setReportOpen={() => {
              setReportOpen(false)
            }}/>
          </Modal>
            <Animated.View style={styles.header}>
                    <Pressable onPress={async ()=>{
                        navigation.getParent()?.getParent()?.setOptions({
                            tabBarStyle: {
                                display: 'flex'
                            }
                        })
                        navigation.getParent()?.setOptions({
                          tabBarStyle: {
                              display: 'flex'
                          }
                      })
                        
                        navigation.goBack()
                        }}>
                        <View style={styles.goBack}>
                            <Icon name='arrow-back' size={23}/>
                        </View>
                    </Pressable>
                   <Pressable onPress={() => {
                    setLike(!like)
                   }}>
                     <View style={styles.likeCont}>
                          {like ? <AnimatedIcon style={{transform: [{scale: likeValue}]}} color='red' name='heart' size={24}/>
                          :
                          <AnimatedIcon style={{transform: [{scale: likeValue}]}} name='heart-outline' size={24}/>}
                     </View>
                   </Pressable>
            </Animated.View>
            <Animated.ScrollView onScroll={Animated.event([
            {
                nativeEvent: {contentOffset: {y: scrollY}}
            }
            ], {useNativeDriver: true,
            listener: (e) => {
            }})}>
                
                
                    <Animated.View style={{transform: [{scale: scrollY.interpolate({
                          inputRange: [-330, 0],
                          outputRange: [3, 1],
                          extrapolate: 'clamp',
                        })}]}}>
                      {
                        route.params.data.imagens ?
                        <Swiper loop={false} dotStyle={{
                          marginBottom: -20,
                          width: 6,
                          height: 6,
                          backgroundColor: 'lightgrey',
                          
                          
                        }} activeDotStyle={{
                          backgroundColor: '#007bee',
                          marginBottom: -20,
                          width: 6,
                          height: 6
                        }} style={styles.wrapper} showButtons={true} >
                          {
                            [...route.params.data.imagens].map((img) => {
                              return (
                                <Animated.Image style={[styles.image, {
                          
                                }]} source={{uri: `${baseURL}/media/${img}`}}/>
                              )
                            })
                          }
                        </Swiper>
                        :
                        <Swiper loop={false} dotStyle={{
                          marginBottom: -20,
                          width: 6,
                          height: 6,
                          backgroundColor: 'lightgrey',
                          
                          
                        }} activeDotStyle={{
                          backgroundColor: '#007bee',
                          marginBottom: -20,
                          width: 6,
                          height: 6
                        }} style={styles.wrapper} showButtons={true} >
                          
                          <Animated.Image style={[styles.image, {
                          
                        }]} source={{uri: route.params.data.imagem}}/>
                        <Animated.Image style={[styles.image, {
                          
                        }]} source={{uri: route.params.data.imagem}}/>
                        <Animated.Image style={[styles.image, {
                          
                        }]} source={{uri: route.params.data.imagem}}/>
                        <Animated.Image style={[styles.image, {
                          
                        }]} source={{uri: route.params.data.imagem}}/>
                        <Animated.Image style={[styles.image, {
                          
                        }]} source={{uri: route.params.data.imagem}}/>
                        <Animated.Image style={[styles.image, {
                          
                        }]} source={{uri: route.params.data.imagem}}/>
                        </Swiper>
                      }
                    </Animated.View>
                    
                    <View style={{backgroundColor: 'white'}}>
                      <View style={[styles.tags, {marginTop: -5}]}>
                          <View style={styles.tagCont}>
                              <Text style={styles.tag}>Sedan</Text>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                              <Icon name='star' size={19} color={'#007bee'}/>
                              <Text style={{color: '#808080d7', alignSelf: 'center', marginLeft: 5, fontSize: 14, fontWeight: '700', transform: [{translateY: -2}]}}>{route.params.data.exatidao != undefined ?  route.params.data.avaliacao_geral: '3.0'}</Text>
                          </View>
                      </View>
                      <View style={styles.title}><Text style={styles.carBrand}>{route.params.data.marca} </Text><Text style={styles.carModel}>{route.params.data.modelo}</Text>
                      </View>
                      <View style={{paddingHorizontal: 15, marginTop: 10}}>
                          {/* <Text style={styles.subTitle}>Locador</Text> */}
                          <View style={{flexDirection: 'row'}}>
                              <TouchableWithoutFeedback onPress={()=>{
                                console.log(route.params.data.user)
                                navigation.dispatch(StackActions.push('profile', {
                                  item: {
                                    user: route.params?.data?.user,
                                    item: {name: 'Carla Cambundo', image: 'https://ent-nts.ca/c/ecolenationaletheatre/uploads/zva_bank_img.file/Audrey-Dwyer-Colour-Cylla-Von-Tiedemann-NTS-565.jpg',
                                    }
                                  },
                                  reviews: reviews,
                                  host: true
                                }))
                              }}>
                                <View>
                                {/* profilepic == null ? <Image source={require('../assets/propImages/blankprofile.jpg')}   style={{width: 40, height: 40, borderRadius: 50}}/>:    <>
                {profilepic != null &&

                <Image key={3}  style={{width: 40, height: 40, borderRadius: 50}}source={{uri: `${baseURL}${profilepic}?${timestamp}`}}/>
                }</> */}
                {
                  route.params?.data?.user ? 
                  <>
                  <Image style={{width: 65, height: 65, borderRadius: 50}} source={{uri: `${baseURL}${route.params.data.user.profilepic}`}}/>
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
                                  <Text style={styles.dealerName}>{route.params?.data?.user ? route.params.data.user.fullname : 'Carla Cambundo'}</Text>
                                  <Text style={styles.dealerLocal}>Locador</Text>
                              </View>
                              {/* <View style={styles.contacts}>
                                  <View style={styles.contact}>
                                      <Icon name='ribbon' color='#007bee' size={30}/>
                                  </View>
                              </View> */}
                      
                              {/* <View style={styles.contacts}>
                                  <View style={styles.contact}>
                                      <Icon name='chatbox-ellipses' color='#007bee' size={30}/>
                                  </View>
                              </View> */}
                          </View>
                          {!route.params.prop && <><Text style={styles.subTitle}>Reserve</Text>
                          <View style={{flexDirection: 'row', gap: 15}}>
                          <View style={styles.reserves}>
                                  <Text style={styles.reserveText}>Data de Recolha</Text>
                                  <TouchableOpacity onPress={() =>setDate(true)}>
                                    <View style={styles.reserve}>
                                        <Icon size={22} style={styles.reserveIcon} name='calendar' />
                                        <Text style={styles.reserveInfo}>{dayNum} {months[month].length > 3 ? `${months[month].slice(0, 3)}.` : months[month]} {year} às {hour}h</Text>
                                    </View>
                                  </TouchableOpacity>
                              </View>
                              <View style={styles.reserves}>
                                  <Text style={styles.reserveText}>Data de deixada</Text>
                                  <TouchableOpacity onPress={()=>setDate1(true)}>
                                    <View style={styles.reserve}>
                                        <Icon size={22} style={styles.reserveIcon} name='calendar' />
                                        <Text style={styles.reserveInfo}>{finalDate.getDate()} {months[finalDate.getMonth()].length > 3 ? `${months[finalDate.getMonth()].slice(0, 3)}.` : months[finalDate.getMonth()]} {finalDate.getFullYear()} às {finalDate.getHours()}h</Text>
                                    </View>
                                  </TouchableOpacity>
                              </View>
                          </View></>}
                          <Text style={styles.subTitle}>Descrição</Text>
                          <View style={{marginHorizontal: 0}}>
                              <Text ellipsizeMode="tail" onTextLayout={handleTextLayout} numberOfLines={seeAll ? null : 5} style={styles.description}>{bio}</Text>
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
                              {/* {(textOverflowed && seeAll) && <Text onPress={()=>setSeeAll(false) }style={styles.seeAll}>Ver menos</Text>} */}
                          </View>
                          <Text style={styles.subTitle}>Especificações</Text>
                          <View style={styles.specifications}>
                              <FlatList columnWrapperStyle={styles.specs} numColumns={3} keyExtractor={(item) => item.id} data={specifications} renderItem={(item) => {
                                
                                if (item.item.name == 'Quilometragem'){
                                  
                                  return (
                                    <View style={styles.spec}>
                                        <Image source={item.item.image} style={styles.specImage}/>
                                        <Text style={styles.specTitle}>{item.item.name}</Text>
                                        <Text style={styles.specInfo}>{`${parseInt(route.params.data[item.item.prop]).toLocaleString()}`}</Text>
                                    </View>
                                )
                                }

                                  return (
                                      <View style={styles.spec}>
                                          <Image source={item.item.image} style={styles.specImage}/>
                                          <Text style={styles.specTitle}>{item.item.name}</Text>
                                          <Text style={styles.specInfo}>{item.item.name != 'Lotação' ? route.params.data[item.item.prop] : '4'}</Text>
                                      </View>
                                  )
                              }}/>
                          </View>
                          <Text style={styles.subTitle}>Recursos Adicionais</Text>
                      
                          <View>
                            <FlatList showsHorizontalScrollIndicator={false} bounces={true} horizontal data={route.params.data.recursos} renderItem={(item) => {
                              return (
                                <View style={styles.feat}>
                                  <Image style={styles.featImage} source={require('../assets/propImages/cogs.png')}/>
                                  <Text style={styles.featText}>{item.item}</Text>
                                </View>
                              )
                            }}/>
                          {[...route.params.data.recursos].length > 3 && <Text onPress={()=>{
                            }} style={styles.seeAll}>Ver tudo</Text>}
                          </View>
                          <Text style={styles.subTitle}>Política de Cancelamento</Text>
                          <View style={styles.policies}>
                              <Image style={styles.policyImage} source={require('../assets/propImages/cashback.png')}/>
                              <View style={styles.policy}>
                                  <Text style={styles.policyTitle}>Cancelamento Automático</Text>
                                  <Text style={styles.policyText}>Reembolso total se não receber o seu veículo após a reserva na data e horário combinado.</Text>
                              </View>
                          </View>
                          <Text style={styles.subTitle}>Avaliações</Text>
                          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: -5}}>
                            <Text style={{color: '#b3b3b3', fontSize: 16, fontWeight: '800', marginRight: 3}}>{Math.round((parseInt(acc) + parseInt(man) + parseInt(com) + parseInt(hig)) / 4)}%</Text>
                            <Icon style={{}} name='star' size={17.5} color={'#007bee'}/>
                            {reviews.length > 0 && <Text style={{color: '#b3b3b3', fontWeight: '500', marginLeft: 5, fontSize: 16}}>({reviews.length} avaliações)</Text>}
                          </View>
                      </View>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginBottom: 8}}>
                            <ProgressChart data={{
                              labels: ['Manutenção', 'Comunicação', 'Higiene', 'd'],
                              data: [parseInt(route.params.data.exatidao != undefined ? route.params.data.exatidao : acc)/100, parseInt(route.params.data.exatidao != undefined ? route.params.data.exatidao : man)/100, parseInt(route.params.data.exatidao != undefined ? route.params.data.exatidao : com)/100, parseInt(route.params.data.exatidao != undefined ? route.params.data.exatidao : hig)/100],
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
                      
                              <View style={{width: 17, height: 17, borderRadius: 50, backgroundColor: '#00b7ff'}}></View>
                              <Text style={styles.label}>Exatidão {route.params.data.exatidao != undefined ? route.params.data.exatidao : acc}%</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', height: 20}}>
                      
                                <View style={{width: 17, height: 17, borderRadius: 50, backgroundColor: '#0084ff'}}></View>
                                <Text style={styles.label}>Manutenção {route.params.data.exatidao != undefined ? route.params.data.manuntencao : man}%</Text>
                              </View>
                              <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                <View style={{width: 17, height: 17, borderRadius: 50, backgroundColor: '#005aad'}}></View>
                                <Text style={styles.label}>Comunicação {route.params.data.exatidao != undefined ? route.params.data.comunicacao : com}%</Text>
                              </View>
                              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{width: 17, height: 17, borderRadius: 50, backgroundColor: '#002a52'}}></View>
                                <Text style={styles.label}>Higiene {route.params.data.exatidao != undefined ? route.params.data.higiene : hig}%</Text>
                              </View>
                            </View>
                      
                          </View>
                          <View style={{paddingHorizontal: 15, marginTop: -15, paddingBottom: 20}}>
                            <Text style={styles.subTitle}>Comentários</Text>
                            {reviews.length > 4 ? <FlatList snapToInterval={Dimensions.get('window').width -90} horizontal showsHorizontalScrollIndicator={false} data={reviews.slice(0, 4)} renderItem={(item) => {
                              return (
                                <Pressable onPress={()=>{
                                  navigation.navigate('reviews', {
                                    reviews: reviews,
                                    man: route.params.data.exatidao != undefined ? route.params.data.manuntencao : man,
                                    com: route.params.data.exatidao != undefined ? route.params.data.comunicacao : com,
                                    hig: route.params.data.exatidao != undefined ? route.params.data.higiene : hig,
                                    acc: route.params.data.exatidao != undefined ? route.params.data.exatidao : acc,
                                    selectedCommentIndex: item.index
                                  })
                                }}>
                                  <Review1 reviews={reviews} man={man} com={com} acc={acc} item={item}/>
                                </Pressable>
                              )
                            }} />
                          :
                          <FlatList horizontal
                          snapToInterval={Dimensions.get('window').width -90} showsHorizontalScrollIndicator={false} data={reviews} renderItem={(item) => {
                            return (
                              <Pressable onPress={()=>{
                                navigation.navigate('reviews', {
                                  reviews: reviews,
                                  man: route.params.data.exatidao != undefined ? route.params.data.manuntencao : man,
                                    com: route.params.data.exatidao != undefined ? route.params.data.comunicacao : com,
                                    hig: route.params.data.exatidao != undefined ? route.params.data.higiene : hig,
                                    acc: route.params.data.exatidao != undefined ? route.params.data.exatidao : acc,
                                  selectedCommentIndex: item.index
                                })
                              }}>
                              <Review1 item={item}/>
                              </Pressable>
                            )
                          }} />}
                            <TouchableOpacity onPress={()=>{
                              navigation.navigate('reviews', {
                                reviews: reviews,
                                man: route.params.data.exatidao != undefined ? route.params.data.manuntencao : man,
                                    com: route.params.data.exatidao != undefined ? route.params.data.comunicacao : com,
                                    hig: route.params.data.exatidao != undefined ? route.params.data.higiene : hig,
                                    acc: route.params.data.exatidao != undefined ? route.params.data.exatidao : acc,
                                selectedCommentIndex: undefined
                              })
                            }}>
                              <Text  style={[styles.seeAll, {marginTop: 15, marginBottom: 10}]}>Ver todos os comentários</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                              <Text style={styles.subTitle}>Extras</Text>
                              <TouchableOpacity onPress={() => setExtraOpen(true)}>
                                <Icon name='help-circle-outline' size={20} style={[styles.subTitle, {fontSize: 20}]}/>
                              </TouchableOpacity>
                            </View>
                            <Text style={{marginTop: -5, marginBottom: 20, color: 'grey', fontSize: 14.5}}>Adicione extras opcionais à sua viagem no checkout</Text>
                            <FlatList data={extras} renderItem={(item) => {
                              return (
                              <View style={{flexDirection: 'row', gap: 5, marginBottom: 25, paddingTop: 2
                            }}>
                                  <Icon size={30} color='#007bee' name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                                <View style={styles.extras}>
                                  <Text style={styles.extraName}>{item.item.name}</Text>
                                  <Text style={styles.extraDesc}>{item.item.description}</Text>
                                  <Text style={styles.extraPrice}>Kz. {item.item.price}/dia</Text>
                                </View>
                              </View>
                              )
                            }}  />

                         <TouchableOpacity onPress={() => {
                          
                          if (user){
                            setReportOpen(true)
                          }
                          else {
                            navigation.dispatch(StackActions.push('login', {
                              justLogin: true
                            }))
                          }
                         }}>
                           <Text style={styles.report}>Reportar Listagem</Text>
                         </TouchableOpacity>
                          </View>
                          
                    </View>

                        
              
            </Animated.ScrollView>
            {/* <Animated.View
                style={[styles.tabIndicator, {
                    transform: [{translateX: Animated.divide(indicatorPos, 2)}]
                }]} />
                    <View style={styles.tabs}>
                        <TouchableOpacity style={[styles.tab, activeTab==0 && styles.activeTab]} onPress={() => handleTabPress(0)}>
                            <Text style={activeTab == 0 ? styles.tabText1 : styles.tabText2}>Info</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.tab, activeTab==1 && styles.activeTab]} onPress={() => handleTabPress(1)}>
                            <Text style={activeTab == 1 ? styles.tabText1 : styles.tabText2}>Avaliações</Text>
                        </TouchableOpacity>
                    </View>
            <Animated.ScrollView ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScrollEndDrag={(e) => {
                
            }}
            onScroll={Animated.event([
                {
                  nativeEvent: {contentOffset: {x: indicatorPos}}
                }
              ], {useNativeDriver: true,
                listener: (e) => {
                    
                    
                }})}
            >
                <ScrollView  style={{width: Dimensions.get('window').width, flex: 1, backgroundColor: 'yellow'}}>
                </ScrollView>
                <View style={{width:  Dimensions.get('window').width, flex: 1, backgroundColor: 'red'}}>
                    <Text>View 2</Text>
                </View>
            </Animated.ScrollView> */}
            <SafeAreaView style={{display: route.params.prop ? 'none': 'flex'}}>
            <View style={styles.checkout}>
              <View>
                <View style={{
                  flexDirection: 'row', backgroundColor: 'white',
                  borderRadius: 10,
                  gap: 5
                }}>
                <Icon name='pricetags-outline' style={{ color: '#007bee', marginTop: 2}} size={18}/>
                  <View style={styles.checkoutInfo}>
                    <Text style={styles.price}>Kz. {parseFloat((route.params.data.preco_por_dia + (route.params.data?.notice ? '' : 5000))).toLocaleString()}/dia</Text>
                    <Text style={styles.total}>Kz. {parseFloat(total).toLocaleString()} total est.</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity onPress={() => {
                  console.log(minutes >=15 ? `30` : `00`, finalMinutes >=15 ? `30` : `00`)
                  if (user){
                    if (user.drivers_license){
                      navigation.dispatch(StackActions.push('checkout', {
                        user: user,
                        data: route.params.data,
                        days: total/parseFloat((route.params.data.preco_por_dia + (route.params.data?.notice ? '' : 5000))),
                        total: parseFloat(total),
                        iniDate: iniDate,
                        finalDate: finalDate,
                        iniHour: hour,
                        finalHour: finalHour,
                        iniMinutes: minutes >=15 ? `30` : `00`,
                        finalMinutes: finalMinutes >=15 ? `30` : `00`,
                        ownerId: route.params?.data?.user ? route.params.data.user.id : 1,
                        owner: route.params?.data?.user ? user : null

                        
                      }))
                    }else {
                      Alert.alert(
                        '',
                        'Precisa fornecer seu número de carta de condução e passar pelo processo de triagem de condutor do GoingPlaces. Para isso vá para a sua conta e por baixo da "Info Verificada" pressione o "Aprovado para conduzir".',
                        [{
                          text: 'OK',
                          onPress: ()=>{}
                        }])
                    }
                  }else {
                    navigation.dispatch(StackActions.push('login', {
                      justLogin: true
                    }))
                  }
                
              }}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Continuar</Text>
                </View>
              </TouchableOpacity>
            </View>
            </SafeAreaView>
        
        </View>
    )
}
export default Car