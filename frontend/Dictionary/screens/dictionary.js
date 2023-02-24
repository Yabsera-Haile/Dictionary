import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import WordDefn from "./wordDefn";
import firebase from "firebase/compat";

export default function Dictionary({ navigation }) {
  const fetchData = async () => {
    try {
      await fetch("http://192.168.0.23:5000/api/dictionary/get")
        .then((response) => {
          if (response.status === 404) throw new Error("Resource not found");
          // console.log("yes");
          return response.json();
        })
        .then((responseData) => {
          console.log(responseData);
          setWords(responseData);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("User signed out!"));
    fetchData();
  }, []);

  const [words, setWords] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              // style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => console.log(1)}
            />
            <WordDefn />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="search"
        size={24}
        style={styles.modalToggle}
        onPress={() => fetchData()}
      />

      <FlatList
        data={words}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("WordDefn", item);
            }}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.word}</Text>
              <Text style={globalStyles.titleText}>{item.type}</Text>
              <Text style={globalStyles.titleText}>{item.defn}</Text>
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
});
