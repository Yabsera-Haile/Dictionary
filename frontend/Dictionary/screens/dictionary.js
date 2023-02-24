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
import { state } from "./../store";
import axios from "axios";

export default function Dictionary({ navigation }) {
  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    try {
      // console.log(12);
      // axios.get("http://192.168.0.23:5000/api/dictionary/get").then((res) => {
      //   console.log(res);
      // });
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
    fetchData();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [words, setWords] = useState([]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Text>{state.login ? "logged in" : "Logged out"}</Text>

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
