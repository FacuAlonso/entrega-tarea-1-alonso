import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.viewStyle}>
      <Text style={{fontSize:25, fontWeight:'bold'}}>¡Bienvenido!</Text>
      <Link style={styles.launchPressableStyle} href={'/(tabs)/contador'}>
        <Text style={styles.launchButtonTextStyle}>INGRESAR</Text>
    </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  launchButtonTextStyle:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  launchPressableStyle:{
    backgroundColor: '#0052b1ff',
    paddingHorizontal: '8%',
    paddingVertical: '4%',
    borderRadius: 8,
    marginVertical: '15%'
  }
})


