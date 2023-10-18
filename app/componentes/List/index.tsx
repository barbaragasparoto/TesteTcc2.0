import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';


const settingsData = [
    { title: 'Perfil' },
    { title: 'Notificações' },
    { title: 'Tema' },
    { title: 'Sobre' },
  ];
  
  const List = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={settingsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      marginTop: 175
    },
    card: {
      backgroundColor: '#462783',
      padding: 16,
      marginVertical: 8,
      borderRadius: 8,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
    title: {
      fontSize: 20,
      color: "white"
    },
    
  });
  
  export default List;
  