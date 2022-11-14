import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import {AuthProvider} from "./NOVOAPP/contexts/auth";

import Routes from "./NOVOAPP/routes/index";

import Theme from "./NOVOAPP/Theme";
//import Routes from "./src/routes";

export default function App(){

    return (
        <NavigationContainer>
            <AuthProvider>
                <StatusBar backgroundColor={Theme.colors.BG} barStyle="light-content" />
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    )
}