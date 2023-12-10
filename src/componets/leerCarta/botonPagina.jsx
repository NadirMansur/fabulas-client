import React from "react";
import { StyleSheet, View, Button } from "react-native";

const BotonPagina = (props) => {
  const { title, onClick } = props;
  return (
    <View>
      <Button
        style={styles.btn}
        onPress={() => {
          onClick();
        }}
        title={title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 0.2,
    backgroundColor: "#ded2f5",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  btn: {},
});

export default BotonPagina;
