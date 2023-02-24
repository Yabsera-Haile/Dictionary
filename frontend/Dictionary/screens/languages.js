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

export default function Languages() {
  const fetchData = async () => {
    try {
      await fetch("http://192.168.0.23:5000/api/language/get")
        .then((response) => {
          if (response.status === 404) throw new Error("Resource not found");
          // console.log("yes");
          return response.json();
        })
        .then((responseData) => {
          console.log(responseData);
          setLang(responseData);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [lang, setLang] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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

      <MaterialIcons
        name="search"
        size={24}
        style={styles.modalToggle}
        onPress={() => fetchData()}
      />

      <FlatList
        data={lang}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("WordDefn", item);
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
