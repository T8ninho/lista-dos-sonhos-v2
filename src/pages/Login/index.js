import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';


import FabButton from '../../components/FabButton';

import { Button } from 'react-native-paper';

import { useTheme } from 'react-native-paper';
import HomeScreen from '../HomeScreen';

import GoogleImage from '../../Images/LoginGoogle.png'

import auth, { onAuthStateChanged } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

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

export default function Login({route, navigation}) {

    const theme = useTheme();

    function Sair() {
      auth()
      .signOut()
      .then(() => console.log('Usuario saiu!'));
    }
  

  // Definir um estado de inicialização enquanto o Firebase se conecta
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Lidar com alterações de estado do usuário
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false); 
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // cancelar assinatura ao desmontar
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
        <View style={{flex: 1,justifyContent: "center", alignItems: 'center', backgroundColor: theme.colors.BG, padding: 20}}>
        <TouchableOpacity 
          style={{padding: 10}} 
          onPress={() => onGoogleButtonPress().then(() => console.log('Logado com o Google!'))}
        >
          <Image style={{width: 50, height: 50}} source={GoogleImage} />
        </TouchableOpacity>
        <Button
            mode='contained'
            onPress={() => onGoogleButtonPress().then(() => console.log('Logado com o Google!'))}
        >Logar com o Google</Button>
        <Text style={{color: theme.colors.textInfo}}>faça login com sua conta google</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <Button onPress={() => Sair()} >Sair da Conta Google</Button>
        <HomeScreen />
          
        <FabButton 
          Temas={() => navigation.navigate('Temas')}
          Concluidas={() => navigation.navigate('CompleteTodo')}
          NovoItem={() => navigation.navigate('NewTodo')} 
          style={{ 
            bottom: 80, 
            right: 60
          }}
        />
    </View>
    // <View style={{flex: 1,justifyContent: "center", alignItems: 'center', backgroundColor: theme.colors.BG, padding: 20}}>
    //     <Image source={{uri: user.photoURL}} style={{width: 100, height: 100, borderRadius: 50}} />
    //     <View style={{flexDirection:'row'}}>
    //         <View style={{flex: 1}}>
    //             <Text style={{color: theme.colors.textInfo}}>Nome: </Text>
    //         </View>
    //         <Text style={{color: theme.colors.textSub}}>{user.displayName}</Text>
    //     </View>
    //     <View style={{flexDirection:'row'}}>
    //         <View style={{flex: 1}}>
    //             <Text style={{color: theme.colors.textInfo}}>Código UID: </Text>
    //         </View>
    //         <Text style={{color: theme.colors.textSub}}>{user.uid}</Text>
    //     </View>
    //     <View style={{flexDirection:'row'}}>
    //         <View style={{flex: 1}}>
    //             <Text style={{color: theme.colors.textInfo}}>Email: </Text>
    //         </View>
    //         <Text style={{color: theme.colors.textSub}}>{user.email}</Text>
    //     </View>
    //     <View style={{flexDirection:'row'}}>
    //         <View style={{flex: 1}}>
    //             <Text style={{color: theme.colors.textInfo}}>Provedor: </Text>
    //         </View>
    //         <Text style={{color: theme.colors.textSub}}>{user.providerId}</Text>
    //     </View>
    //   <Button
    //         mode='contained'
    //         title="Google Sign-In"
    //         onPress={() => Sair()}
    //     >me aperte</Button>
    // </View>
  );
}