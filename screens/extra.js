import { View, Text, Animated, StyleSheet, Pressable } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

const Extra = ({setExtraOpen}) => {
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
            fontWeight: '700',
            marginTop: 5,     
            marginBottom: 20,
            ...Platform.select({
                ios: {
                    marginTop: 55
                }
            })    
        },
        extra: {
            flexDirection: 'row',
            gap: 10,
            marginTop: 15,
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
        }
    })
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <Animated.View style={styles.header}>
                <Pressable onPress={()=>{setExtraOpen()}}>
                    <View style={styles.goBack}>
                        <Icon name='close-outline' size={23}/>
                    </View>
                </Pressable>
                
                <View></View>
            </Animated.View>
            <View style={{flex: 1, marginTop: 65, paddingHorizontal: 15}}>
            <Text style={styles.title}>Extras</Text>
            <View style={styles.extra}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>Adicione algo extra</Text>
                    <Text style={styles.extraDesc}>Você terá a opção de adicionar Extras durante o checkout. Após a reserva, envie uma mensagem ao seu anfitrião se tiver alguma questão ou pedido especial.</Text>

                </View>
            </View><View style={styles.extra}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>Trate-os como se fossem seus</Text>
                    <Text style={styles.extraDesc}>Trate os extras como se fossem seus assim como o veiculo.</Text>

                </View>
            </View>
            <View style={styles.extra}>
                <Icon size={30} name='checkmark-done-circle-outline' style={styles.extraIcon}/>
                <View style={styles.extraInfo}>
                    <Text style={styles.extraTitle}>Planos alterados?</Text>
                    <Text style={styles.extraDesc}>Você pode remover um extra da sua viagem antes que ela comece, visualizando os detalhes da sua viagem.</Text>

                </View>
            </View>
            </View>
            
        </View>
    )
}
export default Extra