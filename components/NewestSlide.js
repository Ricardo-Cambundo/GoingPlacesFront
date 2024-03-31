import { View, Text } from "react-native"
import HorizontalSlide from "./HorizontalSlide"

const NewestSlide = () => {
    
    return (
        <View style={{backgroundColor: 'white'}}>
            <HorizontalSlide range={[6, 12]} tag='Recente'/>
        </View>
    )
}
export default NewestSlide