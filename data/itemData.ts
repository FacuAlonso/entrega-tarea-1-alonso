
type Producto = {
  id: string;
  titulo: string;
  precio: string;
  descripcion: string;
  imagen: any;
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

export default DATA