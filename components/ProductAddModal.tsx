import React, { useState } from "react";
import { Modal, View, TextInput, Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Producto, createProduct } from "../data/itemData"; 

type Props = {
  visible: boolean;
  onClose: () => void | Promise<void>;  // Acepta tanto funciones sync como async
  onAdded: (producto: Producto) => void;
};

export default function ProductAddModal({ visible, onClose, onAdded }: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim()) return;
    setLoading(true);
    try {
      const body = { name, price: Number(price) || 0, description, image };
      const created = await createProduct(body);
      if (!created) throw new Error("No se pudo crear el producto");

      onAdded(created);
      await onClose();
      setName("");
      setPrice("");
      setDescription("");
      setImage("");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal visible={visible} animationType="fade" onRequestClose={onClose} transparent>
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <Text style={styles.title}>Agregar producto</Text>

          <TextInput placeholder="Título" value={name} onChangeText={setName} style={styles.input} />
          <TextInput placeholder="Precio" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />
          <TextInput placeholder="Descripción" value={description} onChangeText={setDescription} style={[styles.input, { height: 80 }]} />
          <TextInput placeholder="URL imagen" value={image} onChangeText={setImage} style={styles.input} />

          <View style={styles.row}>
            <Pressable style={[styles.button, styles.cancel]} onPress={async () => { await onClose(); }}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </Pressable>

            <Pressable style={[styles.button, styles.save]} onPress={handleSubmit} disabled={loading}>
              {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Guardar</Text>}
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { 
    flex: 1, 
    backgroundColor: "rgba(0,0,0,0.4)", 
    justifyContent: "center", 
    alignItems: "center" 
  },

  container: { 
    width: "90%", 
    backgroundColor: "white", 
    padding: 16, 
    borderRadius: 8 
  },

  title: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10 
  },

  input: { 
    borderWidth: 1, 
    borderColor: "#ddd", 
    borderRadius: 6, 
    padding: 8, 
    marginBottom: 8 
  },

  row: { 
    flexDirection: "row", 
    justifyContent: "flex-end", 
    gap: 8 
  },

  button: { 
    paddingVertical: 10, 
    paddingHorizontal: 14, 
    borderRadius: 6 
  },

  cancel: { 
    backgroundColor: "#888", 
    marginRight: 8 
  },

  save: { 
    backgroundColor: "#1b0075ff" 
  },

  buttonText: { 
    color: "white", 
    fontWeight: "bold" 
  },
});
