import { View, StyleSheet } from "react-native";
import Card from "../components/Card";

export default function Index() {
  return (
    <View style={styles.viewStyle}>

      <Card inputText='Tarjeta 1'/>
      <Card inputText='Tarjeta 2'/>
      <Card inputText='Tarjeta 3'/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
  }
})


