import { View, Text } from "react-native"
import HorizontalSlide from "./HorizontalSlide"

const LuxurySlide = () => {
    return (
        <View style={{backgroundColor: 'white'}}>
            <HorizontalSlide range={[12, 18]} tag='Luxo'/>
        </View>
    )
}
export default LuxurySlide