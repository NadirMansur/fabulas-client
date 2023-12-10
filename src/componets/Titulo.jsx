import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Titulo = (props) => {
  return (
    <View style={[styles.view, styles.boxShadow]}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 0.1,
    backgroundColor: "#a7a7a7",
    borderRadius: 30,
    width: 300,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
  }},
  title: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#dcdcdc",
  },
  boxShadow: {
    elevation: 20,
    shadowColor: "#bdbdbd",
  },
});

export default Titulo;
