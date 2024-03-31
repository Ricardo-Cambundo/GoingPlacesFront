import { createStackNavigator } from "@react-navigation/stack"
import TripDetails from "../screens/tripDetails"
import TripPhotos from "../screens/tripPhotos"
import { useCallback, useEffect, useState } from "react"
import { useFocusEffect, useNavigation } from "@react-navigation/native"

const Stack = createStackNavigator()

const TripDetailsStack = ({photos, setPhotos, data, host}) => {
    // useFocusEffect(useCallback(() => {
    //     data?.data?.images == null ? setPhotos([]) : setPhotos(data.data.images)
    // }, []))
    const TripDetailsScreen = () => {
        return (
        <TripDetails photos={photos} setPhotos={setPhotos} data={data} host={host} />
        )
    }
    const TripPhotosScreen = () => {
        
        return (
        <TripPhotos photos={photos} setPhotos={setPhotos} />
        )
    }
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name='homeDetails' component={TripDetailsScreen}/>

            <Stack.Screen options={{
                headerShown: false
            }} name='tripPhotos' component={TripPhotos}/>
            
            
            
        </Stack.Navigator>
    )
}
export default TripDetailsStack