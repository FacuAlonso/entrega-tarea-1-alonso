import React, { useState } from "react";
import { Modal, View, Image, Pressable, Text, StyleSheet } from "react-native";
import { Producto } from "../data/itemData";

type Props = {
  producto: Producto | null;
  visible: boolean;
  onClose: () => void | Promise<void>;
};

export default function ProductModal({ producto, visible, onClose }: Props) {
  const [resizeMode, setResizeMode] = useState<"cover" | "contain" | "stretch">("cover");

  if (!producto) return null;

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Pressable
          style={styles.closeButton}
          onPress={async function () {
            await onClose();
          }}
        >
          <Text style={styles.buttonText}>X Cerrar</Text>
        </Pressable>

        <Image source={{ uri: producto.image }} style={styles.modalImage} resizeMode={resizeMode} />
        <Text style={styles.modalTitle}>{producto.name}</Text>
        <Text style={[styles.modalTitle, { color: "green" }]}>${producto.price}</Text>
        <Text>{producto.description}</Text>

        <View style={styles.buttonsRow}>
          <Pressable style={styles.button} onPress={function () { setResizeMode("cover"); }}>
            <Text style={styles.buttonText}>Cover</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={function () { setResizeMode("contain"); }}>
            <Text style={styles.buttonText}>Contain</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={function () { setResizeMode("stretch"); }}>
            <Text style={styles.buttonText}>Stretch</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 50,
  },
  modalImage: {
    width: 250,
    height: 250,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonsRow: {
    flexDirection: "row",
    marginVertical: 10,
    gap: 10,
  },
  button: {
    backgroundColor: "#1b0075ff",
    padding: 10,
    borderRadius: 6,
  },
  closeButton: {
    backgroundColor: "#c20000ff",
    padding: 10,
    borderRadius: 2,
    alignSelf: "flex-start",
    marginLeft: "20%",
    marginBottom: 10,
  },
  buttonText: { color: "white", fontWeight: "bold" },
});