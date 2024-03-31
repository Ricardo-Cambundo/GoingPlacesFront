import { View, Text, StyleSheet, ScrollView } from "react-native"
import Recommmendations from "../components/recommendations"

const CarInfo = () => {
    const styles = StyleSheet.create({

    })
    return (
        <View style={{backgroundColor: 'yellow'}}>
            <Text>
                Car Info
            </Text>
            <ScrollView>
                <Recommmendations />
            </ScrollView>
        </View>
    )
}
export default CarInfo