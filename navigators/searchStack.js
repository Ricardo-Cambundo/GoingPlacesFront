import { createStackNavigator } from "@react-navigation/stack";
import Category from "../screens/category";
import Search from "../screens/search";
import Car from "../screens/car";
import Reviews from "../screens/reviews";

const Stack = createStackNavigator()

const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name='searchHome' component={Search}/>
            <Stack.Screen options={{
                headerShown: false
            }} name='category' component={Category}/>
            <Stack.Screen options={{
                headerShown: false,
            }} name='car' component={Car}/>
             <Stack.Screen options={{
                headerShown: false,
            }} name='reviews' component={Reviews}/>
        </Stack.Navigator>
    )
}
export default SearchStack