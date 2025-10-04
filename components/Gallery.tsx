import React from "react";
import { FlatList, Image, Pressable, StyleSheet, Text } from "react-native";
import { Producto } from "../data/itemData";

type Props = {
  data: Producto[];
  favoritos: number[];
  onSelect: (item: Producto) => void;
  onFavorito: (id: number) => void;
  refreshing: boolean;
  onRefresh_handler: () => void;
};

export default function GalleryList({ 
  data, favoritos, onSelect, onFavorito, refreshing, onRefresh_handler: onRefresh }: Props) 
  {
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
        <Image source={{uri: item.image}} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={function (item) {
        return item.id.toString();
      }}
      numColumns={2}
      ListEmptyComponent={
        <Text style={styles.itemTitle}>No hay productos que coincidan con tu búsqueda</Text>
      }
      refreshing={refreshing}
      onRefresh={onRefresh}
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
    minWidth: 150,
    flexGrow: 1
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
