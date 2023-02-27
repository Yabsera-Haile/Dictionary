import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  AsyncStorage
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import WordDefn from "./wordDefn";
import firebase from "firebase/compat";
import { DictionaryContext } from "../context/DictionaryContext";
export default function Dictionary({ navigation }) {
    const ip="192.168.5.229"

    const {lang,setLang}=useContext(DictionaryContext)


    const fetchData = async () => {
      try {
        // console.log(12);
      //  retrieveData()
        const response = await fetch("http://"+ip+":5000/api/dictionary/get?lang="+lang);
        const data = await response.json();
        setWords(data)
      } catch (err) {
        console.log(err);
      }
    };
    
    useEffect(() => {
      firebase.auth().signOut().then(() => console.log('User signed out!'))
      fetchData();
  },[lang]);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [words, setWords] = useState([]);
  const [search, setSearch] = useState();


  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  const searchWord=async (event) => {
    const val=event.nativeEvent.text
    // console.log(event.nativeEvent);
      fetch("http://"+ip+":5000/api/dictionary/search", {
            method: "POST",
            body: JSON.stringify({
              search:val,
              lang:lang
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
                setWords(data)
              }
            );
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
                <TextInput
                style={styles.input}
                placeholder="Search"
                value={search}
                onChangeText={setSearch}
                onChange={searchWord}
                autoCapitalize="words"
              />

      {/* <MaterialIcons
        name="search"
        size={24}
        style={styles.modalToggle}
        onPress={() => console.log(1)}
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
});
