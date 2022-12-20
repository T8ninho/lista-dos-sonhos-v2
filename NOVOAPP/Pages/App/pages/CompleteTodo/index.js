import React, {useContext, useEffect, useState} from 'react';
import { View, FlatList, ImageBackground, StyleSheet } from 'react-native';
import {Text } from 'react-native-paper'
import AuthContext from '../../../../contexts/auth';
import Theme from '../../../../Theme';
import ref from '../../components/Firebase';

import Todo from '../HomeScreen/Todo';

export default function CompleteTodo({loading, route, Blur}) {

    const [Completos, setCompletos] = useState([]);
    const { DB } = useContext(AuthContext);

    
    useEffect(() => {
        return DB.onSnapshot((querySnapshot) => {
            const listComp = [];
            querySnapshot.forEach(doc => {
                const { title, complete, Quantidade } = doc.data();
                if(complete === false) return;
                listComp.push({
                    id: doc.id,
                    title,
                    complete,
                    Quantidade,
                });
            });
    
            setCompletos(listComp);
    
            if (loading) {
                return(
                  <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text>Carregando...</Text>
                  </View>
                  );
            }
        })
    }, [])

    return(
        <View style={{flex: 1}}>
            <ImageBackground source={Theme.colors.BGImage} resizeMode="cover" style={styles.image} blurRadius={Theme.colors.Blur}>
                <Text 
                    variant="titleLarge" 
                    style={{
                    borderBottomColor: '#000',
                    borderBottomWidth: 1,
                    color: Theme.colors.message
                    }}> Completas </Text>
                <FlatList
                style={{
                    flex: 1,
                    padding: 20,
                }}
                data={Completos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Todo {...item} />}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
      },
})