import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const[name, setName] = useState('moha')

  const clickHandler = ()=>{
    setName('ahmed')
  }
  return (
    <View style={styles.container}>
      <Text>my name is {name}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update' onPress={clickHandler}/>
      </View>
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
  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'blue'
  }
});
