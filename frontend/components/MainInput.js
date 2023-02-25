import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native'
import React from 'react'
export default function MainInput() {
    
  
    
  
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
       <MainBtn text={"Sign In"} handleSubmit={handleSignIn}/>
        {error ? <Text>{error}</Text> : null}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({  
    text:{
       alignSelf:'flex-start',
       marginLeft:10,
       marginBottom:8,
       fontWeight:'700',
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
  });

 