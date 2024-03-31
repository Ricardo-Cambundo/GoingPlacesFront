import { View, Text, ScrollView } from "react-native"
import HorizontalSlide from "./HorizontalSlide"


const PopularSlide = () => {
   
    return (
        <View style={{backgroundColor: 'white',flex: 1}}>
            <HorizontalSlide range={[0, 6]} tag='Popular'/>
        </View>
    )
}
export default PopularSlide