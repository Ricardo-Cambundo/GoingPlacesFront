import { Pressable, StyleSheet, Text, View, Keyboard, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import VerticalList from "../components/verticalList"
import { useNavigation, useRoute } from "@react-navigation/native"

const Transaction = () => {
    const navigation = useNavigation()
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
            fontWeight: '800',
        },
        info: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8,
            alignItems: 'flex-end'
        },
        label: {
            fontSize: 13,
            fontWeight: '500',
            color: '#969696',
            
        },
        value: {
            fontSize: 14,
            fontWeight: '700',
            color: '#4b4b4b',
        }
    })
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
                            <Text style={styles.title}>Transação</Text>
            
                           <View></View>
                    </View>
                    <ScrollView style={{paddingTop: 100, flex: 1}}>
                        <VerticalList data={[route.params.data]}/>
                        <View style={{marginHorizontal: 15, backgroundColor: 'white',
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
                                <Text style={styles.label}>Preço diário</Text>
                                <Text style={styles.value}>Kz. {parseFloat(route.params.data.preco_por_dia + 5000).toLocaleString()}</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>Dias de aluguer</Text>
                                <Text style={styles.value}>2 dias</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>Extras</Text>
                                <Text style={styles.value}>Kz. 2,000</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>Taxa do GoingPlaces (7%)</Text>
                                <Text style={styles.value}>Kz. 700</Text>
                            </View>
                            <View style={[styles.info, {borderTopWidth: 2, marginTop: 15, paddingTop: 15, borderColor: '#eeeeee'}]}>
                                <Text style={styles.label}>Total</Text>
                                <Text style={styles.value}>Kz. {parseFloat(route.params.data.preco_por_dia+5000 * 2).toLocaleString()}</Text>
                            </View>
                        </View>
                        <View style={{marginHorizontal: 15, backgroundColor: 'white',
                        paddingHorizontal: 15, 
                        paddingVertical: 20,
                        borderRadius: 10,
                        shadowColor: 'black',
            shadowOpacity: 0.1,
            shadowRadius: 4,
            shadowOffset: {width: 0, height: 2},
            elevation: 1,
            marginVertical: 5,
            marginBottom: 120
            }}>
                            <View style={styles.info}>
                                <Text style={styles.label}>Mét. de pagamento</Text>
                                <Text style={styles.value}>Transferência</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>Data</Text>
                                <Text style={styles.value}>{months[new Date().getMonth()].slice(0, 3)}. {new Date().getDate()}, {new Date().getFullYear()} | {new Date().getHours() < 10 ? `0${new Date().getHours()}`: new Date().getHours() }:{new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}`: new Date().getMinutes() }</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>ID de Transação</Text>
                                <Text style={styles.value}>5K7247302874293</Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.label}>Status</Text>
                                <View style={{backgroundColor: '#00e200', padding: 6, borderRadius: 5}}>
                                    <Text style={{color: 'white', fontSize: 10, fontWeight: '600'}}>Pago</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
        </View>
    )
}
export default Transaction