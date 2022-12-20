import React, { useEffect, useState } from 'react'
import { View, ImageBackground, TextInput, StyleSheet, Image, TouchableOpacity, PermissionsAndroid, Alert, } from 'react-native'
import { Button, Text } from 'react-native-paper'

import Raposa from '../../Images/Raposa.png'
import Flor from '../../Images/background.jpg'
import Papel from '../../Images/Papel.jpg'
import Vidro from '../../Images/Vidro.jpg'
import Desenho from '../../Images/Desenho.jpg'

import Theme from '../../../../Theme'

import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function Temas(){
    const [Tema, setTema] = useState('Tema 1')
    const [Temaa, setTemaa] = useState('../../Images/background.jpg')

    ////////////////////////////////////////////////////////////
    const [file, setFile] = useState();

    const handleChoosePhoto = () => {
        Alert.alert(
          'Selecione',
          'Informe de onde você quer pegar a foto',
          [
          {
            text: 'Galeria',
            onPress: () => pickImageFromGalery(),
            style: 'default'
          },
          {
            text: 'Camera',
            onPress: () => pickImageFromCamera(),
            style: 'default'
          },
          {
            cancelable: true,
            onDismiss: () => console.log('tratar depois...')
          }
          ]
        )
      };

      const pickImageFromGalery = async () => {
        const options = {
          mediaType: 'photo'
        }
        const result = await launchImageLibrary(options);

        if (result?.assets) {
          setFile(result.assets[0].uri)
          return
        }

        console.log(result.assets)
      }
      const pickImageFromCamera = () => {

      }
    ////////////////////////////////////////////////////////////
    
    
    const Img1 = Flor;
    const Img2 = Raposa;
    const Img3 = Papel;
    const Img4 = Vidro;
    const Img5 = Desenho;

    async function url(){
        const reference = storage().ref('Eu.jpg');
        // const result = await storage().ref('Raposa.png').getDownloadURL();

        // console.log(result)
        // setTemaa(result)

        const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/Eu.jpg`;
        await reference.putFile(pathToFile);
        
    }

    const requestCameraPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: "App Permissão de Arquivos",
            message: "O App precisa de acesso aos Arquivos.",
            buttonNeutral: "Pergunte-me depois",
            buttonNegative: "Cancelar",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          alert('Você pode ler arquivos');
        } else {
          alert('Permissão de Arquivos Negada');
        }
    };
    


    return(
            <ImageBackground 
                // source={Temaa} 
                source={{uri: file }} 
                resizeMode="cover" 
                blurRadius={6} 
                style={styles.Container}>
                <Text variant="titleLarge" style={{color: Theme.colors.message}}>Sou o Tema: {Tema}</Text>
                
                {/* <Button
                    title="Update the title"
                    onPress={() => navigation.setOptions({ title: 'Titulo 1!' })}
                >Titulo 1!</Button>  */}

                <View style={styles.ContainerBox}>
                  <TouchableOpacity style={styles.Box} onPress={() => url()}>
                    <Image source={Img1} style={styles.SubBox}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Box} onPress={() => setTema('Tema 2')}>
                    <Image source={Img2} style={styles.SubBox}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.ContainerBox}>
                  <TouchableOpacity style={styles.Box} onPress={() => setTema('Tema 3')}>
                    <Image source={Img3} style={styles.SubBox}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Box} onPress={() => setTema('Tema 4')}>
                    <Image source={Img4} style={styles.SubBox}/>
                  </TouchableOpacity>
                </View>
                <View style={styles.ContainerBox}>
                  <TouchableOpacity style={styles.Box} onPress={() => setTema('Tema 5')}>
                    <Image source={Img5} style={styles.SubBox}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Box} onPress={requestCameraPermission}>
                    <ImageBackground source={{uri: file}} style={styles.SubBox}>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View style={styles.ContainerBox}>
                  <TouchableOpacity style={styles.Box} onPress={requestCameraPermission}>
                    <ImageBackground style={styles.SubBox}>
                      <Text>Dar Permissão de mexer em Arquivos</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Box} onPress={handleChoosePhoto}>
                    <ImageBackground  style={styles.SubBox}>
                      <Text>Abrir Galeria</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                
                
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Box: {
        backgroundColor: '#000',
        padding: 5,
        margin: 15
    },
    SubBox: {
        backgroundColor: '#fff',
        width: 120,
        height: 120
    },
    ContainerBox: {
        flexDirection: 'row',
    }
})