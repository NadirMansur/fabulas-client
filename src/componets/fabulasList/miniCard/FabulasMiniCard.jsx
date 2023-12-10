import MiniFoto from "../miniCard/miniFoto/MiniFoto";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const FabulasMiniCard = (props) => {
  const { navigation } = props;
  const onClick = () => {
    navigation.navigate("Lectura", {
      img: props.img,
      moraleja: props.moraleja,
      texto: props.texto,
      personajes: props.personajes,
    });
  };

  return (
    <View style={[styles.view, styles.boxShadow]}>
      <View>
        <MiniFoto style={[styles.boxShadow]} img={props.img}></MiniFoto>
      </View>
      <View style={styles.col}>
        <Text style={styles.moraleja}>{props.moraleja}</Text>
        <View style={styles.row}>
          {props.personajes.map((personaje) => (
            <Text style={styles.personaje}>{personaje}</Text>
          ))}
        </View>
      </View>
      <Button style={styles.leer} onPress={onClick} title='Leer' />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#bdbdbd",
    borderRadius: 30,
    width: 400, // largo de la carta
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 10,
  },
  col: {
    //info del cuento
    flex: 0.9,
    flexDirection: "column",
    //backgroundColor: "#c9c9c9", //borrar color
  },
  moraleja: {
    backgroundColor: "#a7a7a7",
    borderRadius: 30,
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    color: "#dcdcdc",
    fontWeight: "bold",
    fontSize: 17,
    margin: 10,
    textAlign: "center",
  },
  boxShadow: {
    elevation: 20,
    shadowColor: "#a7a7a7",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#a7a7a7",
    borderRadius: 30,
    marginBottom: 10,
  },
  personaje: {
    borderRadius: 30,
    padding: 5,
    alignItems: "center",
    alignSelf: "center",
    color: "#dcdcdc",
    fontWeight: "bold",
    fontSize: 14,
    margin: 1,
    justifyContent: "space-evenly",
  },
  leer: {
    backgroundColor: "#a7a7a7",
    borderRadius: 30,
    padding: 15,
    alignItems: "center",
    alignSelf: "center",
    color: "#dcdcdc",
    fontWeight: "bold",
    fontSize: 17,
    marginRight: 10,
  },
});

export default FabulasMiniCard;
