import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Pages/App/pages/HomeScreen";
import NewTodo from "../Pages/App/pages/NewTodo";
import Temas from '../Pages/App/pages/Temas'
import CompleteTodo from "../Pages/App/pages/CompleteTodo";

import Theme from "../Theme";

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: Theme.colors.BG,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen 
                name="Temas"
                component={Temas}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: Theme.colors.BG,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen 
                name="NewTodo"
                component={NewTodo}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: Theme.colors.BG,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen 
                name="CompleteTodo"
                component={CompleteTodo}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: Theme.colors.BG,
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    )
}