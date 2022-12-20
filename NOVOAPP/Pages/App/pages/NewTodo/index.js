import React, {useContext, useState} from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AuthContext from '../../../../contexts/auth';
import Theme from '../../../../Theme';
import CaixaTexto from '../../components/CaixaTexto';


export default function NewTodo({navigation}) {

    const [todo, setTodo] = useState('');
    const [Quantidade, setQuantidade] = useState('');

    const { DB } = useContext(AuthContext);

    async function addTodo(){
        if(todo === '') return;
        await DB.add({
              title: todo,
              complete: false,
              Quantidade: Quantidade
          });
          setTodo('');
          setQuantidade('');
          navigation.goBack()
      }
    
    return(
        <ImageBackground blurRadius={6} source={Theme.colors.BGImage} style={styles.container}>
            <CaixaTexto style={styles.input} label={'Nova Tarefa'} value={todo} onChangeText={setTodo}/>
            <CaixaTexto style={styles.input} keyboardType='numeric' label={'Quantidade'} value={Quantidade} onChangeText={setQuantidade} />
            <Button mode='contained' onPress={() => addTodo()}>Adicinar Tarefa</Button>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Theme.colors.primary,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    input: {
        marginBottom: 20,
    },
})