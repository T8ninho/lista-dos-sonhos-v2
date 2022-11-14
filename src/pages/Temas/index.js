import React, { useEffect, useState } from 'react'
import { View, ImageBackground, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Button, Text } from 'react-native-paper'

import Raposa from '../..//Images/Raposa.png'
import Flor from '../../Images/background.jpg'
import Papel from '../../Images/Papel.jpg'
import Vidro from '../../Images/Vidro.jpg'
import Desenho from '../../Images/Desenho.jpg'

export default function Temas({route, navigation}){
    const [Tema, setTema] = useState(Tema1)

    const Tema1 = Flor;
    const Tema2 = Raposa;
    const Tema3 = Papel;
    const Tema4 = Vidro;
    const Tema5 = Desenho;

    const { ImageBG, Blur } = route.params;

    return(
            <ImageBackground 
                source={ImageBG} 
                resizeMode="cover" 
                blurRadius={Blur} 
                style={styles.Container}>
                {/* <Text variant="titleLarge">Sou o Tema</Text>
                
                <Button
                    title="Update the title"
                    onPress={() => navigation.setOptions({ title: 'Titulo 1!' })}
                >Titulo 1!</Button> */}

                <View style={styles.ContainerBox}>
                    <TouchableOpacity style={styles.Box} onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate({
                        name:'Home',
                        
                        params: { ImageBG: Tema1 },
                    })}}>
                        <Image source={Tema1} style={styles.SubBox}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Box} onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate({
                        name:'Home',
                        
                        params: { ImageBG: Tema2 },
                    })}}>
                        <Image source={Tema2} style={styles.SubBox}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.ContainerBox} onPress={() => setTema(Tema3)}>
                    <TouchableOpacity style={styles.Box} onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate({
                        name:'Home',
                        
                        params: { ImageBG: Tema3 },
                    })}}>
                        <Image source={Tema3} style={styles.SubBox}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Box} onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate({
                        name:'Home',
                        
                        params: { ImageBG: Tema4 },
                    })}}>
                        <Image source={Tema4} style={styles.SubBox}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.ContainerBox}>
                    <TouchableOpacity style={styles.Box} onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate({
                        name:'Home',
                        
                        params: { ImageBG: Tema5 },
                    })}}>
                        <Image source={Tema5} style={styles.SubBox}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Box}>
                        <Image source={Flor} style={styles.SubBox}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.ContainerBox}>
                    <TouchableOpacity style={styles.Box}>
                        <Image source={Flor} style={styles.SubBox}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Box}>
                        <Image source={Flor} style={styles.SubBox}/>
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