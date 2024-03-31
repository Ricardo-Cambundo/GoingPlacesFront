import { LinearGradient } from "expo-linear-gradient"
import { useRef, useState } from "react"
import { Dimensions, StyleSheet, Text, View, Pressable, TextInput, TouchableOpacity, Image, Alert } from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import Icon from 'react-native-vector-icons/Ionicons'

const AddCar1 = ({handleScroll, brand, setBrand, year, setYear, model, setModel, cili, setCili, num, setNum, vel, setVel, mileage, setMileage, trans, setTrans, cate, setCate, fuel, setFuel, doors, setDoors, seats, setSeats}) => {
    const styles = StyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            boxSizing: 'border-box',
            paddingHorizontal: 10,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginBottom: 0,
            backgroundColor: 'white',
            zIndex: 100,
            paddingBottom: 7,
            ...Platform.select({
                android: {
                    height: 95
                }
            })
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
            fontSize: 17,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 15,
            alignSelf: 'center'
            },
        title1: {
            fontSize: 17,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20
        },
        title1: {
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20
        },
        inputContainer: {
            backgroundColor: '#f3f3f3',
            marginVertical: 10,
            padding: 10,
            
            borderRadius: 10,
            flexDirection: 'row',
            
        },
        input: {
            fontSize: 15,
            fontWeight: '500'
        },
        icon: {
            transform: [{translateY: 6}],
            marginRight: 7,
            color: '#2182ED',
    
        },
        label: {
            color: 'grey',
            fontSize: 14,
            marginBottom: 2
        },
        report: {
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 14,
            // borderTopWidth: 0.2,
            // borderColor: '#c7c7c7',
            gap: 10
        },
        reportText: {
            fontSize: 15.5,
            fontWeight: '500',

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
        button: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginTop: 20
            
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
        
    })
    
    const [brands, setBrands] = useState([
        "Toyota",
        "Ford",
        "Chevrolet",
        "Honda",
        "Volkswagen",
        "Nissan",
        "BMW",
        "Mercedes-Benz",
        "Audi",
        "Hyundai",
        "Subaru",
        "Kia",
        "Tesla",
        "Porsche",
        "Jaguar",
        "Land Rover",
        "Volvo",
        "Mazda",
        "Fiat",
        "Jeep",
        "GMC",
        "Cadillac",
        "Buick",
        "Lexus",
        "Acura",
        "Infiniti",
        "Mitsubishi",
        "Ram",
        "Mini",
        "Chrysler",
        "Alfa Romeo",
        "Smart",
        "Dodge",
        "Lincoln",
        "Bentley",
        "Ferrari",
        "Maserati",
        "McLaren",
        "Aston Martin"
      ])
    const yearRef = useRef(null)
    const modelRef = useRef(null)
    const ciliRef = useRef(null)
    const numRef = useRef(null)
    const velRef = useRef(null)
    const mileRef = useRef(null)
    const seatRef = useRef(null)
    const doorRef = useRef(null)
    const [categories, setCategories] = useState([
        {
          id: 1,
          name: 'Sedan',
          image: require('../assets/propImages/sedan.png'),
          colors: ['#c7c7c7', '#f5f5f5'],
        },
        {
          id: 1.5,
          name: 'SUV',
          image: require('../assets/propImages/suv.png'),
          colors: ['#7c4f42', '#fc9348'],
        },
        {
          id: 2,
          name: 'Van',
          image: require('../assets/propImages/van.png'),
          colors: ['#2c2c2c','#6d6d6d'],
        }, 
        {
          id: 3,
          name: 'Carrinha',
          image: require('../assets/propImages/pickup.png'),
          colors: ['#c62025','#f36269'],
          
        },
        {
          id: 4,
          name: 'Camião',
          image: require('../assets/propImages/truck.png'),
    
          colors: ['#0379d3','#69b8ec'],
        },
        {
          id: 5,
          name:'Conversível',
          image: require('../assets/propImages/convertible.png'),
    
          colors: ['#c78f0b','#f8c132'],
        }
      ])
    const [confirm, setConfirm] = useState(false)
    return (
        <View style={{flex: 1, backgroundColor: 'white', width: Dimensions.get('window').width, paddingTop: 90, paddingHorizontal: 15, paddingBottom: 10}}>
            <Text style={styles.title1}>Adicionar Carro</Text>
            <SelectDropdown 
            searchInputStyle={{
                backgroundColor: '#f3f3f3'
            }}
            dropdownStyle={{
                backgroundColor: '#f3f3f3',
            }}
            buttonStyle={{
                backgroundColor: '#f3f3f3',
                width: '100%',
                borderRadius: 10,
                height: 60,
                paddingHorizontal: 0
            }}
            buttonTextStyle={{
                color: 'grey',
                fontSize: 14,
                marginBottom: 2,
            }}
            
            searchPlaceHolder="Pesquise uma marca..."
            searchPlaceHolderColor="#b8b8b8"
            renderCustomizedRowChild={(item) => {
                return (
                    <View style={{paddingHorizontal: 10, flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                        <Icon name='car-outline' color='#007bee' size={22}/>
                        <Text style={{fontWeight: 500}}>{item}</Text>
                    </View>
                )
            }}
            rowStyle={{
                borderColor: '#f3f3f3'
            }}
            renderCustomizedButtonChild={(selected) => {
                return (
                    <View style={styles.inputContainer}>
                        <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Qual é o marca do veículo?</Text>
                                                <Text style={{fontWeight: 500}}>{selected}</Text>
                                                </View>
                    </View>
                )
            }}
            defaultButtonText="Qual é a marca do veículo?"
            search
            data={brands}
            onSelect={(val) => {
                setBrand(val)
            }}
            />
            <Pressable onPress={() => {
                                        modelRef.current.focus()
                                    }}>
                                        <View style={styles.inputContainer}>
                                            <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Qual é a modelo dessa marca?</Text>
                                                <TextInput 
                                                ref={modelRef} style={styles.input} value={model} onChangeText={(value)=>setModel(value)}/>
                                            </View>
                                        </View>
                                    </Pressable>
            <Pressable onPress={() => {
                                        yearRef.current.focus()
                                    }}>
                                        <View style={styles.inputContainer}>
                                            <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Qual é o ano de lançamento?</Text>
                                                <TextInput 
                                                maxLength={4} keyboardType="number-pad" ref={yearRef} style={styles.input} value={year} onChangeText={(value)=>setYear(value)}/>
                                            </View>
                                        </View>
                                    </Pressable>
                    <View style={{flexDirection: "row", justifyContent: 'space-between', width: '100%', gap: 15}}>
                    <Pressable style={{flex: 1}} onPress={() => {
                                        numRef.current.focus()
                                    }}>
                                        <View style={[styles.inputContainer, {}]}>
                                            <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>N de cilindros</Text>
                                                <TextInput 
                                                maxLength={2} keyboardType="number-pad" ref={numRef} style={styles.input} value={num} onChangeText={(value)=>setNum(value)}/>
                                            </View>
                                        </View>
                                    </Pressable>
                                    <Pressable style={{flex: 1}} onPress={() => {
                                        ciliRef.current.focus()
                                    }}>
                                        <View style={[styles.inputContainer, {}]}>
                                            <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Cilindrada</Text>
                                                <TextInput 

                                                 ref={ciliRef} style={styles.input} value={cili} onChangeText={(value)=>setCili(value)}/>
                                            </View>
                                        </View>
                                    </Pressable>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: 'space-between', width: '100%', gap: 15}}>
                    <Pressable style={{flex: 1}} onPress={() => {
                                        mileRef.current.focus()
                                    }}>
                                        <View style={[styles.inputContainer, {}]}>
                                            <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Quilometragem (km) </Text>
                                                <TextInput 
                                                keyboardType="numeric" ref={mileRef} style={styles.input} value={mileage} onChangeText={(value)=>setMileage(value)}/>
                                            </View>
                                        </View>
                                    </Pressable>
                                    <Pressable style={{flex: 1}} onPress={() => {
                                        velRef.current.focus()
                                    }}>
                                        <View style={[styles.inputContainer, {}]}>
                                            <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Vel. max.(km/h)</Text>
                                                <TextInput 
                                                keyboardType="numeric"
                                                 ref={velRef} style={styles.input} value={vel} onChangeText={(value)=>setVel(value)}/>
                                            </View>
                                        </View>
                                    </Pressable>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: 'space-between', width: '100%', gap: 15}}>
                    <Pressable style={{flex: 1}} onPress={() => {
                                        mileRef.current.focus()
                                    }}>
                                        <View style={[styles.inputContainer, {}]}>
                                            <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>N de portas </Text>
                                                <TextInput 
                                                maxLength={1}
                                                keyboardType="numeric" ref={doorRef} style={styles.input} value={doors} onChangeText={(value)=>setDoors(value)}/>
                                            </View>
                                        </View>
                                    </Pressable>
                                    <Pressable style={{flex: 1}} onPress={() => {
                                        velRef.current.focus()
                                    }}>
                                        <View style={[styles.inputContainer, {}]}>
                                            <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Lotação</Text>
                                                <TextInput 
                                                maxLength={2}
                                                keyboardType="numeric"
                                                 ref={seatRef} style={styles.input} value={seats} onChangeText={(value)=>setSeats(value)}/>
                                            </View>
                                        </View>
                                    </Pressable>
                    </View>
                    <Text style={styles.title1}>Transmissão</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', gap: 30}}>
                    <TouchableOpacity onPress={() => {
                    setTrans('Automática')
                }}>
                    <View style={styles.report}>
                        <Text style={styles.reportText}>Automática</Text>
                        <View style={styles.radioCircle}>
                        {(trans == 'Automática' || trans.length == 0 )&& <View style={styles.radioCircle1}></View>}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setTrans('Manual')
                }}>
                    <View style={styles.report}>
                        <Text style={styles.reportText}>Manual</Text>
                        <View style={styles.radioCircle}>
                        {trans == 'Manual' && <View style={styles.radioCircle1}></View>}
                        </View>
                    </View>
                </TouchableOpacity>

                    </View>
                    <Text style={styles.title1}>Tipo de combustível</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', gap: 30}}>
                    <TouchableOpacity onPress={() => {
                    setFuel('Gasolina')
                }}>
                    <View style={styles.report}>
                        <Text style={styles.reportText}>Gasolina</Text>
                        <View style={styles.radioCircle}>
                        {(fuel == 'Gasolina' || fuel.length == 0 )&& <View style={styles.radioCircle1}></View>}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFuel('Gasóleo')
                }}>
                    <View style={styles.report}>
                        <Text style={styles.reportText}>Gasóleo</Text>
                        <View style={styles.radioCircle}>
                        {fuel == 'Gasóleo' && <View style={styles.radioCircle1}></View>}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFuel('Electricidade')
                }}>
                    <View style={styles.report}>
                        <Text style={styles.reportText}>Electricidade</Text>
                        <View style={styles.radioCircle}>
                        {fuel == 'Electricidade' && <View style={styles.radioCircle1}></View>}
                        </View>
                    </View>
                </TouchableOpacity>

                    </View>
                    <Text style={styles.title1}>Qual categoria melhor descreve seu veículo?</Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap',}}>
                        {categories.map((cat) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    
                                    setCate(cat.name)
                                }}>
                                    <View style={{opacity: cate.includes(cat.name) ? 0.4 : 1, borderRadius: 20, height: 100, width: 100, justifyContent: 'center', marginVertical: 5}}>
                                        <LinearGradient key={cat.id} style={{width: 100, height: 100, marginVertical: 5, borderRadius: 20, justifyContent: 'center'}} colors={cat.colors} start={{x: 0, y: 0}} end={{x: 1, y: 0}}><Image style={{resizeMode: 'contain', width: 90, height: 90, alignSelf: 'center'}} source={cat.image}/><Text style={{color: 'white', marginLeft: 15, fontWeight: '700', transform: [{translateY: -15}]}}>{cat.name}</Text></LinearGradient>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <Text style={styles.title1}>Certifico o pagamento de impostos aplicáveis ou impostos relacionados na compra do veículo?</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', gap: 30}}>
                    <TouchableOpacity onPress={() => {
                    setConfirm(true)
                }}>
                    <View style={styles.report}>
                        <Text style={styles.reportText}>Sim</Text>
                        <View style={styles.radioCircle}>
                        {(confirm == true )&& <View style={styles.radioCircle1}></View>}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setConfirm(false)
                }}>
                    <View style={styles.report}>
                        <Text style={styles.reportText}>Não</Text>
                        <View style={styles.radioCircle}>
                        {confirm == false && <View style={styles.radioCircle1}></View>}
                        </View>
                    </View>
                </TouchableOpacity>

                    </View>
                    <TouchableOpacity onPress={() => {
handleScroll(2)

                    if (brand == '' || year == '' || model == '' || cili == '' || num == '' || vel == '' || mileage == '' || trans == '' || cate == '' || fuel == '' || doors == '' || seats == ''){
                        Alert.alert(
                            'Campos em falta',
                            'Por favor preencha todos os campos para continuar.',
                            [{
                                text: 'OK',
                                onPress: ()=>{}
                            }]
                        )
                    }else if (confirm == false){
                        
                        Alert.alert(
                            'Confirmação requerida',
                            'Para continuar tens de certificar o pagamento de impostos aplicáveis ou impostos relacionados na compra do veículo.',
                            [{
                                text: 'OK',
                                onPress: ()=>{}
                            }]
                        )
                    }
                    else if (mileage - 130000 >= 0){
                        Alert.alert(
                            'Quilometragem inválida',
                            'O veiculo precisa ter menos de 130,000 km***',
                            [{
                                text: 'OK',
                                onPress: ()=>{}
                            }]
                        )
                    }
                    else if (new Date().getFullYear() - year > 12) {
                        Alert.alert(
                            'Tempo de vida inválido',
                            `O veículo precisa ter no máximo 12 anos de vida. E o seu veículo excede 12 anos de vida, tendo ${new Date().getFullYear() - year} anos de vida` ,
                            [{
                                text: 'OK',
                                onPress: ()=>{}
                            }]
                        )
                    }
                    else {
                        handleScroll(2)
                    }
                }}>
                    <View style={styles.button}>
                        <Text style={styles.save}>Continuar</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}
export default AddCar1