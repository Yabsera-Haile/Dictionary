import React from "react";
import { StyleSheet, View, Text, Image,TouchableOpacity,AsyncStorage } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function WordDefn({ navigation }) {
  const rating = navigation.getParam("rating");
  const handleChange = ({id ,word , defn , wordType , example , language})=>{
     
      const _storeData =   async () => {
        // console.log({id ,word , defn , wordType , example , language});
        let UID123_object  = [];
        let UID123_delta = {
              word:word , 
              defn : defn,
              type:wordType ,
              example : example,
              language,
        };
        try {
          const value = await AsyncStorage.getItem('lang');
          if (value !== null) {
            // We have data!!
            const n = JSON.parse(value)
            UID123_object = n  
            UID123_object.push(UID123_delta)
            try {
              await AsyncStorage.setItem(
                'lang',
                JSON.stringify(UID123_object),
              );
            } catch (error) {
              // Error saving data
            }
          }else{
            try {
              UID123_object.push(UID123_delta)
              await AsyncStorage.setItem(
                'lang',
                JSON.stringify(UID123_object),
              );
            } catch (error) {
              // Error saving data
            }
          }
          alert("Word Added to Favorites")
        } catch (error) {
          console.log(error);
          // Error retrieving data
        }}

      
 
    
    _storeData() }

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("word")}
        </Text>
        <Text>{navigation.getParam("type")}</Text>
        <Text>{navigation.getParam("defn")}</Text>
        <Text>{navigation.getParam("example")}</Text>

        {/* <View style={styles.rating}>
          <Text>Word Defn: </Text>
          <Image source={images.ratings[rating]} />
        </View> */}
      </Card>
        <TouchableOpacity style={styles.button} onPress={()=>handleChange({id:navigation.getParam("id"),word:navigation.getParam("word"),
        defn:navigation.getParam("defn"),wordType:navigation.getParam("type"),example:navigation.getParam("example"),language:navigation.getParam("language")})}>
          <Text style={styles.buttonText}>Favorite</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
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
