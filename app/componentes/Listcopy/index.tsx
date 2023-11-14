import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const settingsData = [
  { title: 'Ronaldo Santos', description: '23/11/2023 - LAB 1 - 07:20' },
  { title: 'Jose Augusto', description: '24/11/2023 - LAB 2 - 08:10' },
  { title: 'Thais Souza', description: '25/11/2023 - LAB 3 - 09:00' },
  { title: 'Líggia Ostânico', description: '26/11/2023 - LAB 4 - 10:10' },
  { title: 'Bárbara Figueiredo', description: '27/11/2023 - LAB 5 - 11:00' },
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
      <SearchBar
        placeholder="Pesquisar..."
        onChangeText={updateSearch}
        value={search}
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
    marginTop: 37,
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
    borderRadius:10,
    backgroundColor: '#fff',
    borderBottomWidth: 0, 
    borderTopWidth: 0, 
  },
  input:{
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
