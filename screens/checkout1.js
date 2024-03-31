import { useState } from "react"
import { Dimensions, View, Text, Pressable, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
const Checkout1 = ({handleScroll, option, setOption}) => {
    const styles = StyleSheet.create({
        radioCircle: {
            width: 21, 
            height: 21,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: '#007bee',
            alignItems: 'center',
            justifyContent: 'center',
        },
        radioCircle1: {
            backgroundColor: '#007bee',
            width: 10,
            height: 10,
            borderRadius: 50

        },
        container: {
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 14,
            borderRadius: 10,
            borderColor: '#e6e6e6',
            borderWidth: 1,
            flex: 1,
        },
        name: {
            color: 'grey',
            fontWeight: '600',
            fontSize: 15
        },
        icon: {
            fontSize: 18,
            color: '#0075e2',
            marginRight: 10
        },
        title: {
            fontSize: 17,
            fontWeight: '700',
            marginBottom: 10,
            
        },
        extra: {
            flexDirection: 'row',
            gap: 10,
            marginBottom: 20
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

    })
    return (

        <View style={{flex: 1, backgroundColor: 'white', width: Dimensions.get('window').width, paddingTop: 110, paddingHorizontal: 15, justifyContent: 'space-between'}}>
            <View style={{}}>
                <View style={{marginBottom: 20}}>
                    <Text style={styles.title}>Pagamento por contacto telefónico</Text>
                    <TouchableOpacity onPress={() => {
                        setOption('')
                    }}>
                        <View style={styles.container}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Icon style={styles.icon} name='call-outline' />
                                <Text style={styles.name}>Contacto</Text>
                            </View>
                            <View style={styles.radioCircle}>
                                {option == '' && <View style={styles.radioCircle1}></View>}
                                </View>
                        </View>
                    </TouchableOpacity>
                </View>
                {option == '' && <View style={{}}>
                <View style={styles.extra}>
                    <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                    <View style={styles.extraInfo}>
                        <Text style={styles.extraTitle}>Pagamento por contacto telefónico</Text>
                        <Text style={styles.extraDesc}>O pagamento é feito a partir de um número de telemóvel válido associado a sua conta MULTICAIXA.</Text>
                    </View>
                </View>
                    </View>}
                <View style={{marginBottom: 20}}>
                    <Text style={styles.title}>Pagamento por Referência</Text>
                    <TouchableOpacity onPress={() => {
                        setOption('Referência')
                    }}>
                        <View style={styles.container}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Icon style={styles.icon} name='phone-portrait-outline' />
                                <Text style={styles.name}>Referência</Text>
                            </View>
                            <View style={styles.radioCircle}>
                                {option == 'Referência' && <View style={styles.radioCircle1}></View>}
                                </View>
                        </View>
                    </TouchableOpacity>
                </View>
                {option == 'Referência' && <View style={{}}>
                <View style={styles.extra}>
                    <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                    <View style={styles.extraInfo}>
                        <Text style={styles.extraTitle}>Pagamento por Referência</Text>
                        <Text style={styles.extraDesc}>Um código de referência é gerado para efetuares o pagamento num ATM ou no aplicativo MULTICAIXA express/BAI Directo.</Text>
                    </View>
                </View>
                    </View>}
            </View>
                <TouchableOpacity onPress={() => {
                        handleScroll(2)      
                }}>
                    <View style={styles.button}>
                        <Text style={styles.save}>Continuar</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}
export default Checkout1