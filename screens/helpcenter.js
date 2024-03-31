import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Pressable, Image } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
import HelpTab from "../navigators/helpTab"
import { useNavigation } from "@react-navigation/native"
const HelpCenter = () => {
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
            fontWeight: '800',
        },
    })
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
           <View style={[styles.header]}>
                            <Pressable onPress={async ()=>{
                                navigation.goBack()
                                }}>
                                <View style={styles.goBack}>
                                    <Icon name='arrow-back' size={23}/>
                                </View>
                            </Pressable>
                            <Text style={styles.title}>Centro de ajuda</Text>
            
                           <View></View>
                    </View>
            <View style={{paddingTop: 100, flex: 1}}>
                <HelpTab />
            </View>
        </View>
    )
}
export default HelpCenter