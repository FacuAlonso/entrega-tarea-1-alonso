import React, { useState } from "react";
import {StyleSheet, View, Text, Image, TextInput, Pressable, Modal} from "react-native";
import GalleryList from "@/components/Gallery";

type Producto = {
  id: string;
  titulo: string;
  precio: string;
  descripcion: string;
  imagen: any;
  uri?: string;
};

const DATA: Producto[] = [
  {
    id: "1",
    titulo: "Mouse Logitech G502",
    precio: "$45.000",
    descripcion: "Mouse gamer de alta precisión",
    imagen: require("../assets/itemPictures/mouseLogitech.png"), 
  },
  {
    id: "2",
    titulo: "Monitor Gamer Asus",
    precio: "$295.000",
    descripcion: "Monitor de 144Hz IPS gamer",
    imagen: { uri: "https://i.imgur.com/yi3kFhe.png" }, 
  },
  {
    id: "3",
    titulo: "Auriculares Steelseries Arctis 7 Wireless",
    precio: "$150.500",
    descripcion: "Auriculares inalámbricos - PC Gaming",
    imagen: { uri: "https://i.imgur.com/Z4dG9Nv.png" }, 
  },
];

export default function Galeria() {
  const [filtro, setFiltro] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [resizeMode, setResizeMode] = useState<"cover" | "contain" | "stretch">("cover");
  const [favoritos, setFavoritos] = useState<string[]>([]);

  const filtrar = DATA.filter(function (p) {
    return p.titulo.toLowerCase().includes(filtro.toLowerCase());
  });

  const toggleFavorito = function (id: string) {
    setFavoritos(function (estadoAnterior) {
      if (estadoAnterior.includes(id)) {
        const nuevoEstado = estadoAnterior.filter(function (prevFavorito) {
          return prevFavorito !== id;
        });
        return nuevoEstado;
      } else {
        const nuevoEstado = [...estadoAnterior, id];
        return nuevoEstado;
      }
    });
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
      />

      {productoSeleccionado !== null && (
        <Modal
          visible={modalVisible}
          animationType="slide"
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
              source={productoSeleccionado.imagen}
              style={styles.modalImage}
              resizeMode={resizeMode}
            />
            <Text style={styles.modalTitle}>{productoSeleccionado.titulo}</Text>
            <Text>{productoSeleccionado.descripcion}</Text>

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
    marginLeft: "20%",
  },

  buttonText: { color: "white", 
    fontWeight: "bold" },
});