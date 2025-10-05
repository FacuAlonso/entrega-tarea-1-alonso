import GalleryList from "../components/Gallery";
import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { getProductos, Producto } from "../data/itemData";
import ProductModal from "../components/ProductModal"; // <-- nuevo import

export default function Galeria() {
  const [filtro, setFiltro] = useState("");
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    loadData();
  }, []);

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

  const handleSelect = async (item: Producto) => {
    setLoading(true);
    try {
      const data = await getProductos();
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
});