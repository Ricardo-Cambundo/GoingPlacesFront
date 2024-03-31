import { StackActions, useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import StarReview from "react-native-stars"

const ProfileReviews = () => {
    const navigation = useNavigation()
    const [reviews, setReviews] = useState([
        
        {name: 'Noélio Deodato', image: 'https://cdn7.dissolve.com/p/D145_16_499/D145_16_499_1200.jpg',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'}])
    const styles = StyleSheet.create({
        reviews: {
            width: '100%',
            marginRight: 12,
            borderRadius: 15,
            marginBottom: 10,
            
          },
          first: {
            flexDirection: 'row',
            gap: 8,
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
            height: 42,
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
          title1: {
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20,
        },
    })
    return (
        <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
            {reviews.length > 0 ? <View>
                <Text style={[styles.title1, {marginTop: 30}]}>Avaliações de clientes</Text>
                                {
                
                                    <TouchableOpacity onPress={() => {
                                        navigation.dispatch(StackActions.push('reviews1', {
                                          reviews: reviews,
                                          title: 'Avaliações de clientes'
                                      }))
                                    }}>
                                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15, justifyContent: 'space-between'}}>
                
                                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                        <Text style={{color: '#b3b3b3', fontSize: 16, fontWeight: '800', marginRight: 3}}>50%</Text>
                                                        <Icon name='star' size={17.5} color={'#007bee'}/>
                                                        {[...reviews].length > 0 && <Text style={{color: '#b3b3b3', fontWeight: '500', marginLeft: 5, fontSize: 16}}>({[...reviews].length} avaliações)</Text>}
                                                    </View>
                                                <Icon name='chevron-forward-outline' size={24} color='#007bee' style={{transform: [{translateY: 1}]}}/>
                                                  </View>
                                    </TouchableOpacity>
                
                                }
                                {[...reviews].slice(0, 2).map((i, index) => {
                                    let item = {
                                      item: i
                                    }
                                    return (
                                      <View style={styles.reviews}>
                                        <View style={{flexDirection: 'row', gap: 10}}>
                                        <TouchableWithoutFeedback onPress={() => {
                                            navigation.dispatch(StackActions.push('profile', {
                                              item: item,
                                              reviews: reviews,
                                              host: false
                                            }))
                
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
                                      </View>
                                    )
                                  })  }
                                  {/* avaliacao de locadores */}
                                  <Text style={[styles.title1, {marginTop: 30}]}>Avaliações de locadores</Text>
                                {
                
                                    <TouchableOpacity onPress={() => {
                                        navigation.dispatch(StackActions.push('reviews1', {
                                          reviews: reviews,
                                          title: 'Avaliações de locadores'
                                      }))
                                    }}>
                                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15, justifyContent: 'space-between'}}>
                
                                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                        <Text style={{color: '#b3b3b3', fontSize: 16, fontWeight: '800', marginRight: 3}}>50%</Text>
                                                        <Icon name='star' size={17.5} color={'#007bee'}/>
                                                        {[...reviews].length > 0 && <Text style={{color: '#b3b3b3', fontWeight: '500', marginLeft: 5, fontSize: 16}}>({[...reviews].length} avaliações)</Text>}
                                                    </View>
                                                <Icon name='chevron-forward-outline' size={24} color='#007bee' style={{transform: [{translateY: 1}]}}/>
                                                  </View>
                                    </TouchableOpacity>
                
                                }
                                {[...reviews].slice(0, 2).map((i, index) => {
                                    let item = {
                                      item: i
                                    }
                                    return (
                                      <View style={styles.reviews}>
                                        <View style={{flexDirection: 'row', gap: 10}}>
                                        <TouchableWithoutFeedback onPress={() => {
                                            navigation.dispatch(StackActions.push('profile', {
                                              item: item,
                                              reviews: reviews,
                                              host: true
                                            }))
                
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
                                      </View>
                                    )
                                  })  }
            </View>:
            <View style={{paddingVertical: 35, alignItems: 'center'}}>
                <Text>Nenhuma avaliação ainda</Text>
                </View>
}
                       
        </View>
    )
}
export default ProfileReviews