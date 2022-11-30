import React, { useEffect, useState } from 'react'
import { View, ImageBackground, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Button, Text } from 'react-native-paper'

import Raposa from '../..//Images/Raposa.png'
import Flor from '../../Images/background.jpg'
import Papel from '../../Images/Papel.jpg'
import Vidro from '../../Images/Vidro.jpg'
import Desenho from '../../Images/Desenho.jpg'

import Theme from '../../../../Theme'

export default function Temas(){
    const [Tema, setTema] = useState('Tema 1')

    const Img1 = Flor;
    const Img2 = Raposa;
    const Img3 = Papel;
    const Img4 = Vidro;
    const Img5 = Desenho;


    return(
            <ImageBackground 
                source={Theme.colors.BGImage} 
                resizeMode="cover" 
                blurRadius={Theme.colors.Blur} 
                style={styles.Container}>
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