import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, Pressable, TouchableWithoutFeedback, TouchableOpacity, Dimensions, SafeAreaView, Alert, ScrollView } from "react-native"
import { Calendar, CalendarList, LocaleConfig } from "react-native-calendars"
import Icon from 'react-native-vector-icons/Ionicons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { DatePicker } from "react-native-wheel-pick"
import WheelPickerExpo from "react-native-wheel-picker-expo"
import { Platform } from "react-native"
LocaleConfig.locales['pt'] = {
    monthNames: [
        'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
    ],
    dayNames: [
        'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
    ],
    dayNamesShort: [
        'Dom.',
  'Seg.',
  'Ter.',
  'Qua.',
  'Qui.',
  'Sex.',
  'Sáb.'
    ]
}
LocaleConfig.defaultLocale = 'pt'
const Dates1 = ({finalMinutes, setFinalMinutes, prevHour, prevDay, prevMonth, prevYear, setFinalDate, finalDate, setOpenDate, setYear, year, hour, minutes, month, day, setHour, setMinutes, setMonth, setDay, iniDate}) => {
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
            paddingBottom: 7,
            // transform: [{translateY: diffClampScroll}],
            
            
            
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
            marginTop: 55,
              
            
        },
        subTitle: {
            fontSize: 17,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20

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
        extraName: {
            fontWeight: '700',
            fontSize: 15,
          },
          extraDesc: {
            color: 'grey',
            fontSize: 15,
            marginTop: 5,
          },
    })
    const [selected, setSelected] = useState({"dateString": `${year}-${month+1 < 10 ? `0${month + 1}` : `${month + 1}`}-${day < 10 ? `0${day}` : day}`, "day": day, "month": month+1, "timestamp": 1702598400000, "year": year})
    const [show, setShow] = useState(false)
    const [time, setTime] = useState('')
    const [t, setT] = useState(new Date(year, month+1, day, hour, minutes))
    useEffect(() => {
        console.log('carlos', selected)
    })
    const minimumDate = new Date();
  minimumDate.setHours(3, 0, 0, 0); // Set the minimum hour to 3:00 AM

  const maximumDate = new Date();
  
    return (
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
            <View style={styles.header}>
                <Pressable onPress={()=>{setOpenDate()}}>
                    <View style={styles.goBack}>
                        <Icon name='close-outline' size={23}/>
                    </View>
                </Pressable>
                <Text style={styles.title}>Data de deixada</Text>
                <View></View>
            </View>
            <ScrollView style={{flex: 1}}>
                <View style={{ marginTop: 90, flex: 1, backgroundColor: 'white'}}>
                    <View>
                        <Text></Text>
                    </View>

                    <Calendar 
                    style={{
                        
                    }}
                    
                    allowSelectionOutOfRange={false}
                    hideExtraDays={true}
                    minDate={iniDate}
                    maxDate={new Date().setFullYear(new Date().getFullYear() + 1)}
                    onDayPress={(day) => {
                        console.log(day)
                        setSelected(day)
                    }}
                    markingType="custom"
                    markedDates={{
                        [selected.dateString]: {customStyles: {
                            container: {
                                backgroundColor: '#00a2ff'
                            },
                            text: {
                                color: 'white'
                            }
                        }}
                      }}
                    disableAllTouchEventsForDisabledDays={true}
                    
                    theme={{
                        selectedDayTextColor: 'white',
                        selectedDayBackgroundColor: '#007bee',
                        textMonthFontWeight: '600',
                        monthTextColor: 'grey',
                        todayTextColor: '#007bee',
                        arrowColor: '#007bee',
                        textDisabledColor: 'lightgrey',
                        
                    }}
                    
                    />
                    
                    <View style={{paddingHorizontal: 15}}>
                        <Text style={styles.subTitle}>Hora para entregar o veículo de volta</Text>
                        {selected.day == prevDay && selected.month == prevMonth + 1 && selected.year == prevYear && <View style={{flexDirection: 'row', gap: 5, marginBottom: 25, paddingTop: 2
                            }}>
                                  <Icon size={30} color='#007bee' name='alert-circle' style={styles.extraIcon}/>
                                <View style={{flex: 1}}>
                                  <Text style={styles.extraName}>Alerta</Text>
                                  <Text style={styles.extraDesc}>O teu dia de deixada é o mesmo que o dia de recolha. Se recolheres e entregares o veículo de volta no mesmo dia, a tua hora de deixada não poderá ser menor ou igual a hora que receberes o veículo.</Text>
                                  
                                </View>
                              </View>}
                        <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor:'#ececec',padding: 8, borderRadius: 10, width: Platform.OS == 'android' ? 90 :165}}>
                            <TouchableOpacity onPress={()=>setShow(true)}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 70}}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginRight: -3}}>
                                        <Icon name='alarm-outline' size={26} color='#007bee'/>
                                    </View>
                                    {Platform.OS == 'android' && <View style={{borderRadius: 10,  alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{fontWeight: '700', color: '#007bee'}}>{t.length > 2 ? t: `${t.getHours()}:${(t.getMinutes() <60 && t.getMinutes() >=15) ? `30` : `00`}`}</Text>
                                    </View>}
                                    {/* {Platform.OS=='android' && <Text style={{fontSize: 14.5, fontWeight: '700', color: '#007bee'}}>Escolher Hora</Text>} */}
                                    
                                </View>
                            </TouchableOpacity>
                            {
                                Platform.OS== 'ios' ?
                                <DateTimePicker onChange={(e, val)=>{
                                    
                                    setT(val)
                                }} style={{marginVertical: -5, marginHorizontal: -45, backgroundColor: '#ececec', shadowColor: '#ececec', width: 130}} 
                                
                                themeVariant="light" minuteInterval={30} is24Hour={true} display='spinner' mode='time' value={t}/>
                                :
                                <View>
                                    {show && <DateTimePicker
                                    
                                    onChange={(e, val)=>{ 
                                        if (e.type == 'dismissed'){
                                            setShow(false)
                                        }
                                        else if (e.type == 'set'){
                                            
                                            if (selected.day == prevDay && selected.month == prevMonth + 1 && selected.year == prevYear && val.getHours() <= prevHour){
                                                alert('O teu dia de deixada é o mesmo que o dia de recolha. Se recolheres e entregares o veículo de volta no mesmo dia, a tua hora de deixada não poderá ser menor ou igual a hora que receberes o veículo.')                                            }else {
                                                setT(val)
                                            }
                                            setShow(false)


                                        }
                                    }}
                                    negativeButton={{label: 'Cancelar'}} themeVariant='light' minuteInterval={30} is24Hour={true} display='spinner' mode='time' value={t}/>
                                }
                                </View>
                            }
                        </View>
                    </View>
                </View>
                
                 </ScrollView>
                 <SafeAreaView style={styles.buttons}>
                     
                        
                        <TouchableWithoutFeedback onPress={()=> {
                            {if (selected.day == prevDay && selected.month == prevMonth + 1 && selected.year == prevYear && t.getHours() <= prevHour){
                                Alert.alert('Alerta','O teu dia de deixada é o mesmo que o dia de recolha. Se recolheres e entregares o veículo de volta no mesmo dia, a tua hora de deixada não poderá ser menor ou igual a hora que receberes o veículo.',
                                [{
                                    text: 'OK',
                                    onPress: () => {}
                                }])   
                            }else {
                                Alert.alert(
                                    'Salvo',
                                    `Data e hora guardadas`,
                                    [
                                        {
                                            text: `OK`,
                                            onPress: () => {
                                                
                                                setHour(t.getHours())
                                                    setFinalMinutes(t.getMinutes() >=15 ? `30` : `00`)
                                                    setDay(selected.day)
                                                    setMonth(selected.month -1)
                                                    setYear(selected.year)
                                                    setFinalDate(new Date(selected.year, selected.month-1, selected.day, t.getHours()))
                                                    setOpenDate()
                                                

    
                                                
                                            }
                                        }
                                    ]
                                )
                            }
                            }
                        }}>
                            <View style={styles.button1}><Text style={styles.buttonText1}>Salvar</Text></View>
                        </TouchableWithoutFeedback>
                 </SafeAreaView>
            
        </View>
    )
}
export default Dates1