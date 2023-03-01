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
import { MaterialIcons } from "@expo/vector-icons";


export default function Languages() {
  const ip="192.168.5.229"
  const [langList, setlangList] = useState([]);
  const {lang,setLang}=useContext(DictionaryContext)
  const [change,setChange]=useState(true)
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

  const deleteLang=(id)=>{
       fetch("http://"+ip+":5000/api/language/delete", {
            method: "POST",
            body: JSON.stringify({
              id:id
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
                alert("Language has been deleted.")
                setChange((prev)=>{!prev})
              }
            );
    }
  useEffect(() => {
    fetchData();
  },[change]);
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
            <Card  >
              <View style={styles.card}>
              <Text style={item.id==lang?styles.selected:globalStyles.titleText}>{item.title}</Text>
                <MaterialIcons
                name="delete"
                size={24}
                style={styles.modalToggle}
                onPress={() => deleteLang(item.id)}
              />
              </View>
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
    color:"rgb(173, 159, 54)"},

    modalToggle: {
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 10,
  },
  modalClose: {
    marginTop: 0,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  card:{
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-between'
  }

});

