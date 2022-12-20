import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

import * as Animatable from 'react-native-animatable'
import Theme from '../../../Theme';

import AuthContext from '../../../contexts/auth';

export default function Login({navigation}){
//
    const { signed, Entrar } = useContext(AuthContext);
    console.log(signed)

    function handleSignIn() {
        Entrar()
    }
    
//
    return(

            
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem Vindo(a)</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <Text style={styles.title}>Email:</Text>
                <TextInput 
                    placeholder='Digite um Email'
                    
                    style={styles.input}
                />

                <Text style={styles.title}>Senha:</Text>
                <TextInput 
                    placeholder='Digite sua Senha'
                    secureTextEntry={true}
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('NewUser')}
                >
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonGoogle} onPress={handleSignIn}>
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
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
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
    },
    button: {
        backgroundColor: Theme.colors.BG,
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonGoogle: {
        marginTop: 14,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1',
    }
})