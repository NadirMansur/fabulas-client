import { StyleSheet, Text, View } from "react-native";
import TituloTexto from "../tituloTexto/tituloTexto.jsx";
import BotonPagina from "../tituloTexto/botonPagina.jsx";
import data from "../store/fabulasJson.js";
import { useState } from "react";
import { useEffect } from "react";
import fabulasStore from "../store/fabulas.js";

const ListaFabulasPaginadas = () => {
  const fabulas = fabulasStore((state) => state.fabulas);
  const setFabulas = fabulasStore((state) => state.setFabulas);
  const [fabulaActual, setFabulaActual] = useState(0);

  useEffect(() => {
    setFabulas(data);
  }, []);

  const siguienteFabula = () => {
    //console.log("//////////Siguiente////////////");
    let cont = fabulaActual;
    if (fabulaActual < fabulas.length - 1) {
      if (fabulas[fabulaActual + 1].image) {
        setFabulaActual(fabulaActual + 1);
      } else {
        while (!fabulas[cont + 1].image) {
          cont++;
        }
        setFabulaActual(cont + 1);
      }
    }
    //console.log("////////////Siguiente////////////");
  };

  const anteriorFabula = () => {
    let cont = fabulaActual;
    if (fabulaActual > 0) {
      if (fabulas[fabulaActual - 1].image) {
        setFabulaActual(fabulaActual - 1);
      } else {
        while (!fabulas[cont - 1].image) {
          cont--;
        }
        setFabulaActual(cont - 1);
      }
    }
  };

  if (!fabulas || fabulas.length === 0) {
    // Renderizar un mensaje de carga o cualquier otra lógica de carga
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View>
      <TituloTexto
        style={[styles.fabula, styles.boxShadow]}
        img={fabulas[fabulaActual].image}
        texto={fabulas[fabulaActual].texto}
      ></TituloTexto>
      <View style={styles.botones}>
        <BotonPagina title='<--Fabula' onClick={anteriorFabula}></BotonPagina>
        <BotonPagina title='Fabula-->' onClick={siguienteFabula}></BotonPagina>
      </View>
    </View>
  );
};

export default ListaFabulasPaginadas;
