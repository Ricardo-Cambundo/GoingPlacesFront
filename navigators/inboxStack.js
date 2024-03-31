import { createStackNavigator } from "@react-navigation/stack"
import Inbox from "../screens/inbox"

const Stack = createStackNavigator()

const InboxStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name='inbox' component={Inbox}/>
            
        </Stack.Navigator>
    )
}
export default InboxStack


