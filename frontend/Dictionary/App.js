import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { NavigationContainer } from "react-navigation";

import Navigator from "./routes/drawer";
import NavigatorAdmin from "./routes/drawerAdmin";
import { state } from "./store";

import * as React from "react";
// import { Text, View } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";

// const Drawer = createDrawerNavigator();
export default function App() {
  return state.login ? <Navigator /> : <NavigatorAdmin />;
  // <NavigationContainer>
  //   <Drawer.Navigator initialRouteName="Home">
  //     <Drawer.Screen name="Home" component={HomeScreen} />
  //     <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  //     <Drawer.Screen name="About" component={AboutScreen} />
  //   </Drawer.Navigator>
  // </NavigationContainer>

  // <View style={styles.container}>
  //   <Text> start working on your app!</Text>
  //   <StatusBar style="auto" />
  // </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
