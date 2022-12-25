import React, {useContext, useEffect, useState} from 'react';
import { View, FlatList, ImageBackground, StyleSheet } from 'react-native';
import {Text } from 'react-native-paper'
import PROVEDOR from '../../../../contexts/PROVEDOR';
import Theme from '../../../../Theme';

import ItemNovidade from './ItemNovidade';

export default function Novidades({loading}) {

    const [Novidades, setNovidades] = useState([]);
    const { DBNovidades, ImageBG } = useContext(PROVEDOR);

    
    useEffect(() => {
        return DBNovidades.onSnapshot((querySnapshot) => {
            const listComp = [];
            querySnapshot.forEach(doc => {
                const { title, date, description, ImagePath } = doc.data();
                if(!ImagePath) return;
                listComp.push({
                    id: doc.id,
                    title,
                    description,
                    date,
                    ImagePath,
                });
            });
    
            setNovidades(listComp);
    
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
            <ImageBackground source={ImageBG} resizeMode="cover" style={styles.image} blurRadius={Theme.colors.Blur}>
                <FlatList
                style={{
                    flex: 1,
                    paddingLeft: 20,
                    paddingRight: 20,
                }}
                data={Novidades}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ItemNovidade {...item} />}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
      },
})