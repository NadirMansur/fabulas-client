import { StyleSheet, View, Image } from "react-native";
import React from "react";

const ImagenConteiner = (props) => {
  const { img } = props;
  return <Image source={{ uri: img }} style={[styles.img, styles.boxShadow]} />;
};

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 20,
    shadowColor: "#5002af",
  },
  img: {
    borderRadius: 30,
    width: 300,
    height: 300,
  },
});

export default ImagenConteiner;
