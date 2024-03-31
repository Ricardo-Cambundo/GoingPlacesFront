import { useNavigation, useRoute } from "@react-navigation/native"
import { useState } from "react"
import { StyleSheet, Text, View, Platform, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

const CancelTrip = () => {
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
            title1: {
                fontSize: 15,
                fontWeight: '700',
                marginBottom: 10,
                marginVertical: 20
            },
            title2: {
                fontSize: 13,
                color: 'grey',
                fontWeight:'500'
            },
            report: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 14,
                borderTopWidth: 0.2,
                borderColor: '#c7c7c7',
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
            textArea: {
                backgroundColor: '#f3f3f3',
                height: 130,
                padding: 15,
                zIndex: 100,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
            },
            other: {
                backgroundColor: '#f3f3f3',
                marginVertical: 10,
                padding: 10,
                
                borderRadius: 10,
                flexDirection: 'row',
                
            },
            button: {
                backgroundColor: '#007bee',
                paddingVertical: 15,
                borderRadius: 50,
                marginVertical: 20,
                marginTop: 30
                
            },
            buttonText: {
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '700'
            },
    })
    const [report, setReport] = useState('')
    const [other, setOther] = useState('')
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={[styles.header]}>
                                    <Pressable onPress={async ()=>{
                                        navigation.goBack()
                                        }}>
                                        <View style={styles.goBack}>
                                            <Icon name='arrow-back' size={23}/>
                                        </View>
                                    </Pressable>
                                    <Text style={styles.title}>Cancelar Viagem</Text>
            
                                   <View></View>
                            </View>

                <ScrollView style={{flex: 1, marginTop: 110, paddingHorizontal: 15}}>
                <TouchableOpacity onPress={() => {
                        if (report.includes('Mudança de planos devido a eventos inesperados')){
                            setReport("")
                        }else {
                            setReport("Mudança de planos devido a eventos inesperados")
                        }
                    }}>
                        <View style={styles.report}>
                            <Text style={styles.reportText}>Mudança de planos devido a eventos inesperados</Text>
                            <View style={styles.radioCircle}>
                            {report.includes('Mudança de planos devido a eventos inesperados') && <View style={styles.radioCircle1}></View>}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if (report.includes('Encontrou uma opção mais conveniente')){
                            setReport("")
                        }else {
                            setReport("Encontrou uma opção mais conveniente")
                        }
                    }}>
                        <View style={styles.report}>
                            <Text style={styles.reportText}>Encontrou uma opção mais conveniente</Text>
                            <View style={styles.radioCircle}>
                            {report.includes('Encontrou uma opção mais conveniente') && <View style={styles.radioCircle1}></View>}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if (report.includes('Condições meteorológicas adversas')){
                            setReport("")
                        }else {
                            setReport("Condições meteorológicas adversas")
                        }
                    }}>
                        <View style={styles.report}>
                            <Text style={styles.reportText}>Condições meteorológicas adversas</Text>
                            <View style={styles.radioCircle}>
                            {report.includes('Condições meteorológicas adversas') && <View style={styles.radioCircle1}></View>}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if (report.includes('Problemas financeiros')){
                            setReport("")
                        }else {
                            setReport("Problemas financeiros")
                        }
                    }}>
                        <View style={styles.report}>
                            <Text style={styles.reportText}>Problemas financeiros</Text>
                            <View style={styles.radioCircle}>
                            {report.includes('Problemas financeiros') && <View style={styles.radioCircle1}></View>}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if (report.includes('Decisão de utilizar outro meio de transporte')){
                            setReport("")
                        }else {
                            setReport("Decisão de utilizar outro meio de transporte")
                        }
                    }}>
                        <View style={styles.report}>
                            <Text style={styles.reportText}>Decisão de utilizar outro meio de transporte</Text>
                            <View style={styles.radioCircle}>
                            {report.includes('Decisão de utilizar outro meio de transporte') && <View style={styles.radioCircle1}></View>}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if (report.includes('xx')){
                            setReport("")
                        }else {
                            setReport("xx")
                        }
                    }}>
                        <View style={styles.report}>
                            <Text style={styles.reportText}>Outro</Text>
                            <View style={styles.radioCircle}>
                            {report.includes('xx') && <View style={styles.radioCircle1}></View>}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#f3f3f3', borderRadius: 10, paddingVertical: 10, display: (report.includes('xx'))  ? 'flex': 'none'}}>
                    <TextInput
                    onFocus={() => setKeyboardActive(true)}
                    placeholder='Outro inquietação...'
                    style={styles.other}
                    value={other}
                    onChangeText={(val) => {
                        setOther(val)}}
                    multiline={true}
                    numberOfLines={8}
                    />
                </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default CancelTrip