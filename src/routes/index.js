import React, { useState } from "react";
import HomeScreen from "../pages/HomeScreen";
import NewTodo from "../pages/NewTodo";
import CompleteTodo from "../pages/CompleteTodo";
import Temas from "../pages/Temas";
import Login from "../pages/Login";
import LoginSecundario from "./NOVOAPP/Pages/Login";

import Flor from '../Images/background.jpg'
import Raposa from '../Images/Raposa.png'
import Papel from '../Images/Papel.jpg'
import Vidro from '../Images/Vidro.jpg'
import Desenho from '../Images/Desenho.jpg'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function Routes(){
  

  const Tema1 = Flor;
  const Tema2 = Raposa;
  const Tema3 = Papel;
  const Tema4 = Vidro;
  const Tema5 = Desenho;

  const [Tema, setTema] = useState(Flor)

  const theme = {
    ...DefaultTheme,
    colors: {
      BG: '#171d31',
      BGImage: Tema,
      textInfo: "#fff",
      textSub: "rgba(255,255,255,0.3)",
      texttitle: "#fff",
      primary: "#f4511e",
      secondary: "rgb(109, 88, 105)",
      tertiary: "rgb(130, 83, 69)",
    },
  };

    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginSecundario">

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Lista de Tarefas 2.0',
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.texttitle,
            headerTitleStyle: {
              fontWeight: 'bold',
            }, }}
            initialParams={{}}
          />
          <Stack.Screen
            name="NewTodo"
            component={NewTodo}
            options={{ title: 'Nova Tarefa',
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.texttitle,
            headerTitleStyle: {
              fontWeight: 'bold',
            }, }}
            initialParams={{ ImageBG: theme.colors.BGImage }}
          />
          <Stack.Screen
            name="CompleteTodo"
            component={CompleteTodo}
            options={{ title: 'Tarefas Concluídas',
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.texttitle,
            headerTitleStyle: {
              fontWeight: 'bold',
            }, }}
            initialParams={{ ImageBG: theme.colors.BGImage }}
          />
          <Stack.Screen
            name="Temas"
            component={Temas}
            options={({ route }) => ({ title: route.params.name,
              headerStyle: { backgroundColor: theme.colors.primary },
              headerTintColor: theme.colors.texttitle,
              headerTitleStyle: { fontWeight: 'bold' }, 
            })}
            initialParams={{ ImageBG: theme.colors.BGImage }}
          />
            
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    )
}