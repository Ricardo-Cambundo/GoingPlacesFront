import { useRef, useState } from "react"
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image, TouchableWithoutFeedback, Dimensions, TextInput, Switch, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal'
const AddCar5 = ({handleScroll, price, setPrice, autoPrice, setAutoPrice, disc1, setDisc1, disc2, setDisc2, disc3, setDisc3}) => {
    const styles = StyleSheet.create({
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
          title: {
            alignSelf: 'flex-start',
            fontSize: 18,
            fontWeight: '800',
            
             
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
        title1: {
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20
        },
        title2: {
            fontSize: 13,
            color: 'grey',
        },
        button: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginBottom: 10,
            marginTop: 15
        },
        button1: {
            borderColor: '#007bee',
            borderWidth: 1,
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginBottom: 10,
            marginTop: 15

        },
        save: {
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
        },
        save1: {
            color: '#007bee',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
        }
    })
    const priceRef = useRef(null)
    const [open, setOpen] = useState(false)
    
    const disc1Ref = useRef(null)
    const disc2Ref = useRef(null)
    const disc3Ref = useRef(null)
    return (
        <View style={{flex: 1, backgroundColor: 'white', width: Dimensions.get('window').width, paddingHorizontal: 15, paddingTop: 110}}>
            <Modal isVisible={open} animationIn={'slideInLeft'} animationOut={'slideOutRight'}>
                <View style={{backgroundColor: 'white', padding: 20}}>
                <Text style={styles.title}>Preços Automáticos</Text>
                <Text style={{color: 'grey', marginTop: 20}}>A definição automática de preços permite-lhe eliminar as conjeturas e aumentar os ganhos, ajustando dinamicamente o seu preço para corresponder à procura.</Text>
                 <View style={styles.extra}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>Preços Inteligentes</Text>
                    <Text style={styles.extraDesc}>O seu preço adapta-se com base nas mudanças na oferta e procura, incluindo sazonalidade, dia da semana e eventos locais.</Text>

                </View>
                </View>
                <TouchableOpacity onPress={() => setOpen(false)}>
                    <Text style={{textAlign: 'center', color: '#007bee', fontWeight: '500', marginTop: 15, marginBottom: 10}}>Fechar</Text>
                </TouchableOpacity>
                </View>
            </Modal>
            <Pressable onPress={() => {
                                        priceRef.current.focus()
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
                                                <Text style={styles.label}>Preço diáro (em KZ)</Text>
                                                <TextInput 
                                                 keyboardType="number-pad" ref={priceRef} style={styles.input} value={price} onChangeText={(value)=>setPrice(value)}/>
                                            </View>
                                        </View>
                    </Pressable>
                    <Text style={styles.title2}>Recomendamos um preço diário dentro do intervalo de 5,000 - 20,000 KZ</Text>
                        <View style={styles.option}>
                    <Icon name='pricetags-outline' style={styles.optionIcon}/>
                    <View style={styles.optionTexts}>
                        <Text style={styles.optionLabel}>Preços Automáticos</Text>
                        <Text style={styles.optionDesc}>{autoPrice ? 'Ligado' : 'Desligado'}</Text>
                    </View>
                    <View style={{justifyContent: 'space-between', flex: 1, flexDirection:'row'}}>
                        <View></View>
                        <Switch thumbColor={'white'} trackColor={{true: '#007bee', false: ''}} value={autoPrice} onValueChange={(val)=>setAutoPrice(val)}/>

                    </View>
                </View>
                <TouchableOpacity onPress={() => {
                    setOpen(true)
                }}>
                    <View><Text style={{color: '#007bee', fontSize: 13, fontWeight: '500', marginLeft: 30}}>Como funciona?</Text></View>
                </TouchableOpacity>
                <Text style={styles.title1}>Descontos por Duração</Text>
                <Text style={styles.title2}>Incentive os clientes a reservar viagens mais longas, oferecendo descontos para viagens de fim de semana, semanais ou mensais</Text>
                <Pressable onPress={() => {
                                        disc1Ref.current.focus()
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
                                                <Text style={styles.label}>Desconto para 3+ dias (%)</Text>
                                                <TextInput 
                                                maxLength={4} keyboardType="number-pad" ref={disc1Ref} style={styles.input} value={disc1} onChangeText={(value)=>setDisc1(value)}/>
                                            </View>
                                        </View>
                    </Pressable>
                    <Text style={styles.title2}>Recomendamos 10%</Text>
                    <Pressable onPress={() => {
                                        disc2Ref.current.focus()
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
                                                <Text style={styles.label}>Desconto para 7+ dias (%)</Text>
                                                <TextInput 
                                                maxLength={4} keyboardType="number-pad" ref={disc2Ref} style={styles.input} value={disc2} onChangeText={(value)=>setDisc2(value)}/>
                                            </View>
                                        </View>
                    </Pressable>
                    <Text style={styles.title2}>Recomendamos 15%</Text>
                    <Pressable onPress={() => {
                                        disc3Ref.current.focus()
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
                                                <Text style={styles.label}>Desconto para 30+ dias (%)</Text>
                                                <TextInput 
                                                maxLength={4} keyboardType="number-pad" ref={disc3Ref} style={styles.input} value={disc3} onChangeText={(value)=>setDisc3(value)}/>
                                            </View>
                                        </View>
                    </Pressable>
                    <Text style={styles.title2}>Recomendamos 30%</Text>
                    <TouchableOpacity onPress={() => {
 handleScroll(6)
                        if (price == '' || disc1 == '' || disc2 == '' || disc3 == ''){
                            Alert.alert(
                                'Campos em falta',
                                'Por favor preencha todos os campos para continuar.',
                                [{
                                    text: 'OK',
                                    onPress: ()=>{}
                                }]
                            )
                        }else {
                            handleScroll(6)
                        }
                }}>
                    <View style={styles.button}>
                        <Text style={styles.save}>Continuar</Text>
                    </View>
                </TouchableOpacity>

        </View>
    )
}
export default AddCar5