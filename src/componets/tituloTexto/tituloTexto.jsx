import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import paginarTexto from "./paginarTexto.js";
import BotonPagina from "./botonPagina.jsx";
import ImagenConteiner from "./ImagenConteiner.jsx";

const TituloTexto = (props) => {
  const { img , texto } = props;
  const paginas = paginarTexto(texto, 235);
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
    flex: 0.8,
    backgroundColor: "#fec9de",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 30,
    width: 300,
  },
  boxShadow: {
    elevation: 20,
    shadowColor: "#5002af",
  },
  botones: {
    width: 300,
    //backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: "#5002af",
  },
});

export default TituloTexto;
