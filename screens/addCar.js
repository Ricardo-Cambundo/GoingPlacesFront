import { ScrollView, StyleSheet, Text, View, Pressable, TouchableOpacity, Animated, Dimensions } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import AddCar1 from "./addCar1"
import AddCar2 from "./addCar2"
import AddCar0 from "./addCar0"
import { useRef, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import AddCar3 from "./addCar3"
import AddCar4 from "./addCar4"
import AddCar5 from "./addCar5"
import AddCar6 from "./addCar6"

const AddCar = () => {
    const navigation = useNavigation()
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
            borderRadius: 50,
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
    // addCar 1 variables 
    
    const [brand, setBrand] = useState('')
    const [year, setYear] = useState('')
    const [model, setModel] = useState('')
    const [cili, setCili] = useState('')
    const [num, setNum] = useState('')
    const [vel, setVel] = useState('')
    const [mileage, setMileage] = useState(0)
    const [trans, setTrans] = useState('Automática')
    const [cate, setCate] = useState('')
    const [fuel, setFuel] = useState('Gasolina')
    const [doors, setDoors] = useState('')
    const [seats, setSeats] = useState('')

    // addCar 2 variables
    
    const [obj, setObj] = useState('')
    const [freq, setFreq] = useState('')
    const [freqShare, setFreqShare] = useState('')
    const [notice, setNotice] = useState('')
    const [shortest, setShortest] = useState('')
    const [longest, setLongest] = useState('')
    const handleScroll = (index) => {
        if (scrollRef!= null){
            scrollRef.current.scrollTo({x: index * Dimensions.get('window').width, animated: true})
        }
    }
    // addCar 3 variables
    const [feat, setFeat] = useState([])
    const [plate, setPlate] = useState('')
    const [bio, setBio] = useState(`Econômico e sofisticado para noites de encontro, clientes, passeios, cruzeiros e muito mais. Este carro apresenta um design limpo e condução suave. O exterior preto e a tonalidade da janela diferenciam este Passat de outras opções e o amplo espaço do porta-malas o torna um ótimo transportador também. Obs: proibido transportar animais; por favor não coma dentro do carro.`)

    // addCar 4 variables
    const [images, setImages] = useState([])
    const [imagesF, setImagesF] = useState([])

    // addCar 5 variables
    const [price, setPrice] = useState('')
    const [autoPrice, setAutoPrice] = useState(false)
    const [disc1, setDisc1] = useState('10')
    const [disc2, setDisc2] = useState('15')
    const [disc3, setDisc3] = useState('30')
    
    // addCar 6 variables1
    const [plan, setPlan] = useState('')

    return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        
        <Animated.ScrollView scrollEnabled={false} ref={scrollRef} showsHorizontalScrollIndicator={false} horizontal style={{flex: 1}} pagingEnabled={true}>
            <View>
            <View style={styles.header}>
                <Pressable onPress={()=>{
                                // clearTimeout(checkValid)
                    navigation.goBack()
                }}>
                    <View style={styles.goBack}>
                        <Icon name='close-outline' size={23}/>
                    </View>
                </Pressable>
                
            </View>
                <ScrollView>
                    <AddCar0 />
                    <TouchableOpacity onPress={() => {
                        handleScroll(1)
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.save}>Continuar</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View>
            <View style={styles.header}>
                <Pressable onPress={()=>{
                    handleScroll(0)
                }}>
                    <View style={styles.goBack}>
                        <Icon name='arrow-back-outline' size={23}/>
                    </View>
                    
                </Pressable>
                <Text style={styles.title1}>Teu Carro</Text>
                <View></View>

            </View>
                
                <ScrollView>
                    <AddCar1 brand={brand} setBrand={setBrand} year={year} setYear={setYear} model={model} setModel={setModel} cili={cili} setCili={setCili} num={num} setNum={setNum} vel={vel} setVel={setVel} mileage={mileage} setMileage={setMileage} trans={trans} setTrans={setTrans} cate={cate} setCate={setCate} fuel={fuel} setFuel={setFuel}  doors={doors} setDoors={setDoors} seats={seats} setSeats={setSeats}  handleScroll={(i) => {
                        handleScroll(i)
                    }}/>
                    
                </ScrollView>
            </View>
            <View>
            <View style={styles.header}>
                <Pressable onPress={()=>{
                    handleScroll(1)
                }}>
                    <View style={styles.goBack}>
                        <Icon name='arrow-back-outline' size={23}/>
                    </View>
                </Pressable>
                <Text style={styles.title1}>Teus objectivos</Text>
                <View></View>
            </View>
                <ScrollView>
                    <AddCar2 obj={obj} setObj={setObj} freq={freq} setFreq={setFreq} freqShare={freqShare} setFreqShare={setFreqShare} notice={notice} setNotice={setNotice} shortes={shortest} setShortest={setShortest} longest={longest} setLongest={setLongest} handleScroll={(index) => {
                        handleScroll(index)
                    }} />
                </ScrollView>

            </View>
            <View>
            <View style={styles.header}>
                <Pressable onPress={()=>{
                    handleScroll(2)
                }}>
                    <View style={styles.goBack}>
                        <Icon name='arrow-back-outline' size={23}/>
                    </View>
                </Pressable>
                <Text style={styles.title1}>Outros detalhes</Text>
                <View></View>
            </View>
                <ScrollView>
                    <AddCar3 feat={feat} setFeat={setFeat} plate={plate} setPlate={setPlate} bio={bio} setBio={bio}handleScroll={(index) => {
                        handleScroll(index)
                    }}/>
                </ScrollView>

            </View>
            <View>
            <View style={styles.header}>
                <Pressable onPress={()=>{
                    handleScroll(3)
                }}>
                    <View style={styles.goBack}>
                        <Icon name='arrow-back-outline' size={23}/>
                    </View>
                </Pressable>
                <Text style={styles.title1}>Imagens do Carro</Text>
                <View></View>
            </View>
                <ScrollView>
                    <AddCar4 imagesF={imagesF} setImagesF={setImagesF} images={images} setImages={setImages} handleScroll={(index) => {
                        handleScroll(index)
                    }}/>
                </ScrollView>

            </View>
            <View>
            <View style={styles.header}>
                <Pressable onPress={()=>{
                    handleScroll(4)
                }}>
                    <View style={styles.goBack}>
                        <Icon name='arrow-back-outline' size={23}/>
                    </View>
                </Pressable>
                <Text style={styles.title1}>Preço e descontos</Text>
                <View></View>
            </View>
                <ScrollView>
                    <AddCar5 price={price} setPrice={setPrice} autoPrice={autoPrice} setAutoPrice={setAutoPrice} disc1={disc1} setDisc1={setDisc1} disc2={disc2} setDisc2={setDisc2} disc3={disc3} setDisc3={setDisc3} handleScroll={(index) => {
                        handleScroll(index)
                    }}/>
                </ScrollView>

            </View>
            <View>
            <View style={styles.header}>
                <Pressable onPress={()=>{
                    handleScroll(5)
                }}>
                    <View style={styles.goBack}>
                        <Icon name='arrow-back-outline' size={23}/>
                    </View>
                </Pressable>
                <Text style={styles.title1}>Proteção do veículo</Text>
                <View></View>
            </View>
                <ScrollView>
                    <AddCar6 brand={brand} year={year} model={model}  cili={cili}  num={num} vel={vel} mileage={mileage} trans={trans} cate={cate} fuel={fuel}  plan={plan}
                    
                    
                    obj={obj} freq={freq} freqShare={freqShare}  notice={notice} shortes={shortest} longest={longest}


                    feat={feat} plate={plate} bio={bio} 

                    images={images}
                    imagesF={imagesF}

                    price={price} autoPrice={autoPrice} disc1={disc1} disc2={disc2} disc3={disc3} 

                    seats={seats} doors={doors}
                    setPlan={setPlan} handleScroll={(index) => {
                        handleScroll(index)
                    }}/>
                </ScrollView>

            </View>
            
        </Animated.ScrollView>
    </View>
    )
}
export default AddCar