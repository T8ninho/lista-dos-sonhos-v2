import React, { useState, useEffect, cloneElement, useContext } from "react";
import { Text, Button } from 'react-native-paper';
import { StyleSheet, ImageBackground } from "react-native";

import Todo from './Todo';
import { FlatList, View } from "react-native";

import Theme from "../../../../Theme";
import FabButton from "../../components/FabButton";
import PROVEDOR from "../../../../contexts/PROVEDOR";



export default function HomeScreen({route, navigation}) {

    const [loading, setLoading] = useState(true);
    const [Incompletos, setIncompletos] = useState([]);
    const { Sair, user, DB, ImageBG } = useContext(PROVEDOR);
    // console.log(signed)
    console.log(user.displayName)
    // console.log('User metadata: ', user.metadata);

    function handleSignOut() {
      Sair()
    }

    //Tarefas Incompletas
    useEffect(() => {
      return DB.onSnapshot((querySnapshot) => {
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
      <ImageBackground source={ImageBG} resizeMode="cover" style={styles.image} blurRadius={Theme.colors.Blur}>
      
      {/* Tarefas Incompletas */}
      <Text 
        variant="titleLarge" 
        style={{
          borderBottomColor: '#000',
          borderBottomWidth: 1,
          textAlign: 'center',
          color: Theme.colors.message
        }}> Incompletas: {user.displayName} </Text>
        <View style={{alignItems: 'center',paddingTop: 10}}>
          <Button style={{width: '80%', backgroundColor: Theme.colors.BG}} mode='contained' onPress={handleSignOut}>
            Sair
          </Button>
        </View>

      <FlatList
        style={{
            flex: 1,
            padding: 10,
        }}
        data={Incompletos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Todo {...item}/>}
      />
 
        <FabButton 
          Temas={() => navigation.navigate('Temas')}
          Concluidas={() => navigation.navigate('CompleteTodo')}
          NovoItem={() => navigation.navigate('NewTodo')} 
          Novidades={() => navigation.navigate('Novidades')} 
          style={{ 
            bottom: 80, 
            right: 60
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
})