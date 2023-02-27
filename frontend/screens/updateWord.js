import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native'
import React from 'react'
import { useState,useContext } from 'react';
import { Dimensions } from 'react-native';
import { DictionaryContext } from '../context/DictionaryContext';
export default function AddContent() {
    const ip="192.168.5.229"
    const [word, setWord] = useState('');
    const [example, setExample] = useState('');
    const [wordType, setWordType] = useState('');
    const {lang, setLang} = useContext(DictionaryContext)
    const [defn, setDefn] = useState('');
    const handleUpdate = (word , wordType , example , defn) =>{
        // console.log("Checker")
        
      fetch("http://"+ip+":5000/api/dictionary/add", {
            method: "POST",
            body: JSON.stringify({
              word:word , 
              defn : defn,
              type:wordType ,
              example : example,
              language:lang,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
                alert("Word has been added.")
              }
            );
          }
      
  
       
    return (
      <View style={styles.container}>
        <View style={styles.icontainer}>
        <Text style={styles.text}>Word</Text>
        <TextInput
          style={styles.input}
          placeholder="Word"
          value={word}
          onChangeText={setWord}
          autoCapitalize="words"
        />
        <Text style={styles.text}>Word Type</Text>
        <TextInput
           style={styles.input}
           placeholder="Word"
           value={wordType}
           onChangeText={setWordType}
           autoCapitalize="words"
        />

            <Text style={styles.text}>Example</Text>
        <TextInput
         multiline={true}
         style={styles.input}
         numberOfLines={2}
        onChangeText={setExample}
        value={example}/>
         <Text style={styles.text}>Definition</Text>
        <TextInput
         multiline={true}
         style={styles.def}
         numberOfLines={5}
        onChangeText={setDefn}
        value={defn}/>
      


        <TouchableOpacity style={styles.button} onPress={()=>handleUpdate(word , wordType , example , defn )}>
          <Text style={styles.buttonText}>Update Dictionary</Text>
        </TouchableOpacity>
    
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width
      },
      icontainer:{
          width:  '90%',
      },
      text:{
         alignSelf:'flex-start',
         marginLeft:10,
         marginBottom:8,
         fontWeight:'700',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 5,
        paddingHorizontal: 10,
        marginBottom:'5%'
      },
      def: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
        paddingHorizontal: 10,
        marginBottom:'5%'
      },
      button: {
        backgroundColor: 'blue',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop:'10%'
        
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
      },
  });