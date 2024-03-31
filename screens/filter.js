import { StyleSheet, View, Text, Animated, Pressable, TouchableWithoutFeedback, Platform, TouchableOpacity, SafeAreaView } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import Recommmendations from "../components/recommendations"
import { useRoute } from "@react-navigation/native"
import {  useEffect, useState } from "react"
import { FlatList, ScrollView } from "react-native-gesture-handler"
import RnRangeSlider from "rn-range-slider"
import MultiSlider from "@ptomasroos/react-native-multi-slider"
import { Dimensions } from "react-native"
import StarReview from "react-native-stars"
import { RadioButton } from "react-native-paper"
import { Alert } from "react-native"
import RangeSlider from "react-native-range-slider"
const Filter = ({types, setTypes, addType, removeType, trans, setTrans, addTran, removeTran, typesf, setTypesF, addTypeF, removeTypeF, brandss, setBrandss, addBrand, removeBrand, checked, setChecked, priceRange, setPriceRange,  open, setOpen, brands, categories}) => {
    // const [types, setTypes] = useState([])
    // const [trans, setTrans] = useState([])
    // const [typesf, setTypesF] = useState([])
    // const [brandss, setBrandss] = useState([])
    // const addType = (t) => {
    //     setTypes([...types, t])
    // }
    // const removeType = (t) => {
    //     setTypes(types.filter((ty) => ty != t))
    // }
    // const addTran = (t) => {
    //     setTrans([...trans, t])
    // }
    // const removeTran = (t) => {
    //     setTrans(trans.filter((ty) => ty != t))
    // }
    // const addTypeF = (t) => {
    //     setTypesF([...typesf, t])
    // }
    // const removeTypeF = (t) => {
    //     setTypesF(typesf.filter((ty) => ty != t))
    // }
    // const addBrand = (t) => {
    //     setBrandss([...brandss, t])
    // }
    // const removeBrand = (t) => {
    //     setBrandss(brandss.filter((ty) => ty != t))
    // }
    const route = useRoute()
    const [review, setReview] = useState('Tudo')
    const scrollY = new Animated.Value(0)
    const diffClampScroll = Animated.diffClamp(scrollY, 0, Platform.OS == 'android'? 48 : 95).interpolate({
        inputRange: [0, 1],
        outputRange: [0, -1]
      })    
    const [transmissions, setTransmissions] = useState([
        {
            id: 1,
            name: 'Manual'
        },
        {
            id: 2,
            name: 'Automático'
        },
        {
            id: 3,
            name: 'CVT'
        }
    ]) 
    const [fuel, setFuel] = useState([
        {
            id: 1,
            name: 'Gasolina'
        },
        {
            id: 2,
            name: 'Gasóleo '
        },
        {
            id: 3,
            name: 'Biodiesel'
        }
    ])
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
        paddingBottom: 7,
        // transform: [{translateY: diffClampScroll}],
        ...Platform.select({
            android: {
            height: 55
            },
            
            
        }),
        },
    goBack: {
        width: 40, 
        height: 40, 
        borderRadius: 50,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 0},
        justifyContent: 'center',
        alignItems: 'center',
        },
    title: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: -37,
        marginTop: 5,     
        ...Platform.select({
            ios: {
                marginTop: 55
            }
        })    
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginHorizontal: 10,
        marginVertical: 20,
    },
    tags: {
    },
    tags2:{
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    tag: {
        marginHorizontal: 10,
        backgroundColor: '#dbdbdb56',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        marginVertical: 5
    },
    tagText: {
        fontWeight: '500',
        color: '#969696'
    },
    tag1: {
        marginHorizontal: 10,
        backgroundColor: '#008cff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        marginVertical: 5
    },
    tagText1: {
        color: 'white',
        fontWeight: '500'
    },
    prices: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: -10
    },
    price: {
        fontWeight: '700'
    },
    reviews: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: "space-between",
        alignItems: 'center'
        
    },
    review: {
        fontWeight: '700',
        color: 'grey',
        
    },
    revCont: {
        flexDirection: 'row', 
        gap: 9,
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        gap: 20,
        backgroundColor: 'white',
        borderTopColor: '#80808041',
        borderTopWidth: 1,
        paddingBottom: 8,
        
        
    },
    button: {
        backgroundColor: '#dbdbdb56',
        flex: 1,
        height: 50,
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 12
    },
    buttonText: {
        color: '#008cff',
        textAlign: 'center',
        fontWeight: '700',
            fontSize: 15
    },
    button1: {
        backgroundColor: '#008cff',
        flex: 1,
        height: 50,
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 12
    },
    buttonText1: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
            fontSize: 15
    },
    radioCircle: {
        width: 21, 
        height: 21,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#007bee',
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioCircle1: {
        backgroundColor: '#007bee',
        width: 10,
        height: 10,
        borderRadius: 50

    },
    
    
})
    useEffect(() => {
        if (review.length == 0){
            setReview('Tudo')
            setChecked('Tudo')
        }else {
            setChecked('Tudo')
        }
    }, [review])
      return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <Animated.View style={styles.header}>
                <Pressable onPress={()=>{setOpen(false)}}>
                    <View style={styles.goBack}>
                        <Icon name='close-outline' size={23}/>
                    </View>
                </Pressable>
                <Text style={styles.title}>Filtro</Text>
                <View></View>
            </Animated.View>
            <Animated.ScrollView style={{flex: 1, paddingBottom: 130}} onScroll={Animated.event([
                {
                    nativeEvent: {contentOffset: {y: scrollY}}
                }
            ],
            {useNativeDriver: true})}>
                {/* route.params.section */}
                <Text style={[styles.subTitle, {...Platform.select({
                    android: {
                        marginTop: 70
                    },
                    ios: {
                        marginTop: 110
                    }
                })}]}>Tipo</Text>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.tags} horizontal>
                    {[...[{name: 'All'}] ,...[...categories]].map((i) => {
                    let item = {
                        item: i
                    }
                    if (item.item.name == 'All'){
                        return (
                            <TouchableWithoutFeedback onPress={() => [
                                types.length > 0 && setTypes([])
                            ]}>
                                <View style={types.length == 0 ? styles.tag1 : styles.tag}>
                                <Text style={types.length == 0 ? styles.tagText1 : styles.tagText}>Tudo</Text>
                                                        </View>
                            </TouchableWithoutFeedback>
                        )
                    }
                    return (
                        <TouchableWithoutFeedback onPress={() => {
                            if (types.includes(item.item.name)){
                                removeType(item.item.name)
                            }else {
                                addType(item.item.name)
                            }
                        }}>
                            <View style={types.includes(item.item.name) ? styles.tag1 : styles.tag}>
                                <Text style={types.includes(item.item.name) ? styles.tagText1 : styles.tagText}>{item.item.name}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                    })}
                </ScrollView>
                <Text style={[styles.subTitle]}>Intervalo de preço (Diário)</Text>
                
                <MultiSlider
                markerStyle={{
                    backgroundColor: '#008cff',
                    height: 20,
                    width: 20,
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 50,
                }}
                pressedMarkerStyle={{
                    backgroundColor: '#008cff',
                    height: 25,
                    width: 25,
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 50
                }}
                values={[priceRange[0], priceRange[1]]}
                onValuesChange={(values) => setPriceRange(values)}
                min={1000}
                max={15000}
                step={500}
                allowOverlap={false}
                minMarkerOverlapDistance={24.78}
                trackStyle={{
                    height: 4,
                    backgroundColor: '#dbdbdb'
                }}
                selectedStyle={{
                    backgroundColor: '#008cff'
                }}
                markerContainerStyle={{
                    marginTop: 2
                }}
                sliderLength={Dimensions.get('window').width - 40}
                containerStyle={{
                    alignItems: 'center',
                    marginTop: -15
                }}
                 />
                 <View style={styles.prices}>
                    <Text style={styles.price}>Kz. {priceRange[0].toLocaleString()}</Text>
                    <Text style={styles.price}>Kz. {priceRange[1].toLocaleString()}</Text>
                 </View>

                 <Text style={[styles.subTitle]}>Avaliações</Text> 
                
                 <TouchableOpacity onPress={() => {
                    if (review.includes('Tudo')){
                    }else {
                        setReview("Tudo")
                    }
                 }}>
                     <View style={styles.reviews}>
                             <View style={styles.revCont}>
                                 <StarReview disabled={true} rating={5}  count={5} half={false} fullStar={<Icon name='star' color='#007bee' size={24}/>}
                                        />
                                                         <Text style={styles.review}>Tudo</Text>
                             </View>
                             <View style={styles.radioCircle}>
                            {review.includes('Tudo') && <View style={styles.radioCircle1}></View>}
                            </View>
                         </View>
                 </TouchableOpacity>
                     <TouchableOpacity onPress={() => {
                        if (review.includes('4')){
                            setReview("")
                        }else {
                            setReview("4")
                        }
                     }}>
                         <View style={styles.reviews}>
                             <View style={styles.revCont}>
                                 <StarReview disabled={true} rating={5}  count={5} half={false} fullStar={<Icon name='star' color='#007bee' size={24}/>}
                                        />
                                                         <Text style={styles.review}>4 para cima</Text>
                             </View>
                             <View style={styles.radioCircle}>
                            {review.includes('4') && <View style={styles.radioCircle1}></View>}
                            </View>
                         </View>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => {
                        if (review.includes('3')){
                            setReview("")
                        }else {
                            setReview("3")
                        }
                     }}>
                         <View style={styles.reviews}>
                             <View style={styles.revCont}>
                                 <StarReview disabled={true} rating={5}  count={5} half={false} fullStar={<Icon name='star' color='#007bee' size={24}/>}
                                        />
                                                         <Text style={styles.review}>3</Text>
                             </View>
                             <View style={styles.radioCircle}>
                            {review.includes('3') && <View style={styles.radioCircle1}></View>}
                            </View>
                         </View>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => {
                        if (review.includes('2')){
                            setReview("")
                        }else {
                            setReview("2")
                        }
                     }}>
                         <View style={styles.reviews}>
                             <View style={styles.revCont}>
                                 <StarReview disabled={true} rating={5}  count={5} half={false} fullStar={<Icon name='star' color='#007bee' size={24}/>}
                                        />
                                                         <Text style={styles.review}>2</Text>
                             </View>
                             <View style={styles.radioCircle}>
                            {review.includes('2') && <View style={styles.radioCircle1}></View>}
                            </View>
                         </View>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={() => {
                        if (review.includes('1')){
                            setReview("")
                        }else {
                            setReview("1")
                        }
                     }}>
                         <View style={styles.reviews}>
                             <View style={styles.revCont}>
                                 <StarReview disabled={true} rating={5}  count={5} half={false} fullStar={<Icon name='star' color='#007bee' size={24}/>}
                                        />
                                                         <Text style={styles.review}>1</Text>
                             </View>
                             <View style={styles.radioCircle}>
                            {review.includes('1') && <View style={styles.radioCircle1}></View>}
                            </View>
                         </View>
                     </TouchableOpacity>
                     
                
                
                 <Text style={[styles.subTitle]}>Transmissão</Text> 
                 <ScrollView showsHorizontalScrollIndicator={false} style={styles.tags} horizontal>
                    {[...[{name: 'All'}] ,...[...transmissions]].map((i) => {
                    let item = {
                        item: i
                    }
                    if (item.item.name == 'All'){
                        return (
                            <TouchableWithoutFeedback onPress={() => {
                                trans.length > 0 && setTrans([])
                            }}>
                                <View style={trans.length == 0 ? styles.tag1 : styles.tag}>
                                <Text style={trans.length == 0 ? styles.tagText1: styles.tagText}>Tudo</Text>
                                                        </View>
                            </TouchableWithoutFeedback>
                        )
                    }
                    return (
                        <TouchableWithoutFeedback onPress={() => {
                            if (trans.includes(item.item.name)){
                                removeTran(item.item.name)
                            }else {
                                addTran(item.item.name)
                            }
                        }}>
                            <View style={trans.includes(item.item.name) ? styles.tag1 : styles.tag}>
                                <Text style={trans.includes(item.item.name) ? styles.tagText1 : styles.tagText}>{item.item.name}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                    })}
                </ScrollView>
                <Text style={[styles.subTitle]}>Tipo de Combustível</Text> 
                 <ScrollView showsHorizontalScrollIndicator={false} style={styles.tags} horizontal>
                    {[...[{name: 'All'}] ,...[...fuel]].map((i) => {
                    let item = {
                        item: i
                    }
                    if (item.item.name == 'All'){
                        return (
                            <TouchableWithoutFeedback onPress={()=> {
                                typesf.length > 0 && setTypesF([])
                            }}>
                                <View style={typesf.length == 0 ?styles.tag1: styles.tag}>
                                <Text style={typesf.length == 0 ? styles.tagText1 : styles.tagText}>Tudo</Text>
                                                        </View>
                            </TouchableWithoutFeedback>
                        )
                    }
                    return (
                        <TouchableWithoutFeedback onPress={() => {
                            if (typesf.includes(item.item.name)){
                                removeTypeF(item.item.name)
                            }else {
                                addTypeF(item.item.name)
                            }
                        }}>
                            <View style={typesf.includes(item.item.name) ? styles.tag1 : styles.tag}>
                                <Text style={typesf.includes(item.item.name) ? styles.tagText1 : styles.tagText}>{item.item.name}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                    })}
                </ScrollView>
                <Text style={[styles.subTitle]}>Marca</Text> 
                <View style={[styles.tags2, {marginBottom: 120}]}>
                    {[...[{name: 'All'}] ,...[...brands]].map((i) => {
                    let item = {
                        item: i
                    }
                    if (item.item.name == 'All'){
                        return (
                            <TouchableWithoutFeedback onPress={() => {
                                brandss.length > 0 && setBrandss([])
                            }}>
                                <View style={brandss.length == 0 ?styles.tag1: styles.tag}>
                                <Text style={brandss.length == 0?styles.tagText1: styles.tagText}>Tudo</Text>
                                                        </View>
                            </TouchableWithoutFeedback>
                        )
                    }
                    return (
                        <TouchableWithoutFeedback onPress={() => {
                            if (brandss.includes(item.item.name)){
                                removeBrand(item.item.name)
                            }else {
                                addBrand(item.item.name)
                            }
                        }}>
                            <View style={brandss.includes(item.item.name) ? styles.tag1 : styles.tag}>
                                <Text style={brandss.includes(item.item.name) ? styles.tagText1 : styles.tagText}>{item.item.name}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                    })}
                </View>
                
                
                 </Animated.ScrollView>
                 <SafeAreaView style={styles.buttons}>
                     
                        <TouchableWithoutFeedback onPress={() => {
                     
                            Alert.alert(
                                'Repor',
                                'Redefinir os filtros para o padrão.',
                                [
                                    {
                                        text: 'Ok',
                                        onPress: () => {
                                            setTypes([])
                                            setPriceRange([1000, 15000])
                                            setChecked('Tudo')
                                            setTrans([])
                                            setTypesF([])
                                            setBrandss([])
                                            setReview('Tudo')
                                        }
                                    },
                                    {
                                        text: 'Cancelar',
                                        onPress: () => {},
                     
                                    }
                                ]
                            )
                        }}>
                            <View style={styles.button}><Text style={styles.buttonText}>Resetar Filtros</Text></View>
                        </TouchableWithoutFeedback>
                        <View style={styles.button1}><Text style={styles.buttonText1}>Aplicar</Text></View>
                 </SafeAreaView>
        </View>
    )
}

export default Filter