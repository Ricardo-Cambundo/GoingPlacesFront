import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect } from "react"
import { Dimensions } from "react-native"
import { Image, StyleSheet, Text, View } from "react-native"
import StarReview from "react-native-stars"
import Icon from "react-native-vector-icons/Ionicons"

const Review1 = ({reviews, man, acc, hig, com, item}) => {
    const route = useRoute()
    const navigation = useNavigation()
    
    const styles = StyleSheet.create({
        reviews: {
            width: Dimensions.get('window').width - 90,
            marginRight: 12,
            padding: 15,
            borderRadius: 15,
            height: 210,
            paddingHorizontal: 20,
            elevation: 4,
            backgroundColor: 'white',
            marginBottom: 7,
            shadowColor: 'black',
            shadowOffset: {width: 1, height: 2},
            shadowRadius: 5,
            shadowOpacity: 0.1,
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
            paddingBottom: 3
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
          third: {
            flexDirection: 'row',
            flex: 1,
            alignItems: 'flex-end'
          },
          readMore: {
            textAlign: 'right',
            fontWeight: '700',
            marginTop: 5,
            color: '#007bee',
            fontSize: 14
          }
    })
    return (
        <View style={styles.reviews}>
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
                                </View>
                            </View>
    )
}
export default Review1