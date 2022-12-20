import React from 'react';
import { List, Text } from 'react-native-paper';
import { View, StyleSheet, Image } from 'react-native';
import Theme from '../../../../Theme';

export default function ItemNovidade({title, date, description, ImagePath}) {

    //Função para Renderizar os itens de cada tarefa
    function ItemSozinho() {
       
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                    <Image source={{uri: ImagePath}} style={styles.image} />
                <Text style={styles.description}>{description}</Text>

                <View style={styles.dateContainer}>
                    <Text style={styles.date}>{date}</Text>
                </View>
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
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: 10,
                }}
                title={ItemSozinho}
            />
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        width: '100%',
        color: Theme.colors.message,
        textAlign: 'center',
        fontSize: 30,
        borderColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 20
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    description: {
        color: Theme.colors.message,
        textAlign: 'justify'
    },
    dateContainer: {
        justifyContent: 'flex-end',
        paddingTop: 10,
        width: '100%'
    },
    date: {
        color: Theme.colors.message,
        textAlign: 'right',
        justifyContent: 'flex-end'
    },
})


// export default React.memo(ItemNovidade);