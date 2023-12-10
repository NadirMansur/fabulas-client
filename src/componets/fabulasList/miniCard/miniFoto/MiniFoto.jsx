import { StyleSheet, Image } from "react-native";
import React from "react";

const MiniFoto = (props) => {
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
    width: 100,
    height: 100,
  },
});

export default MiniFoto;
