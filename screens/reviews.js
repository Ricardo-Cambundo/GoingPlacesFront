import { useNavigation, useRoute } from "@react-navigation/native"
import { Dimensions, TouchableWithoutFeedback } from "react-native"
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native"
import { ProgressChart } from "react-native-chart-kit"
import { FlatList } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/Ionicons'
import StarReview from "react-native-stars"
import { Image } from "react-native"
import { useEffect, useState } from "react"


const Reviews = () => {
    const route = useRoute()
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
        title: {
            marginLeft: '-10%',
            fontSize: 17,
            marginBottom: 10,
            fontWeight: '800'
        },
        label: {
            marginLeft: 10,
            fontSize: 12.5,
            fontWeight: '700',
            color: '#002a52',
          },
          reviews: {
            width: '100%',
            marginRight: 12,
            padding: 15,
            borderRadius: 15,
            paddingHorizontal: 15,
            marginBottom: 10,
            
          },
          first: {
            flexDirection: 'row',
            gap: 8
          },
          reviewImage: {
            width: 42,
            height: 42,
            borderRadius: 50
          },
          info: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 3,
            alignItems: 'flex-start',
            height: 42
          },
          reviewName: {
            fontSize: 12,
            fontWeight: '600',
            marginRight: 5,
            alignSelf: 'flex-end'
          },
          reviewDate: {
            fontSize: 12.5,
          },
          review: {
            marginTop: 8,
            fontSize: 15,
          },
          
          readMore: {
            textAlign: 'right',
            fontWeight: '700',
            marginTop: 5,
            color: '#007bee',
            fontSize: 14
          }
    })
    const [commentPositions, setCommentPositions] = useState(null)
    const scrollViewRef = useState(null)

    const handleLayout = (index, {nativeEvent}) => {
      if (index == route.params?.selectedCommentIndex){
        setCommentPositions(nativeEvent.layout.y)

      }
    }
    useEffect(() => {
      if (scrollViewRef.current && route.params?.selectedCommentIndex !== undefined){
        scrollViewRef.current.scrollTo({
          y: commentPositions - 108,
          animated: true
        })
      }
    }, [commentPositions, route.params?.selectedCommentIndex])
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
             <View style={styles.header}>
                    <Pressable onPress={async ()=>{
                        navigation.goBack()
                        }}>
                        <View style={styles.goBack}>
                            <Icon name='arrow-back' size={23}/>
                        </View>
                    </Pressable>
                    <Text style={styles.title}>Avaliações</Text>
                   <View></View>
            </View>
            <ScrollView ref={scrollViewRef} style={{}}>
            
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 110, paddingHorizontal: 15}}>
            
                          <Text style={{color: '#b3b3b3', fontSize: 16, fontWeight: '800', marginRight: 3}}>{Math.round((parseInt(route.params.acc) +(route.params.man) + parseInt(route.params.com) + parseInt(route.params.hig)) / 4)}%</Text>
                          <Icon name='star' size={17.5} color={'#007bee'}/>
                          {[...route.params.reviews].length > 0 && <Text style={{color: '#b3b3b3', fontWeight: '500', marginLeft: 5, fontSize: 16}}>({[...route.params.reviews].length} avaliações)</Text>}
                        </View>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginBottom: 8}}>
                          <ProgressChart data={{
                            labels: ['Exatidão', 'Manutenção', 'Comunicação', 'Higiene'],
                            data: [parseInt(route.params.acc)/100, parseInt(route.params.man)/100, parseInt(route.params.com)/100, parseInt(route.params.hig)/100],
                            colors: ['#00b7ff', '#0084ff', '#005aad', '#002a52'],

                          }}
                          strokeWidth={11}
                          radius={35}
                          hideLegend={true}
                          width={200}                     
                          height={200}
                          chartConfig={{
                            propsForDots: {
                              
                            },
                            backgroundColor: 'white',
                            backgroundGradientFrom: 'white',
                            backgroundGradientTo: 'white',
                            
                            color: (opacity = 1) => `rgba(2, 86, 165, ${opacity})`,
                            propsForLabels: {
                              dx: 0,
                              dy: 0
                              
                            },
                                                    
                          }}
                          withCustomBarColorFromData

                          />
                          <View style={{justifyContent: 'space-around', height: 130, alignSelf: 'flex-start', marginRight: 15, marginTop: 10}}>
                          <View style={{flexDirection: 'row', alignItems: 'center', height: 20}}>
                            
                            <View style={{width: 17, height: 17, borderRadius: 50, backgroundColor: '#00b7ff'}}></View>
                            <Text style={styles.label}>Exatidão {route.params.acc}%</Text>
                          </View>
                          <View style={{flexDirection: 'row', alignItems: 'center', height: 20}}>
                              <View style={{width: 17, height: 17, borderRadius: 50, backgroundColor: '#0084ff'}}></View>
                              <Text style={styles.label}>Manutenção {route.params.man}%</Text>
                            </View>
                            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                              <View style={{width: 17, height: 17, borderRadius: 50, backgroundColor: '#005aad'}}></View>
                              <Text style={styles.label}>Comunicação {route.params.com}%</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                              <View style={{width: 17, height: 17, borderRadius: 50, backgroundColor: '#002a52'}}></View>
                              <Text style={styles.label}>Higiene {route.params.hig}%</Text>
                            </View>
                          </View>
                          
                          </View>
                          {[...route.params.reviews, ...route.params.reviews].map((i, index) => {
                            let item = {
                              item: i
                            }
                            return (
                              <View onLayout={(e) => handleLayout(index, e)} style={styles.reviews}>
                                <View style={{flexDirection: 'row', gap: 10}}>
                                <TouchableWithoutFeedback onPress={() => {
                                  navigation.navigate('profile', {
                                    item: item,
                                    reviews: route.params.reviews,
                                    host: false
                                  })
                                }}>
                                  <Image style={styles.reviewImage} source={{uri: item.item.image}}/>
                                </TouchableWithoutFeedback>

                                <View style={{flex: 1}}>
                                
                        <View style={styles.info}>
                            <StarReview rating={5} count={5} half={false} fullStar={<Icon name='star' color='#007bee' size={15.5}/>}
                            halfStar={<Icon name='star-half' color='#ffe600' size={20}/>}
                            emptyStar={<Icon name='star' color='#d1d1d1' size={20}/>}/>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.reviewName}>{item.item.name}</Text>
                                <Text style={styles.reviewDate}>27/11/2023</Text>
                            </View>
                        </View>
                        <View style={styles.second}>
                            <Text style={styles.review}>{item.item.review}</Text>
                        </View>
                        </View>
                                </View>
{/*                                 
                                <View style={styles.first}>
                                <Image style={styles.reviewImage} source={{uri: item.item.image}}/>
                                <View style={styles.info}>
                                  
                                  <View style={{flexDirection: 'row'}}>
                                  <StarReview rating={5} count={5} half={false} fullStar={<Icon name='star' color='#007bee' size={15.5}/>}
                        halfStar={<Icon name='star-half' color='#ffe600' size={20}/>}
                        emptyStar={<Icon name='star' color='#d1d1d1' size={20}/>}/>
                                  </View>
                                  <View style={{flexDirection: 'row'}}>
                                  <Text style={styles.reviewName}>{item.item.name}</Text>
                                  <Text style={styles.reviewDate}>27/11/2023</Text>
                                  </View>
                                  </View>
                                </View>
                                <View style={styles.second}>
                                  <Text numberOfLines={4} ellipsizeMode='tail' style={styles.review}>{item.item.review}</Text>
                                  </View>
                                  <View style={styles.third}>
                                  <Text style={styles.readMore}>Ler mais</Text>
                                  </View> */}
                              </View>
                            )
                          })}
                        
            </ScrollView>
        </View>
    )
}
export default Reviews