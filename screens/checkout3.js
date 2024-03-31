import LottieView from "lottie-react-native"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
const Checkout3 = ({ handleScroll }) => {
    const styles = StyleSheet.create({

    })
    return (
        <View  style={{flex: 1, backgroundColor: 'white', width: Dimensions.get('window').width, paddingTop: 110, paddingHorizontal: 15, justifyContent: 'space-between', gap: 80}}>
            <LottieView
                resizeMode="contain"
                style={{
                    width: Dimensions.get('window').width,
                    height:300,
                    flex: 1,
                    alignSelf: 'center',
                    marginTop: -20
                }}
                source={require('../assets/loading1.json')}
                />
                <View>
                    <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '700', marginBottom: 20, marginTop: -20}}>Carro Reservado</Text>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{color: 'grey', fontWeight: '500'}}>Agora podes ver os detalhes da sua reservar e conversar com o locador num chat privado. Indo para viagens</Text>
                        <Icon style={{marginTop: 10}} name='car-outline' size={30}/>
                    </View>
                </View>
        </View>
    )
}
export default Checkout3