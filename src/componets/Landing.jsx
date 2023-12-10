import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BotonPagina from "../tituloTexto/botonPagina.jsx";

//fijarse si rompe despues el dotenv en vez de @ENV
//import { TEXTO } from "dotenv";

const Landing = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.view1}>
      <View style={[styles.view, styles.boxShadow]}>
        <View>
          <Text style={[styles.title, styles.boxShadow]}>¡Bienvenido!</Text>
        </View>
        <View style={[styles.title, styles.boxShadow]}>
          <Text style={styles.text}>
            Aqui encontraras Fabulas orientadas a niños, con moralejas y
            hermosos personajes
          </Text>
        </View>
        <BotonPagina
          style={styles.button}
          title='Entrar!'
          onClick={() =>
            navigation.navigate("Home", { navigation: navigation })
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    flex: 0.33,
    backgroundColor: "#fec9de",
    borderRadius: 30,
    width: 300,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  boxShadow: {
    elevation: 20,
    shadowColor: "#5002af",
  },

  title: {
    //marginTop: 16,
    //paddingVertical: 8,
    // borderWidth: 4,
    // borderColor: '#20232a',
    // borderRadius: 6,
    // backgroundColor: '#61dafb',
    // color: '#20232a',
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#5002af",
  },

  text: {
    textAlign: "center",
    fontSize: 18,
    color: "#5002af",
    marginLeft: 16,
    marginRight: 16,
  },
});

export default Landing;
