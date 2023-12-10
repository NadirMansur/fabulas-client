import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EXPO_PUBLIC_URL } from "@env";
import Titulo from "../Titulo.jsx";
import data from "../../store/fabulasJson.js";
import FabulasList from "../fabulasList/FabulasList.jsx"

const Home = (props) => {
  return (
    <View style={styles.view}>
      <Titulo title='Fabulas'></Titulo>
      <FabulasList
      data={data}
      navigation={props.navigation}
      ></FabulasList>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default Home;
