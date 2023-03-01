import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native'
import React from 'react'
import { useState,useContext } from 'react';
import { Dimensions } from 'react-native';
import { DictionaryContext } from '../context/DictionaryContext';
export default function AddLanguage() {
    const ip="192.168.5.229"
    const [lang, setLang] = useState('');
  
    const handleUpdate = (lang) =>{
        // console.log("Checker")
        
      fetch("http://"+ip+":5000/api/language/create", {
            method: "POST",
            body: JSON.stringify({
              title:lang
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
                alert("Language has been added.")
              }
            );
          }
      
  
       
    return (
      <View style={styles.container}>
        <View style={styles.icontainer}>
        <Text style={styles.text}>Language Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Language Name"
          value={lang}
          onChangeText={setLang}
          autoCapitalize="words"
        />

    
        <TouchableOpacity style={styles.button} onPress={()=>handleUpdate(lang)}>
          <Text style={styles.buttonText}>Add Language</Text>
        </TouchableOpacity>
    
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:10,
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