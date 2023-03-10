import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const[name, setName] = useState('moha')
  const[age, setAge] = useState('30')


  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput  placeholder='e.g. 99' style={styles.input} onChangeText={(value) => setName(value)}/>
      <Text>Enter age:</Text>
      <TextInput keyboardType='numeric'  placeholder='e.g. 99' style={styles.input} onChangeText={(value) => setAge(value)}/>
      <Text>name{name}, age {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
