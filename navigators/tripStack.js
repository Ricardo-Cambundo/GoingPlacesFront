import { createStackNavigator } from "@react-navigation/stack"
import Trip from "../screens/trip"
import TripInfo from "../screens/tripInfo"
import Category from "../screens/category"
import Car from "../screens/car"
import Reviews from "../screens/reviews"
import Profile from "../screens/profile"
import Reviews1 from "../screens/reviews1"
import AllCars from "../screens/allCars"
import Login from "../screens/login"
import Signup from "../screens/signup"
import Signup1 from "../screens/signup1"
import Checkout from "../screens/checkout"
import TripPhotos from "../screens/tripPhotos"
import { useState } from "react"
import TripCar from "../screens/tripCar"
import ReportDamage from "../screens/reportDamage"
import CancelTrip from "../screens/cancelTrip"

const Stack = createStackNavigator()

const TripStack = () => {
    
    return ( 
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name='trip' component={Trip} />
            <Stack.Screen options={{
                headerShown: false
            }} name='tripInfo' component={TripInfo} />
            <Stack.Screen options={{
                headerShown: false
            }} name='category' component={Category}/>
            <Stack.Screen options={{
                headerShown: false,
            }} name='car' component={Car}/>
             <Stack.Screen options={{
                headerShown: false,
            }} name='reviews' component={Reviews}/>
            <Stack.Screen options={{
                headerShown: false,
            }} name='profile' component={Profile}/>
            <Stack.Screen options={{
                headerShown: false,
            }} name='reviews1' component={Reviews1} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='allCars' component={AllCars} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='login' component={Login} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='signup' component={Signup} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='signup1' component={Signup1} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='checkout' component={Checkout} />
            <Stack.Screen options={{
                headerShown: false
            }} name='tripPhotos' component={TripPhotos}/>
            <Stack.Screen options={{
                headerShown: false
            }} name='reportDamage' component={ReportDamage}/>
            <Stack.Screen options={{
                headerShown: false
            }} name='cancelTrip' component={CancelTrip}/>

        </Stack.Navigator>
    )
}
export default TripStack