import React,{useState,useEffect} from "react";
import {  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard, } from "react-native";
import Card from "../shared/card";
import {AsyncStorage} from 'react-native';
import { globalStyles } from "../styles/global";

export default function About() {
  const [lang, setLang] = useState([]);
  const fetchData = async () => {
    try {
      // console.log(12);
      const response = await fetch("http://192.168.41.229:5000/api/language/get");
      const data = await response.json();
      // console.log(data);
      setLang(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (id)=>{
      
      const _storeData = async (id) => {
      
        try {
          await AsyncStorage.setItem(
            'TASKS',
            `${id}`,
          );
        
        } catch (error) {
          // Error saving data
        }
      };
      _storeData(id)
    }

  useEffect(() => {
    fetchData();
  },[]);
  return (
    <View style={globalStyles.container}>
      <Text>Languages </Text>
        <FlatList
        data={lang}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              handleChange(item.id)
            }}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
