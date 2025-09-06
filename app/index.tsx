import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.viewStyle}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>¡Bienvenido!</Text>

      <Pressable
        style={styles.launchPressableStyle}
        onPress={() => router.replace("/(tabs)/contador")}
      >
        <Text style={styles.launchButtonTextStyle}>INGRESAR</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  launchButtonTextStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  launchPressableStyle: {
    backgroundColor: "#0052b1ff",
    paddingHorizontal: "8%",
    paddingVertical: "4%",
    borderRadius: 8,
    marginVertical: "15%",
  },
});
