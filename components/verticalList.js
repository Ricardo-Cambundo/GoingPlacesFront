import { StackActions, useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { FlatList, Image, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { baseURL } from "../navigators/axios"
const VerticalList = ({data}) => {
    const navigation = useNavigation()
    return (
        <View style={{}}>
            {data.map((i) => {
              let item = {
                item: i
              }
              return (
                <TouchableWithoutFeedback onPress={() => {
                    console.log('trying')
                    navigation.dispatch(StackActions.push('car', {
                        data: item.item
                    }))
                }}>
                    <View key={item.item.id} style={styles.container}>
                            {
                                item.item.notice ?
                                <Image style={styles.image} source={{uri: `${baseURL}media/${item.item.image}`}}/>
                                :
                                <Image style={styles.image} source={{uri: item.item.imagem}}/>
                            }
                            <View style={styles.first}><View><Text style={styles.title}>{item.item.marca}</Text>
                            <Text style={styles.model}>{item.item.modelo}</Text></View>
                            <View style={styles.tagCont}><Text style={styles.tag}>Perto de si</Text></View>
                            </View>
                            <View style={styles.specs}>
                                <View style={styles.spec}>
                                    <Icon name='star' color='#007bee' size={20}/>
                                    <Text style={styles.specText}>{item.item.notice ? item.item.avaliacao_geral : '60'}%</Text>
                                </View>
                                <View style={styles.spec}>
                                    <Image style={styles.specImage} source={require('../assets/propImages/manual-transmission.png')}/>
                                    <Text style={styles.specText}>{item.item.transmissao}</Text>
                                </View>
                                <View style={styles.spec}>
                                <Image style={styles.specImage} source={require('../assets/propImages/fuel1.png')}/>  
                                    <Text style={styles.specText}>{item.item.tipo_de_combustivel}</Text>
                                </View>
                                <View style={styles.spec}>
                                <Image style={styles.specImage} source={require('../assets/propImages/car-seat1.png')}/>
                                    <Text style={styles.specText}>{item.item.notice ? item.item.capacidade_de_passageiros : '4'}</Text>
                                </View>
                            </View>
                            <View style={styles.second}>
                                <View style={styles.attr}>
                                    <Text style={styles.attrHeader}>Preço</Text>
                                    <View style={{flexDirection: 'row'}}>{
                                        item.item.notice ?
                                        <Text style={styles.price}>Kz {`${parseInt(item.item.preco_por_dia).toLocaleString()}`}</Text>
                                        :
                                        <Text style={styles.price}>Kz {`${(parseInt(item.item.preco_por_dia + '00')).toLocaleString()}`}</Text>
                                    }<Text style={styles.per}>/dia</Text></View>
                                </View>
                                <View style={styles.attr}>
                                    <Text style={styles.attrHeader}>Quilometragem</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        {item.item.quilometragem ? 
                                        <Text style={styles.distance}>{`${parseInt(`${item.item.quilometragem}`.replace(' milhas', '')).toLocaleString()}`}</Text>
                                    :
                                    <Text style={styles.distance}>2300</Text>}
                                    <Text style={styles.per}>m</Text></View>
                                </View>
                            </View>
                        </View>
                </TouchableWithoutFeedback>
              )
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '95%',
        marginBottom: 20,
        elevation: 2,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 0},
        alignSelf: 'center',
        borderRadius: 20
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 5,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    first: {
        flexDirection: 'row',
        gap: 15,
        paddingHorizontal: 15,
        height: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
    },
    model: {
        fontSize: 17,
        color: '#80808091',
        fontWeight: '500',
        marginTop: 0

    },
    tagCont: {
        backgroundColor: '#007bee38',
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingTop: 5,
        height: 28,
        transform: [{translateY: 2}]
    },
    tag: {
        color: '#007bee',
        fontWeight: '700',
    },
    second: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
        paddingHorizontal: 15,
        height: 65,
        marginBottom: 15
    },
    attr: {
        flex: 1,
        backgroundColor: '#d3d3d346',
        paddingHorizontal: 10,
        borderRadius: 10,   
        gap: -3,
        justifyContent: 'center',
        height: 55
        
    },
    attrHeader: {
        color: '#80808091',
        fontSize: 13,
        fontWeight: '600',
        marginBottom: 5
    },
    price: {
        fontSize: 15,
        fontWeight: '700'
    },
    per: {
        color: '#80808091',
        transform: [{translateY: 1}],
        marginLeft: 2
    },
    distance: {
        fontSize: 15,
        fontWeight: '700'
    },
    specs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
        marginBottom: -2,
        paddingHorizontal: 15,
    },
    spec: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    specImage: {
        width: 18, 
        height: 18
    },
    specText: {
        color: 'grey',
        fontSize: 13
    }
})
export default VerticalList