import { createStackNavigator } from "@react-navigation/stack";
import ProfileReviews from "../screens/profileReviews";
import Category from "../screens/category";
import Car from "../screens/car";
import Reviews from "../screens/reviews";
import Profile from "../screens/profile";
import Reviews1 from "../screens/reviews1";
import AllCars from "../screens/allCars";
import ProfileMan from "../screens/profileMan";
import EditAccount from "../screens/editAccount";
import ChangePassword from "../screens/changePassword";
import TransHistory from "../screens/transHistory";
import Transaction from "../screens/transaction";
import HelpCenter from "../screens/helpcenter";
import AddImage from "../screens/addImage";
import Signup from "../screens/signup";
import Signup1 from "../screens/signup1";
import Bio from "../screens/bio";
import EditAccount1 from "../screens/editAccount1";
import EditAccount2 from "../screens/editAccount2";
import Forgot from "../screens/forgot";
import Forgot1 from "../screens/forgot1";
import Forgot2 from "../screens/forgot2";
import AddCar from "../screens/addCar";
import Approve from "../screens/approve";

const Stack = createStackNavigator()
const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} name='reviewsHome' component={ProfileMan}/>
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
            }} name='editAccount' component={EditAccount} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='changePassword' component={ChangePassword} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='transHistory' component={TransHistory} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='transaction' component={Transaction} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='helpCenter' component={HelpCenter} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='addImage' component={AddImage} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='signup' component={Signup} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='signup1' component={Signup1} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='bio' component={Bio} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='editAccount1' component={EditAccount1} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='editAccount2' component={EditAccount2} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='forgot' component={Forgot} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='forgot1' component={Forgot1} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='forgot2' component={Forgot2} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='addcar' component={AddCar} />
            <Stack.Screen options={{
                headerShown: false,
            }} name='approve' component={Approve} />
        </Stack.Navigator>
    )
}
export default ProfileStack