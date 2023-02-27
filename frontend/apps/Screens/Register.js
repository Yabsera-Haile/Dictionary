import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import firebase from '../firebase/FireBase';
import { Dimensions } from 'react-native';
import { globalStyles } from '../../styles/global';
export default function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleRegister = async (email , password , name) => {
      if(password === "" || email === ""||  cPassword === ""){
        setError("all fields are required") 
        return;
      }
      if(password.length < 6){
        setError("password length must be >6") 
        return;
      }
      if(password !== cPassword){
        setError("Password doesn't match") 
        return;
      }
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(()=>{
                alert("saved")
            }).catch((e)=>{
                alert(e.message)
            })
            .then(()=>{
                firebase.auth().currentUser.sendEmailVerification({
                    handleCodeInApp:true,
                    url:"https://mcpproject-fe164.firebaseapp.com"
                }).then(()=>{
                    alert('verification email sent')
                }).catch((error)=>{
                   alert("error")
                }).then(()=>{
                    firebase.firestore().collection('user').doc(firebase.auth().currentUser.uid).set({name : name , email})
                }).catch((error)=>{
                    alert('error ')
                })
            }).catch(error=>{
                    alert("connection base problem")
                })
         
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.icontainer}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
       
        />
        <Text style={styles.text}>Email</Text>
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
          <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={cPassword}
          onChangeText={setCPassword}
          secureTextEntry={true}
        />
        {error ? <Text style={globalStyles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={()=>handleRegister(email , password , name)}>
          <Text style={styles.buttonText}>Register</Text>
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