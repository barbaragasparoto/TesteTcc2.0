import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import useCustomFetch from '../../hooks/useFetch';

const settingsData = [
    { title: 'Ronaldo Santos', description: '23/11/2023 - LAB 1 - 07:20' },
    { title: 'Jose Augusto', description: '24/11/2023 - LAB 2 - 08:10' },
    { title: 'Thais Souza', description: '25/11/2023 - LAB 3 - 09:00' },
    { title: 'Líggia Ostânico', description: '26/11/2023 - LAB 4 - 10:10' },
    { title: 'Bárbara Figueiredo', description: '27/11/2023 - LAB 5 - 11:00' },

  ];


  
  const Listcopy = () => {
    const {data} = useCustomFetch("http://10.68.20.139:8080/agendamentos/todos")

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.cadastro.nomeusuario}</Text>
              <Text style={styles.description}>{item.data} {item.horarios.horario} {item.laboratorios.nomeLab}</Text>
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
      marginTop: 37
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
      color: "white",
      fontWeight: 'bold',
    },
    description: {
      fontSize: 16,
      color: 'white',
    },
    
  });
  
  export default Listcopy;
  