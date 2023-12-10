import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import paginarTexto from "./paginarTexto.js";
import BotonPagina from "./botonPagina.jsx";
import ImagenConteiner from "./ImagenConteiner.jsx";

const Card = ({route}) => {
  const { img , texto, moraleja, persoanjes} = route.params;
  const paginas = paginarTexto(texto, 350);
  const [paginaActual, setPaginaActual] = useState(0);

  const siguientePagina = () => {
    //console.log("Siguiente");
    if (paginaActual < paginas.length - 1) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const anteriorPagina = () => {
    if (paginaActual > 0) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <View style={[styles.view, styles.boxShadow]}>
        <Text style={[styles.titulo, styles.boxShadow]}>{moraleja}</Text>
      <ImagenConteiner img={img}></ImagenConteiner>
      <View style={styles.botones}>
        <BotonPagina
          title='<--pagina'
          onClick={anteriorPagina}
        ></BotonPagina>
        <BotonPagina
          title='pagina -->'
          onClick={siguientePagina}
        ></BotonPagina>
      </View>
      <View>
        <Text style={styles.text}>{paginas[paginaActual]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fec9de",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 30,
  },
  boxShadow: {
    elevation: 20,
    shadowColor: "#5002af",
  },
  botones: {
    width: "80%",
    //backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: "#5002af",
  },
  titulo: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "#5002af",
  }
});

export default Card;
