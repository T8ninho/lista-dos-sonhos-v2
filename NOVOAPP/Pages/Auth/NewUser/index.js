import React, { cloneElement } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import IconC from 'react-native-vector-icons/AntDesign'

import * as Animatable from 'react-native-animatable'
import Theme from '../../../Theme';

export default function NewUser({navigation}){
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <TouchableOpacity  onPress={() => navigation.goBack()}>
                    <IconC name="arrowleft" color={Theme.colors.message}  style={styles.messageButton} />
                </TouchableOpacity>
                <Text style={styles.message}>Registre-se agora mesmo!</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <Text style={styles.title}>Nome:</Text>
                <TextInput 
                    placeholder='Digite seu Nome'
                    style={styles.input}
                />
                <Text style={styles.title}>Email:</Text>
                <TextInput 
                    placeholder='Digite seu Email'
                    style={styles.input}
                />

                <Text style={styles.title}>Senha:</Text>
                <TextInput 
                    placeholder='Digite sua Senha'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonGoogle}>
                        <Animatable.Image
                            animation="flipInY"
                            source={require('../../../assets/LoginGoogle.png')}
                            style={styles.image}
                            resizeMode="contain"
                        />
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.BG
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Theme.colors.message
    },
    messageButton: {
        fontSize: 30,
        color: Theme.colors.message,
        paddingRight: 5
    },
    containerHeader: {
        marginTop: '8%',
        marginBottom: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        color: '#000',
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3, 
    },
    button: {
        backgroundColor: Theme.colors.BG,
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    buttonText: {
        color: Theme.colors.buttonText,
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonGoogle: {
        marginTop: 14,
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
    },
    image: {
        width: '100%',
        height: '100%',
        
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
})