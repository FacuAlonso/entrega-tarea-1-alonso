import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Counter = () => {
  const [contador, setContador] = useState({ valor: 0 });

  const aumentar = () => {
    setContador((prev) => ({ valor: prev.valor + 1 }));
  };

  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>
        {contador.valor}
      </Text>

      <View style={styles.buttonContainerStyle}>
        <Pressable style={styles.buttonStyle} onPress={aumentar}>
          <Text style={styles.buttonTextStyle}>Incrementar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textStyles: {
    color: "black",
    fontSize: 50,
    marginBottom: '10%'
  },
  buttonStyle: {
    backgroundColor: "#1b0075ff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    userSelect: 'none'
  },
  buttonContainerStyle: {
    flexDirection: "row",
    marginTop: 10,
    gap: 12,
  },
});

export default Counter;
