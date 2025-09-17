import React from "react";
import { FlatList, Pressable, Image, Text, StyleSheet } from "react-native";

type Producto = {
  id: string;
  titulo: string;
  precio: string;
  descripcion: string;
  imagen: any;
};

type Props = {
  data: Producto[];
  favoritos: string[];
  onSelect: (item: Producto) => void;
  onFavorito: (id: string) => void;
};

export default function GalleryList({ data, favoritos, onSelect, onFavorito }: Props) {
  const renderItem = function ({ item }: { item: Producto }) {
    return (
      <Pressable
        onPress={function () {
          onSelect(item);
        }}
        onLongPress={function () {
          onFavorito(item.id);
        }}
        style={[
          styles.card,
          favoritos.includes(item.id) && { borderColor: "gold", borderWidth: 2 },
        ]}
      >
        <Image source={item.imagen} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.titulo}</Text>
        <Text style={styles.itemPrice}>{item.precio}</Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={function (item) {
        return item.id;
      }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    alignItems: "center",
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "green",
  },
});
