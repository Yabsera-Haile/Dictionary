import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Image,TouchableOpacity,AsyncStorage } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { DictionaryContext } from "../context/DictionaryContext";

export default function WordDefn({ navigation }) {
  const rating = navigation.getParam("rating");
  const [fav,setFav]=useState(false)
  const {change,setChange}=useContext(DictionaryContext)
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
          setFav(true)
          setChange((prev)=>{return !prev})
        } catch (error) {
          console.log(error);
          // Error retrieving data
        }}

      
 
    
    _storeData() }

    const check = async (word) => {
      // console.log(word);
    
      try {
        const value = await AsyncStorage.getItem('lang');
        if (value !== null) {
          const n = JSON.parse(value)
          let UID123_object  = n.find((item)=>{
                 return item.word === word
          })
         
          if(UID123_object){
            /// if the  word is in asynchStorage
            // console.log("true"); 
            setFav(true)
          }
          else{
            setFav(false)
          }
         }}catch(e){
          }
 }
      check(navigation.getParam("word"))



 const removeFav = async (  word )=>{
    
        try {
          const value = await AsyncStorage.getItem('lang');
          if (value !== null) {
            // We have data!!
            const n = JSON.parse(value)
            let UID123_object  = n.filter((item)=>{
                   return item.word !== word
            })
            
            try {
              await AsyncStorage.setItem(
                'lang',
                JSON.stringify(UID123_object),
              );

              alert("Word removed from Favorites")
              setFav(false)
              setChange((prev)=>{return !prev})
            } catch (error) {
              // Error saving data
            }}}catch(e){

            }
   }

  return (
    <View style={globalStyles.container}>
      <Card>
      <View>
        <Text style={globalStyles.title}>
          {navigation.getParam("word")}
        </Text>
        <Text style={globalStyles.titleText}>Type:</Text>
        <Text style={globalStyles.cont}>{navigation.getParam("type")}</Text>
        <Text style={globalStyles.titleText}>Defn :</Text>
        <Text style={globalStyles.cont} >{navigation.getParam("defn")}</Text>
        <Text style={globalStyles.titleText}>EX :</Text>
        <Text   style={globalStyles.cont} >{navigation.getParam("example")}</Text>

        {/* <View style={styles.rating}>
          <Text>Word Defn: </Text>
          <Image source={images.ratings[rating]} />
        </View> */}
     </View>


        {/* <View style={styles.rating}>
          <Text>Word Defn: </Text>
          <Image source={images.ratings[rating]} />
        </View> */}
      </Card>
        <TouchableOpacity style={styles.button} onPress={()=>fav?removeFav(navigation.getParam("word")):handleChange({id:navigation.getParam("id"),word:navigation.getParam("word"),
        defn:navigation.getParam("defn"),wordType:navigation.getParam("type"),example:navigation.getParam("example"),language:navigation.getParam("language")})
        }>
          <Text style={styles.buttonText}>{fav?"Remove":"Favorite" }</Text>
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
