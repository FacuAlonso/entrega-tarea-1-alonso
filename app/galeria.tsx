import GalleryList from "@/components/Gallery";
import React, { useEffect, useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { getProductos, Producto } from "../data/itemData";

export default function Galeria() {
  const [filtro, setFiltro] = useState("");
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [resizeMode, setResizeMode] = useState<"cover" | "contain" | "stretch">("cover");
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const loadData = async () => {
  setLoading(true);
  try {
    const data = await getProductos();
    setProductos(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const loadData_sync = () => {
  setLoading(true);
  getProductos()
    .then((data) => {
      setProductos(data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setLoading(false);
    });
};

useEffect(() => {
  loadData();
}, []);
  

  const filtrar = productos.filter((item) =>
    item.name.toLowerCase().includes(filtro.toLowerCase())
  );

  const toggleFavorito = (id: number) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Filtrar por título..."
        style={styles.input}
        value={filtro}
        onChangeText={function (texto) {
          setFiltro(texto);
        }}
      />

      <GalleryList
        data={filtrar}
        favoritos={favoritos}
        onSelect={function (item) {
          setProductoSeleccionado(item);
          setModalVisible(true);
        }}
        onFavorito={toggleFavorito}
        refreshing={loading}
        onRefresh_handler={loadData}
      />

      {productoSeleccionado !== null && (
        <Modal
          visible={modalVisible}
          animationType="fade"
          onRequestClose={function () {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <Pressable
              style={styles.closeButton}
              onPress={function () {
                setModalVisible(false);
              }}
            >
              <Text style={styles.buttonText}>X Cerrar</Text>
            </Pressable>

            <Image
              source={{uri: productoSeleccionado.image}}
              style={styles.modalImage}
              resizeMode={resizeMode}
            />
            <Text style={styles.modalTitle}>{productoSeleccionado.name}</Text>
            <Text style={[styles.modalTitle, {color: 'green'}]}>${productoSeleccionado.price}</Text>
            <Text>{productoSeleccionado.description}</Text>

            <View style={styles.buttonsRow}>
              <Pressable
                style={styles.button}
                onPress={function () {
                  setResizeMode("cover");
                }}
              >
                <Text style={styles.buttonText}>Cover</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={function () {
                  setResizeMode("contain");
                }}
              >
                <Text style={styles.buttonText}>Contain</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={function () {
                  setResizeMode("stretch");
                }}
              >
                <Text style={styles.buttonText}>Stretch</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "white" },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    marginTop: 50,
  },
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
    marginBottom: 15 
    },

  modalTitle: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 10 
    },

  buttonsRow: { 
    flexDirection: "row", 
    marginVertical: 10, 
    gap: 10 
    },

  button: { 
    backgroundColor: "#1b0075ff", 
    padding: 10, 
    borderRadius: 6 
    },

  closeButton: {
    backgroundColor: "#c20000ff",
    padding: 10,
    borderRadius: 2,
    alignSelf: "flex-start",
    marginLeft: "20%"
  },

  buttonText: { color: "white", 
    fontWeight: "bold" },
});