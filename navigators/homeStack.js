import { createStackNavigator } from "@react-navigation/stack";
import Category from "../screens/category";
import Search from "../screens/search";
import Car from "../screens/car";
import Reviews from "../screens/reviews";
import Home from "../screens/home";
import Profile from "../screens/profile";
import Reviews1 from "../screens/reviews1";
import AllCars from "../screens/allCars";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Signup1 from "../screens/signup1";
import Checkout from "../screens/checkout";

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name='searchHome' component={Home}/>
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
        </Stack.Navigator>
    )
}
export default HomeStack