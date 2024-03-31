import { useEffect, useState } from "react"
import { Text, View, Dimensions, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import VerticalList from "../components/verticalList"
import { useNavigation, useRoute } from "@react-navigation/native"
import VerticalList1 from "../components/verticalList1"
const Checkout0 = ({handleScroll, discount, setDiscount, total, setTotal, setExtra, setExtraInfo, plan, setPlan}) => {
    const navigation = useNavigation()
    const route = useRoute()
    const styles = StyleSheet.create({
        title1: {
            fontSize: 17,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20,
            marginTop: 0
        },
        extras: {
            flex: 1
        },
        extra: {
            flexDirection: 'row',
            gap: 10,
            marginTop: 15,
            marginBottom: 5,
        },
        extraIcon: {
            color: '#007bee',
        },
        extraTitle: {
            fontWeight: '700',
            fontSize: 16,
            marginBottom: 2,
            flex: 1
        },
        extraDesc: {
            color: 'grey',
            fontSize: 14,
            flex: 1
        },
        extraInfo: {
            flex: 1
        },
        desc: {
            color: 'grey'
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
        info: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8,
            alignItems: 'flex-end'
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
        button: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginBottom: 10,
        },
        button2: {
            backgroundColor: '#ff0077',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 10
        },
        save: {
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
        },
        subTitle: {
            color: '#b3b3b3',
            fontWeight: '500',
            fontSize: 14,
        },
    })
    const [selectedExtra, setSelectedExtra] = useState([1])
    const [prevTotal, setPrevTotal] = useState(0)
    // useEffect(() => {
    //     let p = plan == '' ? parseInt(25000 * route.params.days) : plan == 'Normal' ? parseInt(10000 * route.params.days): plan == 'Negar' ? 0 : parseInt(5000 * route.params.days)
    //     setPrevTotal(parseInt(route.params.total) + p + (5000 * route.params.days))
    //     setTotal(parseInt(route.params.total) + p + (5000 * route.params.days) - ((route.params.days >=3 && route.params.days <7) ? 10/100 * prevTotal : (route.params.days >=7 && route.params.days < 30) ? 15/100 * prevTotal : (route.params.days >= 30) ? 30/100 * prevTotal : 0) + 2000)
    //     setTotal(total + (route.params.days * (selectedExtra.length > 0 ? extras[selectedExtra-1].price : 0)))
    // })
    const [p, setP] = useState(5000 * route.params.days)
    // let p = plan == '' ? parseInt(25000 * route.params.days) : plan == 'Normal' ? parseInt(10000 * route.params.days): plan == 'Negar' ? 0 : parseInt(5000 * route.params.days)
    useEffect(() => {
        setExtra((route.params.days * (selectedExtra.length > 0 ? extras[selectedExtra-1].price : 0)))
        setExtraInfo(selectedExtra)
        setPrevTotal(p + (parseFloat(route.params.data.preco_por_dia + (route.params.data?.notice ? '': 5000)) * route.params.days) + 2000)
        setTotal((p + (parseFloat(route.params.data.preco_por_dia + (route.params.data?.notice ? '': 5000)) * route.params.days) + 2000) - ((route.params.days >=3 && route.params.days <7) ? (10/100) * prevTotal : (route.params.days >=7 && route.params.days < 30) ? (15/100) * prevTotal : (route.params.days >= 30) ? (30/100) * prevTotal : 0) + (route.params.days * (selectedExtra.length > 0 ? extras[selectedExtra-1].price : 0)))
        setDiscount(parseInt(((route.params.days >=3 && route.params.days <7) ? (10/100) * prevTotal : (route.params.days >=7 && route.params.days < 30) ? (15/100) * prevTotal : (route.params.days >= 30) ? (30/100) * prevTotal : 0)))
    })
    useEffect(() => {
         
        
        setPrevTotal(p + (parseFloat(route.params.data.preco_por_dia + (route.params.data?.notice ? '': 5000)) * route.params.days) + 2000)
        setTotal((p + (parseFloat(route.params.data.preco_por_dia + (route.params.data?.notice ? '': 5000)) * route.params.days) + 2000) - ((route.params.days >=3 && route.params.days <7) ? (10/100) * prevTotal : (route.params.days >=7 && route.params.days < 30) ? (15/100) * prevTotal : (route.params.days >= 30) ? (30/100) * prevTotal : 0) + (route.params.days * (selectedExtra.length > 0 ? extras[selectedExtra-1].price : 0)))
        
    }, [plan, selectedExtra])
    const [extras, setExtras] = useState([
        {
          id: 1,
          name: 'Reabastecimento pré-pago',
          description: 'Economize tempo, facilite a entrega e evite taxas adicionais adicionando este Extra, que permite que você devolva meu carro em qualquer nível de combustível.',
          price: 5000,
        },
        
      ])
    return (
        <View style={{flex: 1, backgroundColor: 'white', width: Dimensions.get('window').width, paddingTop: 110, paddingHorizontal: 15}}>
            <View style={{marginHorizontal: -15}}>
                <Text style={{marginHorizontal: 15, marginVertical: 10, color: 'grey', fontWeight: '500'}}>OBS: {route.params.data?.user ? `${route.params.data?.user?.fullname}`.split(' ')[0] : 'Carla'} vai destrancar o carro por você e depois te passar a chave para iniciares a viagem.</Text>
                <VerticalList1 data={[route.params.data]}/>
            </View>
            <Text style={styles.title1}>Selecione extras</Text>
            <Text style={styles.desc}>Estes extras opcionais são oferecidos pelo seu anfitrião (locador) e podem ajudar a tornar a sua viagem única e memorável</Text>
            
            <FlatList style={{marginTop: 20}} data={extras} renderItem={(item) => {
                              return (
            <TouchableOpacity onPress={() => {
                if (selectedExtra.includes(item.item.id)){
                    setSelectedExtra(selectedExtra.filter((sel) => sel != item.item.id))
                }else {
                    setSelectedExtra([...selectedExtra, item.item.id])
                }
            }}>
            <View style={{flexDirection: 'row', gap: 5, marginBottom: 25, paddingTop: 2, borderColor: selectedExtra.includes(item.item.id) ? '#007bee' : 'white', borderWidth: 2, padding: 10, borderRadius: 5
                            }}>
                                  <Icon size={30} color='#007bee' name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                                <View style={styles.extras}>
                                  <Text style={styles.extraName}>{item.item.name}</Text>
                                  <Text style={styles.extraDesc}>{item.item.description}</Text>
                                  <Text style={styles.extraPrice}>Kz. {item.item.price}/dia</Text>
                                </View>
                              </View>
                              </TouchableOpacity> )}} />
                              <Text style={styles.title1}>Selecione um plano de proteção</Text>

                              <View style={{flexDirection: 'row'}}>
                
                <TouchableOpacity onPress={() => {
                    setPlan('')
                    setP(25000 * route.params.days)
                    
                }}>
                    <View style={plan == '' ? styles.tag1 : styles.tag}>
                        <Text style={plan == '' ? styles.tagText1 : styles.tagText}>Premier</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setPlan('Normal')
                    setP(10000 * route.params.days)
                    
                }}>
                    <View style={plan.includes('Normal') ? styles.tag1 : styles.tag}>
                        <Text style={plan.includes('Normal') ? styles.tagText1 : styles.tagText}>Normal</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setPlan('Mínimo')
                    setP(5000 * route.params.days)
                   
                }}>
                    <View style={plan.includes('Mínimo') ? styles.tag1 : styles.tag}>
                        <Text style={plan.includes('Mínimo') ? styles.tagText1 : styles.tagText}>Mínimo</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setPlan('Negar')
                    setP(0)
                }}>
                    <View style={plan.includes('Negar') ? styles.tag1 : styles.tag}>
                        <Text style={plan.includes('Negar') ? styles.tagText1 : styles.tagText}>Negar</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
            {
                plan == '' ?
                <View style={{marginTop: 25, padding: 10, elevation: 4, backgroundColor: 'white', borderRadius: 10, shadowColor: 'black', shadowRadius: 4,shadowOpacity: 0.5, shadowOffset: {width: 0, height: 0}, marginBottom: 10}}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Tranquilidade</Text>
                        <Text style={styles.value}>Relaxe e dirija feliz com o plano de cobertura máxima</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Cobertura</Text>
                        <Text style={styles.value}>Kz 115,000 máximo do bolso para danos ao veículo ou roubo</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Seguro de responsabilidade civil mínima do Estado</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Custo</Text>
                        <Text style={styles.value}>Kz 25,000/dia</Text>
                    </View> 
                </View>
                : plan == 'Normal' ?
                <View style={{marginTop: 25, padding: 10, elevation: 4, backgroundColor: 'white', borderRadius: 10, shadowColor: 'black', shadowRadius: 4,shadowOpacity: 0.5, shadowOffset: {width: 0, height: 0}, marginBottom: 10}}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Confiável</Text>
                        <Text style={styles.value}>Pegue a estrada confiantemente com uma proteção sólida</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Cobertura</Text>
                        <Text style={styles.value}>Kz 425,300 máximo do bolso para danos ao veículo ou roubo</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Seguro de responsabilidade civil mínima do Estado</Text>
                        
                    </View> 
                    <View style={styles.row}>
                        <Text style={styles.label}>Custo</Text>
                        <Text style={styles.value}>Kz 10,000/dia</Text>
                    </View> 
                </View>
                : plan == 'Negar'?
                <View style={{marginTop: 25, padding: 10, elevation: 4, backgroundColor: 'white', borderRadius: 10, shadowColor: 'black', shadowRadius: 4,shadowOpacity: 0.5, shadowOffset: {width: 0, height: 0}, marginBottom: 10}}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Alto Risco</Text>
                        <Text style={styles.value}>Você é responsável por qualquer dano ou roubo deste carro, que vale mais de Kz. 12.670.500</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Seguro de responsabilidade civil mínima do Estado</Text>
                        <Text style={styles.value}>O seguro de responsabilidade civil mínima estadual está incluído, que protege apenas terceiros, não o carro que você estará dirigindo</Text>
                    </View>
                
                    <View style={styles.row}>
                        <Text style={styles.label}>Custo</Text>
                        <Text style={styles.value}>Kz 00.00/dia</Text>
                    </View> 
                </View>
                :
                <View style={{marginTop: 25, padding: 10, elevation: 4, backgroundColor: 'white', borderRadius: 10, shadowColor: 'black', shadowRadius: 4,shadowOpacity: 0.5, shadowOffset: {width: 0, height: 0}, marginBottom: 10}}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Rentável</Text>
                        <Text style={styles.value}>Fica coberto enquanto paga alguns centavos</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Cobertura</Text>
                        <Text style={styles.value}>Kz 2,535,500 máximo do bolso para danos ao veículo ou roubo</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Seguro de responsabilidade civil mínima do Estado</Text>
                    </View> 
                    <View style={styles.row}>
                        <Text style={styles.label}>Custo</Text>
                        <Text style={styles.value}>Kz 5,000/dia</Text>
                    </View> 
                </View>
            }

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
                                <Text style={styles.value1}>Kz. {parseFloat(route.params.data.preco_por_dia + (route.params.data?.notice ? '': 5000)).toLocaleString()}</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label1}>Dias de aluguer</Text>
                                <Text style={styles.value1}>{route.params.days} dia{route.params.days > 1 ? 's' : ''}</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label1}>Preço diário x {route.params.days} dia{route.params.days > 1 ? 's' : ''}</Text>
                                <Text style={styles.value1}>Kz. {parseInt(route.params.total).toLocaleString()}</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label1}>Taxa de entrega</Text>
                                <Text style={styles.value1}>Kz. 2,000</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label1}>Plano de proteção ({plan == '' ? 'Premier': plan})</Text>
                                <Text style={styles.value1}>Kz. {plan == '' ? parseInt(25000 * route.params.days).toLocaleString() : plan == 'Normal' ? parseInt(10000 * route.params.days).toLocaleString(): plan == 'Negar' ? '00.00' : parseInt(5000 * route.params.days).toLocaleString()}</Text>
                            </View>
                            {
                                route.params.days >= 3 && route.params.days < 7 ?
                                <View style={styles.info}>
                                <Text style={styles.label1}>Desconto de 3+ dias ({route.params.data?.discount3 ? route.params.data.discount3: '10'}%)</Text>
                                <Text style={styles.value1}>-Kz. {((route.params.days >=3 && route.params.days <7) ? (10/100 * prevTotal).toLocaleString()  : (route.params.days >=7 && route.params.days < 30) ? (15/100 * prevTotal).toLocaleString() : (route.params.days >= 30) ? 30/100 * prevTotal : 1)}</Text>
                            </View>
                            : route.params.days >= 7 && route.params.days < 30 ?
                            <View style={styles.info}>
                                <Text style={styles.label1}>Desconto de 7+ dias ({route.params.data?.discount7 ? route.params.data.discount7: '15'}%)</Text>
                                <Text style={styles.value1}>-Kz. {((route.params.days >=3 && route.params.days <7) ? (10/100 * prevTotal).toLocaleString()  : (route.params.days >=7 && route.params.days < 30) ? (15/100 * prevTotal).toLocaleString() : (route.params.days >= 30) ? 30/100 * prevTotal : 1)}</Text>
                            </View>
                            : 
                            <>
                            {route.params.days >= 30 ?
                            <View style={styles.info}>
                            <Text style={styles.label1}>Desconto de 30+ dias ({route.params.data?.discount15 ? route.params.data.discount15: '30'}%)</Text>
                            <Text style={styles.value1}>-Kz. {((route.params.days >=3 && route.params.days <7) ? (10/100 * prevTotal).toLocaleString()  : (route.params.days >=7 && route.params.days < 30) ? (15/100 * prevTotal).toLocaleString() : (route.params.days >= 30) ? 30/100 * prevTotal : 1)}</Text>
                        </View>
                        :
                        <View></View>}
                            </>
                            
                            }
                            <View style={styles.info}>
                                <Text style={styles.label1}>Extras</Text>
                                <Text style={styles.value1}>Kz. {selectedExtra.length > 0 ? extras[0].price * route.params.days : '00.00'}</Text>
                            </View>
                            
                            <View style={styles.info1}>
                                <Text style={styles.label1}>Total</Text>
                                <Text style={styles.value1}>Kz. {parseInt((p + (parseFloat(route.params.data.preco_por_dia + (route.params.data?.notice ? '': 5000)) * route.params.days) + 2000) - ((route.params.days >=3 && route.params.days <7) ? (10/100) * prevTotal : (route.params.days >=7 && route.params.days < 30) ? (15/100) * prevTotal : (route.params.days >= 30) ? (30/100) * prevTotal : 0) + (route.params.days * (selectedExtra.length > 0 ? extras[selectedExtra-1].price : 0))).toLocaleString()}</Text>
                            </View>

                    </View>
                    <TouchableOpacity onPress={() => {
                        handleScroll(1)
                        
                }}>
                    <View style={styles.button}>
                        <Text style={styles.save}>Continuar</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}
export default Checkout0