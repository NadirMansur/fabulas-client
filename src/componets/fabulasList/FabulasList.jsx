import { ScrollView, View, StyleSheet } from "react-native";
import FabulaMiniCard from "./miniCard/FabulasMiniCard";
const FabulasList = (props) => {
  return (
      <ScrollView style={styles.scrollView}>
        {props.data.map((fabula, idex) =>
          fabula.image ? (
            <FabulaMiniCard
              id={fabula.id}
              img={fabula.image}
              moraleja={fabula.moraleja}
              personajes={fabula.personajes} 
              texto = {fabula.texto}
              navigation={props.navigation}
            ></FabulaMiniCard>
          ) : null
        )}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 0.5,
  },
  boxShadow: {
    elevation: 20,
  },
});

export default FabulasList;
