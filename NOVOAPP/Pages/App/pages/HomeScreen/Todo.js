import React, { useContext } from 'react';
import firestore from '@react-native-firebase/firestore';
import { List, Text } from 'react-native-paper';
import { View } from 'react-native';
import Theme from '../../../../Theme';
import AuthContext from '../../../../contexts/auth';

function Todo({id, title, complete, Quantidade}) {
    const { DB } = useContext(AuthContext);

    async function toggleComplete() {
        if(complete) {
            await DB
            .doc(id)
            .delete();
        } else {
            await DB
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
                        color: Theme.colors.message,
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
                <Text style={{maxWidth: '80%', color: Theme.colors.message}}>{title.toUpperCase()}</Text>
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