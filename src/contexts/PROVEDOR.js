import React, { createContext, useState, useEffect } from "react";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore'

import Flor from '../Pages/App/Images/background.jpg'
import Vidro from '../Pages/App/Images/Vidro.jpg'
import { View } from "react-native";



const PROVEDOR = createContext({ 
    signed: Boolean,
    user: Object,
});

GoogleSignin.configure({
    webClientId: '698156501881-0ipubabefj46mm1ovht4nh2ushrmaupt.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    // Verifique se seu dispositivo é compatível com o Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Crie uma credencial do Google com o token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Entrar o usuário com a credencial
    return auth().signInWithCredential(googleCredential);
  }

export const AuthProvider = ({children}) => {

    //Inicio Temas

    const [file, setFile] = useState()
    const [blur, setBlur] = useState(0)

    function DefinirTema(TemaProps) {
        setFile(TemaProps)
    }

    function MudarBlur(BlurProps) {
        setBlur(BlurProps)
    }


    const ImageBG = file ? {uri: file } : Flor

    //Fim dos Temas

  
    // Definir um estado de inicialização enquanto o Firebase se conecta
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null)
    

    // Lidar com alterações de estado do usuário
    function Entrar(user) {
        if (initializing) setInitializing(false); 
        onGoogleButtonPress()
        .then(() => console.log('Logado com o Google!'))
        setUser(user);
    }
    function EntrarFunc(user) {
        if (initializing) setInitializing(false); 
        setUser(user);
    }
    if(user) {
        var DB = firestore().collection(user.email);
        var DBNovidades = firestore().collection('01');
    }

    function Sair() {
        auth()
        .signOut()
        .then(() => console.log('Usuario saiu!'));
      }

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(EntrarFunc);
      return subscriber; // cancelar assinatura ao desmontar
    }, []);
  
    if (initializing) {
        return(
            <View style={{flex: 1, backgroundColor: '#000000'}}>

            </View>
        )
    };

    return(
        <>
            <PROVEDOR.Provider value={{signed: !!user, user, Entrar, Sair, DB, DBNovidades, ImageBG, DefinirTema, MudarBlur }}>
                {children}
            </PROVEDOR.Provider>
        </>
    );
};

export default PROVEDOR;