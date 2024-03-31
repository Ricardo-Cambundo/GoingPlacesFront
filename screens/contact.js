import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Pressable } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
const Contact = () => {
    const styles = StyleSheet.create({
        cont: {
            backgroundColor: '#f5f5f5',
            flex: 1, 
            flexDirection: 'row',
            height: 100
        },
        text: {
            fontWeight: '800',
            fontSize: 15,
            marginLeft: 15
        }
    })
    return (
        <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15, paddingTop: 20}}>
            
            <TouchableOpacity>
                <LinearGradient style={{marginBottom: 20,padding: 15, flexDirection: 'row', borderTopLeftRadius: 20, borderBottomRightRadius: 20, borderTopRightRadius: 20}} colors={['#1ebea5', '#00e676', '#d0e9ea']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <Icon name='logo-whatsapp' color={'white'} size={20}/>
                        <Text style={[styles.text, {color: 'white'}]}>WhatsApp</Text>
                </LinearGradient>
            </TouchableOpacity>
           
            <TouchableOpacity>
                <LinearGradient style={{marginBottom: 20, padding: 15, flexDirection: 'row', borderTopLeftRadius: 20, borderBottomRightRadius: 20, borderTopRightRadius: 20}} colors={['#3b5998', '#f0f0f0']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <Icon name='logo-facebook' size={20} color={'white'}/>
                        <Text style={[styles.text, {color: 'white'}]}>Facebook</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity>
                <LinearGradient style={{marginBottom: 20, padding: 15, flexDirection: 'row', borderTopLeftRadius: 20, borderBottomRightRadius: 20, borderTopRightRadius: 20}} colors={['#405DE6', '#5851DB', '#833AB4', '#C13584', '#e1306c', '#fd1d1d']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <Icon name='logo-instagram' size={20} color={'white'}/>
                        <Text style={[styles.text, {color: 'white'}]}>Instagram</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity>
                <LinearGradient style={{marginBottom: 20, padding: 15, flexDirection: 'row', borderTopLeftRadius: 20, borderBottomRightRadius: 20, borderTopRightRadius: 20}} colors={['#ea4335', '#fbbc05', '#34a853', '#4285f4']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <Icon name='logo-google' size={20} color={'white'}/>
                        <Text style={[styles.text, {color: 'white'}]}>G-Mail</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
                <LinearGradient style={{marginBottom: 20, padding: 15, flexDirection: 'row', borderTopLeftRadius: 20, borderBottomRightRadius: 20, borderTopRightRadius: 20}} colors={['#122b40', '#446cb3']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <Icon name='globe-outline' size={20} color={'white'}/>
                        <Text style={[styles.text, {color: 'white'}]}>Website</Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>
    )
}
export default Contact