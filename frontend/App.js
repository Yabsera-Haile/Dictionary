import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { NavigationContainer } from "react-navigation";
import firebase from "firebase/compat";

import Navigator from "./routes/drawer";
import NavigatorAdmin from "./routes/drawerAdmin";
import { state } from "./store";
import * as React from "react";
import { useState, useEffect } from "react";

// const Drawer = createDrawerNavigator();
export default function App() {
  const [user, setUser] = useState("");
  function onAuthStateChanged(user) {
    setUser(user);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    console.log(subscriber);
    return subscriber;
  }, []);

  return user ? <NavigatorAdmin /> : <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
