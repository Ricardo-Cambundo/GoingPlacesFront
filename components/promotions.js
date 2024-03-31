import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import { FlatList, Text, View, StyleSheet, Image } from "react-native"

const Promotions = () => {
    const [promotions, setPromotions] = useState([
        {
            id: 0,
            details: '',
            image: require('../assets/propImages/orangevolk.png'),
            description: 'Leve qualquer Volkswagen este mês com um desconto de 15%',
            colors: ['#c98200', '#ffa600'],
            width: 200,

        },
        {
            id: 1,
            details: '',
            image: require('../assets/propImages/presentbox.png'),
            description: 'Fuja da rotina e abrace a emoção do fim de semana com os nossos descontos',
            colors: ['#e4c200', '#ffd700'],
            width: 100,

        },
        {
            id: 2,
            details: '',
            image: require('../assets/propImages/phone.png'),
            description: 'A lealdade merece reconhecimento! Por isso cada aluguer lhe aproxima de descontos fantásticos',
            colors: ['#0e0e0e','#6d6d6d'],
            width: 115
        }
    ])
    
    return (
        <View style={{marginLeft: 10}}>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={promotions} renderItem={(item)=> {
                return (
                    <LinearGradient colors={item.item.colors} style={styles.container} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <View style={{
}}><Text style={styles.description}>{item.item.description}</Text>
<View style={styles.button}>
                            <Text style={styles.view}>Saber Mais</Text>
                        </View>
</View>
<Image style={[styles.image, {width: item.item.width, transform: [{scale: item.item.id==0 ? 1.2 : 1}]}]}  source={item.item.image}/>

                    </LinearGradient>
                )
            }}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 165,
        width: 320,
        marginRight: 25,
        borderRadius: 30,
        flexDirection: 'row',
        overflow: 'hidden'
    },
    description: {
        paddingHorizontal: 20,
        paddingTop: 15,
        fontWeight: '700',
        color: 'white',
        fontSize: 15.5,
        width: 205,
        height: 110,
        
    },
    image: {
        resizeMode: 'contain',
        height: 'auto'
    },
    button: {
        marginHorizontal: 20,
        borderWidth: 1.5,
        width: 120,
        alignItems: 'center',
        borderColor: 'white',
        paddingVertical: 5,
        borderRadius: 20,
        marginTop: 10

    },
    view: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14.5
    }
    
})
export default Promotions