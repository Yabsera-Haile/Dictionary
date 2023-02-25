import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native'
import React from 'react'
 
export default function MainBtn({text , handleSubmit}) { 
    return (
       <>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
       
        </>
       
    );
  }
  
  const styles = StyleSheet.create({
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

 