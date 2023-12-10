import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/componets/tituloTexto/Home.jsx";
import Landing from "./src/componets/Landing.jsx";
import Card from "./src/componets/leerCarta/LeerCarta.jsx"

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Lectura' component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    alignItems: "center",
    justifyContent: "center",
  },
});
