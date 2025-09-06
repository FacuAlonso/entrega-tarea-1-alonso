import Counter from "@/components/Counter";
import { View, StyleSheet } from "react-native";


export default function Contador() {
  return (
    <View style={styles.viewStyle}>

      <Counter/>
      
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


