import React, { useState, useEffect, cloneElement } from "react";
import { useTheme, Text, Button } from 'react-native-paper';
import { StyleSheet, ImageBackground } from "react-native";

import Todo from './Todo';
import { FlatList, View } from "react-native";
import ref from "../../components/Firebase";



export default function HomeScreenT({route, navigation}) {

    const theme = useTheme();
    const [loading, setLoading] = useState(true);
    const [Blur, setBlur] = useState(6);
    const [Incompletos, setIncompletos] = useState([]);


    //Tarefas Incompletas
    useEffect(() => {
      return ref.onSnapshot((querySnapshot) => {
          const listInc = [];
          querySnapshot.forEach(doc => {
              const { title, complete, Quantidade } = doc.data();
              if(complete === true) return;
              listInc.push({
                  id: doc.id,
                  title,
                  complete,
                  Quantidade,
              });
          });

          setIncompletos(listInc);

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
      <ImageBackground source={theme.colors.BGImage} resizeMode="cover" style={styles.image} blurRadius={Blur}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
          <Button  mode="contained" onPress={() => setBlur(6)}>ON</Button>
          <Button  mode="contained" onPress={() => setBlur(0)}>OFF</Button>
        </View>
        
      {/* Tarefas Incompletas */}
      <Text 
        variant="titleLarge" 
        style={{
          borderBottomColor: '#000',
          borderBottomWidth: 1,
          textAlign: 'center',
        }}> Incompletas </Text>
      <FlatList
        style={{
            flex: 1,
            padding: 20,
        }}
        data={Incompletos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Todo {...item}/>}
      />
 
      {/* FAB AQUI */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
})