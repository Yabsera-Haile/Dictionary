import React,{useState,useEffect, useContext} from "react";
import {  
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard, 
   TextInput} from "react-native";
import Card from "../shared/card";
import {AsyncStorage} from 'react-native';
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import WordDefn from "./wordDefn";
import { DictionaryContext } from "../context/DictionaryContext";
export default function Favorites({ navigation }) {
  const {change, setChange} = useContext(DictionaryContext)
  const [modalOpen, setModalOpen] = useState(false);
  const [words, setWords] = useState([]);
  const [search, setSearch] = useState();

  const fetchData = async () => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('lang');
        if (value !== null) {
          // We have data!!
          
          setWords( JSON.parse(value))
        }else{
          console.log("null");
        }
      } catch (error) {
        // Error retrieving data
      }
    };   
    _retrieveData() 
  };

  useEffect(()=>{
      fetchData()
    console.log(words)
  },[change])


  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => console.log(1)}
            />
            <WordDefn addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
          {/* <TouchableOpacity style={styles.button} onPress={()=>fetchData()}>
          <Text style={styles.buttonText}>Refresh List</Text>
        </TouchableOpacity> */}
                {/* <TextInput
                style={styles.input}
                placeholder="Search"
                value={search}
                onChangeText={setSearch}
                autoCapitalize="words"
              /> */}
      <FlatList
        data={words}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log(1);
              navigation.navigate("WordDefn", item);
            }}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.word}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
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
        marginBottom:'10%'
        
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
      },
});