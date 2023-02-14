import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export  default function AddTodo({submit}) {
    const[text, setText] =useState('')

    const changeHandler = (val)=>{
        setText(val)
    }
    return (
     <View>
        <TextInput style={styles.input} placeholder='add' onChangeText={changeHandler} />
        <Button onPress={()=> submit(text)}  title='Add Todo' color='blue'/>
     </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
})