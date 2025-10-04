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
          favoritos.includes(item.id) ? { borderColor: "gold", borderWidth: 2 } : ''
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
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={function (item) {
        return item.id;
      }}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  card: {
    margin: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f0f0f0ff",
    borderRadius: 8,
    alignItems: "center",
    width: '45%',
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center'
  },
  itemPrice: {
    fontSize: 14,
    color: "green",
  },
});
