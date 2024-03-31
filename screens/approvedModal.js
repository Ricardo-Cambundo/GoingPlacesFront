
import { SafeAreaView } from "react-native"
import { View, Text, Animated, StyleSheet, Pressable } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
const ApprovedModal = ({ setOpen, name }) => {
    const styles = StyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 55,
            alignItems: 'flex-end',
            boxSizing: 'border-box',
            paddingHorizontal: 10,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginBottom: 0,
            backgroundColor: '#f3f3f3',
            zIndex: 102,
            paddingBottom: 7,
            // transform: [{translateY: diffClampScroll}],
            
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
            },
        goBack: {
            width: 40, 
            height: 40, 
            borderRadius: 50,
            backgroundColor: 'transparent',
            // elevation: 4,
            // shadowColor: 'black',
            // shadowRadius: 2,
            // shadowOpacity: 0.1,
            // shadowOffset: {width: 0, height: 0},
            justifyContent: 'center',
            alignItems: 'center',
            },
        title: {
            alignSelf: 'flex-start',
            fontSize: 30,
            fontWeight: '800',
            
        
        },
    })
    return (
        <SafeAreaView style={{backgroundColor: '#f3f3f3', borderTopLeftRadius: 20,
        borderTopRightRadius: 20}}>
            <View style={{ paddingBottom: 35}}>
                <View style={styles.header}>
                        <Pressable onPress={()=>{setOpen()}}>
                            <View style={styles.goBack}>
                                <Icon name='close-outline' color='grey' size={30}/>
                            </View>
                        </Pressable>
            
                        <View></View>
                    </View>
                    <View style={{marginTop: 65, paddingHorizontal: 15,  zIndex: 101}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20, gap: 10}}>
            
                        <Text style={styles.title}>Aprovado</Text>
                        {/* <Icon name='alert-circle' size={31} style={{marginTop: 0, ...Platform.select({
                        ios: {
                            marginTop: 53
                        }
                    })   }}/> */}
                    </View>
                    <Text style={{fontSize: 15}}>"Aprovado para conduzir" significa que {`${name}`.split(' ')[0]} forneceu seu número de carta de condução e passou pelo processo de triagem de condutor do GoingPlaces.</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ApprovedModal