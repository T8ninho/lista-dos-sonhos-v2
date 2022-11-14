import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import ref from '../../components/Firebase';

import { useTheme } from 'react-native-paper';

export default function NewTodo({navigation}) {


    const theme = useTheme();
    const [todo, setTodo] = useState('');
    const [Quantidade, setQuantidade] = useState('');

    async function addTodo(){
        if(todo === '') return;
        if(Quantidade == ' ') return;
        await ref.add({
              title: todo,
              complete: false,
              Quantidade: Quantidade
          });
          setTodo('');
          setQuantidade('');
          navigation.goBack()
      }
    
    return(
        <View style={[styles.container,{backgroundColor: theme.colors.BG}]}>
            <TextInput mode='contained' label={'Nova Tarefa'} value={todo} onChangeText={setTodo} />
            <TextInput mode="contained" keyboardType='numeric' label={'Quantidade'} value={Quantidade} onChangeText={setQuantidade} />
            <Button  mode="contained" onPress={() => addTodo()}>Adicinar Tarefa</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
})