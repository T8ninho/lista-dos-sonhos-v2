import React, { useState } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';
import Theme from '../../../Theme';

import Presente from '../../../assets/gift-dynamic-premium.png';
import Estrela from '../../../assets/estrela.png';
import Pincel from '../../../assets/pincel.png';
import Coroa from '../../../assets/coroa.png';
import Medalha from '../../../assets/medalha.png';
import Sol from '../../../assets/sol.png'



export default function Welcome(){
    const navigation = useNavigation();

    const [Foto, setFoto] = useState(Presente)

    function trocarFoto() {
        if (Foto === Presente) {
            setFoto(Estrela)
        } 
        if (Foto === Estrela) {
            setFoto(Pincel)
        }
        if (Foto === Pincel) {
            setFoto(Coroa)
        }
        if (Foto === Coroa) {
            setFoto(Medalha)
        }
        if (Foto === Medalha) {
            setFoto(Presente)
        }
        if (Foto === Medalha) {
            setFoto(Sol)
        }
        if (Foto === Sol) {
            setFoto(Presente)
        }
    }

    return(
        <View style={styles.container}>
            <Animatable.View style={styles.containerLogo} animation="flipInY">
                <TouchableOpacity style={{width: '100%'}} onPress={trocarFoto}>
                    <Animatable.Image 
                        animation="pulse"
                        easing="ease-out" 
                        duration={4000}
                        onAnimationEnd={() => setFoto(Estrela)}
                        source={Foto}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </Animatable.View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Defina suas tarefas e metas e sempre as tenha na palma de sua mão!</Text>
                <Text style={styles.text}>Faça o login para começar!</Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.primary
    },
    image: {
        width: '100%',
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: '#000',
    },
    text: {
        color: '#a1a1a1',
    },
    button: {
        position: 'absolute',
        backgroundColor: Theme.colors.primary,
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
})