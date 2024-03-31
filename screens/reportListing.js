
import { useState } from "react"
import { Keyboard, TextInput, TouchableWithoutFeedback } from "react-native"
import { TouchableOpacity } from "react-native"
import { View, Text, StyleSheet, Animated, Pressable } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
const ReportListing = ({setReportOpen}) => {
    const [other, setOther] = useState('')
    const [report, setReport] = useState('')
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
            zIndex: 102,
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
            alignSelf: 'flex-start',
            fontSize: 30,
            fontWeight: '800',
            ...Platform.select({
                ios: {
                    marginTop: 55
                }
            })   
             
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
        other: {
            backgroundColor: '#f3f3f3',
            height: 130,
            padding: 15,
             zIndex: 100,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10
        },
        button: {
            backgroundColor: '#007bee',
            marginHorizontal: 15,
            paddingVertical: 15,
            marginBottom: 50,
            borderRadius: 50,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 0
        },
        buttonText: {
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '700'
        },
        button1: {
            backgroundColor: '#e9e9e9',
            marginHorizontal: 15,
            paddingVertical: 16,
            marginBottom: 50,
            borderRadius: 50,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 0
        },
        buttonText1: {
            color: '#a7a7a7',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '700',
        },
    })
    const [keyboardActive, setKeyboardActive] = useState(false)
    return (
        <TouchableWithoutFeedback onPress={()=>{
            setKeyboardActive(false)
            Keyboard.dismiss()}}>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Animated.View style={styles.header}>
                    <Pressable onPress={()=>{setReportOpen()}}>
                        <View style={styles.goBack}>
                            <Icon name='close-outline' size={23}/>
                        </View>
                    </Pressable>
            
                    <View></View>
                </Animated.View>
                <View style={{marginTop: 65, paddingHorizontal: 15,  zIndex: 101, backgroundColor: 'white', flex: keyboardActive ? 100 : 0}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, gap: 10}}>
            
                    <Text style={styles.title}>Reportar Listagem</Text>
                    {/* <Icon name='alert-circle' size={31} style={{marginTop: 0, ...Platform.select({
                    ios: {
                        marginTop: 53
                    }
                })   }}/> */}
                </View>
                <TouchableOpacity onPress={() => {
                    if (report.includes('Conteúdo')){
                        setReport("")
                    }else {
                        setReport("Conteúdo impróprio/ofensivo")
                    }
                }}>
                    <View style={styles.report}>
                        <Text style={styles.reportText}>Conteúdo impróprio/ofensivo</Text>
                        <View style={styles.radioCircle}>
                        {report.includes('Conteúdo') && <View style={styles.radioCircle1}></View>}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    if (report.includes('Informações')){
                        setReport("")
                    }else {
                        setReport("Informações enganosas/suspeitas")
                    }
                }}>
                    <View style={styles.report}>
                        <Text style={styles.reportText}>Informações enganosas/suspeitas</Text>
                        <View style={styles.radioCircle}>
                        {report.includes('Informações') && <View style={styles.radioCircle1}></View>}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    if (report.includes('Burla')){
                        setReport("")
                    }else {
                        setReport("Burla")
                    }
                }}>
                    <View style={styles.report}>
                        <Text style={styles.reportText}>Burla</Text>
                        <View style={styles.radioCircle}>
                        {report.includes('Burla') && <View style={styles.radioCircle1}></View>}
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
                
                </View>
                
                    <View style={{flex: 1}}>
                        {
                            ((report.length > 2) || (other.length > 0)) ?
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Reportar</Text>
                        </View>
                        :
                        <View style={styles.button1}>
                            <Text style={styles.buttonText1}>Reportar</Text>
                        </View>
                        }
                    </View>
                
                
            </View>
        </TouchableWithoutFeedback>
    )
}
export default ReportListing