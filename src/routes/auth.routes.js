import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../Pages/Auth/Welcome";
import Login from "../Pages/Auth/Login";
import NewUser from '../Pages/Auth/NewUser'

import Theme from "../Theme";

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen 
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="NewUser"
                component={NewUser}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}