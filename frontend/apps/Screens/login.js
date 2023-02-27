import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import firebase from '../firebase/FireBase';
import { Dimensions } from 'react-native';
import MainBtn from '../../components/mainBtn';
import { globalStyles } from '../../styles/global';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSignIn = async () => {
      if(password === "" || email === ""){
        setError("all fields are required") 
        return;
      }
      if(password.length < 6){
        setError("Password length must be greater than 6") 
        return;
      }
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
                alert("Welcome Back")
            });
          } catch (error) {
            setError("Email address is badly formatted");
          }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.icontainer}>
        <Text style={styles.text}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
       {error ? <Text style={globalStyles.error}>{error}</Text> : null}
       <MainBtn text={"Sign In"} handleSubmit={handleSignIn}/>
       
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
      marginBottom: 10,
      paddingHorizontal: 10,
      marginBottom:'10%'
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