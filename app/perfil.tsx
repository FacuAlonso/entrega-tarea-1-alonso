
import Profile from "@/components/Profile";
import { View, StyleSheet } from "react-native";


export default function Perfil() {
  return (
    <View style={styles.viewStyle}>

      <Profile />
      
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


