import React, { useContext, useState } from 'react'
import { View, ImageBackground, StyleSheet, Image, TouchableOpacity, PermissionsAndroid, Alert, ProgressBarAndroid, } from 'react-native'
import { Text, Switch } from 'react-native-paper'

import Raposa from '../../Images/Raposa.png'
import Flor from '../../Images/background.jpg'
import Papel from '../../Images/Papel.jpg'
import Vidro from '../../Images/Vidro.jpg'
import Desenho from '../../Images/Desenho.jpg'

import Theme from '../../../../Theme'

import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import PROVEDOR from '../../../../contexts/PROVEDOR'
import { ProgressBar } from '@react-native-community/progress-bar-android'

export default function Temas(){

    const { ImageBG, DefinirTema, MudarBlur } = useContext(PROVEDOR);

    const [Tema, setTema] = useState('Tema 1')
    const [Temaa, setTemaa] = useState('../../Images/background.jpg')

    ////////////////////////////////////////////////////////////
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();


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
        console.log(result)

        if (result?.assets) {
          setFile(result.assets[0].uri)
          setFileName(result.assets[0].fileName)
          url()
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

    const [Porcentagem, setPorcentagem] = useState()

    async function url(){
      const pathToFile = 'Temas/*personalf.jpg';
      const reference = storage().ref(pathToFile);
        
      const task = reference.putFile(file);

      task.on('state_changed', taskSnapshot => {
        setPorcentagem( Math.round((taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100));
      });

      
      task.then(() => {
        console.log('Imagem enviada para sua nuvem!');
        setPorcentagem()
      });

      const resultUrl = await storage().ref(pathToFile).getDownloadURL();
 
      console.log(resultUrl)
      DefinirTema(resultUrl) 
        
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

    const BarraProgresso = () => {
      if(!Porcentagem) {
        return;
      } else {
        return(
          <>
            <Text>{Porcentagem} %</Text>
            <ProgressBar 
              styleAttr="Horizontal" 
              style={{width: '80%', height: '10%'}} 
              progress={Porcentagem} 
              color={'red'} 
              indeterminate={false} 
            />
          </>
        )
        }
    }   


    return(
            <ImageBackground 
                // source={Temaa} 
                source={ImageBG} 
                resizeMode="cover" 
                blurRadius={Theme.colors.Blur} 
                style={styles.Container}>
                  <Switch value={true} onValueChange={() => {}} theme={Theme} />
                  <BarraProgresso />
                <Text variant="titleLarge" style={{color: Theme.colors.message}}>Sou o Tema: {Tema}</Text>

                
                
                {/* <Button
                    title="Update the title"
                    onPress={() => navigation.setOptions({ title: 'Titulo 1!' })}
                >Titulo 1!</Button>  */}

                <View style={styles.ContainerBox}>
                  <TouchableOpacity style={styles.Box} onPress={() => setTema('Tema 1')}>
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
                  <TouchableOpacity style={styles.Box} onPress={() => {}}>
                    <ImageBackground source={{uri: file}} style={styles.SubBox}>
                    </ImageBackground>
                  </TouchableOpacity>
                </View>
                <View style={styles.ContainerBox}>
                  <TouchableOpacity style={styles.Box} onPress={requestCameraPermission}>
                    <ImageBackground source={{uri: file}} style={styles.SubBox}>
                      <Text>Dar Permissão de mexer em Arquivos</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Box} onPress={handleChoosePhoto}>
                    <ImageBackground source={{uri: file}}  style={styles.SubBox}>
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