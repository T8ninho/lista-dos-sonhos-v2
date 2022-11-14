import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List, Text, Button } from 'react-native-paper';
import { View } from 'react-native';

function Todo({id, title, complete, Quantidade}) {
    async function toggleComplete() {
        if(complete === true) {
            await firestore()
            .collection('todos')
            .doc(id)
            .delete();
        } else {
            await firestore()
            .collection('todos')
            .doc(id)
            .update({
            complete: !complete,
        });
        }
        
    }

    //Função para tirar espaços do texto
    function QuantidadeAtual(){
        const QTD = Quantidade.trim();

        if(QTD === '') return;
        return(
            <View style={{
                paddingRight: 20,
                position: 'absolute',
                right: '1%',
                flexDirection: 'row'
                }}>
                <Text 
                    style={{
                        fontSize: 18, 
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: 50, 
                        height: 29,
                        minWidth: 29,
                        textAlign: 'center'
                    }}
                >{QTD}</Text>
            </View>
        )
    } 

    //Função para Renderizar os itens de cada tarefa
    function ItemSozinho() {
       
        return(
            <View style={{flex:1, flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{maxWidth: '80%'}}>{title.toUpperCase()}</Text>
                <QuantidadeAtual/>
            </View>
        )
    }
    

    return(
        <>
            <List.Item
                style={{
                    borderBottomColor: '#000',
                    borderWidth: 1,
                    margin: 3,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: 10,
                }}
                title={ItemSozinho}
                onPress={() => toggleComplete()}
                left={props => (
                    <List.Icon {...props} color="#FFF" icon={complete ? 'close' : 'check'} /> 
                )}
            />
        </>
    );
}

export default React.memo(Todo);