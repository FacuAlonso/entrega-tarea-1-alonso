import GalleryList from "../components/Gallery";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Pressable, Text } from "react-native";
import { getProducts, Producto } from "../data/itemData";
import ProductModal from "../components/ProductModal"; 
import ProductAddModal from "../components/ProductAddModal"; 

export default function Galeria() {
  const [filtro, setFiltro] = useState("");
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false); 
  const [favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProductos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = async (item: Producto) => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProductos(data);
      const actualizado = data.find((p: Producto) => p.id === item.id) || item;
      setProductoSeleccionado(actualizado);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
      <View style={styles.filterRow}>
        <TextInput
          placeholder="Filtrar por título..."
          style={styles.input}
          value={filtro}
          onChangeText={function (texto) {
            setFiltro(texto);
          }}
        />
        <Pressable style={styles.addButton} onPress={function () { setAddModalVisible(true); }}>
          <Text style={styles.addButtonText}>+ AGREGAR</Text>
        </Pressable>
      </View>

      <GalleryList
        data={filtrar}
        favoritos={favoritos}
        onSelect={handleSelect}
        onFavorito={toggleFavorito}
        refreshing={loading}
        onRefresh_handler={loadData}
      />

      <ProductModal
        producto={productoSeleccionado}
        visible={modalVisible}
        onClose={async function () {
          setModalVisible(false);
          await loadData();
        }}
      />

      <ProductAddModal
        visible={addModalVisible}
        onClose={function () {
          setAddModalVisible(false);
        }}
        onAdded={async function (nuevo: Producto) {
          await loadData(); 
          setAddModalVisible(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "white" },
  filterRow: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 50, marginBottom: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  addButton: {
    backgroundColor: "#1b0075ff",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  addButtonText: { color: "white", fontWeight: "bold" },
});