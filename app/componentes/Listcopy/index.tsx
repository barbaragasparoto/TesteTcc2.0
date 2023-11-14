import React, { useState } from 'react';
import { SearchBar, Input } from '@rneui/themed';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const settingsData = [
  { title: 'Rogério Furlan', description: '01/02/2024 - LAB 5 - 13:30' },
  { title: 'Ronaldo Santos', description: '10/02/2024 - LAB 1 - 07:20' },
  { title: 'Jose Augusto', description: '11/02/2024 - LAB 2 - 08:10' },
  { title: 'Thais Souza', description: '12/02/2024 - LAB 3 - 09:00' },
  { title: 'Líggia Ostânico', description: '13/02/2024 - LAB 4 - 10:10' },
  { title: 'Bárbara Figueiredo', description: '14/02/2024 - LAB 5 - 11:00' },
  
];

const Listcopy = ({ searchTerm }) => {
  const filteredData = settingsData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <FlatList
      data={filteredData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      )}
    />
  );
};

const SwitchComponent = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      
      <Input
        placeholder="Pesquisar..."
        onChangeText={updateSearch}
        value={search}
        leftIcon={{ type: 'font-awesome', name: 'search', color: '#462783' }}
        inputContainerStyle={styles.pesquisa}
        style={styles.pesquisa}
        inputStyle={styles.input}
      />
      <Listcopy searchTerm={search} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 29,
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
  pesquisa:{
  
  },
  input: {
    color: '#000',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
});

export default SwitchComponent;
