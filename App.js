import React, {useState} from 'react';
import { StyleSheet, Text, View,FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './component/AddTodo';
import Header from './component/Header';
import SandBox from './component/SandBox';
import TodoItem from './component/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key)=>{
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submit = (text) =>{
    if(text.length >3){
    setTodos((prevTodo =>{
      return[
        {text: text, key: Math.random().toString() },
        ...prevTodo 
      ]
    }))
  }else{
    Alert.alert('Oops', 'Todo Must Be Over 3chars Longer',[
      {text: 'Understood', onPress: ()=>console.log('alert closed')}
    ])
  }
  }

  return (
    // <SandBox/>
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
              <AddTodo submit={submit}/>
              <View style={styles.list}>
                  <FlatList
                  data={todos}
                  renderItem={({item}) =>(
                    <TodoItem item={item} pressHandler={pressHandler}/>
                  )}
                  />
              </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
