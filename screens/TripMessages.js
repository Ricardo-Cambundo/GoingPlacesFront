import { useCallback, useEffect, useRef, useState } from "react"
import { Animated, FlatList, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import api, { baseIP, baseURL } from "../navigators/axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useFocusEffect, useRoute } from "@react-navigation/native"
import { TouchableOpacity } from "react-native-gesture-handler"

const TripMessages = ({data, host, user}) => {
    const route = useRoute()
    
    const styles = StyleSheet.create({
        addText: {
            width: '100%',
            paddingHorizontal: 15,
            
            paddingTop: 5,
            paddingBottom: 5,
            flexDirection: 'row',
            
            borderTopColor: '#80808017',
            borderTopWidth: 2,
            
        },

        container: {
            backgroundColor: 'white',
            paddingVertical: 3,
            paddingHorizontal: 5,
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 5,
            borderBottomLeftRadius: 10,
            borderTopRightRadius: 10,
            flex: 1,
            height: 40
        },
        input: {
            flex: 1,
            marginLeft: 5,
            fontSize: 15,
        },
        send: {
            backgroundColor: '#007bee',
            width: 41,
            height: 41,
            marginLeft: 10,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
        },
        send1: {
            backgroundColor: '#e4e4e4',
            width: 41,
            height: 41,
            marginLeft: 10,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            
        },
        sendIcon: {
            color: 'white',
            fontSize: 20,
        },
        me: {
            
            alignSelf: 'flex-end',
            marginRight: 15,
            flex: 1,
            maxWidth: '80%',
            marginVertical: 7
            
        },
        other: {
            alignSelf: 'flex-start',
            marginLeft: 15,
            flex: 1,
            maxWidth: '80%',
            marginVertical: 7
        },
        meContainer: {
            flex: 1,
            backgroundColor: '#007bee',
            padding: 15,
            marginVertical: 5,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderBottomLeftRadius: 16,
         },
        otherContainer: {
            flex: 1,
            backgroundColor: 'white',
            padding: 15,
            marginVertical: 5,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
         },
        messageMe: {
            color: 'white',
            lineHeight: 18
        },
        messageOther: {
            lineHeight: 18
        },
        dateMe: {
            alignSelf: 'flex-end',
            color: '#929292',
            fontWeight: '500',
            fontSize: 12,
        },
        dateOther: {
            alignSelf: 'flex-start',
            color: '#929292',
            fontWeight: '500',
            fontSize: 12
        }
        
    })
    const [messages, setMessages] = useState([
        // {
        //     me: false,
        //     message: 'Hello, Ricardo how are you doing?',
        //     date_added: Date.now()
        // },
        // {
        //     me: false,
        //     message: 'NIce to meet you',
        //     date_added: Date.now()
        // },
        // {
        //     me: false,
        //     message: 'thank you for your choice, first things first.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        //     date_added: Date.now()
        // },
        // {
        //     me: true,
        //     message: 'thank you for your choice, ',
        //     date_added: Date.now()
        // },
        // {
        //     me: false,
        //     message: 'smod tempor incididunt ut labore et dolore magna aliqua. ',
        //     date_added: Date.now()
        // },
        // {
        //     me: true,
        //     message: 'thank you for your choice, first things first.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        //     date_added: Date.now()
        // },
        // {
        //     me: true,
        //     message: 'thank you for your choice, first things first.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        //     date_added: Date.now()
        // },
        // {
        //     me: false,
        //     message: 'thank you for your choice, first things first.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        //     date_added: Date.now()
        // },
        
    ])
    const [pMessages, setPMessages] = useState([])
    const textRef = useRef(null)
    const [text, setText] = useState('')
    const likeValue = new Animated.Value(1)
    useEffect(() => {
         Animated.timing(likeValue, {
            toValue: 1.3,
            duration: 60,
            useNativeDriver: true
          }).start(() => {
            Animated.timing(likeValue, {
              toValue: 1,
              duration: 40,
              useNativeDriver: true
            }).start()
          })
    }, [text])
    
    // useEffect(() => {
    //     AsyncStorage.removeItem(`chat${data.client}${data.car_owner}`)
    // }, [])
    useEffect(() => {
        console.log('client', data.client, data.car_owner)
        AsyncStorage.getItem(`chat${data.client}${data.car_owner}`)
        .then(response => {
            let first = response ? [...JSON.parse(response)] : []
            response && setPMessages(first)
            console.log('response', response)
            let second = []
            api.get(`api/get_trip/${data.id}`)
            .then(res => {
                second = [...res.data.data.messages].map((item) => {
                    return {
                        message: item.message,
                        date_added: item.date_added,
                        me: user.id == item.user
                    }
                })
                setPMessages(first.concat(second.filter(item => {
                    return (first.every(msg => msg.date_added != item.date_added))
                })))
                
        })
    
            
        })
    }, [])
    
    useEffect(() => {
        const ws = new WebSocket(`ws://${baseIP}/ws/chat/${data.client}${data.car_owner}`)
        ws.onopen = (e) => {

        }
        ws.onmessage = (e) => {
            console.log('received',messages, pMessages)
            let dataa = JSON.parse(e.data)
            let user1 = JSON.parse(dataa.user)
            AsyncStorage.getItem('user')
            .then(res => {
                let user = (JSON.parse(res))
                let obj = {
                    
                    message: dataa.message,
                    me: user1.id == user.id,
                    date_added: JSON.parse(dataa.date_added)
                }
                console.log(messages)
                console.log('console', pMessages, JSON.stringify(pMessages.concat(messages.concat([obj]))))
                AsyncStorage.setItem(`chat${data.client}${data.car_owner}`, JSON.stringify(pMessages.concat(messages).concat([obj])))
                .then(res => {
                    console.log('successfully added to local storage', res)
                })
                setMessages((prevMessages) => [
                    ...prevMessages,
                    obj
                ])
             })
 
            

        }
        ws.onerror = (err) => {
            console.log('web socket error', err)
        }
        
        return () => {
            ws.close()
        }
    }, [messages, pMessages, text])
    useFocusEffect(useCallback(() => {
        console.log('inside messages')
        scrollViewRef != null && scrollViewRef.current.scrollToEnd({animated: true})
    }, []))
     
    const send_message = () => {
        const ws = new WebSocket(`ws://${baseIP}/ws/chat/${data.client}${data.car_owner}`)
        ws.onopen = async () => {
            AsyncStorage.getItem('user')
        .then(async res => {
                let user = JSON.parse(res)
                let trip = {
                    ...data
                }
                ws.send(JSON.stringify({requestData: {
                    ...trip,
                    data: {
                        ...trip.data,
                        messages: [...trip.data.messages, {
                            message: text,
                            user: user.id,
                            date_added: Date.now()
                        }]
                    }
                }, trip: (trip), message: text, user: JSON.stringify(user), date_added: JSON.stringify(Date.now())}))
                
                
                setText('')

            })
            
        }
        ws.onerror = (e) => {
            console.log('ws error', e)
        }

        
    }
    
    const AnimatedView = Animated.createAnimatedComponent(View)
    const scrollViewRef = useRef(null)
    
    
    return (
        
            <View style={{flex: 1}}>
                <ScrollView onContentSizeChange={() => {
                    scrollViewRef.current.scrollToEnd({animated: true})
                }} style={{ flex: 1, marginBottom: 0}} ref={scrollViewRef}>
                    {pMessages.concat(messages).length > 0 && <View>
                            {pMessages.concat(messages).map((i) => {
                        let item = {
                            item: i
                        }
                        return (
                            <View>
                            {item.item.me ?
                            <View style={styles.me}>
                                <View style={styles.meContainer}>
                                    <Text style={styles.messageMe}>{item.item.message}</Text>
                                </View>
                                <Text style={styles.dateMe}>{(Math.round((new Date().getTime() - new Date(item.item.date_added).getTime()) / (1000 * 60 * 60 * 24)+1)) == 1 ? 'Hoje' :
                                 (Math.round((new Date().getTime() - new Date(item.item.date_added).getTime()) / (1000 * 60 * 60 * 24)+1)) == 2 ? 'Ontem': `${new Date(item.item.date_added).getDate()}/${new Date(item.item.date_added).getMonth()+1}/${new Date(item.item.date_added).getFullYear()}`} às {new Date(item.item.date_added).getHours() < 10 ? `0${new Date(item.item.date_added).getHours()}`: new Date(item.item.date_added).getHours()}:{new Date(item.item.date_added).getMinutes() < 10 ? `0${new Date(item.item.date_added).getMinutes()}`: new Date(item.item.date_added).getMinutes()}</Text>
                            </View>
                            :
                            <View style={styles.other}>
                                <View style={styles.otherContainer}>
                                <Text style={styles.messageOther}>{item.item.message}</Text>
                                </View>
                                <Text style={styles.dateOther}>{(Math.round((new Date().getTime() - new Date(item.item.date_added).getTime()) / (1000 * 60 * 60 * 24)+1)) == 1 ? 'Hoje' :
                                 (Math.round((new Date().getTime() - new Date(item.item.date_added).getTime()) / (1000 * 60 * 60 * 24)+1)) == 2 ? 'Ontem': `${new Date(item.item.date_added).getDate()}/${new Date(item.item.date_added).getMonth()+1}/${new Date(item.item.date_added).getFullYear()}`} às {new Date(item.item.date_added).getHours() < 10 ? `0${new Date(item.item.date_added).getHours()}`: new Date(item.item.date_added).getHours()}:{new Date(item.item.date_added).getMinutes() < 10 ? `0${new Date(item.item.date_added).getMinutes()}`: new Date(item.item.date_added).getMinutes()}</Text>
                            </View>}
                            </View>
                        )
                    })}
                        </View>}
                </ScrollView>
                <SafeAreaView>
                    <View style={styles.addText}>
                        <View style={styles.container}>
                            <Icon style={{color: '#007bee',
                                        fontSize: 30,
                                        marginTop: 2}} name='image'/>
                                        <TextInput placeholder="Digite uma mensagem aqui..." style={styles.input} value={text} onChangeText={(val) => {
                        setText(val)
                                        }}/>
                        </View>
                        <TouchableOpacity onPress={() => {
                            send_message()
                        }}>
                            <AnimatedView style={[text.length > 0 ? styles.send : styles.send1, {transform: [{scale: likeValue}]}]}>
                                <Icon style={styles.sendIcon} name='paper-plane'/>
                            </AnimatedView>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>


                
            </View>
        
    )
}
export default TripMessages