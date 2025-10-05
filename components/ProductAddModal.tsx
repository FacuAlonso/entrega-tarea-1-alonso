import React, { useState } from "react";
import { 
  Modal, View, TextInput, Pressable, Text, 
  StyleSheet, ActivityIndicator, Image, FlatList 
} from "react-native";
import { Producto, createProduct } from "../data/itemData"; 

type Props = {
  visible: boolean;
  onClose: () => void | Promise<void>;
  onAdded: (producto: Producto) => void;
};

export default function ProductAddModal({ visible, onClose, onAdded }: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const defaultImages = [
    "https://i.imgur.com/dk1YFG1.png",
    "https://i.imgur.com/lJiFmDz.png",
    "https://i.imgur.com/wA12Tmw.png",
    "https://i.imgur.com/k0tpT8C.png"
  ];

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

          <TextInput
            placeholder="Título"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <TextInput
            placeholder="Precio"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            style={styles.input}
          />

          <TextInput
            placeholder="Descripción"
            value={description}
            onChangeText={setDescription}
            style={[styles.input, { height: 80 }]}
            multiline
          />

          <TextInput
            placeholder="URL imagen (O elegir una abajo 👇)"
            value={image}
            onChangeText={setImage}
            style={styles.input}
          />

          <FlatList
            data={defaultImages}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            style={{ marginVertical: 10 }}
            renderItem={({ item }) => (
              <Pressable onPress={() => setImage(item)}>
                <Image
                  source={{ uri: item }}
                  style={[
                    styles.thumb,
                    image === item && styles.thumbSelected
                  ]}
                />
              </Pressable>
            )}
          />

          <View style={styles.row}>
            <Pressable
              style={[styles.button, styles.cancel]}
              onPress={async () => { await onClose(); }}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.save]}
              onPress={handleSubmit}
              disabled={loading}
            >
              {loading
                ? <ActivityIndicator color="white" />
                : <Text style={styles.buttonText}>Guardar</Text>}
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

  thumb: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 2,
    borderColor: "transparent",
  },

  thumbSelected: {
    borderColor: "#1b0075ff",
  },
});
