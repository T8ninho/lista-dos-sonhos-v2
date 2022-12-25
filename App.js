import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import {AuthProvider} from "./SRC/contexts/PROVEDOR";
import Routes from "./SRC/routes/index";
import Theme from "./SRC/Theme";
//import Routes from "./src/routes";

export default function App(){

    return (
        <NavigationContainer>
            <AuthProvider>
                <StatusBar backgroundColor={Theme.colors.primary} barStyle="light-content" />
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    )
}