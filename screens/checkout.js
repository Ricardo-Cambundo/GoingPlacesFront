import { StackActions, useNavigation, useRoute } from "@react-navigation/native"
import { useRef, useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Animated, Dimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/Ionicons'
import Checkout0 from "./checkout0"
import Checkout1 from "./checkout1"
import Checkout2 from "./checkout2"
import Checkout3 from "./checkout3"
const Checkout = () => {
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
    title1: {
        marginLeft: '-10%',
        fontSize: 17,
        marginBottom: 10,
        fontWeight: '800'
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 10,
        marginVertical: 15,
        alignSelf: 'center'
        },
    button: {
        backgroundColor: '#007bee',
        paddingVertical: 13,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 10,
        marginHorizontal: 15
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
    const scrollRef = useRef(null)
    const [plan, setPlan] = useState('Mínimo')
    const [total, setTotal] = useState(0)
    const [option, setOption] = useState('')
    const [phone, setPhone] = useState('')
    const [discount, setDiscount] = useState(0)
    const [extra, setExtra] = useState(0)
    const [extraInfo, setExtraInfo] = useState([])
    
    const handleScroll = (index) => {
        if (scrollRef!= null){
            scrollRef.current.scrollTo({x: index * Dimensions.get('window').width, animated: true})
        }
    }
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <Animated.ScrollView  scrollEnabled={false} ref={scrollRef} showsHorizontalScrollIndicator={false} horizontal style={{flex: 1}} pagingEnabled={true}>
                <View style={{flex: 1}}>
                <View style={styles.header}>
                <Pressable onPress={()=>{
                                // clearTimeout(checkValid)
                    navigation.goBack()
                }}>
                    <View style={styles.goBack}>
                        <Icon name='close-outline' size={23}/>
                    </View>
                    
                </Pressable>
                <Text style={styles.title1}>Checkout</Text>
                <View></View>
            </View>
            <ScrollView style={{flex: 1}}>
                <Checkout0 plan={plan} setPlan={setPlan} setExtraInfo={setExtraInfo} extra={extra} setExtra={setExtra} discount={discount} setDiscount={setDiscount} total={total} setTotal={setTotal} handleScroll={(index) => {
                    handleScroll(index)
                }} />
            </ScrollView>
                </View>


                <View style={{flex: 1}}>
                <View style={styles.header}>
                <Pressable onPress={()=>{
                                // clearTimeout(checkValid)
                                handleScroll(0)
                }}>
                    <View style={styles.goBack}>
                        <Icon name='arrow-back-outline' size={23}/>
                    </View>
                    
                </Pressable>
                <Text style={styles.title1}>Métodos de Pagamento</Text>
                <View></View>
            </View>
            <ScrollView style={{flex: 1}}>
                <Checkout1  option={option} setOption={setOption} handleScroll={(index) => {
                    handleScroll(index)
                }} />
            </ScrollView>
                </View>

                

                <View style={{flex: 1}}>
                <View style={styles.header}>
                <Pressable onPress={()=>{
                                // clearTimeout(checkValid)
                                handleScroll(1)
                }}>
                    <View style={styles.goBack}>
                        <Icon name='arrow-back-outline' size={23}/>
                    </View>
                    
                </Pressable>
                <Text style={styles.title1}>Pagamento</Text>
                <View></View>
            </View>
            <ScrollView style={{flex: 1}}>
                <Checkout2 plan={plan} discount={discount} setDiscount={setDiscount} extraInfo={extraInfo} extras={extra} total={total} phone={phone} setPhone={setPhone} option={option} handleScroll={(index) => {
                    handleScroll(index)
                }} />
            </ScrollView>
                </View>

                
                <View style={{flex: 1}}>
                <View style={styles.header}>
                <Pressable onPress={()=>{
                    navigation.dispatch(StackActions.popToTop())
                }}>
                    <View style={styles.goBack}>
                        <Icon name='close-outline' size={23}/>
                    </View>
                    
                </Pressable>
                <Text style={styles.title1}></Text>
                <View></View>
            </View>
            <ScrollView style={{flex: 1}}>
                <Checkout3 handleScroll={(index) => {
                    handleScroll(index)
                }} />
            </ScrollView>
                </View>
            </Animated.ScrollView>
            {/* <View style={styles.header}>
                <Pressable onPress={()=>{
                                // clearTimeout(checkValid)
                    navigation.goBack()
                }}>
                    <View style={styles.goBack}>
                        <Icon name='close-outline' size={23}/>
                    </View>
                </Pressable>
                
            </View> */}
        </View>
    )
}
export default Checkout