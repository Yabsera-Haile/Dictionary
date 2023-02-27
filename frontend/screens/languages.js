import React,{useState,useEffect,useContext} from "react";
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
import { DictionaryContext } from "../context/DictionaryContext";


export default function Languages() {
  const ip="192.168.5.229"
  const [langList, setlangList] = useState([]);
  const {lang,setLang}=useContext(DictionaryContext)

  const fetchData = async () => {
    try {
      // console.log(12);
      const response = await fetch("http://"+ip+":5000/api/language/get");
      const data = await response.json();
      // console.log(data);
      setlangList(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (id)=>{
      
      const _storeData = async (id) => {
        try {
            setLang(id)
            // const value = await AsyncStorage.getItem('TASKS');
            // console.log(value)
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
        data={langList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              handleChange(item.id)
            }}
          >
            <Card>
              <Text style={item.id==lang?styles.selected:globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  selected: {
    fontSize:20,
    fontWeight:"600",
    color:"rgb(173, 159, 54)"}

});
