import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
const AddCar0 = ({handleScroll}) => {
    const styles = StyleSheet.create({
        title1: {
            fontSize: 17,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20
        },
        extra: {
            flexDirection: 'row',
            gap: 10,
            marginTop: 15,
            marginBottom: 5
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
        
    })
    return (
        <View style={{flex: 1, backgroundColor: 'white', width: Dimensions.get('window').width, paddingTop: 90, paddingHorizontal: 15}}>
            <Text style={styles.title1}>Requisitos de listagem de veículos</Text>
            <View style={styles.extra}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>Localização dos veículos</Text>
                    <Text style={styles.extraDesc}>Listar apenas veículos que estão localizados em Luanda )Angola).</Text>

                </View>
            </View><View style={styles.extra}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>Tempo de vida do veículo</Text>
                    <Text style={styles.extraDesc}>Ter no máximo 12 anos de vida (veja abaixo exceções para "veículos especiais").</Text>

                </View>
            </View>
            <View style={styles.extra}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>Quilometragem</Text>
                    <Text style={styles.extraDesc}>O veiculo precisa ter menos de 130,000 km***.</Text>

                </View>
            </View>
            <View style={styles.extra}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>Seguro</Text>
                    <Text style={styles.extraDesc}>Atender aos <TouchableWithoutFeedback onPress={() => {

                    }}>
                        <Text style={{color: '#007bee', fontWeight: '500'}}>"nossos requisitos de seguro"</Text>
                    </TouchableWithoutFeedback>.</Text>

                </View>
                
            </View>
            <Text style={styles.title1}>Precisa saber antes da sua primeira viagem</Text>
            <View style={styles.extra}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>Limpar e reabastecer antes de cada viagem</Text>
                    <Text style={styles.extraDesc}>Por padrão, sua listagem oferece os extras pré-pagos de limpeza e reabastecimento, que os hóspeded podem comprar antes do início da viagem.</Text>

            </View>
            
                
            </View>
            <View style={styles.extra}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>Mantenha-se atento a novas viagens</Text>
                    <Text style={styles.extraDesc}>Assim que um hóspede reservar seu carro, você receberá uma confirmação no aplicativo e um e-mail com detalhes sobre a viagem.</Text>

            </View>
            
                
            </View>
            <View style={[styles.extra, {marginBottom: 20}]}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>Envie uma mensagem ao seu hóspede.</Text>
                    <Text style={styles.extraDesc}>Assim que um hóspede reservar o seu carro, envie-lhe uma mensagem para se apresentar e coordenar os detalhes da recolha e devolução.</Text>

            </View>
            
                
            </View>
            
            
        </View>
    )
}
export default AddCar0